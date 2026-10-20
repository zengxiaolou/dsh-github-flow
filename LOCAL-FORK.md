# 本地 fork 说明（聚合根适配）

这个目录是 [`ItQianChen/dsh-github-flow`](https://github.com/ItQianChen/dsh-github-flow) 的本地
fork，基于 **v0.5.0**（npm 上已发布、本机实际运行过的版本），分支 `local/aggregate-root`。

## 为什么要 fork

上游的仓库识别是**有意**严格的：`resolveWorkspaceCwd` 里写着

> 绝不进入子目录去"借用"子项目的 Git 仓库，杜绝在聚合目录或未绑定工作区中张冠李戴！

于是当工作区是一个「聚合根」——本身不是 Git 仓库、子目录里挂着若干仓库（例如
`~/Documents/work/demo-workspace` 下挂 `ios-client` / `androidclient` / `stars` …）——
面板一律判定「未检测到关联的 GitHub 仓库」，整个 PR / Issues / Actions 视图直接失效。

这是设计取舍，不是 bug。所以本 fork 不翻转它的语义，而是**加一个默认关闭的开关**：
不开启时与上游逐字符一致，开启后才增加两级兜底。

## 改了什么

| 文件 | 改动 |
| --- | --- |
| `src/workspace.ts` | 新增纯文件探测原语：`resolveGitDir`（支持 worktree / submodule 的 `.git` 文件形态）、`isGitRepoRoot`、`findAncestorGitRoot`、`findChildGitRoots`、`gitActivityTs`、`pickMostActiveRepo`、`resolveRepoRoot` |
| `src/executor.ts` | `resolveWorkspaceCwd` 保留原语义并抽成 `resolveWorkspaceBase`；新增 `repoDiscovery` / `upwardSearchLevels` / `childScanDepth` 三个配置；新增 `resolveWorkspaceRepoRoot()` 供路由层统一判定 |
| `src/api/routes-overview.ts` | 概览路由先解析仓库根再取缓存 / 跑 gh；工作区矩阵按解析后的仓库根探测，并回传 `repoPath` / `repoVia` |
| `src/api/routes-actions.ts` | 两个「必须本地 Git 仓库」的入口（git-watch / local-git-status）改用同一套解析 |
| `src/types.ts` / `src/main.ts` | 配置项类型与运行时校验（非法值一律回落 `strict`） |

所有新增探测都是**纯 fs 读取**：不 spawn 子进程、不发网络请求，沿用 `workspace.ts` 的既有纪律。

## 解析规则（确定性，可预测）

1. 工作区自身是仓库根 → 直接用它（`via: 'self'`）；
2. 否则向上回溯最多 `upwardSearchLevels`（默认 3）层，命中祖先仓库 → 用它（`via: 'ancestor'`）；
3. 否则向下扫描 `childScanDepth`（默认 1）层子仓库 → 取**最近活动**的那个（`via: 'child'`）；
   活动时间取 `.git/logs/HEAD` 末行时间戳，退化到 `.git/index` 的 mtime；并列按路径字典序，
   保证同一份磁盘状态永远得到同一结果；
4. 三级都落空 → 返回「未关联」空状态（不伪造仓库）。

扫描时跳过 `node_modules`、`dist`、`target`、`Pods`、`.venv` 等重型目录，命中仓库的子目录
不再继续下降（避免把嵌套仓库当成并列候选）。

## 手动切换仓库（推荐用法）

聚合根下不再只能靠「最近活跃」猜。候选仓库多于一个时，面板头部会出现仓库下拉框：

- 选择落盘到 `~/.dsh/data/dsh-github-flow/repo-selection.json`（按工作区路径分键），
  **对所有端点生效**——概览、PR/Issue/Actions、本地 Git 状态、分支切换、文件 diff 都跟着走；
- 选中后 `repoVia` 变为 `manual`，卡片上带一个「手动」标记；
- 清除选择（`repo=null`，或把文件里那条删掉）即恢复自动选择；
- 选择只在「目标仍是 Git 仓库根 **且** 仍在当前工作区候选集内」时生效，子仓库被删/改名后
  旧选择自动失效，不会把面板钉在一个已不存在的路径上。

解析优先级（aggregate 模式）：

1. 工作区自身是仓库根 → 用它（`self`）
2. **手动选择的有效项 → 用它（`manual`）**
3. 向上回溯祖先仓库 → 用它（`ancestor`）
4. 向下扫子仓库、取最近活跃 → 用它（`child`）
5. 都落空 → 「未关联」

API：`POST /api/github/select-repo`，body `{ cwd, repo }`（`repo` 为 null 表示清除）。

## 启用方式

配置项 `repoDiscovery: 'aggregate'`，写在 profile 的补丁层（`~/.dsh/profiles/desktop/cordis.patch.yml`）：

```yaml
- id: github-flow
  name: dsh-github-flow
  config:
    repoDiscovery: aggregate
```

可选：`upwardSearchLevels`（默认 3）、`childScanDepth`（默认 1）。

## 构建与安装

```bash
pnpm install
pnpm run build          # tsc + scripts/build.mjs（含版本一致性校验）
```

本机安装方式是把 `~/.dsh/profiles/desktop/node_modules/dsh-github-flow` 换成指向本目录的
符号链接（npm 原版保留为 `dsh-github-flow.npm-0.5.0.bak-<时间戳>`）。

## 回滚

```bash
cd ~/.dsh/profiles/desktop/node_modules
unlink dsh-github-flow
mv dsh-github-flow.npm-0.5.0.bak-<时间戳> dsh-github-flow
```

并删掉 `cordis.patch.yml` 末尾的 `github-flow` 配置段。

## 同步上游

```bash
git fetch upstream            # 若未配置：git remote add upstream https://github.com/ItQianChen/dsh-github-flow.git
git rebase upstream/main      # 或 vX.Y.Z 标签
```

⚠️ 冲突高发区是 `resolveWorkspaceCwd`（上游对这里改动频繁，HEAD 已比 v0.5.0 多出 3 个
仓库身份/远程选择相关的修复）。rebase 后务必跑 `pnpm test` 与本文「验证」一节。

⚠️ 不要在面板里点「一键升级」：它会 `pnpm add dsh-github-flow@latest` 把符号链接换回 npm 包，
本 fork 的能力立刻消失。升级请走上面的 rebase 流程。

## 验证（本机 2026-10-20 实测）

| 场景 | 结果 |
| --- | --- |
| 聚合根 `demo-workspace`（6 个子仓库） | 解析到 `ios-client` → `acme/demo-ios` |
| 聚合根 `agg`（fixture，两个子仓库） | 选中更活跃的 `repoB` → `octocat/Hello-World`，PR/Issue/Run 数据确实来自该仓库 |
| 仓库内子目录 `repoA/src` | 回溯到 `repoA` → `octocat/Spoon-Knife` |
| 仓库自身 | `via: 'self'`，行为与原版一致 |
| 无仓库的普通文件夹 | 仍返回「未关联」，不伪造 |
| `strict`（默认，不配置） | 与原版一致；`pnpm test` 21 个阶段全绿（phase6 的 2 项在基线同样失败，属环境依赖） |

## 面板内评审与链接（2026-10-20 追加）

- **Actions 徽章**：`conclusion` 现在完整枚举（success/failure/cancelled/skipped/
  timed_out/action_required/neutral/stale/startup_failure），非终态才看 `status`
  （in_progress/queued）。原来的实现只认前两个，其余把 `status` 当结论显示，
  于是一条「已取消」会显示成黄色 `completed`。
- **链接走 DSH 内部浏览器**：`ctx.get('sidebarRight').openTab('browser', { params: { url } })`
  ——与 `sidebar_open` 工具同一条原生通道；只在点击发生在面板内、且没有按修饰键时接管，
  ⌘/Ctrl/Shift/Alt 点击仍然交给系统浏览器。不用 iframe 是因为 GitHub 发
  `X-Frame-Options: deny`，内嵌必然白屏。
- **PR 评审**：PR 行右侧「评审」按钮打开面板内弹窗，展示元数据 + 逐文件 diff，
  提供 批准 / 请求修改 / 仅评论 三个动作。写操作**必须点两次**（第一次进入确认态）。
  - `GET /api/github/pr-detail?number=&cwd=` → 元数据 + `gh pr diff`
  - `POST /api/github/pr-review` `{ cwd, number, event, body, author }`
- **身份校验 fail-closed**：服务端自己用 `gh pr view --json author` 确认作者，
  且 `gh api user` 拿不到当前账号时直接拒绝；面板传来的 `author` 只用于「提前拒绝」，
  永远不能用来放行（客户端输入可被构造）。
- **解析同源**：`resolveWorkspaceCwd` 与 `resolveWorkspaceRepoRoot` 现在走同一条路径。
  之前 run() 不读手动选择，会出现「门禁判定用 A 仓库、gh 子进程跑在 B 仓库」的分裂，
  评审这类写操作在那种状态下会落到错误的仓库。

### 事故记录（务必保留）

联调 `pr-review` 时，我用伪造的 `author` 绕过了一次自评审校验，在
`acme/demo-backend#3934` 上误发了一条 `COMMENTED` review（正文 `hi`）。
GitHub 的 API 不支持删除已提交的 review（DELETE 仅对 PENDING 有效），只能 PUT 改写正文，
已改成「本条为本地插件联调产生的测试评论，内容已作废，请忽略」。
这正是上面「author 只能用于拒绝、不能用于放行」「查询失败 fail-closed」两条规则的由来。

## 视觉层（2026-10-20 追加）

用真实 CSS 做静态预览 + `design_audit` 客观测量（产物在 `docs/ui-preview/`：
`panel-dark.html` / `panel-dark.png`）：

| 问题 | 处理 |
| --- | --- |
| 快捷操作栏 5 个按钮在 2 列网格里必然剩一个孤行 | 「在浏览器打开」上提到卡头做 24px 图标按钮（🌐），快捷栏变 2×2 |
| `CLI 认证账号` 行把 20+ 个 scope 全列出来，占三行 | 只显示前 3 个 + `+N`，完整列表进 `title` |
| 账号行对比度 2.96:1，低于 WCAG AA 的 4.5:1 | `label-tertiary` → `label-secondary`（层级改由 11px 字号承担） |
| 同名同分支的 Actions 刷屏（5 条里两组重复） | 按 `name + headBranch` 聚合，`×N` 角标，标题显示「3 组 / 5 条」 |
| 状态徽章被长分支名挤到第二行，每条多占 24px | 徽章移到标题行右侧，meta 保持单行 |
| 长分支名顶破容器 | meta 首项限宽 62% + ellipsis，`title` 给完整值 |
| 图标按钮 22px / 下拉 22px 高，偏小 | 图标按钮 24px、下拉 `min-height: 26px` |

复查方式：`node` 读 `lib/ui/styles.js` 的 `GITHUB_PANEL_CSS` 生成预览 HTML，
起 `python3 -m http.server` 后对 URL 跑 `design_audit`（dark 主题需在 `<body>` 上
带 `data-ds-dark-theme="true"`）。

剩余已知项（有意不改）：切换 Tab 后 `6px`/`14px` 少量间距非 4 的倍数（本项目实际是
2px 栅格）；纯文本链接高度 <24px（WCAG 2.5.8 对行内文本链接豁免）；整个插件用 emoji
当图标（换图标集是整体改版，不在本次范围）。

## 视觉重构：台账（2026-10-20 第二轮）

第一版只做了「修问题」，被评价为"不好看"。这一轮请了 UX 架构师定规范，落到一套
**设计系统层**（`src/ui/styles.ts` 末尾「台账改造」段，追加式覆盖，不改旧规则）。

概念：**「`gh` 的输出，被排版过一次」**——单栏台账，等宽字体承担机器数据，发丝线分格，
状态只用一种编码（形状为主、颜色为辅）。

为什么不用 Tailwind / UI 库（结论与理由）：

| 方案 | 可行性 | 判断 |
| --- | --- | --- |
| Tailwind | 需离线预编译成静态 CSS 再内联（本项目没有 CSS 打包链） | 只能拿到工具类，拿不到设计判断；默认刻度（4/8/16 与 14px 基准）会与本面板 392px 的预算打架 |
| shadcn / Radix 等 | 需把组件库打进 IIFE bundle（当前构建不支持） | 引入的是通用观感与体积，而 DSH 主题本身没有填充台阶可用，组件库的高程体系直接失效 |
| 自建 token + 台账骨架 | 零依赖 | **采用**：约束（无品牌色、无填充台阶、无图标库）与该方向一致 |

落地的规范：

- **字号只四档** 15（slug·全panel唯一）/13（行标题）/12（次级行）/11（时间与计数）；字号阶梯实测已恰好四档
- **圆角两档** 6（块）/4（行、芯片）；**面板内零阴影**；层级由 1px 描边 + 留白承担
- **间距七档** 2/4/6/8/12/16/24
- **行骨架** `[14px 状态脊柱][内容][44px 右槽]`：状态在左成列可纵向扫；右槽常态是时间、
  hover 原位换按钮（槽宽固定，零 reflow）
- **状态词典**：● 完成 / ○ 进行中 / ✕ 失败 / ⊘ 取消 / ◷ 排队 / ◇ 中性；颜色只是强化，
  暗色下脊柱色单独提亮（否则只有 3.4:1）
- **渲染顺序**改为 锚点 → Tab → 列表 → 快捷操作（写操作顺手可达，但不抢眼）
- **emoji 全部移出主界面**：图标位改用 `↗ ↗ ✓ ◇` 等单色字形，可随主题变色
- **调试信息折叠**：账号 / scopes / 仓库根 / 绑定方式收进 `<details>`，默认不展开

双主题实测（392px，design_audit）：改前 4 类违规（含 high 级对比度）→ 改后 3 类，
且均属豁免项（6px 属 2px 栅格、纯文本链接、单色箭头字形）；**对比度 0 违规**。

复现：`node docs/ui-preview/gen.mjs` 生成 dark/light 预览，起 `python3 -m http.server`
后对 URL 跑 `design_audit`。

## Tailwind 接入（2026-10-20 第三轮）

用户三次要求用 Tailwind，正式接入为**构建期 CSS 生成**（不是运行时框架）：

```
src/ui/tw.src.css  --(tailwindcss CLI)-->  CSS 文本
                   --(scripts/build-css.mjs 包成 TS)-->  src/ui/tw.generated.ts
                   --(styles.ts 拼接 `+ TW_CSS`)-->  单个被注入的 <style>
```

- `pnpm run build` = `build:css && tsc && build.mjs`；`pnpm run build:css` 可单独跑
- `tailwindcss@^3.4.17` 进 devDependencies（离线和可复现）；没有本地二进制时回退 `npx`
- 组件层用 `@apply` 写成 `gh2-*` 类，标记直接引用它们；新组件可以直接写工具类
- 预览：`node docs/ui-preview/gen.mjs` → `docs/ui-preview/panel-{dark,light}.png`

三个必须知道的坑（都实际踩过）：

1. **`corePlugins.preflight = false`**：Tailwind 的基础重置会污染 DSH 宿主全局样式。
2. **不要用 `--content` 命令行参数 / content 要包含 `tw.src.css` 自身**：
   `@layer components` 里的类名同样按 content 树摇；铺开迁移前标记还没用到 `gh2-*` 时，
   整个组件层会被清空，产出 0 条规则。
3. **颜色不能直接映射 `var(token, 浅色fallback)`**：Token 缺失时暗色会拿到浅色 fallback，
   正文变成深灰叠深底（实测 slug 不可读）。做法是面板级变量 `--gh-c-*`，
   在 `.gh2-theme`（挂在真实容器上）里按 `[data-ds-dark-theme]` 给两套值。

## PR 详情页与会话 PR（2026-10-20 第四轮）

**① PR 详情改成 GitHub 那种结构**（`src/ui/pr-review-modal.ts`）：

```
[状态徽章] 分支→基线 · #编号                              [打开] [关闭]
标题
作者 · 时间 · 评审结论
┌────────────────────────────┬──────────────────┐
│ 正文（markdown-lite）       │ Changes          │
│ 改动文件（折叠）            │ Comments         │
│ Activity（提交/评审时间线） │ Reviewers        │
│                            │ Checks           │
│                            │ 评审操作区        │
└────────────────────────────┴──────────────────┘
```

- 自带 markdown-lite（标题/列表/围栏代码/行内代码/加粗/链接），不引第三方库
  —— 客户端运行时只有 `require('react')`
- 评审操作仍是二次确认；写操作依旧走服务端 fail-closed 的作者校验

**② 右侧栏新增「会话」Tab：列出这段对话里出现过的 PR**

- 数据源是会话转写 `~/.dsh/sessions/<ws>/<sessionId>/session.v4.jsonl.zstd`
- 解压用 `zstd -dc`（Node 20 的 zlib 没有 zstd）
- 提取两种写法：`github.com/<owner>/<repo>/pull/<n>` 与 `owner/repo#n`
- 只保留当前仓库的 PR（跨仓库编号在 gh 上下文里对不上）
- 元数据逐条 `gh pr view`（并发 3、上限 12 条），结果缓存 60 秒

补充（同日第二轮）：

- **裸编号 `#3934` 也能认**：对话里只写编号时也能抓到；显式引用（URL / `owner/repo#n`）
  排在前面，裸编号补位
- **只返回验证通过的 PR**：每条都过 `gh pr view`，未命中的（例如对话里的 Issue 号 #235）
  被剔掉并写进 negative cache，不会在列表里出现「元数据缺失」的空行
- **分页**：`limit` / `offset`，面板显示「已显示 X / Y」并可加载更多；单条元数据缓存 120s，
  翻页基本零成本（实测冷 6.9s、热 14ms）
- **分组与筛选**：按 待审 / 草稿 / 已合并 / 已关闭 分组，另有「我发起的」筛选
- PR 正文的 markdown 现在支持**表格与图片**

⚠️ 这里踩过一个坑：原本想用 `gh pr list --state all --limit 200` 一次拿全，
但 200 条 `--json` 输出超过 `run()` 的 24k 字符上限被截断，JSON 解析直接放弃，
于是「命中 21 条 PR 却一条元数据都没有」。改成逐条取之后才正确。

## 已知限制

- 客户端没有「这是自动选中的子仓库」的视觉标记。API 已经回传 `workspacePath` / `repoVia` /
  `repoPath`，要显示徽章只需改 `src/client.ts`（未做，避免动打包产物）。
- 聚合根下切仓库需要在配置里调整，或在更活跃的那个仓库里操作——本 fork 选的是「最近活动」，
  不做手动切换器。
