import { GITHUB_PANEL_CSS } from "../../lib/ui/styles.js";
import fs from "node:fs";

const line = "1px solid rgba(127,127,127,.25)";
const dim = "color:#adbac7";
const text = "color:#f0f6fc";

const html = `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><style>
body{margin:0;background:#1c1c1f;font-family:-apple-system,"PingFang SC",sans-serif;padding:20px}
${GITHUB_PANEL_CSS}
</style></head><body data-ds-dark-theme="true">
<div class="gh2-theme" style="width:1040px;max-height:760px;display:flex;flex-direction:column;background:#0f1115;color:#f0f6fc;border:${line};border-radius:14px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.45)">
  <div style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:${line}">
    <span style="display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;background:rgba(130,80,223,.18);color:#a371f7;font-size:12px;font-weight:600">◆ 已合并</span>
    <span style="font-size:12px;${dim}">hotfix/ios-list-line-refresh-0.1.61 → main · #3851</span>
    <span style="flex:1"></span>
    <button class="gh2-icon-btn">↗</button>
    <button class="gh2-icon-btn">✕</button>
  </div>
  <div style="display:flex;flex:1;min-height:0">
    <div style="flex:1;min-width:0;overflow:auto">
      <div style="padding:16px 20px 4px;font-size:20px;font-weight:600;line-height:1.35;${text}">feat(face): 完成采集动作与 RGB 挑战链路</div>
      <div style="display:flex;align-items:center;gap:8px;padding:6px 20px 14px;font-size:12px;${dim}">
        <span style="width:20px;height:20px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;background:rgba(127,127,127,.2);font-size:11px;font-weight:600">Z</span>
        <span style="color:#f0f6fc;font-weight:500">zengxiaolou</span>
        <span>提交于 2026-10-20</span>
        <span style="padding:1px 7px;border-radius:999px;background:rgba(127,127,127,.16)">APPROVED</span>
      </div>
      <div style="padding:0 20px 8px;font-size:13px;line-height:1.7;${text}">
        <h4 style="margin:14px 0 8px;font-size:16px;font-weight:600">变更</h4>
        <p style="margin:0 0 10px">在 Dev 已合入 <code style="font-family:ui-monospace,monospace;font-size:.92em;padding:1px 4px;border-radius:4px;background:rgba(127,127,127,.16)">face-match worker v2</code> 运行时契约后，补齐 account-rpc 与 open-api 的服务端 v2 Challenge 链路：</p>
        <ul style="margin:0 0 12px;padding-left:22px;line-height:1.7">
          <li>服务端签发随机 2/3 个动作阶段，至少包含眨眼和转头；</li>
          <li>通过 Kitex RPC 与 Open API 保留 kind、action 与 RGB 阶段；</li>
          <li>上传前严格校验 v2 阶段顺序、动作集合和时长。</li>
        </ul>
        <h4 style="margin:14px 0 8px;font-size:16px;font-weight:600">阶段表</h4>
        <div style="overflow-x:auto;margin:0 0 12px"><table style="border-collapse:collapse;width:100%;font-size:12px">
          <thead><tr><th style="text-align:left;padding:5px 8px;border-bottom:1px solid rgba(127,127,127,.3);font-weight:600">阶段</th><th style="text-align:left;padding:5px 8px;border-bottom:1px solid rgba(127,127,127,.3);font-weight:600">动作</th><th style="text-align:left;padding:5px 8px;border-bottom:1px solid rgba(127,127,127,.3);font-weight:600">时长</th></tr></thead>
          <tbody>
            <tr><td style="padding:5px 8px;border-bottom:1px solid rgba(127,127,127,.14)">1</td><td style="padding:5px 8px;border-bottom:1px solid rgba(127,127,127,.14)">眨眼</td><td style="padding:5px 8px;border-bottom:1px solid rgba(127,127,127,.14)">800ms</td></tr>
            <tr><td style="padding:5px 8px;border-bottom:1px solid rgba(127,127,127,.14)">2</td><td style="padding:5px 8px;border-bottom:1px solid rgba(127,127,127,.14)">转头</td><td style="padding:5px 8px;border-bottom:1px solid rgba(127,127,127,.14)">1200ms</td></tr>
          </tbody>
        </table></div>
        <h4 style="margin:14px 0 8px;font-size:16px;font-weight:600">验证</h4>
        <pre style="margin:0 0 12px;padding:10px 12px;border-radius:8px;background:rgba(127,127,127,.12);font-family:ui-monospace,monospace;font-size:12px;line-height:1.5">go test ./app/accountrpc ./app/openapi ./biz/facematch</pre>
      </div>
      <div style="padding:8px 20px 4px"><button class="gh2-quick-btn">查看 14 个文件的改动</button></div>
      <div style="padding:14px 20px 20px;border-top:${line};margin-top:10px">
        <div style="font-size:13px;font-weight:600;margin-bottom:8px;${text}">Activity</div>
        <div style="display:flex;flex-direction:column;gap:6px;font-size:12px;${dim}">
          <div>◦ 6 个提交</div>
          <div>◦ zengxiaolou 创建于 2026-10-20</div>
          <div style="display:flex;gap:6px"><span>✓</span><span style="color:#f0f6fc">jia011zlzh-hub</span><span>批准</span><span style="opacity:.7">2026-10-20</span></div>
          <div style="display:flex;gap:6px"><span>✕</span><span style="color:#f0f6fc">wen-review</span><span>请求修改</span><span style="opacity:.7">2026-10-20</span></div>
        </div>
      </div>
    </div>
    <div style="width:236px;flex-shrink:0;border-left:${line};padding:14px 16px;display:flex;flex-direction:column;gap:16px">
      <div>
        <div style="font-size:12px;font-weight:600;margin-bottom:6px;${text}">Changes</div>
        <div style="font-size:12px;display:flex;gap:8px;${dim}"><span>14 个文件</span><span style="color:#2ea043">+515</span><span style="color:#f85149">-72</span></div>
      </div>
      <div>
        <div style="font-size:12px;font-weight:600;margin-bottom:6px;${text}">Comments</div>
        <div style="font-size:12px;${dim}">5 条评论</div>
      </div>
      <div>
        <div style="font-size:12px;font-weight:600;margin-bottom:6px;${text}">Reviewers</div>
        <div style="display:flex;flex-direction:column;gap:4px;font-size:12px">
          <div style="display:flex;gap:6px"><span style="color:#2ea043">✓</span><span>jia011zlzh-hub</span></div>
          <div style="display:flex;gap:6px"><span style="color:#f85149">✕</span><span>wen-review</span></div>
        </div>
      </div>
      <div>
        <div style="font-size:12px;font-weight:600;margin-bottom:6px;${text}">Checks</div>
        <div style="font-size:12px;${dim}">No checks reported</div>
      </div>
      <div style="margin-top:auto;border-top:${line};padding-top:12px;display:flex;flex-direction:column;gap:8px">
        <textarea placeholder="评审说明（请求修改时必填）" style="width:100%;min-height:60px;font-size:12px;padding:7px 9px;border-radius:8px;border:${line};background:transparent;color:#adbac7;outline:none;resize:vertical"></textarea>
        <button class="gh2-quick-btn" style="text-align:center">✓ 批准</button>
        <button class="gh2-quick-btn" style="text-align:center">✕ 请求修改</button>
        <button class="gh2-quick-btn" style="text-align:center">💬 仅评论</button>
      </div>
    </div>
  </div>
</div>
</body></html>`;
import path from "node:path";
import { fileURLToPath } from "node:url";
const here = path.dirname(fileURLToPath(import.meta.url));
fs.writeFileSync(path.join(here, "modal-dark.html"), html);
console.log("modal 预览已生成");
