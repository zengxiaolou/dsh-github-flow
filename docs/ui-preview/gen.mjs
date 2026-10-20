import { GITHUB_PANEL_CSS } from "../../lib/ui/styles.js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));

const row = (dot, tone, prefix, title, sub, time, chip, action) => `
  <div class="gh2-row">
    <span class="gh2-dot gh2-dot--${tone}">${dot}</span>
    <div class="gh2-row-main">
      <div class="gh2-row-title">${prefix ? `<span class="gh2-prefix">${prefix}</span>` : ""}<a href="#">${title}</a></div>
      <div class="gh2-row-sub">${sub.map(s => `<span class="${s.mono ? "gh-mono" : ""}">${s.text}</span>`).join("")}</div>
    </div>
    <div class="gh2-row-slot">
      <span class="gh2-row-slot-time">${time}</span>
      ${chip ? `<span class="gh2-chip gh2-chip--${tone}">${chip}</span>` : ""}
      ${action ? `<button class="gh2-icon-btn gh2-row-slot-btn">${action}</button>` : ""}
    </div>
  </div>`;

const body = `
<div class="gh2-panel">
  <div class="gh2-card">
    <div class="gh2-card-top">
      <span class="gh2-repo-mark">⌘</span>
      <a class="gh2-slug" href="#">acme/demo-ios</a>
      <button class="gh2-icon-btn" title="在内部浏览器打开">↗</button>
    </div>
    <div class="gh2-card-meta">
      <span class="gh2-branch">feature/ios-list-line-refresh-0.1.61</span>
      <span class="gh2-sync">↑2 ↓0</span>
      <span class="gh2-sync">±3</span>
      <select class="dsh-github-repo-select"><option>ios-client</option></select>
      <span class="dsh-github-badge" style="font-size:11px">手动</span>
    </div>
    <div style="font-size:12px;color:var(--dsw-alias-label-secondary,#57606a);padding-left:32px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">ios_kukipay · 共享卡额度字段识别修复</div>
    <details class="gh2-details"><summary>@zengxiaolou</summary>
      <div class="gh2-details-body"><div>仓库根: …/demo-workspace/ios-client</div><div>绑定方式: 手动</div></div>
    </details>
  </div>

  <div class="gh2-segments">
    <button class="gh2-segment">Git</button>
    <button class="gh2-segment">未提交 <span class="gh2-count">3</span></button>
    <button class="gh2-segment gh2-segment--active">PR <span class="gh2-count">2</span></button>
    <button class="gh2-segment">Issues <span class="gh2-count">10</span></button>
    <button class="gh2-segment">Actions <span class="gh2-count">5</span></button>
  </div>

  <div>
    <div class="gh2-section-head"><h3 class="gh2-section-title">Pull requests</h3><span class="gh2-section-count">2</span></div>
    <div class="gh2-list">
      ${row("●", "ok", "#3934", "chore(dev): 回刷共享卡额度字段识别修复（#3931）",
            [{text:"chore/ios-list-line→release/0.1.61", mono:true}], "7小时前", "可合并", "✓")}
      ${row("✕", "bad", "#3921", "feat: 支付渠道限额校验",
            [{text:"feat/pay-limit→main", mono:true}], "昨天", "CI 失败", "✓")}
    </div>
  </div>

  <div>
    <div class="gh2-section-head"><h3 class="gh2-section-title">Actions</h3><span class="gh2-section-count">5</span></div>
    <div class="gh2-list">
      ${row("●", "ok", "", "VCC Activation Resolution Tests",
            [{text:"hotfix/ios-list-line-refresh-0.1.61", mono:true},{text:"2 次"}], "7小时前", "成功", "↗")}
      ${row("⊘", "idle", "", "VCC Cancellation Tests",
            [{text:"hotfix/ios-list-line-refresh-0.1.61", mono:true}], "7小时前", "已取消", "↗")}
      ${row("○", "busy", "", "VCC Submission History Tests",
            [{text:"feature/ios-list-line-refresh", mono:true},{text:"3 次"}], "3分钟前", "运行中", "↗")}
    </div>
  </div>

  <div class="gh2-quick">
    <button class="gh2-quick-btn">新建 PR</button>
    <button class="gh2-quick-btn">新建 Issue</button>
    <button class="gh2-quick-btn">全部 PR</button>
    <button class="gh2-quick-btn">全部 Issues</button>
  </div>
</div>`;

for (const [name, dark] of [["panel-dark", true], ["panel-light", false]]) {
  const html = `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><style>
body{margin:0;padding:14px;background:${dark ? "#0f1115" : "#f3f4f6"};font-family:-apple-system,"PingFang SC",sans-serif;width:392px}
${GITHUB_PANEL_CSS}
</style></head><body${dark ? ' data-ds-dark-theme="true"' : ""}>${body}</body></html>`;
  fs.writeFileSync(path.join(here, `${name}.html`), html);
}
console.log("预览已生成（Tailwind 版）");
