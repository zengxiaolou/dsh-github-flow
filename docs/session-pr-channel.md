# 会话 PR 通道（Session PR Channel）

> 一句话：**本会话亲手创建的 PR，永远在右下角留一个入口。**
>
> 这份文档对应一次「做减法」的改造——下线全局驾驶舱，把 PR 追回它真正的归属：当前这个会话。

---

## 1. 为什么做（不是全局驾驶舱，是会话级清单）

改造前有两个入口：左侧栏的「GitHub 全景驾驶舱」图标，和它打开的中央 `main` 面板。那是一个**账号视角**的控制台，回答「我名下有什么仓库、多少待办 Issue、多少开放 PR」。

但真实场景是反过来的。人对 Agent 说「帮我把这个分支提个 PR」，然后脑子里只有一句话：**我刚提的那个 PR，CI 过了吗？合了吗？** 全景驾驶舱回答不了这个——它不知道你刚提了什么，只会把仓库里所有开放 PR 再列一遍。于是出现最尴尬的体验：Agent 说「PR 已创建」，用户却要切到浏览器确认。

所以这次做两件事：**删**掉左侧栏「GitHub 全景驾驶舱」图标与中央 `main` 面板（插件不再占用左侧导航与主视图），**加**一条**会话级** PR 通道，只服务「本会话创建了什么」，分浮窗与右列面板两个界面。

判断标准只有一条：**这个 PR 是不是本会话亲手建的。** 提过的、看过的、评审过的一律不收——混进来，浮窗就退化成第二个 PR 列表。右侧栏的「GitHub」Tab 保留，那是**仓库视角**，与会话视角并存。

### 1.1 历史驾驶舱去哪了

**全局驾驶舱已整体下线**：左侧栏入口与中央 `main` 面板都不再注册，README 里那张全屏驾驶舱截图对应的界面已经作废。**但仓库级能力没有丢**——它们仍在右侧栏的「GitHub」标签（工作区面板）里：仓库与分支上下文、提交记录、未提交改动、PR 门禁、Issues、Actions。该面板使用的旧接口 **`/api/github/session-prs`**（「对话里提及过的 PR」，提及即收）照常服务，与本文「只认本会话新建」的口径互不干扰。

---

## 2. 两个界面

### 2.1 右下角浮窗（`shell.overlay`）

| 项目 | 值 |
| --- | --- |
| 挂载点 / 位置 | 槽位 `shell.overlay`（`id: github-session-pr`, `order: 70`）；`fixed; right: 20px; bottom: 148px; z-index: 900` |
| 渲染条件 | **当前会话至少创建过 1 个 PR**，否则直接 `return null` |
| 收起态 | 药丸：`PR #<最新编号>` + 总数角标（仅 >1 时显示） |
| 展开态 | 372px 卡片，最多 12 行，**每行两行信息** |

每行两行：
- 第一行：`#编号` + 标题（单行截断，吃满宽度）+ 状态徽章（`open` / `draft` / `merged` / `closed`）；
- 第二行：目标分支色标 → 仓库名 → CI 圆点（绿通过 / 红失败 / 黄进行中 / 灰无检查）。

**增删行数（`+147 −14`）不在卡片上**：它是「PR 大小」的弱信号，却要挤掉标题宽度——标题能多看十几个字更值钱；需要看增删时点进面板，头部与文件列表都写着。卡片头部有刷新与收起，点任意一行打开右列面板。

![浮窗卡片：两行布局 + 目标分支色](../docs/images/session-pr-card.png)

### 2.2 右列 PR 面板（`github-pr` Tab）

**卡片式布局**：左栏四张卡（描述 / 变更 / 讨论 / 待修改意见），右栏三张卡（检查 / 评审 / 操作），每张都是圆角卡片、独立边框；容器 <620px 时叠成单列。

![会话 PR 面板：卡片分区 + 懒加载 diff](../docs/images/session-pr-panel.png)

**头部就是审批台**：`批准`、`合并`、`自动合并`、合并方式下拉（squash / merge / rebase），右边才是 `在 GitHub 打开` / `推到对话框` / `刷新`。

- **批准** → `POST /api/github/pr-review-submit`（APPROVE）。草稿、有冲突时禁用并在 tooltip 写明原因；已合并/已关闭的 PR **整组按钮不渲染**（没意义的东西不该占位）。
- **点了之后有没有真的生效，服务端会回读确认**：`gh pr merge` 对「已合并 / 已关闭」的 PR 会打印一行提示但**退出码仍是 0**——只看退出码就会谎报成功（本地实测过）。所以合并路由是三段式：先读状态（已合并/已关闭直接 400）→ 执行 → 再读一次状态（要求 `MERGED` / `autoMergeRequest` 真的变了），没变就 502 并把 gh 输出一起带回来。评审路由同理：已合并/已关闭、或「批准自己的 PR」提前 400，而不是回一个看不懂的 `HTTP 422`。
- **按钮可用性跟着 PR 状态走**：`OPEN + CLEAN` 全开；`DIRTY` 禁用批准与合并（提示先解冲突）；`BLOCKED` 只禁合并（分支保护未满足，但批准仍然有意义）；`DRAFT` 禁批准与合并；**自动合并始终可用**——它本来就是「现在还不能合、等条件满足再合」的入口。
- **合并** → 两步：第一次点变成「确认合并？」，5 秒内再点才真的调 `POST /api/github/pr-merge`（`gh pr merge --squash|--merge|--rebase`）。合并会改写远端历史，不做二次确认太危险。
- **自动合并** → 同一个路由的 `--auto`（等价于 GitHub 的 Auto-merge）；已经开启时按钮显示 `自动合并 ✓`，再点发 `--disable-auto`。注意：仓库没开分支保护/必过检查时 GitHub 会直接拒绝，错误原样弹在面板上——这是 GitHub 的规则，不是插件吞了。
- **合并后删除源分支**：默认**不删**，要在「操作」卡里勾 `合并后删除源分支` 才会带 `--delete-branch`。删分支不可逆。

- **diff 是懒加载的**：进面板不发 `pr diff`。变更卡头部先给文件清单（`pr.files` 详情自带，零额外请求）+ 一颗「加载 diff」按钮；点下去才 `GET /api/github/pr-diff`，加载中显示骨架行，回来后逐文件折叠，默认只展开第一个。
  为什么：一个 181 文件的 PR，`gh pr diff` 可以跑满 30 秒甚至直接 406（GitHub 20000 行上限）——diff 不是这块的重点，不该挡住整个面板。
- **错误不是原文直译**：`gh: Unprocessable Entity (HTTP 422)` 会被翻译成「PR 状态已变、或分支保护/评审规则不满足（原始报错：…）」，401/403/404/冲突/限流/超时各有对应说法，括号里保留原文方便对照。
- **描述默认整段展示 + 渐变遮罩 +「展开全部」；截断按行边界切，未闭合的代码围栏自动补齐，不会渲染出半截标签。
- **讨论卡**：默认显示最近 3 条评审/评论，`显示全部 N 条` 展开；提交记录默认只列 6 条。
- **检查卡**：顶部一条汇总（`N 项失败 / 共 M 项`），失败的检查项整行红色高亮；超过 6 项折叠。
- **高亮**：正在评论的文件行整行高亮（`ghsp-file.active`），被点选的行有描边（`ghsp-line.sel`），失败检查红底、警告琥珀、通过绿点。
- **骨架屏**：详情未回来时标题写「正在读取 PR…」，右栏不渲染空卡片；各卡片各自有骨架条，而不是整页白屏。
- **浮窗让位**：面板挂载时浮窗自动收起（挂载计数，模块内自洽，不读宿主 DOM）。

### 2.2.1 「待修改意见」队列的口径

只收**需要动手**的东西，不把历史评论倒一遍：

- 评审：正文非空、且结论不是 `APPROVED`（批准是结论，不是待办）；
- 评论：正文非空、且作者**不是 PR 作者本人**（自己回的「收到」「已改」不进队列）；
- 排序：最新在前；默认展示 4 条，其余「显示全部 N 条」；
- 每条：作者、结论徽章、时间、正文（超过 8 行折叠）、`fix`；
- 卡头 `全部 fix N`：把所有条目按编号拼成一条消息推进输入框——一次说清，Agent 不用被同一批意见打断 N 次。

### 2.3 面板里的动作

| 动作 | 触发 | 落到哪 |
| --- | --- | --- |
| **推到对话框** | 头部 💬 / 右栏「推到对话框」/ 每个文件的 `＋对话` | `inputActions.insertText()`（拿不到退 `setDraft`，再不行写剪贴板），内容含 `owner/repo#编号`、标题、分支、增删与「先看 diff 再动手」 |
| **评论这一行** | 点 diff 里任意 `+` 行或上下文行的行号；**Shift+点击** 选一段（同一文件内） | 底部评论条（单行 `:12`、区间 `:12–18`）：`发到 PR（行内）` → `POST /api/github/pr-inline-comment`（区间带 `start_line`/`start_side`）；`放进对话框` → 变成一条「我要求这样改」的任务 |
| **批准 / 请求修改** | 右栏「操作」 | `POST /api/github/pr-review-submit` → `gh api .../pulls/N/reviews`。草稿或非 OPEN 的 PR 按钮直接禁用；自己的 PR 会被 GitHub 拒绝，错误原样显示 |
| **PR 评论** | 右栏「发到 PR 评论」 | `POST /api/github/pr-comment`（issue comment，自己的 PR 也能发） |
| **合并 / 自动合并** | 头部按钮；合并方式下拉**按仓库 `allow_*_merge` 过滤** | `POST /api/github/pr-merge`（`merge` / `auto` / `disable-auto`），见 2.2 |
| **修复失败的 CI** | 检查卡里失败项右侧的 `fix`，或卡头 `修复失败项 N` | 生成一段带 PR 编号、检查名、详情 URL、`gh run view --log-failed` 指引的提示词，推进输入框 |
| **修复评审意见** | 「待修改意见」卡每条右侧的 `fix`，或卡头 `全部 fix N` | 单条引用原文；批量按 `### 1) @作者 · 结论` 编号，一次推给 Agent |
| **引用评审意见** | 讨论块每条意见的 `＋` | 引用原话进对话框 |

行号不是数出来的：`diffLinesWithNumbers()` 从 `@@ -a,b +c,d @@` 推新文件行号，只有新增行与上下文行可评论（删除行在新文件里没有行号）。

## 3. 数据口径：只认「本会话新建」

| 创建方式 | 计入 | 判定依据 |
| --- | --- | --- |
| `github_pr` → `action: "create"` | ✅ | 调用参数 + 结果里的 PR 链接；`dry_run: true` 排除 |
| `bash` 执行 `gh pr create` | ✅ | 命令命中 `\bgh\s+pr\s+create\b` + 输出里的 PR 链接 |
| `github_api` → `POST .../pulls` | ✅ | 方法为 POST 且端点为 `/pulls`（`/pulls/<n>` 不算） |
| 提及 / 查看 / 评审 / 合并 / 被指派 | ❌ | 属旧口径，见下 |

被排除的那类仍由 **`/api/github/session-prs`** 提供（「对话里出现过的 PR」，提及即收），仓库面板还在用它。两个接口**刻意不合并**：一个答「我刚提了什么」，一个答「这会话聊到过哪些 PR」，混在一起两边都不准。

---

## 4. 两条来源，Host 侧合并

**① 进程内登记簿（快，但会丢）** — [src/session-pr-tracker.ts](../src/session-pr-tracker.ts)：`Map<sessionId, CreatedPrRef[]>`，`github_pr create` 成功后**同步**写 `{ repo, number, at, via: 'tool' }`，不等落盘。理由：转写是异步写文件的，解压扫描又整份做；只靠转写，点完「创建 PR」要等几秒才看见浮窗。上限 80 条/会话、120 个会话。

**② 转写回填（慢，但跨重启）** — [src/session-pr-scan.ts](../src/session-pr-scan.ts)：扫 `~/.dsh/sessions/<workspace>/<sessionId>/session.v4.jsonl.zstd`，`zstd -dc` 解压后逐行解析 `tool/call` 与 `tool/result`，按第 3 节口径配对：**只有「创建类调用 + 结果里出现 PR 链接」才算**。重启后历史 PR 由这条路找回。

**合并**：以 `owner/repo#number`（小写）去重，登记簿优先，两边都有取较新的 `at`；按 `at` 倒序**只留最新 12 条**再补元数据。

---

## 5. 路由契约

### 5.1 `GET /api/github/session-created-prs`

浮窗与右列面板的**唯一**数据源（同一接口，不各自打 gh）。`GET` 以外返回 405。

| 参数 | 必填 | 说明 |
| --- | --- | --- |
| `sessionId` | ✅ | 会话 id；缺失返回 400 |
| `refresh` | | `1` 时跳过所有缓存，强制重扫转写 + 重拉元数据 |

```json
{ "ok": true, "data": {
  "sessionId": "session-xxxx", "transcript": "session-xxxx", "reason": null, "total": 2,
  "items": [{
    "repo": "owner/repo", "number": 123, "at": 1760000000000, "via": "tool",
    "title": "feat: ...", "state": "OPEN", "isDraft": false,
    "url": "https://github.com/owner/repo/pull/123", "author": "alice",
    "baseRefName": "main", "headRefName": "feature/x",
    "additions": 128, "deletions": 42, "changedFiles": 6,
    "reviewDecision": "", "createdAt": "...", "updatedAt": "...", "mergedAt": "",
    "checks": { "state": "pass", "total": 12, "failing": 0 }, "missing": false
  }]
} }
```

- `via`：`tool` / `bash` / `api`，PR 由哪种方式创建；
- `checks.state`：`pass` / `fail` / `pending` / `none`，由 `statusCheckRollup` 归并；
- `missing: true`：元数据没取到（断网/未登录），其余字段是兜底值。

### 5.2 `GET /api/github/pr-detail`

详情复用既有路由，本次只多一个 `repo` 参数：`number`（必填，非正整数 400）、`repo`（`owner/repo`，给出时**不看工作区仓库**）、`cwd`（工作区提示）。响应 `data`：`{ pr, repoRoot, repo, repoVia, diff, diffError, diffTruncated }`——`pr` 是 `gh pr view --json` 原样结构，`diff` 是 `gh pr diff` 原始 patch，前端自己按文件切分。

---

### 5.3 `POST /api/github/pr-comment`

发布一条 PR 会话评论（issue comment）。**为什么不用 pr-review**：`gh pr review --comment` 在自己的 PR 上会被 GitHub 拒绝，而用户看的多半就是自己刚提的 PR。

| 参数 | 必填 | 说明 |
| --- | --- | --- |
| `repo` | ✓ | `owner/repo`，正则 `^[A-Za-z0-9_][A-Za-z0-9_.-]*/[A-Za-z0-9_][A-Za-z0-9_.-]*$` |
| `number` | ✓ | 正整数 |
| `body` | ✓ | 非空，≤ 64000 字符 |

实现是 `gh pr comment <n> --repo <repo> --body <body>`（argv 数组，不过 shell）。

### 5.4 `POST /api/github/pr-inline-comment`

在某一行上发 GitHub review comment（行内评论）。

| 参数 | 必填 | 说明 |
| --- | --- | --- |
| `repo` / `number` / `body` | ✓ | 同上 |
| `path` | ✓ | 仓库内相对路径；拒绝绝对路径与 `..` |
| `line` | ✓ | 新文件行号（正整数） |
| `side` | | `RIGHT`（默认）/ `LEFT` |
| `start_line` | | 多行评论的起始行；必须小于 `line`，同时会带 `start_side` |
| `commit_id` | ✓ | PR 的 `headRefOid`（7–64 位十六进制）；`pr-detail` 已回传 |

实现是 `gh api repos/<repo>/pulls/<n>/comments --method POST -f body=... -f path=... -f side=... -F line=... -f commit_id=...`。
拿不到 `headRefOid` 时客户端不报错，退化成 5.3 的 PR 评论并把「文件:行」写进正文。

### 5.5 `GET /api/github/pr-diff`

单独拉 diff，让详情面板先出内容。

| 参数 | 必填 | 说明 |
| --- | --- | --- |
| `number` | ✓ | 正整数 |
| `repo` | | 显式仓库；省略则用 `cwd` 解析工作区仓库 |
| `cwd` | | 工作区路径 |

返回 `{ diff, diffError?, diffTruncated }`。超时 20s；GitHub 的 20000 行上限会以 `diffError` 返回。

### 5.6 `POST /api/github/pr-review-submit`

提交评审（批准 / 请求修改 / 评论），跨仓可用。

| 参数 | 必填 | 说明 |
| --- | --- | --- |
| `repo` / `number` | ✓ | 同 5.3 |
| `event` | ✓ | `APPROVE` / `REQUEST_CHANGES` / `COMMENT` |
| `body` | | `REQUEST_CHANGES` 必填 |

实现：`gh api repos/<repo>/pulls/<n>/reviews --method POST -f event=... -f body=...`。走 REST 而不是 `gh pr review`，因为 `gh pr review` 依赖本地仓库上下文，而面板里的 PR 可能不属于当前工作区。

### 5.7 `POST /api/github/pr-merge`

合并 / 开启自动合并 / 取消自动合并。

| 参数 | 必填 | 说明 |
| --- | --- | --- |
| `repo` / `number` | ✓ | 同 5.3 |
| `action` | | `merge`（默认）/ `auto` / `disable-auto` |
| `method` | | `squash`（默认）/ `merge` / `rebase` |
| `delete_branch` | | 仅 `merge` 生效；默认 false |

argv 形状：`['pr','merge',N,'--repo',repo]` 后面按动作追加 `--squash` / `--auto --squash` / `--disable-auto`，`delete_branch` 时再追 `--delete-branch`。失败（没权限、有冲突、分支保护挡住）一律 502 并把 gh 的原始错误带回界面。

### 5.8 `GET /api/github/repo-merge-methods?repo=owner/name`

仓库允许哪几种合并方式（`allow_squash_merge` / `allow_merge_commit` / `allow_rebase_merge` 只在仓库对象上）。面板据此过滤下拉，避免选一个必然被 422 拒绝的方式。

返回 `{ squash, merge, rebase, squashOnly }`；字段缺失按「允许」处理（`!== false`）。缓存 5 分钟。

## 6. 跨仓支持

每行都带自己的 `repo`（来自 PR 链接本身，天然跨仓）。点开时：前端把 `repo` 塞进 `openTab` 的 params → 面板拼到 `/api/github/pr-detail?number=&repo=` → 路由用 `/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/` 校验，合法就**完全跳过**工作区仓库解析，改走 `--repo <owner/repo>`；校验不过则退回工作区仓库，不会拼出畸形 gh 命令。

修的是一个真实缺陷：改造前 `pr-detail` 只拿工作区仓库解析编号，而 #123 在 A 仓和 B 仓是两个 PR——在 A 仓的会话里点 B 仓的 #123，会安静地打开 A 仓的 #123。

---

## 7. 性能与缓存

| 环节 | 策略 |
| --- | --- |
| 前端轮询 | **按「看得多认真」分档**：面板开着 8s；只有浮窗挂着 30s；窗口在后台完全停（`visibilitychange` 回来立刻补一次）。模块级单例 + 单飞：浮窗与面板共用同一个轮询与同一份状态 |
| 浮窗首屏 | `lite=1`：只回编号/仓库，不跑 `gh pr view`；展开卡片或打开面板才补齐元数据（已缓存的照常直接返回，`pending` 行显示「读取中…」） |
| 面板元数据 | 打开后每 30s 自动刷一次状态/检查（diff 不跟着重拉）；窗口回到前台立刻补一次 |
| 转写扫描 | 以 `mtime + size` 为键；没变不打解压；在变时最短 60 秒重扫一次（5.4MB 转写解压实测 0.54s，同步做会按住 Host 事件循环，所以解压走异步、且同一份转写的并发请求只解压一次） |
| PR 元数据 | 每条 `repo#number` 缓存 60 秒（`refresh=1` 绕过），4 路并发 `gh pr view` |
| 元数据缓存上限 | 240 条 LRU：按 repo#number 无界增长会一路涨到几千条（长跑进程） |
| 合并方式缓存 | 仓库维度 5 分钟，一个仓库只查一次 |
| 失败也缓存 | 负缓存，否则浮窗每 8 秒重试一遍 gh，弱网下把自己的网占满 |
| 数据量 | 合并后最多 12 条进元数据阶段，更早的历史 PR 不参与轮询 |

---

## 8. 已知限制（如实记录）

- **Host 侧路由要重启才注册**：客户端 bundle 热重载，**Host 插件不会**。`session-created-prs` 返 404 时先完整重启一次 DSH，再判断功能是否生效。
- **浮窗会自己消失**：本会话没建过 PR 就不渲染。刻意如此——常驻入口最后一定变成骚扰。
- **最多 12 条**：更早的 PR 转写里还有，但接口不返回。
- **diff 单文件 400 行封顶**：看全量请点「在 GitHub 打开」。
- **只跟主视图会话**：取当前主视图所属会话（`retainedBy.mainView`），子 Agent 会话建的 PR 不会串进来。
- **回填依赖系统 `zstd` 命令**：Node 20 的 `zlib` 没有 zstd API。机器上没有 `zstd` 时这条链路静默失效（登记簿仍工作），表现为「刚提的看得见，重启后历史 PR 全消失」。

---

## 9. 验证方法

想在一个「确实提过 PR」的会话里看全：

1. **重启一次 DSH**，让 Host 新路由注册（客户端热重载不覆盖 Host 插件）；
2. 找一个本会话创建过 PR 的会话（历史会话也行，走转写回填），切到主视图；
3. 右下角出现 `PR #<最新>` 药丸（带总数角标），点开 → 340px 卡片：PR、状态徽章、仓库、`+/−`、CI 圆点；
4. 点某行 → 右栏窄面板：状态/仓库/编号/标题/头→基分支/增删/文件数/作者/CI 摘要 + 按文件折叠的 unified diff。

接口层自检（不依赖 UI）：

```bash
# 本会话被判定为「新建」的 PR 与来源（tool/bash/api）
curl -s 'http://127.0.0.1:<DSH宿主端口>/api/github/session-created-prs?sessionId=<会话id>' \
  | jq '.data.items[] | {repo, number, via, checks: .checks.state}'

# 强制刷新（跳缓存）/ 跨仓详情（不给 cwd，靠 repo 解析）
curl -s '...?sessionId=<会话id>&refresh=1' | jq '.data.total'
curl -s 'http://127.0.0.1:<端口>/api/github/pr-detail?number=123&repo=<owner>/<repo>' \
  | jq '.data.pr | {title, state, additions, deletions}'
```

**反证也值得做**：在一个只「评审过」别人的 PR、自己没建过 PR 的会话里打开，右下角应**什么都不出现**。出现了就说明口径串到了 `/api/github/session-prs` 那一路——这是本次改造最需要守住的边界。

---

## 相关文件

| 文件 | 职责 |
| --- | --- |
| [src/session-pr-tracker.ts](../src/session-pr-tracker.ts) / [src/session-pr-scan.ts](../src/session-pr-scan.ts) | 登记簿（即时来源）与转写回填扫描（跨重启来源） |
| [src/ui/session-pr-panel.ts](../src/ui/session-pr-panel.ts) | 浮窗 + 右列面板（样式、数据 hook、diff 渲染） |
| [src/api/routes-actions.ts](../src/api/routes-actions.ts) | `session-created-prs` 与 `pr-detail` 路由 |
| [src/client.ts](../src/client.ts) | 槽位注入、`openTab` + `openRightbar` 两步打开 |
