window.__ModuleLoader__.load({
    id: "dsh-github-flow",
    factory: (require) => {
        var module = { exports: {} };
        var exports = module.exports;
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
        var React = require("react");

// ---- [Bundled: tw.generated.js] ----
/**
 * 由 scripts/build-css.mjs 生成，请勿手改。
 * 源文件：src/ui/tw.src.css（Tailwind + @apply）
 */
const TW_CSS = `
*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.\\!container{width:100%!important}.container{width:100%}@media (min-width:640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media (min-width:768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media (min-width:1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media (min-width:1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media (min-width:1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.gh2-panel,.gh2-theme{--gh-c-fg:var(--dsw-alias-label-primary,#1f2328);--gh-c-fg2:var(--dsw-alias-label-secondary,#57606a);--gh-c-fg3:var(--dsw-alias-label-tertiary,#6e7781);--gh-c-line:var(--dsw-alias-border-l2,#d8dee4);--gh-c-line-strong:var(--dsw-alias-border-l3,#c8d1d9);--gh-c-accent:var(--dsw-alias-link,#0969da);--gh-c-ok:var(--dsw-alias-state-success-primary,#1a7f37);--gh-c-bad:var(--dsw-alias-state-error-primary,#cf222e);--gh-c-warn:var(--dsw-alias-state-attention-primary,#9a6700);--gh-c-busy:var(--dsw-alias-state-business-primary,#0969da)}[data-ds-dark-theme] .gh2-panel,[data-ds-dark-theme] .gh2-theme{--gh-c-fg:var(--dsw-alias-label-primary,#f0f6fc);--gh-c-fg2:var(--dsw-alias-label-secondary,#adbac7);--gh-c-fg3:var(--dsw-alias-label-tertiary,#8b949e);--gh-c-line:var(--dsw-alias-border-l2,hsla(0,0%,100%,.12));--gh-c-line-strong:var(--dsw-alias-border-l3,hsla(0,0%,100%,.18));--gh-c-accent:var(--dsw-alias-link,#58a6ff);--gh-c-ok:var(--dsw-alias-state-success-primary,#3fb950);--gh-c-bad:var(--dsw-alias-state-error-primary,#f85149);--gh-c-warn:var(--dsw-alias-state-attention-primary,#d29922);--gh-c-busy:var(--dsw-alias-state-business-primary,#58a6ff)}.gh2-panel{gap:.75rem;padding:.75rem .75rem 1.5rem}.gh2-card,.gh2-panel{display:flex;flex-direction:column}.gh2-card{position:relative;gap:.5rem;border-radius:12px;border-width:1px;border-color:var(--gh-c-line);padding:.875rem;background:linear-gradient(180deg,hsla(0,0%,100%,.72),hsla(0,0%,100%,.36));box-shadow:0 1px 2px rgba(0,0,0,.04)}[data-ds-dark-theme] .gh2-card{border-color:hsla(0,0%,100%,.1);background:linear-gradient(180deg,hsla(0,0%,100%,.055),hsla(0,0%,100%,.018));box-shadow:none}.gh2-card-top{min-width:0;gap:.5rem}.gh2-card-top,.gh2-repo-mark{display:flex;align-items:center}.gh2-repo-mark{height:1.5rem;width:1.5rem;flex-shrink:0;justify-content:center;border-radius:6px;border-width:1px;border-color:var(--gh-c-line);color:var(--gh-c-fg2);background:rgba(0,0,0,.03)}[data-ds-dark-theme] .gh2-repo-mark{border-color:hsla(0,0%,100%,.12);background:hsla(0,0%,100%,.06)}.gh2-slug{min-width:0;flex:1 1 0%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:16px;line-height:22px;font-weight:600;color:var(--gh-c-fg);text-decoration-line:none}.gh2-slug:hover{color:var(--gh-c-accent);text-decoration-line:underline}.gh2-slug--error{font-size:13px;line-height:18px;font-weight:500;color:var(--gh-c-bad)}.gh2-card-meta{display:flex;flex-wrap:wrap;-moz-column-gap:.5rem;column-gap:.5rem;row-gap:6px;padding-left:2rem;font-size:12px;line-height:16px;color:var(--gh-c-fg2)}.gh2-branch,.gh2-card-meta{min-width:0;align-items:center}.gh2-branch{display:inline-flex;max-width:100%;gap:.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:6px;padding:.125rem 6px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:11px;line-height:1rem;background:rgba(9,105,218,.08);color:var(--dsw-alias-link,#0969da)}[data-ds-dark-theme] .gh2-branch{background:rgba(88,166,255,.14);color:#79b8ff}.gh2-sync{display:inline-flex;align-items:center;gap:.25rem;border-radius:6px;padding:.125rem 6px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:11px;line-height:1rem;color:var(--gh-c-fg2);background:rgba(0,0,0,.04)}[data-ds-dark-theme] .gh2-sync{background:hsla(0,0%,100%,.06)}.gh2-icon-btn{display:inline-flex;height:1.5rem;width:1.5rem;flex-shrink:0;cursor:pointer;align-items:center;justify-content:center;border-radius:6px;border-width:0;background-color:transparent;padding:0;font-size:13px;line-height:1;color:var(--gh-c-fg2);transition:background-color .12s ease,color .12s ease}.gh2-icon-btn:hover{color:var(--gh-c-fg);background:rgba(0,0,0,.06)}[data-ds-dark-theme] .gh2-icon-btn:hover{background:hsla(0,0%,100%,.1)}.gh2-segments{display:flex;width:100%;align-items:center;gap:.125rem;border-radius:10px;border-width:1px;border-color:var(--gh-c-line);padding:.125rem;background:rgba(0,0,0,.03)}[data-ds-dark-theme] .gh2-segments{border-color:hsla(0,0%,100%,.09);background:hsla(0,0%,100%,.04)}.gh2-segment{display:flex;min-width:0;flex:1 1 0%;cursor:pointer;align-items:center;justify-content:center;gap:.25rem;border-radius:7px;border-width:0;background-color:transparent;padding:6px .25rem;font-size:12px;line-height:16px;font-weight:500;color:var(--gh-c-fg2);transition:background-color .12s ease,color .12s ease,box-shadow .12s ease}.gh2-segment--active,.gh2-segment:hover{color:var(--gh-c-fg)}.gh2-segment--active{background:var(--dsw-alias-bg-layer-1,#fff);box-shadow:0 1px 2px rgba(0,0,0,.08),0 0 0 1px rgba(0,0,0,.04)}[data-ds-dark-theme] .gh2-segment--active{background:hsla(0,0%,100%,.14);box-shadow:0 0 0 1px hsla(0,0%,100%,.08)}.gh2-count{flex-shrink:0;border-radius:4px;padding:1px .25rem;font-size:11px;font-weight:600;line-height:15px;color:var(--gh-c-fg2);background:rgba(0,0,0,.06);font-variant-numeric:tabular-nums}[data-ds-dark-theme] .gh2-count{background:hsla(0,0%,100%,.12)}.gh2-list{display:flex;flex-direction:column;gap:.25rem}.gh2-row{display:grid;cursor:default;align-items:center;-moz-column-gap:.625rem;column-gap:.625rem;border-radius:8px;padding:.5rem;grid-template-columns:16px 1fr auto;border:1px solid transparent;transition:background-color .12s ease,border-color .12s ease}.gh2-row:hover{background:rgba(0,0,0,.035);border-color:rgba(0,0,0,.06)}[data-ds-dark-theme] .gh2-row:hover{background:hsla(0,0%,100%,.055);border-color:hsla(0,0%,100%,.07)}.gh2-dot{display:flex;height:1rem;width:1rem;align-items:center;justify-content:center;border-radius:9999px;font-size:10px;line-height:1}.gh2-dot--ok{color:var(--dsw-alias-state-success-primary,#1a7f37)}.gh2-dot--bad{color:var(--dsw-alias-state-error-primary,#cf222e)}.gh2-dot--warn{color:var(--dsw-alias-state-attention-primary,#9a6700)}.gh2-dot--busy{color:var(--dsw-alias-state-business-primary,#0969da)}.gh2-dot--idle{color:var(--dsw-alias-label-tertiary,#8c959f)}[data-ds-dark-theme] .gh2-dot--ok{color:#3fb950}[data-ds-dark-theme] .gh2-dot--bad{color:#f85149}[data-ds-dark-theme] .gh2-dot--warn{color:#d29922}[data-ds-dark-theme] .gh2-dot--busy{color:#58a6ff}[data-ds-dark-theme] .gh2-dot--idle{color:#8b949e}.gh2-prefix{flex-shrink:0;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:11px;line-height:1rem;color:var(--gh-c-fg2)}.gh2-row-main{flex-direction:column;gap:.125rem}.gh2-row-main,.gh2-row-title{display:flex;min-width:0}.gh2-row-title{align-items:baseline;gap:6px;font-size:13px;line-height:18px;font-weight:500;color:var(--gh-c-fg)}.gh2-row-title>a{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:inherit;text-decoration-line:none}.gh2-row-title>a:hover{color:var(--gh-c-accent);text-decoration-line:underline}.gh2-row-sub{display:flex;min-width:0;align-items:center;gap:6px;overflow:hidden;white-space:nowrap;font-size:12px;line-height:16px;color:var(--gh-c-fg2)}.gh2-row-sub>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis}.gh2-row-sub>span+span:before{content:"·";margin-right:6px;color:var(--gh-c-fg3)}.gh2-row-slot{display:flex;align-items:center;justify-content:flex-end;gap:.25rem;align-self:center;font-size:11px;line-height:14px;color:var(--gh-c-fg2);font-variant-numeric:tabular-nums}.gh2-row-slot-btn,.gh2-row:hover .gh2-row-slot-time{display:none}.gh2-chip,.gh2-row:hover .gh2-row-slot-btn{display:inline-flex}.gh2-chip{flex-shrink:0;align-items:center;gap:.25rem;border-radius:4px;padding:1px 6px;font-size:11px;font-weight:500;line-height:15px}.gh2-chip--ok{background:rgba(26,127,55,.12);color:var(--dsw-alias-state-success-primary,#1a7f37)}.gh2-chip--bad{background:rgba(207,34,46,.12);color:var(--dsw-alias-state-error-primary,#cf222e)}.gh2-chip--warn{background:rgba(154,103,0,.14);color:var(--dsw-alias-state-attention-primary,#9a6700)}.gh2-chip--busy{background:rgba(9,105,218,.1);color:var(--dsw-alias-state-business-primary,#0969da)}.gh2-chip--idle{background:rgba(0,0,0,.06);color:var(--dsw-alias-label-secondary,#57606a)}[data-ds-dark-theme] .gh2-chip--ok{background:rgba(63,185,80,.16);color:#56d364}[data-ds-dark-theme] .gh2-chip--bad{background:rgba(248,81,73,.16);color:#ff7b72}[data-ds-dark-theme] .gh2-chip--warn{background:rgba(210,153,34,.18);color:#e3b341}[data-ds-dark-theme] .gh2-chip--busy{background:rgba(88,166,255,.16);color:#79c0ff}[data-ds-dark-theme] .gh2-chip--idle{background:hsla(0,0%,100%,.1);color:#adbac7}.gh2-section-head{margin-bottom:.25rem;display:flex;align-items:center;gap:.5rem;padding-left:.125rem;padding-right:.125rem}.gh2-section-title{font-size:12px;line-height:16px;font-weight:600}.gh2-section-count,.gh2-section-title{color:var(--gh-c-fg2)}.gh2-section-count{border-radius:4px;padding:1px .25rem;font-size:10px;line-height:14px;background:rgba(0,0,0,.05)}[data-ds-dark-theme] .gh2-section-count{background:hsla(0,0%,100%,.1)}.gh2-empty{flex-direction:column;padding:1.75rem .5rem;text-align:center;font-size:12px;line-height:16px;color:var(--gh-c-fg2)}.gh2-empty,.gh2-quick{display:flex;align-items:center;gap:6px}.gh2-quick{margin-top:.25rem;flex-wrap:wrap;border-top-width:1px;border-color:var(--gh-c-line);padding-top:.75rem}.gh2-quick-btn{cursor:pointer;border-radius:6px;border-width:1px;border-color:var(--gh-c-line);background-color:transparent;padding:.25rem .5rem;font-size:11px;line-height:14px;color:var(--gh-c-fg2);transition:background-color .12s ease,color .12s ease,border-color .12s ease}.gh2-quick-btn:hover{border-color:var(--gh-c-accent);color:var(--gh-c-accent);background:rgba(9,105,218,.06)}[data-ds-dark-theme] .gh2-quick-btn{border-color:hsla(0,0%,100%,.12)}[data-ds-dark-theme] .gh2-quick-btn:hover{background:rgba(88,166,255,.12);color:#79c0ff}.gh2-details{margin-top:.125rem;padding-left:2rem}.gh2-details>summary{cursor:pointer;list-style-type:none;font-size:11px;line-height:14px;color:var(--gh-c-fg2)}.gh2-details>summary::-webkit-details-marker{display:none}.gh2-details>summary:before{content:"▸ "}.gh2-details[open]>summary:before{content:"▾ "}.gh2-details-body{margin-top:.25rem;display:flex;flex-direction:column;gap:.125rem;word-break:break-all;font-size:11px;line-height:14px;color:var(--gh-c-fg2)}.visible{visibility:visible}.collapse{visibility:collapse}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.mb-1{margin-bottom:.25rem}.mr-1{margin-right:.25rem}.mr-1\\.5{margin-right:6px}.mt-0{margin-top:0}.mt-0\\.5{margin-top:.125rem}.mt-1{margin-top:.25rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.h-4{height:1rem}.h-6{height:1.5rem}.w-4{width:1rem}.w-6{width:1.5rem}.w-full{width:100%}.min-w-0{min-width:0}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.resize{resize:both}.list-none{list-style-type:none}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.gap-0{gap:0}.gap-0\\.5{gap:.125rem}.gap-1{gap:.25rem}.gap-1\\.5{gap:6px}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-x-2{-moz-column-gap:.5rem;column-gap:.5rem}.gap-x-2\\.5{-moz-column-gap:.625rem;column-gap:.625rem}.gap-y-1{row-gap:.25rem}.gap-y-1\\.5{row-gap:6px}.self-center{align-self:center}.overflow-hidden{overflow:hidden}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.break-all{word-break:break-all}.rounded-\\[4px\\]{border-radius:4px}.rounded-\\[7px\\]{border-radius:7px}.rounded-block{border-radius:10px}.rounded-chip{border-radius:6px}.rounded-full{border-radius:9999px}.rounded-panel{border-radius:12px}.rounded-row{border-radius:8px}.border{border-width:1px}.border-0{border-width:0}.border-t{border-top-width:1px}.border-accent{border-color:var(--gh-c-accent)}.border-line{border-color:var(--gh-c-line)}.bg-transparent{background-color:transparent}.p-0{padding:0}.p-3{padding:.75rem}.px-0{padding-left:0;padding-right:0}.px-1{padding-left:.25rem;padding-right:.25rem}.px-1\\.5{padding-left:6px;padding-right:6px}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-0{padding-top:0;padding-bottom:0}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:6px;padding-bottom:6px}.py-7{padding-top:1.75rem;padding-bottom:1.75rem}.py-px{padding-top:1px;padding-bottom:1px}.pb-6{padding-bottom:1.5rem}.pl-8{padding-left:2rem}.text-center{text-align:center}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[13px\\]{font-size:13px}.text-meta{font-size:11px;line-height:14px}.text-row{font-size:13px;line-height:18px}.text-slug{font-size:16px;line-height:22px;font-weight:600}.text-sub{font-size:12px;line-height:16px}.font-medium{font-weight:500}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.italic{font-style:italic}.leading-4{line-height:1rem}.leading-\\[14px\\]{line-height:14px}.leading-\\[15px\\]{line-height:15px}.leading-none{line-height:1}.text-accent{color:var(--gh-c-accent)}.text-fg-primary{color:var(--gh-c-fg)}.text-inherit{color:inherit}.underline{text-decoration-line:underline}.outline{outline-style:solid}.blur{--tw-blur:blur(8px)}.blur,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}
`;

// ---- [Bundled: styles.js] ----
/**
 * DSH GitHub Flow - 主题自适应样式系统 (Light / Dark 动态联动)
 * 遵循 DSH 原生 DSW (DeepSeek Web) 设计语言规范
 */
const GITHUB_PANEL_CSS = `
/* 1. 侧边栏图标与外壳 */
.dsh-github-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: var(--dsw-alias-label-secondary, #656d76);
  transition: color 0.15s ease;
}
.dsh-github-icon:hover {
  color: var(--dsw-alias-label-primary, #1f2328);
}
.dsh-github-icon-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 7px;
  background: transparent;
  color: inherit;
  border: 1px solid transparent;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.dsh-github-icon-inner.active {
  background: var(--dsw-alias-bg-module-platform, rgba(9, 105, 218, 0.08));
  color: var(--dsw-alias-link, #0969da);
  border-color: var(--dsw-alias-border-l2, rgba(9, 105, 218, 0.2));
}

body[data-ds-dark-theme] .dsh-github-icon {
  color: var(--dsw-alias-label-secondary, #9ca3af);
}
body[data-ds-dark-theme] .dsh-github-icon:hover {
  color: var(--dsw-alias-label-primary, #ffffff);
}
body[data-ds-dark-theme] .dsh-github-icon-inner.active {
  background: linear-gradient(135deg, rgba(46, 160, 67, 0.3) 0%, rgba(31, 111, 235, 0.45) 100%);
  color: #ffffff;
  box-shadow: 0 0 12px rgba(31, 111, 235, 0.4);
  border-color: rgba(88, 166, 255, 0.45);
}

/* 2. Octocat 科技勋章 Badge */
.dsh-octocat-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1f6feb 0%, #0969da 60%, #8957e5 100%);
  box-shadow: 0 2px 6px rgba(9, 105, 218, 0.25);
  flex-shrink: 0;
}
body[data-ds-dark-theme] .dsh-octocat-badge {
  background: linear-gradient(135deg, #2ea043 0%, #1f6feb 60%, #8957e5 100%);
  box-shadow: 0 2px 8px rgba(31, 111, 235, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.25);
}

/* 3. 容器视图（主面板与右侧抽屉栏） */
.dsh-github-panel {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 24px 32px;
  box-sizing: border-box;
  background: var(--dsw-alias-bg-base, #ffffff);
  color: var(--dsw-alias-label-primary, #1f2328);
  font-family: var(--dsw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
}

.dsh-github-rightbar-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 16px 18px;
  box-sizing: border-box;
  background: var(--dsw-alias-bg-base, #ffffff);
  color: var(--dsw-alias-label-primary, #1f2328);
  font-family: var(--dsw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
}

body[data-ds-dark-theme] .dsh-github-panel,
body[data-ds-dark-theme] .dsh-github-rightbar-container {
  background: var(--dsw-alias-bg-base, #151517);
  color: var(--dsw-alias-label-primary, #ececec);
}

/* 4. 头部区域 */
.dsh-github-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--dsw-alias-border-l2, #e5e7eb);
}
body[data-ds-dark-theme] .dsh-github-header {
  border-bottom-color: var(--dsw-alias-border-l1, #2c2c2e);
}
.dsh-github-title {
  display: flex;
  align-items: center;
  gap: 10px;
}
.dsh-github-title h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary, #1f2328);
}
body[data-ds-dark-theme] .dsh-github-title h2 {
  color: var(--dsw-alias-label-primary, #f0f6fc);
}

/* 5. 刷新按钮 */
.dsh-github-refresh-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  border: 1px solid var(--dsw-alias-border-l2, #e1e4e8);
  background: var(--dsw-alias-bg-module-platform, #f6f8fa);
  color: var(--dsw-alias-label-primary, #1f2328);
  cursor: pointer;
  transition: all 0.15s ease;
}
.dsh-github-refresh-btn:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover, #ebeef2);
  border-color: var(--dsw-alias-border-l3, #d0d7de);
}
.dsh-github-refresh-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
body[data-ds-dark-theme] .dsh-github-refresh-btn {
  border-color: var(--dsw-alias-border-l1, #38383c);
  background: var(--dsw-alias-bg-layer-2, #242528);
  color: var(--dsw-alias-label-primary, #f0f6fc);
}
body[data-ds-dark-theme] .dsh-github-refresh-btn:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover, #2f3034);
  border-color: rgba(255, 255, 255, 0.25);
}

/* 6. 概览卡片与网格 */
.dsh-github-overview-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 14px;
  margin-bottom: 20px;
}
.dsh-github-card {
  padding: 14px 16px;
  border-radius: 8px;
  border: 1px solid var(--dsw-alias-border-l2, #e5e7eb);
  background: var(--dsw-alias-bg-layer-1, #fcfcfd);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  margin-bottom: 12px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
body[data-ds-dark-theme] .dsh-github-card {
  border-color: var(--dsw-alias-border-l1, #303034);
  background: var(--dsw-alias-bg-layer-2, #212124);
  box-shadow: none;
}
.dsh-github-card-title {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--dsw-alias-label-tertiary, #656d76);
  margin-bottom: 6px;
  font-weight: 500;
}
body[data-ds-dark-theme] .dsh-github-card-title {
  color: var(--dsw-alias-label-tertiary, #888);
}
.dsh-github-card-value {
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--dsw-alias-label-primary, #1f2328);
}
body[data-ds-dark-theme] .dsh-github-card-value {
  color: var(--dsw-alias-label-primary, #f0f6fc);
}
.dsh-github-card-desc {
  font-size: 12px;
  line-height: 1.55;
  color: var(--dsw-alias-label-secondary, #656d76);
  margin-top: 4px;
  line-height: 1.4;
}
body[data-ds-dark-theme] .dsh-github-card-desc {
  color: var(--dsw-alias-label-secondary, #bbb);
}
/*
 * 对比度：原来用 label-tertiary(#8c959f) 在浅色卡面上只有 2.96:1，低于 WCAG AA 的
 * 4.5:1（design_audit 实测）。层级不该靠「把字洗淡」实现——改成 secondary，
 * 弱化交给 11px 字号与小写信息密度。
 */
.dsh-github-card-subtext {
  font-size: 11px;
  color: var(--dsw-alias-label-secondary, #57606a);
  margin-top: 8px;
  line-height: 1.5;
}
body[data-ds-dark-theme] .dsh-github-card-subtext {
  color: var(--dsw-alias-label-secondary, #9ca3af);
}

/* 7. 徽章（Badges） */
.dsh-github-badge {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: 500;
  line-height: 16px;
}
.dsh-badge-green {
  background: rgba(46, 160, 67, 0.12);
  color: #1a7f37;
  border: 1px solid rgba(46, 160, 67, 0.2);
}
.dsh-badge-red {
  background: rgba(207, 34, 46, 0.12);
  color: #cf222e;
  border: 1px solid rgba(207, 34, 46, 0.2);
}
.dsh-badge-yellow {
  background: rgba(154, 103, 0, 0.12);
  color: #9a6700;
  border: 1px solid rgba(154, 103, 0, 0.2);
}
.dsh-badge-blue {
  background: rgba(9, 105, 218, 0.12);
  color: #0969da;
  border: 1px solid rgba(9, 105, 218, 0.2);
}
.dsh-badge-purple {
  background: rgba(137, 87, 229, 0.12);
  color: #8250df;
  border: 1px solid rgba(137, 87, 229, 0.2);
}
body[data-ds-dark-theme] .dsh-badge-green {
  background: rgba(46, 160, 67, 0.22);
  color: #3fb950;
  border-color: rgba(46, 160, 67, 0.3);
}
body[data-ds-dark-theme] .dsh-badge-red {
  background: rgba(248, 81, 73, 0.22);
  color: #f85149;
  border-color: rgba(248, 81, 73, 0.3);
}
body[data-ds-dark-theme] .dsh-badge-yellow {
  background: rgba(210, 153, 34, 0.22);
  color: #d29922;
  border-color: rgba(210, 153, 34, 0.3);
}
body[data-ds-dark-theme] .dsh-badge-blue {
  background: rgba(56, 139, 253, 0.22);
  color: #58a6ff;
  border-color: rgba(56, 139, 253, 0.3);
}
body[data-ds-dark-theme] .dsh-badge-purple {
  background: rgba(163, 113, 247, 0.22);
  color: #bc8cff;
  border-color: rgba(163, 113, 247, 0.3);
}

/* 插件身份徽标：标识界面由第三方插件 dsh-github-flow 提供（非 DSH/GitHub 官方） */
.dsh-github-plugin-badge {
  display: inline-flex;
  align-items: center;
  font-size: 10px;
  font-weight: 500;
  padding: 1px 7px;
  border-radius: 10px;
  line-height: 14px;
  vertical-align: middle;
  margin-left: 8px;
  text-decoration: none !important;
  background: rgba(125, 133, 144, 0.12);
  color: #656d76;
  border: 1px solid rgba(125, 133, 144, 0.25);
  cursor: pointer;
  transition: all 0.15s ease;
}
.dsh-github-plugin-badge:hover {
  background: rgba(125, 133, 144, 0.2);
  color: var(--dsw-alias-label-primary, #1f2328);
}
body[data-ds-dark-theme] .dsh-github-plugin-badge {
  background: rgba(139, 148, 158, 0.18);
  color: #8b949e;
  border-color: rgba(139, 148, 158, 0.3);
}
body[data-ds-dark-theme] .dsh-github-plugin-badge:hover {
  background: rgba(139, 148, 158, 0.28);
  color: #f0f6fc;
}

/* 7.5. 分类筛选药丸栏 */
.dsh-github-pills {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.dsh-github-pill-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 14px;
  font-size: 11px;
  font-weight: 500;
  border: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  background: var(--dsw-alias-bg-module-platform, #f6f8fa);
  color: var(--dsw-alias-label-secondary, #656d76);
  cursor: pointer;
  transition: all 0.15s ease;
}
.dsh-github-pill-btn:hover {
  color: var(--dsw-alias-label-primary, #1f2328);
  border-color: var(--dsw-alias-border-l3, #b0b8c1);
}
.dsh-github-pill-btn.active {
  background: var(--dsw-alias-bg-module-platform, rgba(9, 105, 218, 0.1));
  color: var(--dsw-alias-link, #0969da);
  border-color: var(--dsw-alias-link, #0969da);
  font-weight: 600;
}
body[data-ds-dark-theme] .dsh-github-pill-btn {
  background: var(--dsw-alias-bg-layer-2, #21262d);
  color: var(--dsw-alias-label-secondary, #8b949e);
  border-color: var(--dsw-alias-border-l1, #30363d);
}
body[data-ds-dark-theme] .dsh-github-pill-btn:hover {
  color: var(--dsw-alias-label-primary, #f0f6fc);
  border-color: #8b949e;
}
body[data-ds-dark-theme] .dsh-github-pill-btn.active {
  background: rgba(56, 139, 253, 0.18);
  color: #58a6ff;
  border-color: #58a6ff;
}

/* 8. 快捷操作网格 */
.dsh-github-quick-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 16px;
}
.dsh-github-action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid var(--dsw-alias-border-l2, #e1e4e8);
  background: var(--dsw-alias-bg-module-platform, #f6f8fa);
  color: var(--dsw-alias-label-primary, #1f2328);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}
.dsh-github-action-btn:hover {
  background: var(--dsw-alias-interactive-bg-hover, #ebeef2);
  border-color: var(--dsw-alias-link, #0969da);
  color: var(--dsw-alias-link, #0969da);
}
body[data-ds-dark-theme] .dsh-github-action-btn {
  border-color: var(--dsw-alias-border-l1, #444);
  background: var(--dsw-alias-bg-layer-2, #28282b);
  color: var(--dsw-alias-label-primary, #fff);
}
body[data-ds-dark-theme] .dsh-github-action-btn:hover {
  background: var(--dsw-alias-interactive-bg-hover, #343438);
  border-color: #58a6ff;
  color: #58a6ff;
}

/* 组合式快捷操作按钮 (AI 智能装填主操作 + 官方外链直达) */
.dsh-github-split-btn {
  display: flex;
  align-items: stretch;
  border-radius: 6px;
  border: 1px solid var(--dsw-alias-border-l2, #e1e4e8);
  background: var(--dsw-alias-bg-module-platform, #f6f8fa);
  overflow: hidden;
  transition: all 0.15s ease;
}
.dsh-github-split-btn:hover {
  border-color: var(--dsw-alias-link, #0969da);
}
body[data-ds-dark-theme] .dsh-github-split-btn {
  border-color: var(--dsw-alias-border-l1, #444);
  background: var(--dsw-alias-bg-layer-2, #28282b);
}
body[data-ds-dark-theme] .dsh-github-split-btn:hover {
  border-color: #58a6ff;
}
.dsh-github-split-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px 8px;
  border: 0;
  background: transparent;
  color: var(--dsw-alias-label-primary, #1f2328);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}
.dsh-github-split-main:hover {
  background: var(--dsw-alias-interactive-bg-hover, #ebeef2);
  color: var(--dsw-alias-link, #0969da);
}
body[data-ds-dark-theme] .dsh-github-split-main {
  color: var(--dsw-alias-label-primary, #fff);
}
body[data-ds-dark-theme] .dsh-github-split-main:hover {
  background: var(--dsw-alias-interactive-bg-hover, #343438);
  color: #58a6ff;
}
.dsh-github-split-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  border-left: 1px solid var(--dsw-alias-border-l2, #e1e4e8);
  background: transparent;
  color: var(--dsw-alias-label-tertiary, #656d76);
  font-size: 12px;
  font-weight: bold;
  text-decoration: none !important;
  cursor: pointer;
  transition: all 0.15s ease;
}
.dsh-github-split-link:hover {
  background: var(--dsw-alias-interactive-bg-hover, #ebeef2);
  color: var(--dsw-alias-link, #0969da);
}
body[data-ds-dark-theme] .dsh-github-split-link {
  border-left-color: var(--dsw-alias-border-l1, #444);
  color: var(--dsw-alias-label-secondary, #9ca3af);
}
body[data-ds-dark-theme] .dsh-github-split-link:hover {
  background: var(--dsw-alias-interactive-bg-hover, #343438);
  color: #58a6ff;
}

/* 9. 模块分区与列表 */
.dsh-github-section {
  margin-bottom: 20px;
}
.dsh-github-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.dsh-github-section-header h3 {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--dsw-alias-label-secondary, #656d76);
}
body[data-ds-dark-theme] .dsh-github-section-header h3 {
  color: var(--dsw-alias-label-secondary, #ccc);
}
.dsh-github-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.dsh-github-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid var(--dsw-alias-border-l2, #e5e7eb);
  background: var(--dsw-alias-bg-layer-1, #fcfcfd);
  transition: border-color 0.15s ease, background 0.15s ease;
}
.dsh-github-item:hover {
  border-color: var(--dsw-alias-border-l3, #d0d7de);
  background: var(--dsw-alias-interactive-bg-hover, #f6f8fa);
}
body[data-ds-dark-theme] .dsh-github-item {
  border-color: var(--dsw-alias-border-l1, #333336);
  background: var(--dsw-alias-bg-layer-2, #252528);
}
body[data-ds-dark-theme] .dsh-github-item:hover {
  border-color: var(--dsw-alias-border-l2, #555);
  background: var(--dsw-alias-interactive-bg-hover, #2c2c30);
}
.dsh-github-item-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--dsw-alias-label-primary, #1f2328);
  text-decoration: none;
  transition: color 0.15s ease;
}
.dsh-github-item-title:hover {
  color: var(--dsw-alias-link, #0969da);
  text-decoration: underline;
}
body[data-ds-dark-theme] .dsh-github-item-title {
  color: var(--dsw-alias-label-primary, #f0f6fc);
}
body[data-ds-dark-theme] .dsh-github-item-title:hover {
  color: #58a6ff;
}
.dsh-github-item-desc {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, #656d76);
  line-height: 1.4;
}
body[data-ds-dark-theme] .dsh-github-item-desc {
  color: var(--dsw-alias-label-secondary, #bbb);
}
.dsh-github-item-meta {
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary, #656d76);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

/*
 * 长文本不再顶破容器：分支名、事件名、时间都可能很长，
 * 在宽度有限的右侧栏里必须靠 ellipsis 收口（title 提供完整值）。
 */
.dsh-github-item-meta > span {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/*
 * 第一项通常是分支名，最容易长到把后面的状态徽章挤到下一行。
 * 给它一个固定上限（而非 100%），让徽章尽量留在同一行——纵向空间在侧栏里最贵。
 */
.dsh-github-item-meta > span:first-child {
  max-width: 62%;
  flex: 0 1 auto;
}

/* 卡头右侧的图标按钮（在浏览器打开） */
.dsh-github-icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border-radius: 6px;
  border: 1px solid transparent;
  background: transparent;
  color: inherit;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.dsh-github-icon-btn:hover {
  background: var(--dsw-alias-interactive-bg-hover, #ebeef2);
  border-color: var(--dsw-alias-border-l2, #e1e4e8);
}
body[data-ds-dark-theme] .dsh-github-icon-btn:hover {
  background: #343438;
  border-color: #444;
}
body[data-ds-dark-theme] .dsh-github-item-meta {
  color: var(--dsw-alias-label-secondary, #8c8c8c);
}

/* 10. 小按钮样式（在 GitHub 打开等） */
.dsh-github-btn-sm {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  background: var(--dsw-alias-bg-module-platform, #f6f8fa);
  color: var(--dsw-alias-label-primary, #1f2328);
  cursor: pointer;
  text-decoration: none !important;
  transition: all 0.15s ease;
}
.dsh-github-btn-sm:hover {
  background: var(--dsw-alias-interactive-bg-hover, #ebeef2);
  border-color: var(--dsw-alias-border-l3, #b0b8c1);
  color: var(--dsw-alias-link, #0969da);
}
body[data-ds-dark-theme] .dsh-github-btn-sm {
  border-color: var(--dsw-alias-border-l1, #444);
  background: var(--dsw-alias-bg-layer-2, #26272b);
  color: var(--dsw-alias-label-primary, #f0f6fc);
}
body[data-ds-dark-theme] .dsh-github-btn-sm:hover {
  background: var(--dsw-alias-interactive-bg-hover, #33343a);
  border-color: rgba(255, 255, 255, 0.25);
  color: #58a6ff;
}

/* 11. 空状态 */
.dsh-github-empty {
  padding: 24px;
  text-align: center;
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary, #656d76);
  border: 1px dashed var(--dsw-alias-border-l2, #d0d7de);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.01);
}
body[data-ds-dark-theme] .dsh-github-empty {
  color: var(--dsw-alias-label-tertiary, #888);
  border-color: var(--dsw-alias-border-l1, #38383c);
  background: rgba(255, 255, 255, 0.01);
}

/* 12. Tabs 导航栏 */
.dsh-github-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 18px;
  border-bottom: 1px solid var(--dsw-alias-border-l2, #e5e7eb);
  padding-bottom: 8px;
}
body[data-ds-dark-theme] .dsh-github-tabs {
  border-bottom-color: var(--dsw-alias-border-l1, #303034);
}
.dsh-github-tab-btn {
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  border: 0;
  background: transparent;
  color: var(--dsw-alias-label-secondary, #656d76);
  cursor: pointer;
  transition: all 0.15s ease;
}
.dsh-github-tab-btn:hover {
  color: var(--dsw-alias-label-primary, #1f2328);
  background: var(--dsw-alias-interactive-bg-hover, rgba(0, 0, 0, 0.05));
}
.dsh-github-tab-btn.active {
  color: var(--dsw-alias-link, #0969da);
  background: rgba(9, 105, 218, 0.1);
  font-weight: 600;
}
body[data-ds-dark-theme] .dsh-github-tab-btn {
  color: var(--dsw-alias-label-secondary, #8c8c8c);
}
body[data-ds-dark-theme] .dsh-github-tab-btn:hover {
  color: var(--dsw-alias-label-primary, #fff);
  background: var(--dsw-alias-interactive-bg-hover, rgba(255, 255, 255, 0.06));
}
body[data-ds-dark-theme] .dsh-github-tab-btn.active {
  color: #58a6ff;
  background: rgba(88, 166, 255, 0.15);
}

/* 13. 搜索输入框 */
.dsh-github-search-input {
  width: 100%;
  max-width: 320px;
  padding: 6px 12px;
  font-size: 12px;
  border-radius: 6px;
  border: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  background: var(--dsw-alias-bg-base, #ffffff);
  color: var(--dsw-alias-label-primary, #1f2328);
  outline: none;
  margin-bottom: 14px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.dsh-github-search-input:focus {
  border-color: var(--dsw-alias-link, #0969da);
  box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.15);
}
body[data-ds-dark-theme] .dsh-github-search-input {
  border-color: var(--dsw-alias-border-l1, #444);
  background: var(--dsw-alias-bg-layer-2, #212124);
  color: var(--dsw-alias-label-primary, #f0f6fc);
}
body[data-ds-dark-theme] .dsh-github-search-input:focus {
  border-color: #58a6ff;
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.2);
}

/* 14. 工作区矩阵条目专属类 */
.dsh-github-workspace-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.dsh-github-ws-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary, #1f2328);
}
body[data-ds-dark-theme] .dsh-github-ws-title {
  color: var(--dsw-alias-label-primary, #f0f6fc);
}
.dsh-github-ws-path {
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary, #656d76);
  font-family: var(--ds-font-family-code, monospace);
}
body[data-ds-dark-theme] .dsh-github-ws-path {
  color: var(--dsw-alias-label-tertiary, #888);
}
.dsh-github-ws-repo-link {
  color: var(--dsw-alias-link, #0969da);
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;
}
body[data-ds-dark-theme] .dsh-github-ws-repo-link {
  color: #58a6ff;
}
.dsh-github-repo-link {
  color: var(--dsw-alias-link, #0969da);
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.01em;
}
.dsh-github-repo-link:hover {
  text-decoration: underline;
}
body[data-ds-dark-theme] .dsh-github-repo-link {
  color: #58a6ff;
}

/* 聚合根：手动切换绑定的仓库（候选 > 1 时才出现） */
.dsh-github-repo-select {
  font-size: 12px;
  font-weight: 600;
  line-height: 1.4;
  max-width: 190px;
  min-height: 26px;
  padding: 3px 8px;
  border-radius: 6px;
  cursor: pointer;
  color: var(--dsw-alias-label-primary, #1f2328);
  background: var(--dsw-alias-bg-secondary, #f6f8fa);
  border: 1px solid var(--dsw-alias-border-tertiary, #d0d7de);
}
.dsh-github-repo-select:hover {
  border-color: var(--dsw-alias-link, #0969da);
}
.dsh-github-repo-select:focus {
  outline: 2px solid var(--dsw-alias-link, #0969da);
  outline-offset: 1px;
}
body[data-ds-dark-theme] .dsh-github-repo-select {
  color: var(--dsw-alias-label-primary, #f0f6fc);
  background: #21262d;
  border-color: #30363d;
}
.dsh-github-subheading {
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: var(--dsw-alias-label-primary, #1f2328);
}
body[data-ds-dark-theme] .dsh-github-subheading {
  color: var(--dsw-alias-label-primary, #f0f6fc);
}

/* 15. 就绪引导横幅 (Setup Guide Banner) */
.dsh-github-guide-card {
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  border: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  background: var(--dsw-alias-bg-layer-1, #f6f8fa);
}
.dsh-github-guide-card.warning {
  border-color: rgba(210, 153, 34, 0.4);
  background: rgba(210, 153, 34, 0.08);
}
.dsh-github-guide-card.danger {
  border-color: rgba(248, 81, 73, 0.4);
  background: rgba(248, 81, 73, 0.08);
}
.dsh-github-guide-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--dsw-alias-label-primary, #1f2328);
}
body[data-ds-dark-theme] .dsh-github-guide-header {
  color: var(--dsw-alias-label-primary, #f0f6fc);
}
.dsh-github-guide-desc {
  font-size: 13px;
  color: var(--dsw-alias-label-secondary, #656d76);
  line-height: 1.5;
  margin-bottom: 12px;
}
body[data-ds-dark-theme] .dsh-github-guide-desc {
  color: var(--dsw-alias-label-secondary, #8c8c8c);
}
.dsh-github-cmd-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--dsw-alias-bg-base, #ffffff);
  border: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  border-radius: 6px;
  padding: 8px 12px;
  font-family: var(--ds-font-family-code, monospace);
  font-size: 13px;
  color: var(--dsw-alias-label-primary, #1f2328);
  margin-bottom: 12px;
}
body[data-ds-dark-theme] .dsh-github-cmd-box {
  background: var(--dsw-alias-bg-layer-2, #161b22);
  border-color: var(--dsw-alias-border-l1, #30363d);
  color: var(--dsw-alias-label-primary, #f0f6fc);
}
.dsh-github-copy-btn {
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  background: var(--dsw-alias-bg-layer-1, #f6f8fa);
  color: var(--dsw-alias-label-primary, #1f2328);
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease;
}
body[data-ds-dark-theme] .dsh-github-copy-btn {
  background: var(--dsw-alias-bg-layer-2, #21262d);
  border-color: var(--dsw-alias-border-l1, #30363d);
  color: var(--dsw-alias-label-primary, #c9d1d9);
}
.dsh-github-copy-btn:hover {
  background: var(--dsw-alias-interactive-bg-hover, #ebeef1);
}
body[data-ds-dark-theme] .dsh-github-copy-btn:hover {
  background: #30363d;
}
.dsh-github-copy-btn.copied {
  color: #2da44e !important;
  border-color: #2da44e !important;
  background: rgba(45, 164, 78, 0.15) !important;
}
.dsh-github-steps-list {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, #656d76);
  line-height: 1.6;
  margin: 0 0 12px 18px;
  padding: 0;
}
body[data-ds-dark-theme] .dsh-github-steps-list {
  color: var(--dsw-alias-label-secondary, #8c8c8c);
}
.dsh-github-guide-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.dsh-github-guide-tip {
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary, #8c8c8c);
  margin-top: 10px;
  line-height: 1.4;
}

/* 16. 设置弹窗 (Settings Modal)：左侧分区导航 + 右侧内容区 */
.dsh-github-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  backdrop-filter: blur(2px);
}
.dsh-github-modal-dialog {
  width: 92%;
  max-width: 640px;
  max-height: 86vh;
  display: flex;
  flex-direction: column;
  background: var(--dsw-alias-bg-base, #ffffff);
  border: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  border-radius: 12px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.18);
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  color: var(--dsw-alias-label-primary, #1f2328);
  font-family: var(--dsw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
}
body[data-ds-dark-theme] .dsh-github-modal-dialog {
  background: var(--dsw-alias-bg-layer-2, #1e1e22);
  border-color: var(--dsw-alias-border-l1, #30363d);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
}
.dsh-github-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 22px 14px;
  border-bottom: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  flex-shrink: 0;
}
body[data-ds-dark-theme] .dsh-github-modal-header {
  border-bottom-color: var(--dsw-alias-border-l1, #30363d);
}
.dsh-github-modal-body {
  display: flex;
  min-height: 0;
  flex: 1;
}
.dsh-github-settings-nav {
  flex-shrink: 0;
  width: 148px;
  padding: 14px 10px;
  border-right: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-sizing: border-box;
}
body[data-ds-dark-theme] .dsh-github-settings-nav {
  border-right-color: var(--dsw-alias-border-l1, #30363d);
}
.dsh-github-settings-nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 6px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 13px;
  text-align: left;
  color: var(--dsw-alias-label-secondary, #656d76);
  transition: background 0.12s ease, color 0.12s ease;
}
.dsh-github-settings-nav-item:hover {
  background: var(--dsw-alias-bg-layer-1, #f6f8fa);
  color: var(--dsw-alias-label-primary, #1f2328);
}
.dsh-github-settings-nav-item.active {
  background: rgba(9, 105, 218, 0.1);
  color: var(--dsw-alias-link, #0969da);
  font-weight: 600;
}
body[data-ds-dark-theme] .dsh-github-settings-nav-item:hover {
  background: rgba(240, 246, 252, 0.06);
  color: var(--dsw-alias-label-primary, #f0f6fc);
}
body[data-ds-dark-theme] .dsh-github-settings-nav-item.active {
  background: rgba(88, 166, 255, 0.15);
  color: #58a6ff;
}
.dsh-github-settings-content {
  flex: 1;
  min-width: 0;
  padding: 18px 22px 20px;
  overflow-y: auto;
  box-sizing: border-box;
}
@media (max-width: 560px) {
  .dsh-github-modal-body {
    flex-direction: column;
  }
  .dsh-github-settings-nav {
    width: 100%;
    flex-direction: row;
    border-right: none;
    border-bottom: 1px solid var(--dsw-alias-border-l2, #d0d7e0);
    overflow-x: auto;
  }
  body[data-ds-dark-theme] .dsh-github-settings-nav {
    border-bottom-color: var(--dsw-alias-border-l1, #30363d);
  }
  .dsh-github-settings-nav-item {
    white-space: nowrap;
  }
}
.dsh-github-modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 14px 22px;
  border-top: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  flex-shrink: 0;
}
body[data-ds-dark-theme] .dsh-github-modal-footer {
  border-top-color: var(--dsw-alias-border-l1, #30363d);
}
.dsh-github-radio-card {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.15s ease;
  background: var(--dsw-alias-bg-layer-1, #f6f8fa);
}
.dsh-github-radio-card:hover {
  border-color: var(--dsw-alias-link, #0969da);
}
.dsh-github-radio-card.active {
  border-color: var(--dsw-alias-link, #0969da);
  background: rgba(9, 105, 218, 0.08);
}
body[data-ds-dark-theme] .dsh-github-radio-card {
  background: var(--dsw-alias-bg-base, #161b22);
  border-color: var(--dsw-alias-border-l1, #30363d);
}
body[data-ds-dark-theme] .dsh-github-radio-card.active {
  border-color: #58a6ff;
  background: rgba(88, 166, 255, 0.12);
}

.dsh-github-select {
  width: 100%;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  background: var(--dsw-alias-bg-base, #ffffff);
  color: var(--dsw-alias-label-primary, #1f2328);
  font-size: 13px;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  color-scheme: light;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.dsh-github-select:focus {
  border-color: var(--dsw-alias-link, #0969da);
  box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.15);
}
.dsh-github-select option {
  background-color: #ffffff;
  color: #1f2328;
  padding: 6px 10px;
}
body[data-ds-dark-theme] .dsh-github-select {
  border-color: var(--dsw-alias-border-l1, #30363d);
  background: var(--dsw-alias-bg-layer-2, #1e1e22);
  color: var(--dsw-alias-label-primary, #f0f6fc);
  color-scheme: dark;
}
body[data-ds-dark-theme] .dsh-github-select:focus {
  border-color: #58a6ff;
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.2);
}
body[data-ds-dark-theme] .dsh-github-select option {
  background-color: #1e1e22;
  color: #f0f6fc;
}

.dsh-github-input {
  padding: 7px 12px;
  border-radius: 6px;
  border: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  background: var(--dsw-alias-bg-base, #ffffff);
  color: var(--dsw-alias-label-primary, #1f2328);
  font-size: 13px;
  outline: none;
  box-sizing: border-box;
  color-scheme: light;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.dsh-github-input:focus {
  border-color: var(--dsw-alias-link, #0969da);
  box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.15);
}
.dsh-github-input::placeholder {
  color: var(--dsw-alias-label-tertiary, #8c959f);
}
body[data-ds-dark-theme] .dsh-github-input {
  border-color: var(--dsw-alias-border-l1, #30363d);
  background: var(--dsw-alias-bg-layer-2, #1e1e22);
  color: var(--dsw-alias-label-primary, #f0f6fc);
  color-scheme: dark;
}
body[data-ds-dark-theme] .dsh-github-input:focus {
  border-color: #58a6ff;
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.2);
}

.dsh-github-cache-info-box {
  padding: 10px 12px;
  border-radius: 6px;
  background: var(--dsw-alias-bg-layer-1, #f6f8fa);
  border: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  margin-bottom: 20px;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, #656d76);
  transition: all 0.15s ease;
}
body[data-ds-dark-theme] .dsh-github-cache-info-box {
  background: var(--dsw-alias-bg-base, #161b22);
  border-color: var(--dsw-alias-border-l1, #30363d);
  color: var(--dsw-alias-label-secondary, #8c8c8c);
}

.dsh-github-about-star-box {
  padding: 12px 14px;
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-1, #f6f8fa);
  border: 1px solid var(--dsw-alias-border-l2, #d0d7de);
}
body[data-ds-dark-theme] .dsh-github-about-star-box {
  background: var(--dsw-alias-bg-base, #161b22);
  border-color: var(--dsw-alias-border-l1, #30363d);
}

.dsh-github-primary-btn {
  padding: 5px 14px;
  font-weight: 600;
  white-space: nowrap;
  background: var(--dsw-alias-link, #0969da);
  border-color: var(--dsw-alias-link, #0969da);
  color: #ffffff;
}
.dsh-github-primary-btn:hover {
  background: var(--dsw-alias-link, #0969da);
  border-color: var(--dsw-alias-link, #0969da);
  color: #ffffff;
  opacity: 0.88;
}
body[data-ds-dark-theme] .dsh-github-primary-btn {
  background: #58a6ff;
  border-color: #58a6ff;
  color: #0d1117;
}
body[data-ds-dark-theme] .dsh-github-primary-btn:hover {
  background: #58a6ff;
  border-color: #58a6ff;
  color: #0d1117;
  opacity: 0.88;
}

.dsh-github-radio {
  accent-color: var(--dsw-alias-link, #0969da);
  cursor: pointer;
  margin-top: 3px;
}
body[data-ds-dark-theme] .dsh-github-radio {
  accent-color: #58a6ff;
}

#dsh-github-commit-dialog {
  max-width: 600px;
  width: calc(100vw - 48px);
  border: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  border-radius: 12px;
  padding: 0;
  box-sizing: border-box;
  background: var(--dsw-alias-bg-base, #ffffff);
  color: var(--dsw-alias-label-primary, #1f2328);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.22);
  font-family: var(--dsw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
}
#dsh-github-commit-dialog::backdrop {
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(2px);
}
body[data-ds-dark-theme] #dsh-github-commit-dialog {
  background: var(--dsw-alias-bg-layer-2, #1e1e22);
  border-color: var(--dsw-alias-border-l1, #30363d);
  color: var(--dsw-alias-label-primary, #ececec);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
}
.dsh-github-commit-row {
  transition: background 0.15s ease;
}
.dsh-github-commit-row:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(0, 0, 0, 0.05));
}
body[data-ds-dark-theme] .dsh-github-commit-row:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(255, 255, 255, 0.08));
}
body[data-ds-dark-theme] .dsh-github-commit-pre {
  background: var(--dsw-alias-bg-base, #151517) !important;
  color: #ececec !important;
  border: 1px solid #30363d !important;
}
.dsh-github-dialog-close-btn:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(0, 0, 0, 0.08)) !important;
  opacity: 1 !important;
}

.dsh-github-branch-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 500;
  border-radius: 12px;
  border: 1px solid rgba(46, 160, 67, 0.4);
  background: rgba(46, 160, 67, 0.12);
  color: var(--dsw-alias-state-success, #2ea043);
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}
.dsh-github-branch-btn:hover {
  background: rgba(46, 160, 67, 0.22);
  border-color: rgba(46, 160, 67, 0.6);
}
body[data-ds-dark-theme] .dsh-github-branch-btn {
  border-color: rgba(56, 139, 253, 0.4);
  background: rgba(56, 139, 253, 0.15);
  color: #58a6ff;
}
body[data-ds-dark-theme] .dsh-github-branch-btn:hover {
  background: rgba(56, 139, 253, 0.25);
  border-color: #58a6ff;
}

.dsh-github-branch-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 5px;
  width: 290px;
  max-height: 380px;
  background: var(--dsw-alias-bg-base, #ffffff);
  border: 1px solid var(--dsw-alias-border-l2, #e1e4e8);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
body[data-ds-dark-theme] .dsh-github-branch-dropdown {
  background: var(--dsw-alias-bg-layer-2, #1e1e22);
  border-color: var(--dsw-alias-border-l1, #30363d);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.5);
}

.dsh-github-branch-search {
  padding: 8px 10px;
  border-bottom: 1px solid var(--dsw-alias-border-l2, #e1e4e8);
}
body[data-ds-dark-theme] .dsh-github-branch-search {
  border-bottom-color: var(--dsw-alias-border-l1, #30363d);
}
.dsh-github-branch-input {
  width: 100%;
  padding: 5px 8px;
  box-sizing: border-box;
  font-size: 11px;
  border-radius: 5px;
  border: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  background: var(--dsw-alias-bg-base, #ffffff);
  color: var(--dsw-alias-label-primary, #1f2328);
  outline: none;
}
body[data-ds-dark-theme] .dsh-github-branch-input {
  border-color: var(--dsw-alias-border-l1, #30363d);
  background: var(--dsw-alias-bg-base, #151517);
  color: #ececec;
}
.dsh-github-branch-input:focus {
  border-color: var(--dsw-alias-link, #0969da);
}

.dsh-github-branch-list {
  flex: 1;
  overflow-y: auto;
  max-height: 280px;
  padding: 4px 0;
}
.dsh-github-branch-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.12s ease;
  color: var(--dsw-alias-label-primary, #1f2328);
}
body[data-ds-dark-theme] .dsh-github-branch-item {
  color: var(--dsw-alias-label-primary, #ececec);
}
.dsh-github-branch-item:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(0, 0, 0, 0.05));
}
body[data-ds-dark-theme] .dsh-github-branch-item:hover {
  background: rgba(255, 255, 255, 0.08);
}
.dsh-github-branch-item.active {
  font-weight: 600;
  color: var(--dsw-alias-state-success, #1a7f37);
}
body[data-ds-dark-theme] .dsh-github-branch-item.active {
  color: #3fb950;
}

/* 15. 独立沉浸式指南大窗口 (Help Modal) 双主题体系 */
.dsh-github-help-dialog {
  width: 920px;
  max-width: 92vw;
  height: 85vh;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: var(--dsw-alias-bg-base, #ffffff);
  border: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.22);
  color: var(--dsw-alias-label-primary, #1f2328);
  font-family: var(--dsw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  overflow: hidden;
  box-sizing: border-box;
}
body[data-ds-dark-theme] .dsh-github-help-dialog {
  background: var(--dsw-alias-bg-layer-2, #1c2128);
  border-color: var(--dsw-alias-border-l1, #30363d);
  color: var(--dsw-alias-label-primary, #f0f6fc);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.65);
}

.dsh-github-help-header {
  padding: 16px 22px;
  border-bottom: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  background: var(--dsw-alias-bg-base, #ffffff);
}
body[data-ds-dark-theme] .dsh-github-help-header {
  background: var(--dsw-alias-bg-layer-2, #1c2128);
  border-bottom-color: var(--dsw-alias-border-l1, #30363d);
}

.dsh-github-help-nav {
  display: flex;
  gap: 8px;
  padding: 10px 22px;
  background: var(--dsw-alias-bg-module-platform, rgba(9, 105, 218, 0.05));
  border-bottom: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  flex-shrink: 0;
}
body[data-ds-dark-theme] .dsh-github-help-nav {
  background: rgba(56, 139, 253, 0.08);
  border-bottom-color: var(--dsw-alias-border-l1, #30363d);
}

.dsh-github-help-tab-btn {
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-secondary, #656d76);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.15s ease;
}
body[data-ds-dark-theme] .dsh-github-help-tab-btn {
  color: var(--dsw-alias-label-secondary, #8b949e);
}
.dsh-github-help-tab-btn:hover {
  background: rgba(0, 0, 0, 0.05);
}
body[data-ds-dark-theme] .dsh-github-help-tab-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #f0f6fc;
}
.dsh-github-help-tab-btn.active {
  font-weight: 600;
  background: var(--dsw-alias-link, #0969da);
  color: #ffffff !important;
  border-color: var(--dsw-alias-link, #0969da);
}
body[data-ds-dark-theme] .dsh-github-help-tab-btn.active {
  background: #1f6feb;
  border-color: #1f6feb;
}

.dsh-github-help-scroll-body {
  flex: 1;
  overflow-y: auto;
  padding: 22px;
  box-sizing: border-box;
}
.dsh-github-help-scroll-body::-webkit-scrollbar {
  width: 6px;
}
.dsh-github-help-scroll-body::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 3px;
}
body[data-ds-dark-theme] .dsh-github-help-scroll-body::-webkit-scrollbar-thumb {
  background: #30363d;
}

.dsh-github-help-card {
  padding: 16px 18px;
  margin-bottom: 14px;
  border-radius: 8px;
  background: var(--dsw-alias-bg-module-platform, rgba(9, 105, 218, 0.04));
  border: 1px solid var(--dsw-alias-border-l2, rgba(9, 105, 218, 0.18));
  transition: border-color 0.15s ease;
}
body[data-ds-dark-theme] .dsh-github-help-card {
  background: rgba(56, 139, 253, 0.05);
  border-color: rgba(56, 139, 253, 0.18);
}
.dsh-github-help-card:hover {
  border-color: rgba(9, 105, 218, 0.35);
}
body[data-ds-dark-theme] .dsh-github-help-card:hover {
  border-color: rgba(56, 139, 253, 0.4);
}

.dsh-github-prompt-box {
  padding: 10px 14px;
  margin-bottom: 8px;
  border-radius: 6px;
  background: #f6f8fa;
  border: 1px solid #d0d7de;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 12px;
  line-height: 1.5;
  color: var(--dsw-alias-label-primary, #1f2328);
  word-break: break-all;
}
body[data-ds-dark-theme] .dsh-github-prompt-box {
  background: #0d1117;
  border-color: #30363d;
  color: #79c0ff;
}

.dsh-github-help-step-badge {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--dsw-alias-link, #0969da);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}
body[data-ds-dark-theme] .dsh-github-help-step-badge {
  background: #1f6feb;
  box-shadow: 0 0 10px rgba(31, 111, 235, 0.35);
}

.dsh-github-help-footer {
  padding: 12px 22px;
  border-top: 1px solid var(--dsw-alias-border-l2, #d0d7de);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--dsw-alias-bg-base, #ffffff);
  flex-shrink: 0;
}
body[data-ds-dark-theme] .dsh-github-help-footer {
  background: var(--dsw-alias-bg-layer-2, #1c2128);
  border-top-color: var(--dsw-alias-border-l1, #30363d);
}

.dsh-github-help-title {
  font-weight: 600;
  font-size: 14px;
  color: var(--dsw-alias-label-primary, #1f2328);
}
body[data-ds-dark-theme] .dsh-github-help-title {
  color: var(--dsw-alias-label-primary, #f0f6fc);
}

.dsh-github-help-desc {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, #656d76);
  line-height: 1.5;
}
body[data-ds-dark-theme] .dsh-github-help-desc {
  color: var(--dsw-alias-label-secondary, #8b949e);
}

/* 16. 未提交文件清单交互与 Git Diff 对比视图 */
.dsh-github-dirty-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 6px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.15s ease;
  user-select: none;
}
.dsh-github-dirty-item:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(0, 0, 0, 0.05));
}
body[data-ds-dark-theme] .dsh-github-dirty-item:hover {
  background: rgba(255, 255, 255, 0.08);
}
.dsh-github-dirty-item:active {
  background: var(--dsw-alias-interactive-bg-active, rgba(0, 0, 0, 0.08));
}
body[data-ds-dark-theme] .dsh-github-dirty-item:active {
  background: rgba(255, 255, 255, 0.12);
}

.dsh-github-inline-diff-view {
  animation: dsh-github-fade-in 0.15s ease-out;
}
@keyframes dsh-github-fade-in {
  from { opacity: 0; transform: translateY(2px); }
  to { opacity: 1; transform: translateY(0); }
}
body[data-ds-dark-theme] .dsh-github-inline-diff-content {
  background-color: var(--dsw-alias-bg-layer-2, #1c2128) !important;
  border-color: var(--dsw-alias-border-l1, #30363d) !important;
}

/* 17. 提交详情文件变更统计结构化高亮 */
.dsh-github-stat-list {
  border: 1px solid var(--dsw-alias-border-l2, #e1e4e8);
  background: var(--dsw-alias-bg-module-platform, #f6f8fa);
}
body[data-ds-dark-theme] .dsh-github-stat-list {
  border-color: var(--dsw-alias-border-l1, #30363d) !important;
  background: var(--dsw-alias-bg-layer-2, #1c2128) !important;
}

.dsh-github-stat-row {
  transition: background-color 0.15s ease;
}
.dsh-github-stat-row:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(0, 0, 0, 0.04));
}
body[data-ds-dark-theme] .dsh-github-stat-row:hover {
  background: rgba(255, 255, 255, 0.06);
}

/* 18. 右侧栏上方卡片折叠/展开动画与按钮样式 */
.dsh-github-header-cards-collapsed {
  display: none !important;
}

.dsh-github-btn-sm.active {
  background: var(--dsw-alias-state-attention-subtle, rgba(234, 179, 8, 0.15)) !important;
  color: var(--dsw-alias-state-attention-primary, #9a6700) !important;
  border-color: var(--dsw-alias-state-attention-primary, #d29922) !important;
}
body[data-ds-dark-theme] .dsh-github-btn-sm.active {
  background: rgba(234, 179, 8, 0.2) !important;
  color: #f0b72f !important;
  border-color: #d29922 !important;
}
/* ============================================================================
   台账改造（design system layer）
   —— 覆盖而非重写：上面的规则保留，这一层用同一套 token 把它们收敛成
   一套系统。核心判断：DSH 主题里 bg-layer-1/2/3 在浅色下同色、暗色只差
   9 个 RGB 台阶，所以「块」只能由 1px 描边 + 留白定义，不能靠填充；
   字号只留四档，层级靠字号/字重而不是把颜色洗淡。
   ============================================================================ */

.dsh-github-panel {
  /* 间距刻度：七档，超出即错 */
  --gh-s1: 2px;  --gh-s2: 4px;  --gh-s3: 6px; --gh-s4: 8px;
  --gh-s5: 12px; --gh-s6: 16px; --gh-s7: 24px;
  /* 圆角：块 6 / 行 4，只有两档 */
  --gh-radius: 6px; --gh-radius-row: 4px;
  /* 字号阶梯：15 / 13 / 12 / 11 */
  --gh-fs-slug: 15px; --gh-fs-title: 13px; --gh-fs-sub: 12px; --gh-fs-meta: 11px;
  --gh-line-hair: var(--dsw-alias-border-l1, rgba(0,0,0,.08));
  --gh-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
}

/* 面板本身：12px 横向预算，不再是 18+16+16 三重留白 */
.dsh-github-panel {
  padding: var(--gh-s5) var(--gh-s5) var(--gh-s7);
}

/* ── 锚点块：全panel唯一描边块 ───────────────────────────────────────── */
.dsh-github-card.gh-anchor {
  border: 1px solid var(--dsw-alias-border-l2, #e1e4e8);
  background: transparent;
  border-radius: var(--gh-radius);
  padding: var(--gh-s5);
  display: flex;
  flex-direction: column;
  gap: var(--gh-s2);
}
body[data-ds-dark-theme] .dsh-github-card.gh-anchor {
  border-color: var(--dsw-alias-border-l1, #333336);
  background: transparent;
}
.gh-anchor-top {
  display: flex;
  align-items: center;
  gap: var(--gh-s2);
  min-width: 0;
}
.gh-slug {
  font-size: var(--gh-fs-slug);
  line-height: 20px;
  font-weight: 600;
  color: var(--dsw-alias-link, #0969da);
  text-decoration: none;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}
body[data-ds-dark-theme] .gh-slug { color: #58a6ff; }
.gh-slug.is-error { color: var(--dsw-alias-state-error-primary, #cf222e); font-weight: 500; font-size: var(--gh-fs-title); }
.gh-anchor-sub {
  display: flex;
  align-items: center;
  gap: var(--gh-s3);
  flex-wrap: wrap;
  font-size: var(--gh-fs-sub);
  color: var(--dsw-alias-label-secondary, #57606a);
  min-width: 0;
}
/* 分支名占满剩余宽度并省略，把下拉与「手动」留在同一行右侧 */
.gh-anchor-sub > .gh-mono:first-child {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.gh-anchor-desc {
  font-size: var(--gh-fs-sub);
  line-height: 16px;
  color: var(--dsw-alias-label-secondary, #57606a);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 调试信息默认折叠：账号/scopes/仓库根不该出现在主界面 */
.gh-details { margin-top: var(--gh-s1); }
.gh-details > summary {
  font-size: var(--gh-fs-meta);
  color: var(--dsw-alias-label-secondary, #57606a);
  cursor: pointer;
  list-style: none;
  user-select: none;
}
.gh-details > summary::-webkit-details-marker { display: none; }
.gh-details > summary::before { content: "▸ "; }
.gh-details[open] > summary::before { content: "▾ "; }
.gh-details-body {
  margin-top: var(--gh-s2);
  display: flex;
  flex-direction: column;
  gap: var(--gh-s1);
  font-size: var(--gh-fs-meta);
  line-height: 14px;
  color: var(--dsw-alias-label-secondary, #57606a);
  word-break: break-all;
}

/* ── 图标按钮：无色、24px、只换底色 ──────────────────────────────────── */
.gh-icon-btn {
  width: 24px; height: 24px;
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0; flex-shrink: 0;
  border: 1px solid transparent;
  border-radius: var(--gh-radius-row);
  background: transparent;
  color: var(--dsw-alias-label-secondary, #57606a);
  font-size: 13px; line-height: 1;
  cursor: pointer;
  transition: background-color 120ms ease, color 120ms ease;
}
.gh-icon-btn:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(0,0,0,.05));
  color: var(--dsw-alias-label-primary, #1f2328);
}

/* ── Tab：下划线式文字 tab，不是胶囊 ─────────────────────────────────── */
.dsh-github-tabs.gh-tabs {
  display: flex;
  flex-wrap: nowrap;
  gap: var(--gh-s5);
  border-bottom: 1px solid var(--gh-line-hair);
  margin-bottom: var(--gh-s5);
  padding: 0;
}
.gh-tab {
  appearance: none;
  border: 0;
  background: transparent;
  padding: 0 0 var(--gh-s4);
  flex: 1 1 auto;
  min-width: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gh-s1);
  font-size: var(--gh-fs-sub);
  line-height: 16px;
  font-weight: 500;
  color: var(--dsw-alias-label-secondary, #57606a);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  white-space: nowrap;
  transition: color 120ms ease, border-color 120ms ease;
}
.gh-tab:hover { color: var(--dsw-alias-label-primary, #1f2328); }
.gh-tab.active {
  color: var(--dsw-alias-label-primary, #1f2328);
  border-bottom-color: var(--dsw-alias-link, #0969da);
  font-weight: 600;
}
body[data-ds-dark-theme] .gh-tab { color: var(--dsw-alias-label-secondary, #9ca3af); }
body[data-ds-dark-theme] .gh-tab.active { color: var(--dsw-alias-label-primary, #f0f6fc); }
/* 计数芯片：全panel唯一允许的填充芯片 */
.gh-count {
  font-size: 11px;
  line-height: 14px;
  padding: 1px 4px;
  border-radius: var(--gh-radius-row);
  background: var(--dsw-alias-bg-module-platform, rgba(0,0,0,.06));
  color: var(--dsw-alias-label-secondary, #57606a);
  font-variant-numeric: tabular-nums;
}

/* ── 列表：零卡片台账 ────────────────────────────────────────────────── */
.gh-ledger { display: flex; flex-direction: column; }
.gh-row {
  display: grid;
  grid-template-columns: 14px 1fr 44px;
  align-items: center;
  column-gap: var(--gh-s4);
  padding: var(--gh-s2) var(--gh-s2);
  border-bottom: 1px solid var(--gh-line-hair);
  border-radius: var(--gh-radius-row);
  transition: background-color 120ms ease;
}
body[data-ds-dark-theme] .gh-row {
  border-bottom-color: var(--dsw-alias-border-l2-darkmode-thin, rgba(255,255,255,.06));
}
.gh-row:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(0,0,0,.04)); }
.gh-row:last-child { border-bottom: 0; }
.gh-spine {
  font-size: 11px;
  line-height: 1;
  text-align: center;
  font-family: var(--gh-mono);
}
.gh-spine.tone-success { color: var(--dsw-alias-state-success-primary, #1a7f37); }
.gh-spine.tone-error   { color: var(--dsw-alias-state-error-primary, #cf222e); }
.gh-spine.tone-warn    { color: var(--dsw-alias-state-attention-primary, #9a6700); }
.gh-spine.tone-running { color: var(--dsw-alias-state-business-primary, #0969da); }
/* 浅底上 tertiary 只有 3.0:1；中性态改用 secondary，层级靠字形（◇）区分 */
.gh-spine.tone-neutral { color: var(--dsw-alias-label-secondary, #57606a); }
.gh-row-main { min-width: 0; display: flex; flex-direction: column; gap: 1px; }
.gh-row-title {
  font-size: var(--gh-fs-title);
  line-height: 18px;
  font-weight: 500;
  color: var(--dsw-alias-label-primary, #1f2328);
  display: flex;
  align-items: baseline;
  gap: var(--gh-s2);
  min-width: 0;
}
body[data-ds-dark-theme] .gh-row-title { color: var(--dsw-alias-label-primary, #f0f6fc); }
.gh-row-title > a {
  color: inherit; text-decoration: none;
  min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.gh-row-title > a:hover { color: var(--dsw-alias-link, #0969da); text-decoration: underline; }
.gh-prefix {
  font-family: var(--gh-mono);
  font-size: var(--gh-fs-meta);
  color: var(--dsw-alias-label-secondary, #57606a);
  flex-shrink: 0;
}
.gh-row-sub {
  font-size: var(--gh-fs-sub);
  line-height: 16px;
  color: var(--dsw-alias-label-secondary, #57606a);
  display: flex;
  align-items: center;
  gap: var(--gh-s3);
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
}
/* 只有第一项（分支名）可以被压缩，后面的状态/计数一律完整显示 */
.gh-row-sub > span { overflow: hidden; text-overflow: ellipsis; }
.gh-row-sub > span:first-child { flex: 0 1 auto; min-width: 0; }
.gh-row-sub > span:not(:first-child) { flex: 0 0 auto; }
.gh-row-sub > span + span::before {
  content: "·";
  margin-right: var(--gh-s3);
  color: var(--dsw-alias-label-tertiary, #8c959f);
}
.gh-mono { font-family: var(--gh-mono); font-variant-numeric: tabular-nums; }
/* 右槽：常态时间，hover 原位换成按钮 —— 槽宽固定，零 reflow */
.gh-slot {
  width: 44px;
  display: flex; align-items: center; justify-content: flex-end;
  position: relative;
  min-height: 20px;
}
.gh-slot-time {
  font-size: var(--gh-fs-meta);
  line-height: 14px;
  color: var(--dsw-alias-label-secondary, #57606a);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.gh-slot-action { display: none; }
.gh-row:hover .gh-slot-time { display: none; }
.gh-row:hover .gh-slot-action { display: inline-flex; }

/* ── 快捷操作：降到列表之后的一行文字链接 ────────────────────────────── */
.gh-quick-row {
  margin-top: var(--gh-s5);
  padding-top: var(--gh-s4);
  border-top: 1px solid var(--gh-line-hair);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--gh-s4);
  font-size: var(--gh-fs-meta);
}
.gh-quick-link {
  appearance: none; border: 0; background: transparent; padding: 0;
  font-size: var(--gh-fs-meta);
  color: var(--dsw-alias-label-secondary, #57606a);
  cursor: pointer;
  transition: color 120ms ease;
}
.gh-quick-link:hover { color: var(--dsw-alias-link, #0969da); }

/* ── 分节标题：标签是脚手架，数据是主角 ──────────────────────────────── */
.dsh-github-section-header h3 {
  font-size: var(--gh-fs-sub);
  line-height: 16px;
  font-weight: 600;
  color: var(--dsw-alias-label-secondary, #57606a);
}

/* ── 暗色覆盖 ─────────────────────────────────────────────────────────
 * 为什么每条都要显式写：这些规则用 var(token, fallback) 兜底，而 fallback 取的是
 * 浅色值；一旦宿主上下文里 token 缺失，暗色下就会掉到 2.85:1（实测）。
 * 显式覆盖让「token 缺失」也仍然可读，而不是靠宿主一定提供。
 */
body[data-ds-dark-theme] .gh-anchor-sub,
body[data-ds-dark-theme] .gh-anchor-desc,
body[data-ds-dark-theme] .gh-row-sub,
body[data-ds-dark-theme] .gh-details > summary,
body[data-ds-dark-theme] .gh-details-body,
body[data-ds-dark-theme] .gh-slot-time,
body[data-ds-dark-theme] .gh-quick-link,
body[data-ds-dark-theme] .gh-prefix {
  color: var(--dsw-alias-label-secondary, #9ca3af);
}
body[data-ds-dark-theme] .gh-icon-btn {
  color: var(--dsw-alias-label-secondary, #9ca3af);
}
body[data-ds-dark-theme] .gh-icon-btn:hover {
  background: rgba(255,255,255,.08);
  color: var(--dsw-alias-label-primary, #f0f6fc);
}
body[data-ds-dark-theme] .gh-count {
  background: rgba(255,255,255,.10);
  color: var(--dsw-alias-label-secondary, #9ca3af);
}
body[data-ds-dark-theme] .gh-spine.tone-neutral {
  color: var(--dsw-alias-label-secondary, #9ca3af);
}
body[data-ds-dark-theme] .gh-row:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,.06));
}
body[data-ds-dark-theme] .gh-quick-link:hover { color: #58a6ff; }
/* 脊柱字形在暗色下必须更亮：3.4:1 的绿/蓝小字读不出来（实测）。
 * 形状仍是主编码（●✕○◇），颜色只是强化，但能读才算强化。 */
body[data-ds-dark-theme] .gh-spine.tone-success { color: var(--dsw-alias-state-success-primary, #3fb950); }
body[data-ds-dark-theme] .gh-spine.tone-error   { color: var(--dsw-alias-state-error-primary, #f85149); }
body[data-ds-dark-theme] .gh-spine.tone-warn    { color: var(--dsw-alias-state-attention-primary, #d29922); }
body[data-ds-dark-theme] .gh-spine.tone-running { color: var(--dsw-alias-state-business-primary, #58a6ff); }

/* 旧卡片/徽章在台账里的收口：不再有阴影与多彩填充 */
.dsh-github-card, .dsh-github-item { box-shadow: none !important; }
.dsh-github-item { background: transparent !important; border: 0 !important; }

` + TW_CSS;
function injectStyles() {
    var styleId = "dsh-plugin-github-styles";
    var existing = document.getElementById(styleId);
    if (existing) {
        existing.textContent = GITHUB_PANEL_CSS;
        return () => { };
    }
    var style = document.createElement("style");
    style.id = styleId;
    style.textContent = GITHUB_PANEL_CSS;
    document.head.appendChild(style);
    return () => style.remove();
}

// ---- [Bundled: utils.js] ----
/**
 * 面板公共工具函数（纯函数，可被单元测试直接覆盖）
 */
function formatRelativeTime(iso) {
    if (!iso || typeof iso !== "string")
        return "";
    var t = Date.parse(iso);
    if (isNaN(t))
        return "";
    var diff = Date.now() - t;
    if (diff < 0)
        return "刚刚";
    var MIN = 60 * 1000, HOUR = 60 * MIN, DAY = 24 * HOUR;
    if (diff < MIN)
        return "刚刚";
    if (diff < HOUR)
        return Math.floor(diff / MIN) + "分钟前";
    if (diff < DAY)
        return Math.floor(diff / HOUR) + "小时前";
    if (diff < 7 * DAY)
        return Math.floor(diff / DAY) + "天前";
    var d = new Date(t);
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
/**
 * 把 Actions 运行的 conclusion/status 映射成徽章文案。
 *
 * 为什么必须枚举完整：GitHub 的 conclusion 远不止 success/failure，
 * cancelled / skipped / timed_out / action_required / neutral / stale 都是合法值。
 * 原实现只认前两个，其余一律回退显示 status —— 于是一条「已取消」的运行会显示成
 * 黄色的 `completed`（status 字段），既误导又像 bug。
 *
 * 优先级：conclusion 有值就按 conclusion 判（终态）；否则看 status（运行中/排队中）。
 */
function runConclusionBadge(conclusion, status) {
    var c = String(conclusion || "").toLowerCase();
    var st = String(status || "").toLowerCase();
    switch (c) {
        case "success": return { label: "✓ 成功", tone: "green" };
        case "failure": return { label: "✕ 失败", tone: "red" };
        case "cancelled": return { label: "⊘ 已取消", tone: "gray" };
        case "skipped": return { label: "⤼ 已跳过", tone: "gray" };
        case "timed_out": return { label: "⏱ 超时", tone: "yellow" };
        case "action_required": return { label: "⚠ 需处理", tone: "yellow" };
        case "neutral": return { label: "· 中性", tone: "gray" };
        case "stale": return { label: "· 已过期", tone: "gray" };
        case "startup_failure": return { label: "✕ 启动失败", tone: "red" };
    }
    if (st === "in_progress")
        return { label: "● 运行中", tone: "blue" };
    if (st === "queued" || st === "pending" || st === "waiting" || st === "requested") {
        return { label: "◷ 排队中", tone: "yellow" };
    }
    if (st === "completed")
        return { label: "· 已完成", tone: "gray" };
    if (c)
        return { label: c, tone: "gray" };
    if (st)
        return { label: st, tone: "gray" };
    return { label: "未知", tone: "gray" };
}
function rollupCiStatus(checks) {
    if (!Array.isArray(checks) || checks.length === 0)
        return null;
    var hasFail = false, hasPending = false;
    for (var i = 0; i < checks.length; i++) {
        var c = checks[i] || {};
        var status = String(c.status || "").toLowerCase();
        var conclusion = String(c.conclusion || "").toLowerCase();
        if (conclusion === "failure" || conclusion === "timed_out" || conclusion === "cancelled")
            hasFail = true;
        else if (conclusion === "success" || conclusion === "skipped" || conclusion === "neutral") { }
        else if (status === "in_progress" || status === "queued" || conclusion === "pending" || (!conclusion && status))
            hasPending = true;
    }
    if (hasFail)
        return "fail";
    if (hasPending)
        return "pending";
    return "pass";
}
function reviewDecisionBadge(decision) {
    var d = String(decision || "").toUpperCase();
    if (d === "APPROVED")
        return { text: "✔ 已批准", kind: "green" };
    if (d === "CHANGES_REQUESTED")
        return { text: "✋ 需修改", kind: "red" };
    if (d === "REVIEW_REQUIRED")
        return { text: "👀 待审查", kind: "yellow" };
    return null;
}
function eventLabel(event) {
    var e = String(event || "");
    if (e === "push")
        return "⇡ push";
    if (e === "schedule")
        return "⏰ 定时";
    if (e === "workflow_dispatch")
        return "▶ 手动";
    if (e === "pull_request")
        return "🔀 PR";
    return e || "";
}
/**
 * 带有阶梯退避重试（Backoff Retry）的通用异步拉取函数
 *
 * 核心设计理由与约束：
 * 1. 应对代理节点不稳定、TLS 握手卡顿、短时网络抖动（半秒至两秒微断流）；
 * 2. 阶梯退避时序：第 1 次失败等 1s (1000ms)，第 2 次等 2s (2000ms)，第 3 次等 4s (4000ms)，附加 0~200ms Jitter；
 * 3. 智能区分软硬错误：401/403/404/400 确定性错误坚决不重试，仅在网络超时、不可达、或带有 networkError 时重试；
 * 4. 严格响应外部 AbortSignal，组件卸载或用户手动打断时立即退出等待，绝无内存泄漏。
 */
async function fetchWithRetry(url, options = {}, config = {}) {
    var maxRetries = config.maxRetries !== undefined ? config.maxRetries : 3;
    var baseDelayMs = config.baseDelayMs !== undefined ? config.baseDelayMs : 1000;
    var signal = config.signal || options.signal;
    var attempt = 0;
    while (true) {
        attempt++;
        var currentRes = null;
        var currentJson = null;
        var failureReason = "";
        var shouldRetry = false;
        try {
            if (signal && signal.aborted) {
                throw new Error("Aborted");
            }
            currentRes = await fetch(url, { ...options, signal });
            // 硬错误守卫：客户端确定性错误（如未授权、权限拒绝、不存在、参数错误）坚决不重试
            if (currentRes.status === 401 || currentRes.status === 403 || currentRes.status === 404 || currentRes.status === 400) {
                currentJson = await currentRes.json().catch(() => ({}));
                return { res: currentRes, json: currentJson };
            }
            if (!currentRes.ok) {
                failureReason = "HTTP " + currentRes.status + " " + currentRes.statusText;
                shouldRetry = true;
            }
            else {
                currentJson = await currentRes.json().catch(() => null);
                // 业务层软错误检测（后端返回了 200，但标记了 networkError 或 partialFailure）
                var isNetworkError = Boolean(currentJson && (currentJson.partialFailure ||
                    currentJson.data?.partialFailure ||
                    currentJson.data?.networkError ||
                    currentJson.data?.auth?.networkError));
                if (isNetworkError) {
                    failureReason = currentJson.error || currentJson.data?.networkErrorReason || "云端接口网络抖动";
                    shouldRetry = true;
                }
                else {
                    // 成功获取完整且无网络错误的数据
                    return { res: currentRes, json: currentJson };
                }
            }
        }
        catch (err) {
            if ((signal && signal.aborted) || err.name === "AbortError") {
                throw err;
            }
            failureReason = err.message || "网络连接中断或超时";
            shouldRetry = true;
        }
        // 判断是否已耗尽重试次数
        if (!shouldRetry || attempt > maxRetries) {
            if (currentRes) {
                return { res: currentRes, json: currentJson || {} };
            }
            throw new Error(failureReason || "网络请求失败");
        }
        // 计算阶梯退避等待时间：baseDelayMs * 2^(attempt - 1) + Jitter 自适应微扰
        var exponentialDelay = baseDelayMs * Math.pow(2, attempt - 1);
        var maxJitter = Math.min(200, Math.floor(exponentialDelay * 0.2));
        var jitter = Math.floor(Math.random() * (maxJitter + 1));
        var totalDelay = exponentialDelay + jitter;
        if (config.onRetry) {
            config.onRetry(attempt, totalDelay, failureReason);
        }
        // 可中断的睡眠等待
        await new Promise((resolve, reject) => {
            var timer = setTimeout(resolve, totalDelay);
            if (signal) {
                signal.addEventListener("abort", () => {
                    clearTimeout(timer);
                    reject(new Error("Aborted"));
                }, { once: true });
            }
        });
    }
}
function parseGitStatText(statText) {
    if (!statText || typeof statText !== "string")
        return null;
    var lines = statText.split("\n");
    var files = [];
    var summary = null;
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (!line)
            continue;
        var summaryMatch = line.match(/(\d+)\s+files?\s+changed(?:,\s+(\d+)\s+insertions?\(\+\))?(?:,\s+(\d+)\s+deletions?\(-\))?/i);
        if (summaryMatch) {
            summary = {
                filesChanged: parseInt(summaryMatch[1], 10),
                insertions: parseInt(summaryMatch[2] || "0", 10),
                deletions: parseInt(summaryMatch[3] || "0", 10),
            };
            continue;
        }
        var pipeIdx = line.indexOf("|");
        if (pipeIdx > 0) {
            var left = line.slice(0, pipeIdx).trim();
            var right = line.slice(pipeIdx + 1).trim();
            if (left.startsWith('"') && left.endsWith('"') && left.length >= 2) {
                left = left.slice(1, -1);
            }
            if (/^Bin\b/i.test(right)) {
                files.push({ path: left, total: 0, additions: 0, deletions: 0, isBinary: true, rawRight: right });
            }
            else {
                var numMatch = right.match(/^(\d+)(.*)$/);
                if (numMatch) {
                    var total = parseInt(numMatch[1], 10);
                    var graph = numMatch[2].trim();
                    var plusCount = 0;
                    var minusCount = 0;
                    for (var j = 0; j < graph.length; j++) {
                        if (graph[j] === "+")
                            plusCount++;
                        else if (graph[j] === "-")
                            minusCount++;
                    }
                    var additions = 0;
                    var deletions = 0;
                    if (plusCount === 0 && minusCount === 0) {
                        additions = total;
                    }
                    else if (minusCount === 0) {
                        additions = total;
                        deletions = 0;
                    }
                    else if (plusCount === 0) {
                        additions = 0;
                        deletions = total;
                    }
                    else {
                        if (plusCount + minusCount === total) {
                            additions = plusCount;
                            deletions = minusCount;
                        }
                        else {
                            var addExact = Math.round((total * plusCount) / (plusCount + minusCount));
                            additions = addExact;
                            deletions = Math.max(0, total - addExact);
                        }
                    }
                    files.push({ path: left, total, additions, deletions, isBinary: false });
                }
            }
        }
    }
    if (files.length === 0 && !summary)
        return null;
    return { files, summary };
}

// ---- [Bundled: icons.js] ----
/**
 * 官方高清 SVG 矢量组件与图标徽章
 */
function renderOctocat(size = 18, color = "currentColor") {
    return React.createElement("svg", {
        viewBox: "0 0 16 16",
        width: size,
        height: size,
        fill: color,
        style: { flexShrink: 0, display: "inline-block", verticalAlign: "middle" }
    }, React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.72 6.56 11.52C4.78 11.32 2.92 10.63 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.32 9.47 11.52C9.76 11.77 10.01 12.25 10.01 13C10.01 14.08 10 14.95 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
    }));
}
function renderGitIcon(size = 14, color = "#1296db") {
    return React.createElement("svg", {
        viewBox: "0 0 1024 1024",
        width: size,
        height: size,
        style: { flexShrink: 0, display: "inline-block", verticalAlign: "middle" }
    }, React.createElement("path", {
        fill: color,
        d: "M943.078 472.342L551.076 80.34c-21.859-21.859-57.626-21.859-79.485 0L79.589 472.342c-21.859 21.859-21.859 57.626 0 79.485l392.002 392.002c21.859 21.859 57.626 21.859 79.485 0l392.002-392.002c21.858-21.858 21.858-57.626 0-79.485z m-249.083 113.12c-37.939 0-68.693-30.755-68.693-68.693a68.532 68.532 0 0 1 4.136-23.521l-86.88-86.88v237.369c21.391 11.639 35.908 34.313 35.908 60.378 0 37.939-30.755 68.693-68.693 68.693s-68.693-30.755-68.693-68.693c0-27.314 15.944-50.903 39.03-61.973v-250.25c-23.022-10.642-39.03-33.879-39.03-60.907 0-7.808 1.401-15.272 3.853-22.243L344.061 207.871l44.159-44.159L490.738 266.23c5.58-1.503 11.418-2.378 17.473-2.378 37.076 0 67.132 30.056 67.132 67.132 0 6.055-0.875 11.893-2.378 17.473l102.241 102.241a68.68 68.68 0 0 1 18.789-2.623c37.939 0 68.693 30.755 68.693 68.693s-30.754 68.694-68.693 68.694z"
    }));
}
function renderOctocatBadge(size = 32) {
    return React.createElement("div", {
        className: "dsh-octocat-badge",
        style: {
            width: size + "px",
            height: size + "px",
            borderRadius: Math.round(size * 0.25) + "px",
        }
    }, renderOctocat(Math.round(size * 0.58), "#ffffff"));
}
function renderPluginBadge(hFactory) {
    var h = hFactory;
    return h("button", {
        className: "dsh-github-plugin-badge",
        type: "button",
        title: "本界面由第三方插件 dsh-github-flow 提供（非 DSH / GitHub 官方）。点击查看关于。",
        onClick: function (e) {
            e.stopPropagation();
            e.preventDefault();
            try {
                window.dispatchEvent(new CustomEvent("dsh-github-open-about"));
            }
            catch (err) { }
        },
    }, "插件");
}

// ---- [Bundled: storage.js] ----
/**
 * 本地持久化缓存状态机与偏好配置存储管理
 */
const GLOBAL_OVERVIEW_CACHE_KEY = "dsh_github_global_overview_snapshot_v1";
const SYNC_SETTINGS_STORAGE_KEY = "dsh_github_sync_settings_v1";
const DEFAULT_SYNC_SETTINGS = {
    strategy: "swr", // 'swr' | 'auto' | 'manual'
    cloudSyncIntervalMs: 600000, // 云端定时周期：默认 10 分钟 (600,000ms，下限 5分钟)
    localGitWatch: true, // 本地 .git 改动实时感知 (仅右侧栏当前工作区生效，默认开启)
};
function getLocalSyncSettings() {
    try {
        var raw = localStorage.getItem(SYNC_SETTINGS_STORAGE_KEY);
        if (!raw)
            return DEFAULT_SYNC_SETTINGS;
        var parsed = JSON.parse(raw);
        var merged = Object.assign({}, DEFAULT_SYNC_SETTINGS, parsed);
        if (merged.strategy === "interval" || parsed.cloudAutoSync === true) {
            merged.strategy = "auto";
            saveLocalSyncSettings(merged);
        }
        if (typeof merged.cloudSyncIntervalMs !== "number" || merged.cloudSyncIntervalMs < 300000) {
            merged.cloudSyncIntervalMs = 600000;
        }
        if (typeof parsed.localGitWatch !== "boolean") {
            merged.localGitWatch = true;
        }
        return merged;
    }
    catch (e) {
        return DEFAULT_SYNC_SETTINGS;
    }
}
function saveLocalSyncSettings(settings) {
    try {
        localStorage.setItem(SYNC_SETTINGS_STORAGE_KEY, JSON.stringify(settings));
        if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("dsh-github-sync-settings-change", { detail: settings }));
        }
    }
    catch (e) { }
}
function getStoredGlobalOverview() {
    try {
        var raw = localStorage.getItem(GLOBAL_OVERVIEW_CACHE_KEY);
        if (!raw)
            return null;
        var parsed = JSON.parse(raw);
        if (!parsed || !parsed.data) {
            return null;
        }
        if (typeof parsed.savedAt === "number") {
            return parsed;
        }
        return null;
    }
    catch (e) {
        return null;
    }
}
function saveStoredGlobalOverview(data) {
    if (!data || !data.auth || data.auth.networkError) {
        return;
    }
    try {
        localStorage.setItem(GLOBAL_OVERVIEW_CACHE_KEY, JSON.stringify({
            data: data,
            savedAt: Date.now(),
        }));
    }
    catch (e) { }
}
function clearStoredGlobalOverview() {
    try {
        localStorage.removeItem(GLOBAL_OVERVIEW_CACHE_KEY);
        if (typeof localStorage !== "undefined") {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                var k = localStorage.key(i);
                if (k && k.indexOf("dsh_github_rightbar_snapshot_") === 0) {
                    localStorage.removeItem(k);
                }
            }
        }
        if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("dsh-github-cache-cleared"));
        }
    }
    catch (e) { }
}
function getCacheStorageMeta() {
    try {
        var raw = localStorage.getItem(GLOBAL_OVERVIEW_CACHE_KEY);
        if (!raw)
            return { exists: false, sizeKb: 0, savedAt: 0 };
        var parsed = JSON.parse(raw);
        var sizeKb = Math.round((raw.length * 2) / 1024 * 10) / 10;
        return { exists: true, sizeKb: sizeKb, savedAt: parsed?.savedAt || 0 };
    }
    catch (e) {
        return { exists: false, sizeKb: 0, savedAt: 0 };
    }
}
function getRightbarStorageKey(cwd) {
    var safe = (cwd || "default").replace(/[^a-zA-Z0-9_-]/g, "_");
    return "dsh_github_rightbar_snapshot_" + safe;
}
function getStoredRightbarSnapshot(cwd) {
    try {
        var key = getRightbarStorageKey(cwd);
        var raw = localStorage.getItem(key);
        if (!raw)
            return null;
        var parsed = JSON.parse(raw);
        if (!parsed || !parsed.data) {
            return null;
        }
        return { data: parsed.data, savedAt: typeof parsed.savedAt === "number" ? parsed.savedAt : 0 };
    }
    catch (e) {
        return null;
    }
}
function saveStoredRightbarData(cwd, data) {
    if (!data || !data.auth || data.auth.networkError)
        return;
    try {
        var key = getRightbarStorageKey(cwd);
        localStorage.setItem(key, JSON.stringify({
            data: data,
            savedAt: Date.now(),
        }));
    }
    catch (e) { }
}
const HEADER_CARDS_STORAGE_KEY = "dsh_github_header_cards_visible_v1";
/**
 * 读取右侧栏上方仓库卡片与快捷操作栏的折叠/展开偏好（默认为 true 展开）
 */
function getStoredHeaderCardsVisible() {
    try {
        var raw = localStorage.getItem(HEADER_CARDS_STORAGE_KEY);
        if (raw === null || raw === undefined)
            return true;
        return raw !== "false";
    }
    catch (e) {
        return true;
    }
}
/**
 * 持久化保存右侧栏上方仓库卡片与快捷操作栏的展开/折叠偏好
 */
function saveStoredHeaderCardsVisible(visible) {
    try {
        localStorage.setItem(HEADER_CARDS_STORAGE_KEY, visible ? "true" : "false");
    }
    catch (e) { }
}

// ---- [Bundled: branch-selector.js] ----
/**
 * 分支查看与快速切换下拉选择器组件
 */
function BranchSelectorDropdown(props) {
    var currentBranch = props.currentBranch || "main";
    var cwd = props.cwd;
    var branchesData = props.branchesData;
    var onBranchSwitched = props.onBranchSwitched || (() => { });
    var showToast = props.showToast || (() => { });
    var [isOpen, setIsOpen] = React.useState(false);
    var [loading, setLoading] = React.useState(false);
    var [switching, setSwitching] = React.useState(false);
    var [branches, setBranches] = React.useState([]);
    var [search, setSearch] = React.useState("");
    var [fetchError, setFetchError] = React.useState(null);
    var containerRef = React.useRef(null);
    React.useEffect(() => {
        if (!isOpen)
            return;
        var handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);
    var toggleOpen = () => {
        if (isOpen) {
            setIsOpen(false);
            return;
        }
        setIsOpen(true);
        setSearch("");
        setFetchError(null);
        if (branchesData && Array.isArray(branchesData.branches) && branchesData.branches.length > 0) {
            setBranches(branchesData.branches);
            setLoading(false);
            return;
        }
        setLoading(true);
        var url = "/api/github/branches" + (cwd ? "?cwd=" + encodeURIComponent(cwd) : "");
        fetch(url)
            .then(async (res) => {
            if (!res.ok) {
                var errText = await res.text().catch(() => "");
                if (res.status === 404 || errText.includes("not found")) {
                    throw new Error("后端分支接口未注册 (404)。请重启 DSH 桌面端以加载新后端服务。");
                }
                throw new Error(`服务响应异常 (${res.status}): ${errText || res.statusText}`);
            }
            return res.json();
        })
            .then((json) => {
            setLoading(false);
            if (json && json.ok && json.data && Array.isArray(json.data.branches)) {
                setBranches(json.data.branches);
            }
            else {
                setFetchError(json.error || "获取分支列表失败");
            }
        })
            .catch((err) => {
            setLoading(false);
            setFetchError(err.message || "读取分支失败");
        });
    };
    var handleSwitch = async (targetBranch) => {
        if (targetBranch === currentBranch || switching)
            return;
        setSwitching(true);
        try {
            var res = await fetch("/api/github/branch-switch", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ cwd, branch: targetBranch }),
            }).catch(() => null);
            if (!res || !res.ok) {
                res = await fetch("/api/github/action", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ action: "switch_branch", cwd, branch: targetBranch }),
                });
            }
            if (!res.ok) {
                var errText = await res.text().catch(() => "");
                showToast(`❌ 切换失败：${errText || res.statusText}`);
                return;
            }
            var json = await res.json();
            if (json && json.ok) {
                setIsOpen(false);
                showToast(`✅ 已切换到分支 ${json.currentBranch || targetBranch}`);
                onBranchSwitched(json.currentBranch || targetBranch);
            }
            else {
                showToast(`❌ 切换失败：${json.error || json.message || "未知错误"}`);
            }
        }
        catch (e) {
            showToast(`❌ 切换分支网络请求失败：${e.message || e}`);
        }
        finally {
            setSwitching(false);
        }
    };
    var filtered = branches.filter((b) => !search || b.name.toLowerCase().includes(search.toLowerCase()));
    var localBranches = filtered.filter((b) => !b.isRemote);
    var remoteBranches = filtered.filter((b) => b.isRemote);
    var h = React.createElement;
    return h("div", {
        ref: containerRef,
        style: { position: "relative", display: "inline-block" },
    }, h("button", {
        type: "button",
        className: "dsh-github-branch-btn",
        onClick: toggleOpen,
        title: `当前分支: ${currentBranch}（点击可切换分支）`,
    }, renderGitIcon(12, "currentColor"), h("span", { style: { maxWidth: "160px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, currentBranch), h("span", { style: { fontSize: "9px", opacity: 0.7, marginLeft: "1px" } }, "▾")), isOpen
        ? h("div", { className: "dsh-github-branch-dropdown" }, h("div", { className: "dsh-github-branch-search" }, h("input", {
            className: "dsh-github-branch-input",
            type: "text",
            placeholder: "搜索分支 (输入关键词)...",
            value: search,
            autoFocus: true,
            onChange: (e) => setSearch(e.target.value),
        })), h("div", { className: "dsh-github-branch-list" }, loading
            ? h("div", { style: { padding: "12px", textAlign: "center", fontSize: "11px", color: "var(--dsw-alias-label-secondary, #656d76)" } }, "⏳ 读取分支中...")
            : fetchError
                ? h("div", { style: { padding: "12px", textAlign: "center", fontSize: "11px", color: "var(--dsw-alias-state-error-primary, #cf222e)" } }, `⚠️ ${fetchError}`)
                : [
                    localBranches.length > 0
                        ? h("div", { key: "hdr-local", style: { padding: "4px 12px", fontSize: "10px", fontWeight: 600, color: "var(--dsw-alias-label-tertiary, #8c8c8c)", textTransform: "uppercase" } }, "本地分支")
                        : null,
                    ...localBranches.map((b) => h("div", {
                        key: b.name,
                        className: "dsh-github-branch-item" + (b.isCurrent ? " active" : ""),
                        onClick: () => handleSwitch(b.name),
                        title: b.subject ? `${b.name}\n${b.subject} (${b.relativeTime})` : b.name,
                    }, h("div", { style: { display: "flex", alignItems: "center", gap: "6px", minWidth: 0 } }, b.isCurrent
                        ? h("span", { style: { color: "var(--dsw-alias-state-success, #2ea043)", fontWeight: 700 } }, "✓")
                        : h("span", { style: { width: "10px" } }), h("span", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, b.name)), b.relativeTime
                        ? h("span", { style: { fontSize: "10px", color: "var(--dsw-alias-label-tertiary, #8c8c8c)", flexShrink: 0, marginLeft: "6px" } }, b.relativeTime)
                        : null)),
                    remoteBranches.length > 0
                        ? h("div", { key: "hdr-remote", style: { padding: "6px 12px 4px", fontSize: "10px", fontWeight: 600, color: "var(--dsw-alias-label-tertiary, #8c8c8c)", textTransform: "uppercase", borderTop: "1px solid var(--dsw-alias-border-l2, rgba(0,0,0,0.06))", marginTop: "4px" } }, "远程分支 (点击检出)")
                        : null,
                    ...remoteBranches.map((b) => h("div", {
                        key: b.name,
                        className: "dsh-github-branch-item",
                        onClick: () => handleSwitch(b.name),
                        title: b.subject ? `${b.name}\n${b.subject} (${b.relativeTime})` : b.name,
                    }, h("div", { style: { display: "flex", alignItems: "center", gap: "6px", minWidth: 0 } }, h("span", { style: { width: "10px" } }), h("span", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", opacity: 0.85 } }, b.name)), b.relativeTime
                        ? h("span", { style: { fontSize: "10px", color: "var(--dsw-alias-label-tertiary, #8c8c8c)", flexShrink: 0, marginLeft: "6px" } }, b.relativeTime)
                        : null)),
                    filtered.length === 0 && !loading
                        ? h("div", { style: { padding: "12px", textAlign: "center", fontSize: "11px", color: "var(--dsw-alias-label-secondary, #656d76)" } }, "未匹配到任何分支")
                        : null,
                ].filter(Boolean)), switching
            ? h("div", { style: { padding: "6px", textAlign: "center", fontSize: "11px", background: "rgba(9, 105, 218, 0.1)", color: "var(--dsw-alias-link, #0969da)", fontWeight: 500 } }, "正在切换分支...")
            : null)
        : null);
}

// ---- [Bundled: auth-guide-card.js] ----
/**
 * 认证与安装引导卡片组件（响应式自适应中央大面板与右侧栏）
 */
function AuthGuideCard(props) {
    var auth = props ? props.auth : null;
    var onRefresh = props ? props.onRefresh : () => { };
    var isRightbar = Boolean(props && props.isRightbar);
    var [copied, setCopied] = React.useState(false);
    var [launching, setLaunching] = React.useState(false);
    // 唤起成功/复用后的短冷却：按钮锁 8 秒，避免用户连点把窗口点成一串
    var [cooldown, setCooldown] = React.useState(false);
    var [toastMsg, setToastMsg] = React.useState(null);
    var isNetwork = Boolean(auth?.networkError);
    var notInstalled = !isNetwork && Boolean(auth && auth.installed === false);
    var notLoggedIn = !isNetwork && !notInstalled && Boolean(!auth?.loggedIn);
    var guide = auth?.installGuide;
    var defaultCmd = isNetwork
        ? "gh auth status"
        : notInstalled
            ? (guide?.command || "winget install --id GitHub.cli")
            : "gh auth login";
    var copyCmd = (cmd) => {
        try {
            if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(cmd);
            }
            else {
                var input = document.createElement("textarea");
                input.value = cmd;
                document.body.appendChild(input);
                input.select();
                document.execCommand("copy");
                document.body.removeChild(input);
            }
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
        catch (e) {
            console.warn("复制失败:", e);
        }
    };
    var launchTerminal = async (cmd) => {
        // 防连点：一次唤起还没落定、或刚开过窗口时，重复点击直接把请求憋回去。
        // 服务端还有冷却闸与认证态闸，这里只是省掉无意义的往返。
        if (launching || cooldown)
            return;
        setLaunching(true);
        setToastMsg(null);
        try {
            var res = await fetch("/api/github/action", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action: "open_terminal", command: cmd })
            });
            var json = await res.json();
            if (json.ok) {
                // 服务端回 launched / reused / skipped 三态：如实转述，不要再统一说「已唤起」。
                // reused 表示已有窗口在等输入，skipped 表示 gh 其实已登录——这两种都别再开新窗。
                setToastMsg(json.message || "已唤起系统终端，请在弹出窗口中完成操作；若未弹出，可手动打开终端执行上方命令");
                setCooldown(true);
                setTimeout(function () { setCooldown(false); }, 8000);
                setTimeout(function () { setToastMsg(null); }, 8000);
            }
            else {
                setToastMsg("❌ " + (json.message || "唤起失败，请手动打开终端执行上方命令"));
            }
        }
        catch (e) {
            setToastMsg("无法连接后台服务，请手动打开终端执行上方命令");
        }
        finally {
            setLaunching(false);
        }
    };
    var openDownload = async () => {
        var url = guide?.downloadUrl || "https://cli.github.com/";
        try {
            await fetch("/api/github/action", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action: "open_browser", url })
            });
        }
        catch (e) {
            window.open(url, "_blank", "noopener,noreferrer");
        }
    };
    var openProxySettings = () => {
        try {
            window.dispatchEvent(new CustomEvent("dsh-github-open-proxy"));
        }
        catch (e) { }
    };
    var h = React.createElement;
    return h("div", {
        className: "dsh-github-guide-card " + (isNetwork ? "warning" : notInstalled ? "danger" : "warning"),
        style: isRightbar ? { padding: "12px", marginBottom: "12px" } : undefined
    }, h("div", { className: "dsh-github-guide-header" }, isNetwork
        ? "🌐 无法连接 GitHub 服务器"
        : notInstalled
            ? "⚠️ 未检测到 GitHub CLI (gh)"
            : "🔑 GitHub 账号尚未登录", h("span", { className: "dsh-github-badge " + (isNetwork ? "dsh-badge-yellow" : notInstalled ? "dsh-badge-red" : "dsh-badge-yellow") }, isNetwork ? "网络受限" : notInstalled ? "未安装" : "未认证")), h("div", { className: "dsh-github-guide-desc" }, isNetwork
        ? (auth?.networkErrorReason || "检测到本机已安装 GitHub CLI，但当前无法连接至 api.github.com（网络超时、DNS 无法解析或被系统代理阻断）。")
        : notInstalled
            ? (guide?.description || "DSH GitHub Flow 插件依赖官方 GitHub CLI 工具与云端进行安全交互，当前系统 PATH 中未检测到该工具。")
            : "检测到本机已安装 GitHub CLI，请完成账号授权以解锁仓库管理、PR 审查和 Issues 待办。"), h("div", { className: "dsh-github-cmd-box" }, h("code", null, defaultCmd), h("button", {
        className: "dsh-github-copy-btn " + (copied ? "copied" : ""),
        onClick: () => copyCmd(defaultCmd),
        title: "复制命令到剪贴板"
    }, copied ? "✓ 已复制" : "📋 复制命令")), !notInstalled && !isRightbar
        ? (isNetwork
            ? h("ol", { className: "dsh-github-steps-list" }, h("li", null, "检查系统本地网络连接或 DNS 解析，确认能正常访问 github.com；"), h("li", null, "若使用了网络代理工具，可在下方点击「配置网络代理」填写 HTTP 或 SOCKS5 代理；"), h("li", null, "配置或恢复网络后，切回本面板或点击「重试连接」即可自动同步数据。"))
            : h("ol", { className: "dsh-github-steps-list" }, h("li", null, "打开系统终端（PowerShell / CMD / Terminal），运行上述命令；"), h("li", null, "按提示依次选择「GitHub.com」➜「HTTPS」➜「Login with a web browser」；"), h("li", null, "按回车打开浏览器确认授权后，切回本页面即可自动恢复。")))
        : null, h("div", { className: "dsh-github-guide-actions" }, isNetwork
        ? h("button", {
            className: "dsh-github-action-btn",
            onClick: onRefresh,
            title: "重新发起网络连接校验"
        }, "🔄 重试网络连接")
        : null, isNetwork
        ? h("button", {
            className: "dsh-github-action-btn",
            onClick: openProxySettings,
            title: "打开网络代理设置，配置 HTTP/SOCKS5 代理服务器"
        }, "⚙️ 配置网络代理")
        : null, h("button", {
        className: "dsh-github-action-btn",
        onClick: () => launchTerminal(defaultCmd),
        disabled: launching || cooldown,
        title: cooldown ? "刚唤起过终端，稍等几秒再试" : "自动唤起系统终端并执行该命令"
    }, launching
        ? "正在唤起..."
        : cooldown
            ? "⏳ 已唤起，稍候"
            : (isNetwork ? "💻 终端排查状态" : notInstalled ? "💻 唤起终端安装" : "💻 唤起终端登录")), notInstalled
        ? h("button", {
            className: "dsh-github-action-btn",
            onClick: openDownload,
            title: "打开 GitHub CLI 官方下载主页获取安装包"
        }, "🌐 官网安装包 (.msi/.pkg)")
        : null, !isNetwork
        ? h("button", {
            className: "dsh-github-action-btn",
            onClick: function () {
                setToastMsg("正在快速检测登录状态...");
                var probeController = new AbortController();
                var probeTimer = setTimeout(function () { probeController.abort(); }, 10000);
                fetch("/api/github/auth?force=true", { signal: probeController.signal })
                    .then(function (res) { return res.json(); })
                    .then(function (json) {
                    clearTimeout(probeTimer);
                    if (json && json.ok && json.auth && json.auth.loggedIn) {
                        setToastMsg("✅ 已识别到 GitHub CLI 登录态，正在拉取数据...");
                        clearStoredGlobalOverview();
                        onRefresh();
                    }
                    else {
                        setToastMsg("⚠️ 暂未检测到登录凭据，请在终端执行 gh auth login 完成授权");
                        onRefresh();
                    }
                })
                    .catch(function () {
                    clearTimeout(probeTimer);
                    setToastMsg("❌ 检测超时或后端不可达，请稍后重试");
                    onRefresh();
                });
            },
            title: "重新检测登录与安装状态"
        }, "🔄 刷新状态")
        : null), toastMsg
        ? h("div", { style: { fontSize: "12px", color: "var(--dsw-alias-link, #0969da)", marginTop: "8px" } }, `ℹ️ ${toastMsg}`)
        : null, h("div", { className: "dsh-github-guide-tip" }, notInstalled
        ? "💡 提示：使用包管理器安装完成后，若未立即识别，可重启 DeepSeek Harness 应用刷新系统环境变量 PATH。"
        : "💡 提示：凭证由官方 GitHub CLI 加密保存在操作系统安全凭据库中，授权完毕切回本窗口将自动识别刷新。"));
}

// ---- [Bundled: upgrade-card.js] ----
/**
 * 通用升级通知与一键升级卡片组件（自适应右侧栏紧凑模式与全景大面板模式）
 */
function UpgradeNotificationCard(props) {
    var updateInfo = props.updateInfo;
    var isRightbar = Boolean(props.isRightbar);
    if (!updateInfo || !updateInfo.hasUpdate)
        return null;
    var storageKey = "dsh_dismissed_update_" + (updateInfo.latestVersion || "latest");
    var [dismissed, setDismissed] = React.useState(function () {
        try {
            return localStorage.getItem(storageKey) === "true";
        }
        catch (e) {
            return false;
        }
    });
    var [status, setStatus] = React.useState("idle");
    var [msg, setMsg] = React.useState("");
    React.useEffect(function () {
        fetch("/api/github/upgrade-status")
            .then(function (res) { return res.json(); })
            .then(function (json) {
            if (json && json.ok && json.data) {
                if (json.data.state === "upgrading") {
                    setStatus("upgrading");
                    setMsg("正在拉取最新版本（约需 5~15 秒）...");
                }
                else if (json.data.state === "success") {
                    setStatus("success");
                    setMsg(json.data.message || "升级成功！已安装最新依赖。");
                }
            }
        })
            .catch(function () { });
    }, []);
    if (dismissed)
        return null;
    var handleUpgrade = async function () {
        if (status === "upgrading")
            return;
        setStatus("upgrading");
        setMsg("正在拉取最新版本（约需 5~15 秒）...");
        try {
            var res = await fetch("/api/github/upgrade", { method: "POST" });
            var json = await res.json().catch(function () { return {}; });
            if (res.ok && json.ok) {
                setStatus("success");
                setMsg(json.message || "升级成功！已安装最新依赖。");
            }
            else {
                setStatus("failed");
                var logText = String(json.log || "");
                var isAgeViolation = json.errorType === "MINIMUM_RELEASE_AGE_VIOLATION" ||
                    logText.includes("ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION") ||
                    logText.includes("minimumReleaseAge") ||
                    (typeof json.message === "string" && (json.message.includes("24 小时安全保护期") || json.message.includes("防投毒")));
                if (isAgeViolation) {
                    // 命中 DSH 内置包管理器 24 小时防投毒策略：收起英文报错堆栈，呈现全中文专业自愈指引
                    setMsg("🛡️ 触发 DSH 新版本 24 小时安全保护期（npm 供应链防投毒策略）。检测到目标版本刚刚发布未满 24 小时，DSH 内置包管理器暂缓了自动升级以保障系统安全。\n\n" +
                        "【推荐操作】：\n" +
                        "1. 立即尝鲜：请先【完全退出关闭 DSH 应用程序】，然后在系统终端执行手动安装命令（点击右侧「📋 复制命令」获取）；\n" +
                        "2. 稍后升级：无需任何操作，发版满 24 小时后直接在此点击「⚡ 一键自动升级」即可平滑完成。");
                }
                else {
                    var logTail = "";
                    if (json.log && typeof json.log === "string") {
                        var lines = json.log.trim().split("\n").filter(function (l) { return l.trim(); });
                        if (lines.length > 0) {
                            logTail = "\n\n📝 日志末尾: " + lines.slice(-4).join(" ⏎ ").slice(0, 400);
                        }
                    }
                    setMsg((json.message || "升级命令执行失败，请在宿主终端手动执行。") + logTail);
                }
            }
        }
        catch (err) {
            setStatus("failed");
            setMsg("无法连接后端执行升级: " + (err.message || err));
        }
    };
    var handleDismiss = function () {
        try {
            localStorage.setItem(storageKey, "true");
        }
        catch (e) { }
        setDismissed(true);
    };
    var handleCopy = function () {
        var cmd = updateInfo.upgradeCommand || "dsh plugin --profile desktop add dsh-github-flow@latest";
        if (navigator.clipboard) {
            navigator.clipboard.writeText(cmd);
            alert("已复制升级命令到剪贴板：\n" + cmd);
        }
        else {
            prompt("请复制升级命令：", cmd);
        }
    };
    var handleReload = function () {
        window.location.reload();
    };
    var h = React.createElement;
    var isAgeViolation = msg.includes("24 小时安全保护期") || msg.includes("防投毒");
    if (isRightbar) {
        return h("div", {
            className: "dsh-github-upgrade-strip",
            style: {
                padding: "10px 12px",
                marginBottom: "12px",
                borderRadius: "8px",
                background: status === "success"
                    ? "var(--dsw-alias-state-success-subtle, rgba(46, 160, 67, 0.12))"
                    : (isAgeViolation
                        ? "rgba(217, 119, 6, 0.12)"
                        : "var(--dsw-alias-bg-module-platform, rgba(9, 105, 218, 0.08))"),
                border: "1px solid " + (status === "success"
                    ? "var(--dsw-alias-state-success-border, rgba(46, 160, 67, 0.35))"
                    : (isAgeViolation
                        ? "rgba(217, 119, 6, 0.35)"
                        : "var(--dsw-alias-border-l2, rgba(9, 105, 218, 0.25))")),
                fontSize: "12px",
            },
        }, h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" } }, h("span", { style: { fontWeight: 600, color: "var(--dsw-alias-label-primary, #1f2328)" } }, status === "success" ? "🎉 升级完成" : (isAgeViolation ? "🛡️ 处于 24h 安全保护期" : "🚀 发现新版 v" + updateInfo.latestVersion)), h("button", {
            onClick: handleDismiss,
            title: "不再提醒此版本",
            style: { background: "none", border: "none", cursor: "pointer", color: "var(--dsw-alias-label-tertiary, #8c8c8c)", fontSize: "14px", padding: 0 },
        }, "✕")), h("div", { style: { fontSize: "11px", color: "var(--dsw-alias-label-secondary, #656d76)", marginBottom: "8px", lineHeight: "1.4" } }, msg || (status === "success"
            ? "需重启 DSH 服务彻底生效后端工具，或刷新网页预览新界面。"
            : "当前: v" + updateInfo.currentVersion + "，推荐升级以获取最新功能。")), h("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap" } }, status === "success"
            ? h("button", {
                className: "dsh-github-btn-sm",
                onClick: handleReload,
                style: { flex: 1, justifyContent: "center", background: "#2ea043", color: "#fff", borderColor: "#2ea043" },
            }, "🔄 刷新页面")
            : h("button", {
                className: "dsh-github-btn-sm",
                disabled: status === "upgrading",
                onClick: handleUpgrade,
                style: {
                    flex: 1,
                    justifyContent: "center",
                    background: "var(--dsw-alias-link, #0969da)",
                    color: "#fff",
                    borderColor: "var(--dsw-alias-link, #0969da)",
                    opacity: status === "upgrading" ? 0.7 : 1,
                },
            }, status === "upgrading" ? "升级中..." : "⚡ 一键升级"), h("button", {
            className: "dsh-github-btn-sm",
            onClick: handleCopy,
            style: {
                fontSize: "11px",
                padding: "4px 8px",
                ...(status === "failed" ? {
                    background: "var(--dsw-alias-link, #0969da)",
                    color: "#ffffff",
                    borderColor: "var(--dsw-alias-link, #0969da)",
                    fontWeight: 600,
                } : {}),
            },
        }, "📋 复制命令")));
    }
    return h("div", {
        className: "dsh-github-upgrade-banner",
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 18px",
            marginBottom: "16px",
            borderRadius: "8px",
            background: status === "success"
                ? "linear-gradient(90deg, rgba(46, 160, 67, 0.15) 0%, rgba(9, 105, 218, 0.12) 100%)"
                : (isAgeViolation
                    ? "linear-gradient(90deg, rgba(217, 119, 6, 0.15) 0%, rgba(245, 158, 11, 0.12) 100%)"
                    : "linear-gradient(90deg, rgba(9, 105, 218, 0.12) 0%, rgba(137, 87, 229, 0.12) 100%)"),
            border: "1px solid " + (status === "success" ? "rgba(46, 160, 67, 0.35)" : (isAgeViolation ? "rgba(217, 119, 6, 0.35)" : "rgba(9, 105, 218, 0.3)")),
            fontSize: "13px",
        },
    }, h("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, h("span", { style: { fontSize: "20px" } }, status === "success" ? "🎉" : (isAgeViolation ? "🛡️" : "🚀")), h("div", null, h("div", { style: { fontWeight: 600, color: "var(--dsw-alias-label-primary, #1f2328)" } }, status === "success"
        ? "升级完成！新版本 v" + updateInfo.latestVersion + " 已写入"
        : (isAgeViolation
            ? "🛡️ 触发 DSH 新版本 24 小时安全保护期 (供应链防投毒策略)"
            : "发现 dsh-github-flow 新版本 v" + updateInfo.latestVersion + "（当前版本: v" + updateInfo.currentVersion + "）")), h("div", { style: { fontSize: "12px", color: "var(--dsw-alias-label-secondary, #656d76)", marginTop: "2px" } }, msg || (status === "success"
        ? "💡 提示：DSH 后端驻留了旧版内存，需重启 DSH 服务彻底生效后端工具；若仅预览界面改动可先刷新网页。"
        : "包含最新 GitHub 工具特性与性能优化，点击右侧可一键自动升级。")))), h("div", { style: { display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 } }, status === "success"
        ? h("button", {
            className: "dsh-github-btn-sm",
            onClick: handleReload,
            style: { background: "#2ea043", color: "#fff", borderColor: "#2ea043", padding: "6px 14px", fontWeight: 600 },
        }, "🔄 立即刷新页面")
        : h("button", {
            className: "dsh-github-btn-sm",
            disabled: status === "upgrading",
            onClick: handleUpgrade,
            style: {
                background: "var(--dsw-alias-link, #0969da)",
                color: "#fff",
                borderColor: "var(--dsw-alias-link, #0969da)",
                padding: "6px 14px",
                fontWeight: 600,
                opacity: status === "upgrading" ? 0.7 : 1,
            },
        }, status === "upgrading" ? "正在自动升级中..." : "⚡ 一键自动升级"), h("button", {
        className: "dsh-github-btn-sm",
        onClick: handleCopy,
        style: {
            padding: "6px 12px",
            ...(status === "failed" ? {
                background: "var(--dsw-alias-link, #0969da)",
                color: "#ffffff",
                borderColor: "var(--dsw-alias-link, #0969da)",
                fontWeight: 600,
            } : {}),
        },
    }, status === "failed"
        ? (isAgeViolation ? "📋 复制命令 (需先退出DSH)" : "📋 复制命令手动升级")
        : "📋 复制命令"), h("button", {
        onClick: handleDismiss,
        title: "不再提醒此版本",
        style: { background: "none", border: "none", cursor: "pointer", color: "var(--dsw-alias-label-tertiary, #8c8c8c)", fontSize: "16px", padding: "0 4px" },
    }, "✕")));
}

// ---- [Bundled: network-banner.js] ----
/**
 * 网络连接异常与离线状态醒目横幅组件
 */
function NetworkAlertBanner(props) {
    var isRightbar = Boolean(props.isRightbar);
    var reason = props.networkErrorReason || "无法连接至 GitHub API 服务器（网络超时或被防火墙/代理阻断），本次未能获取最新数据。";
    var lastSyncedAt = props.lastSyncedAt || 0;
    var onRefresh = props.onRefresh || (() => { });
    var onOpenProxy = props.onOpenProxy || (() => {
        try {
            window.dispatchEvent(new CustomEvent("dsh-github-open-proxy"));
        }
        catch (e) { }
    });
    var formatTime = function (ts) {
        if (!ts)
            return "未知时间";
        var diff = Date.now() - ts;
        var MIN = 60 * 1000, HOUR = 60 * MIN, DAY = 24 * HOUR;
        if (diff < MIN)
            return "刚刚";
        if (diff < HOUR)
            return Math.floor(diff / MIN) + " 分钟前";
        if (diff < DAY)
            return Math.floor(diff / HOUR) + " 小时前";
        return new Date(ts).toLocaleDateString();
    };
    var h = React.createElement;
    return h("div", {
        className: "dsh-github-network-alert",
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            padding: isRightbar ? "10px 12px" : "12px 16px",
            marginBottom: "12px",
            borderRadius: "8px",
            background: "rgba(240, 136, 62, 0.12)",
            border: "1px solid rgba(240, 136, 62, 0.4)",
            fontSize: "12px",
            color: "var(--dsw-alias-label-primary, #1f2328)",
        },
    }, h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "6px" } }, h("div", { style: { display: "flex", alignItems: "center", gap: "6px", fontWeight: 600, color: "var(--dsw-alias-state-attention-primary, #9a6700)" } }, h("span", null, "⚠️"), h("span", null, "网络连接失败，当前展示离线历史数据")), h("div", { style: { display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 } }, h("button", {
        className: "dsh-github-btn-sm",
        onClick: onRefresh,
        title: "重新发起网络连接刷新",
        style: { padding: "3px 8px", fontSize: "11px", cursor: "pointer" },
    }, "🔄 重试刷新"), h("button", {
        className: "dsh-github-btn-sm",
        onClick: onOpenProxy,
        title: "打开网络代理设置配置 HTTP/SOCKS5 代理",
        style: { padding: "3px 8px", fontSize: "11px", cursor: "pointer" },
    }, "⚙️ 配置代理"))), h("div", { style: { fontSize: "11px", color: "var(--dsw-alias-label-secondary, #656d76)", lineHeight: 1.4 } }, reason + (lastSyncedAt ? `（当前数据快照同步于 ${formatTime(lastSyncedAt)}）` : "")));
}

// ---- [Bundled: sync-status-badge.js] ----
/**
 * 数据新鲜度与同步状态微标组件
 */
function SyncStatusBadge(props) {
    var syncStatus = props.syncStatus;
    var lastSyncedAt = props.lastSyncedAt;
    var isRightbar = Boolean(props.isRightbar);
    var text = "";
    var bg = "rgba(101, 109, 118, 0.1)";
    var color = "var(--dsw-alias-label-secondary, #656d76)";
    var formatTimeAgo = function (ts) {
        if (!ts)
            return "刚刚";
        var diffSec = Math.floor((Date.now() - ts) / 1000);
        if (diffSec < 60)
            return "刚刚";
        var diffMin = Math.floor(diffSec / 60);
        if (diffMin < 60)
            return diffMin + "分钟前";
        var diffHour = Math.floor(diffMin / 60);
        if (diffHour < 24)
            return diffHour + "小时前";
        var diffDay = Math.floor(diffHour / 24);
        return diffDay + "天前";
    };
    if (syncStatus === "syncing") {
        text = isRightbar ? "⏳ 同步中..." : "⏳ 后台同步中...";
        bg = "rgba(9, 105, 218, 0.12)";
        color = "var(--dsw-alias-link, #0969da)";
    }
    else if (syncStatus === "fresh") {
        var timeStr = lastSyncedAt ? new Date(lastSyncedAt).toLocaleTimeString() : "";
        text = "✅ " + (isRightbar ? "最新" : "已是最新") + (timeStr ? " (" + timeStr + ")" : "");
        bg = "rgba(46, 160, 67, 0.12)";
        color = "var(--dsw-alias-state-success, #2ea043)";
    }
    else if (syncStatus === "cached") {
        text = "📦 本地快照 (" + formatTimeAgo(lastSyncedAt) + ")";
        bg = "rgba(101, 109, 118, 0.12)";
        color = "var(--dsw-alias-label-secondary, #656d76)";
    }
    else if (syncStatus === "failed") {
        text = isRightbar ? "❌ 刷新失败 (离线)" : "❌ 网络断开 (展示离线数据)";
        bg = "rgba(207, 34, 46, 0.12)";
        color = "var(--dsw-alias-state-error-primary, #cf222e)";
    }
    if (!text)
        return null;
    return React.createElement("span", {
        className: "dsh-github-sync-badge",
        style: {
            fontSize: isRightbar ? "10px" : "11px",
            padding: isRightbar ? "2px 6px" : "3px 8px",
            borderRadius: "12px",
            background: bg,
            color: color,
            marginLeft: isRightbar ? "6px" : "10px",
            fontWeight: 500,
            display: "inline-flex",
            alignItems: "center",
            whiteSpace: "nowrap",
        },
    }, text);
}

// ---- [Bundled: commit-modal.js] ----
/**
 * 提交详情模态弹窗组件（与设置弹窗同构）
 */
function CommitDetailModal(props) {
    if (!props.commit)
        return null;
    var c = props.commit;
    var h = React.createElement;
    var [fetchedDetail, setFetchedDetail] = React.useState(null);
    var [fetchingDetail, setFetchingDetail] = React.useState(false);
    React.useEffect(function () {
        var onKeyDown = function (e) {
            if (e.key === "Escape" || e.keyCode === 27)
                props.onClose();
        };
        window.addEventListener("keydown", onKeyDown);
        return function () { window.removeEventListener("keydown", onKeyDown); };
    }, [props.onClose]);
    React.useEffect(function () {
        setFetchedDetail(null);
        if (c.body || c.stat)
            return;
        setFetchingDetail(true);
        var url = "/api/github/commit-detail?sha=" + encodeURIComponent(c.sha) + (props.cwd ? "&cwd=" + encodeURIComponent(props.cwd) : "");
        fetch(url)
            .then(function (r) { return r.json(); })
            .then(function (j) {
            setFetchingDetail(false);
            if (j && j.ok && j.detail)
                setFetchedDetail(j.detail);
        })
            .catch(function () { setFetchingDetail(false); });
    }, [c.sha, props.cwd]);
    var effectiveBody = c.body;
    var effectiveStat = c.stat;
    if (!effectiveBody && !effectiveStat && fetchedDetail) {
        effectiveStat = fetchedDetail;
    }
    var parsedStat = React.useMemo(() => {
        return effectiveStat && typeof parseGitStatText === "function" ? parseGitStatText(effectiveStat) : null;
    }, [effectiveStat]);
    return h("div", {
        className: "dsh-github-modal-overlay",
        onClick: props.onClose,
        style: { zIndex: 100000 },
    }, h("div", {
        className: "dsh-github-modal-dialog",
        style: { width: "94%", maxWidth: "520px", maxHeight: "86vh", display: "flex", flexDirection: "column", overflow: "hidden" },
        onClick: function (e) { e.stopPropagation(); },
    }, h("div", { className: "dsh-github-modal-header", style: { flexShrink: 0 } }, h("div", { style: { display: "flex", alignItems: "center", gap: "8px" } }, renderGitIcon(15, "#1296db"), h("h3", { style: { margin: 0, fontSize: "14px", fontWeight: 600 } }, "提交详情")), h("button", {
        style: { background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "var(--dsw-alias-label-secondary, #656d76)", padding: "0 4px" },
        onClick: props.onClose,
        title: "关闭 (Esc)",
    }, "✕")), h("div", {
        className: "dsh-github-modal-body",
        style: { padding: "16px", overflowY: "auto", flex: 1, minHeight: 0, display: "flex", flexDirection: "column", gap: "12px", boxSizing: "border-box" },
    }, h("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "11px", opacity: 0.85 } }, h("span", { style: { fontFamily: "monospace", fontWeight: 600, userSelect: "all" }, title: "完整 SHA: " + (c.fullSha || c.sha) }, c.fullSha || c.sha), h("span", null, c.relative)), h("div", { style: { fontSize: "13px", fontWeight: 600, color: "var(--dsw-alias-label-primary, #1f2328)", wordBreak: "break-word", lineHeight: "1.45" } }, c.subject), h("div", { style: { fontSize: "11px", color: "var(--dsw-alias-label-secondary, #656d76)" } }, `提交者: ${c.author}${c.email ? ` <${c.email}>` : ""}${c.date ? ` · ${c.date}` : ""}`), effectiveBody
        ? h("div", {
            style: {
                fontSize: "12px",
                lineHeight: "1.6",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                padding: "10px 12px",
                borderRadius: "6px",
                background: "var(--dsw-alias-bg-module-platform, #f6f8fa)",
                border: "1px solid var(--dsw-alias-border-l2, #e1e4e8)",
            },
        }, effectiveBody)
        : null, effectiveStat
        ? h("div", { style: { display: "flex", flexDirection: "column", gap: "6px" } }, h("div", {
            style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "11px",
                fontWeight: 600,
            },
        }, h("div", { style: { opacity: 0.85, display: "flex", alignItems: "center", gap: "6px" } }, "📁 文件变更统计", parsedStat?.summary
            ? h("span", { style: { opacity: 0.65, fontWeight: 400 } }, `(${parsedStat.summary.filesChanged} 个文件)`)
            : parsedStat?.files
                ? h("span", { style: { opacity: 0.65, fontWeight: 400 } }, `(${parsedStat.files.length} 个文件)`)
                : null), parsedStat?.summary
            ? h("div", { style: { display: "flex", gap: "6px", fontFamily: "monospace", fontWeight: 600 } }, parsedStat.summary.insertions > 0
                ? h("span", {
                    style: {
                        color: "var(--dsw-alias-state-success-primary, #1a7f37)",
                        backgroundColor: "var(--dsw-alias-state-success-subtle, rgba(46,160,67,0.12))",
                        padding: "1px 6px",
                        borderRadius: "10px",
                    },
                }, `+${parsedStat.summary.insertions}`)
                : null, parsedStat.summary.deletions > 0
                ? h("span", {
                    style: {
                        color: "var(--dsw-alias-state-error-primary, #cf222e)",
                        backgroundColor: "var(--dsw-alias-state-error-subtle, rgba(248,81,73,0.12))",
                        padding: "1px 6px",
                        borderRadius: "10px",
                    },
                }, `-${parsedStat.summary.deletions}`)
                : null)
            : null), parsedStat && parsedStat.files && parsedStat.files.length > 0
            ? h("div", {
                className: "dsh-github-stat-list",
                style: {
                    borderRadius: "6px",
                    border: "1px solid var(--dsw-alias-border-l2, #e1e4e8)",
                    background: "var(--dsw-alias-bg-module-platform, #f6f8fa)",
                    maxHeight: "36vh",
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                },
            }, parsedStat.files.map(function (f, idx) {
                var diffBlocks = [];
                if (!f.isBinary && f.total > 0) {
                    var totalRatio = f.additions + f.deletions;
                    var addBlocks = totalRatio > 0 ? Math.round((f.additions / totalRatio) * 5) : 0;
                    var delBlocks = totalRatio > 0 ? Math.round((f.deletions / totalRatio) * 5) : 0;
                    if (f.additions > 0 && addBlocks === 0)
                        addBlocks = 1;
                    if (f.deletions > 0 && delBlocks === 0)
                        delBlocks = 1;
                    while (addBlocks + delBlocks > 5) {
                        if (addBlocks > delBlocks)
                            addBlocks--;
                        else
                            delBlocks--;
                    }
                    var neutralBlocks = Math.max(0, 5 - addBlocks - delBlocks);
                    for (var bi = 0; bi < addBlocks; bi++) {
                        diffBlocks.push(h("span", { key: "a" + bi, style: { width: "3px", height: "8px", borderRadius: "1px", backgroundColor: "var(--dsw-alias-state-success-primary, #1a7f37)" } }));
                    }
                    for (var bj = 0; bj < delBlocks; bj++) {
                        diffBlocks.push(h("span", { key: "d" + bj, style: { width: "3px", height: "8px", borderRadius: "1px", backgroundColor: "var(--dsw-alias-state-error-primary, #cf222e)" } }));
                    }
                    for (var bk = 0; bk < neutralBlocks; bk++) {
                        diffBlocks.push(h("span", { key: "n" + bk, style: { width: "3px", height: "8px", borderRadius: "1px", backgroundColor: "var(--dsw-alias-border-subtle, rgba(0,0,0,0.15))" } }));
                    }
                }
                return h("div", {
                    key: idx,
                    className: "dsh-github-stat-row",
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "6px 10px",
                        fontSize: "11px",
                        lineHeight: "1.4",
                        borderBottom: idx < parsedStat.files.length - 1 ? "1px solid var(--dsw-alias-border-subtle, rgba(0,0,0,0.06))" : "none",
                        gap: "8px",
                    },
                    title: f.path + (f.isBinary ? " (二进制文件)" : ` (+${f.additions}, -${f.deletions})`),
                }, h("div", {
                    style: {
                        fontFamily: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, monospace",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        flex: 1,
                        minWidth: 0,
                        color: "var(--dsw-alias-label-primary, #1f2328)",
                    },
                }, f.path), h("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        flexShrink: 0,
                        fontFamily: "monospace",
                        fontWeight: 600,
                    },
                }, f.isBinary
                    ? h("span", { style: { opacity: 0.6, fontSize: "10px" } }, "二进制")
                    : [
                        f.additions > 0
                            ? h("span", {
                                key: "add",
                                style: { color: "var(--dsw-alias-state-success-primary, #1a7f37)" },
                            }, `+${f.additions}`)
                            : null,
                        f.deletions > 0
                            ? h("span", {
                                key: "del",
                                style: { color: "var(--dsw-alias-state-error-primary, #cf222e)" },
                            }, `-${f.deletions}`)
                            : null,
                        diffBlocks.length > 0
                            ? h("div", {
                                key: "bar",
                                style: { display: "flex", gap: "1px", marginLeft: "2px", alignItems: "center" },
                            }, ...diffBlocks)
                            : null,
                    ]));
            }))
            : h("pre", {
                className: "dsh-github-commit-pre",
                style: {
                    fontSize: "11px",
                    lineHeight: "1.5",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    margin: 0,
                    maxHeight: "34vh",
                    overflowY: "auto",
                    padding: "8px 10px",
                    borderRadius: "6px",
                    background: "var(--dsw-alias-bg-module-platform, #f6f8fa)",
                    border: "1px solid var(--dsw-alias-border-l2, #e1e4e8)",
                },
            }, effectiveStat))
        : null, !effectiveBody && !effectiveStat
        ? (fetchingDetail
            ? h("div", { style: { fontSize: "12px", opacity: 0.7, padding: "8px 0" } }, "⏳ 正在获取详细变更说明…")
            : h("div", { style: { fontSize: "11px", opacity: 0.6, fontStyle: "italic", padding: "6px 0" } }, "（该提交未包含多行正文；重启 DSH 桌面端可同步最新格式并直接呈现变更统计）"))
        : null)));
}

// ---- [Bundled: pr-review-modal.js] ----
/**
 * PR 详情 + 评审弹窗（GitHub 网页那种结构：正文 + 右栏元信息 + Activity）。
 *
 * 结构：状态徽章 / 标题 / 作者行 / 正文(markdown) / Activity  ←→  右栏 Changes·Comments·
 * Reviewers·Checks·评审操作区。
 *
 * 设计取舍：
 * 1. 不引入 markdown 库：客户端只有 require('react')，这里实现够用的 markdown-lite
 *    （标题/列表/围栏代码/行内代码/加粗/链接），PR 正文 90% 是这些。
 * 2. 写操作二次确认：UI 点击走不到 tool 级审批门禁，这层就是唯一防线。
 * 3. diff 按文件折叠，避免几千行一次性铺开。
 */
/** 把一个 unified diff 按 `diff --git` 拆成单文件块 */
function splitDiffByFile(patch) {
    var text = String(patch || '');
    if (!text)
        return [];
    var parts = text.split(/^diff --git /m).filter(function (p) { return p.trim() !== ''; });
    return parts.map(function (body) {
        var full = 'diff --git ' + body;
        var nameMatch = body.match(/a\/(\S+) b\/(\S+)/);
        var filePath = nameMatch ? nameMatch[2] : (body.split('\n')[0] || '未知文件');
        var additions = 0;
        var deletions = 0;
        full.split('\n').forEach(function (line) {
            if (line.startsWith('+') && !line.startsWith('+++'))
                additions += 1;
            else if (line.startsWith('-') && !line.startsWith('---'))
                deletions += 1;
        });
        return { path: filePath, text: full, additions: additions, deletions: deletions };
    });
}
/** 行内元素：`code`、**bold**、[text](url) */
function renderInline(h, text, keyBase) {
    var nodes = [];
    var re = /(`[^`]+`)|(\*\*[^*]+\*\*)|(!\[[^\]]*\]\([^)]+\))|(\[[^\]]+\]\([^)]+\))/g;
    var last = 0;
    var m;
    var i = 0;
    while ((m = re.exec(text)) !== null) {
        if (m.index > last)
            nodes.push(text.slice(last, m.index));
        var token = m[0];
        if (token.charAt(0) === '`') {
            nodes.push(h('code', { key: keyBase + '-' + i, style: { fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: '.92em', padding: '1px 4px', borderRadius: '4px', background: 'rgba(127,127,127,.16)' } }, token.slice(1, -1)));
        }
        else if (token.slice(0, 2) === '**') {
            nodes.push(h('strong', { key: keyBase + '-' + i }, token.slice(2, -2)));
        }
        else if (token.slice(0, 2) === '![') {
            // 图片：PR 正文里的截图很常见，直接渲染；宽度跟容器走
            var im = token.match(/!\[([^\]]*)\]\(([^)]+)\)/);
            var imgSrc = im ? safeImgSrc(im[2]) : '';
            if (im && imgSrc) {
                nodes.push(h('img', {
                    key: keyBase + '-' + i,
                    src: imgSrc,
                    alt: im[1] || '',
                    loading: 'lazy',
                    style: { maxWidth: '100%', borderRadius: '8px', margin: '4px 0', display: 'block', border: '1px solid rgba(127,127,127,.2)' },
                }));
            }
        }
        else {
            var lm = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
            var href = lm ? safeHref(lm[2]) : '';
            if (lm && href) {
                nodes.push(h('a', {
                    key: keyBase + '-' + i, href, target: '_blank', rel: 'noopener noreferrer',
                    style: { color: 'var(--dsw-alias-link,#0969da)' },
                }, lm[1]));
            }
            else if (lm) {
                // 不安全协议：保留可读文本，别让它变成可点的坑
                nodes.push(lm[1] + '（链接已隐藏）');
            }
        }
        last = m.index + token.length;
        i += 1;
    }
    if (last < text.length)
        nodes.push(text.slice(last));
    return nodes;
}
/** markdown-lite：标题、无序/有序列表、围栏代码、段落 */
/**
 * 链接/图片白名单。
 *
 * 为什么必须做：PR 正文、评审评论都是**外部输入**。之前直接把 `[x](target)` 的 target
 * 塞进 href，`[点我](javascript:alert(1))` 就能在 Electron 渲染进程里执行脚本（那里
 * 挂着 DSH 的 bridge）。图片同理：`file://` 能读本机文件当图片显示。
 * 只放行 https（以及内联 base64 图片），其余一律降级成纯文本。
 */
function safeHref(raw) {
    const u = String(raw || '').trim();
    return /^https?:\/\//i.test(u) ? u : '';
}
function safeImgSrc(raw) {
    const u = String(raw || '').trim();
    if (/^https:\/\//i.test(u))
        return u;
    if (/^data:image\/(png|jpe?g|gif|webp);base64,/i.test(u))
        return u;
    return '';
}
function renderMarkdownLite(h, source) {
    var lines = String(source || '').replace(/\r\n/g, '\n').split('\n');
    var out = [];
    var i = 0;
    var key = 0;
    var para = [];
    var flushPara = function () {
        if (para.length === 0)
            return;
        var text = para.join(' ').trim();
        if (text)
            out.push(h('p', { key: 'p' + key++, style: { margin: '0 0 10px', lineHeight: '1.65' } }, renderInline(h, text, 'pi' + key)));
        para = [];
    };
    while (i < lines.length) {
        var line = lines[i];
        if (/^\s*```/.test(line)) {
            flushPara();
            var buf = [];
            i += 1;
            while (i < lines.length && !/^\s*```/.test(lines[i])) {
                buf.push(lines[i]);
                i += 1;
            }
            i += 1;
            out.push(h('pre', {
                key: 'pre' + key++,
                style: { margin: '0 0 12px', padding: '10px 12px', borderRadius: '8px', overflow: 'auto', background: 'rgba(127,127,127,.12)', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: '12px', lineHeight: '1.5' },
            }, buf.join('\n')));
            continue;
        }
        var hm = line.match(/^(#{1,4})\s+(.*)$/);
        if (hm) {
            flushPara();
            var level = hm[1].length;
            out.push(h('h' + Math.min(level + 2, 6), { key: 'h' + key++, style: { margin: '14px 0 8px', fontSize: level <= 2 ? '16px' : '14px', fontWeight: 600, lineHeight: '1.4' } }, renderInline(h, hm[2], 'hi' + key)));
            i += 1;
            continue;
        }
        // 表格：表头行 + 分隔行（|---|）
        if (/^\s*\|/.test(line) && i + 1 < lines.length && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
            flushPara();
            var parseRow = function (row) {
                return row.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(function (c) { return c.trim(); });
            };
            var head = parseRow(line);
            i += 2;
            var bodyRows = [];
            while (i < lines.length && /^\s*\|/.test(lines[i])) {
                bodyRows.push(parseRow(lines[i]));
                i += 1;
            }
            out.push(h('div', { key: 'tbl' + key++, style: { overflowX: 'auto', margin: '0 0 12px' } }, h('table', { style: { borderCollapse: 'collapse', width: '100%', fontSize: '12px' } }, h('thead', null, h('tr', null, head.map(function (cell, ci) {
                return h('th', { key: ci, style: { textAlign: 'left', padding: '5px 8px', borderBottom: '1px solid rgba(127,127,127,.3)', fontWeight: 600, whiteSpace: 'nowrap' } }, renderInline(h, cell, 'th' + ci));
            }))), h('tbody', null, bodyRows.map(function (row, ri) {
                return h('tr', { key: ri }, row.map(function (cell, ci) {
                    return h('td', { key: ci, style: { padding: '5px 8px', borderBottom: '1px solid rgba(127,127,127,.14)', verticalAlign: 'top' } }, renderInline(h, cell, 'td' + ri + '-' + ci));
                }));
            })))));
            continue;
        }
        if (/^\s*([-*]|\d+\.)\s+/.test(line)) {
            flushPara();
            var ordered = /^\s*\d+\./.test(line);
            var items = [];
            while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) {
                items.push(lines[i].replace(/^\s*([-*]|\d+\.)\s+/, ''));
                i += 1;
            }
            out.push(h(ordered ? 'ol' : 'ul', { key: 'l' + key++, style: { margin: '0 0 12px', paddingLeft: '22px', lineHeight: '1.7' } }, items.map(function (t, idx) { return h('li', { key: idx }, renderInline(h, t, 'li' + idx)); })));
            continue;
        }
        if (line.trim() === '') {
            flushPara();
            i += 1;
            continue;
        }
        para.push(line.trim());
        i += 1;
    }
    flushPara();
    return out;
}
function PrReviewModal(props) {
    var h = React.createElement;
    var isOpen = Boolean(props && props.isOpen);
    var prNumber = props ? props.prNumber : null;
    var cwd = props ? props.cwd : undefined;
    var onClose = (props && props.onClose) || function () { };
    var onRefresh = (props && props.onRefresh) || function () { };
    var showToast = (props && props.showToast) || function () { };
    var [state, setState] = React.useState({ loading: false, error: null, detail: null });
    var [comment, setComment] = React.useState('');
    var [pendingEvent, setPendingEvent] = React.useState(null);
    var [submitting, setSubmitting] = React.useState(false);
    var [showDiff, setShowDiff] = React.useState(false);
    React.useEffect(function () {
        if (!isOpen || !prNumber)
            return;
        var cancelled = false;
        setState({ loading: true, error: null, detail: null });
        setComment('');
        setPendingEvent(null);
        setShowDiff(false);
        var qs = '/api/github/pr-detail?number=' + encodeURIComponent(String(prNumber)) + (cwd ? '&cwd=' + encodeURIComponent(cwd) : '');
        fetch(qs)
            .then(function (r) { return r.json(); })
            .then(function (json) {
            if (cancelled)
                return;
            if (!json || !json.ok) {
                setState({ loading: false, error: (json && json.error) || '读取 PR 详情失败', detail: null });
                return;
            }
            setState({ loading: false, error: null, detail: json.data });
        })
            .catch(function (err) {
            if (cancelled)
                return;
            setState({ loading: false, error: (err && err.message) || String(err), detail: null });
        });
        return function () { cancelled = true; };
    }, [isOpen, prNumber, cwd]);
    if (!isOpen || !prNumber)
        return null;
    var submit = function (event) {
        if (pendingEvent !== event) {
            setPendingEvent(event);
            return;
        }
        setSubmitting(true);
        fetch('/api/github/pr-review', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                cwd: cwd,
                number: prNumber,
                event: event,
                body: comment,
                author: (state.detail && state.detail.pr && state.detail.pr.author && state.detail.pr.author.login) || undefined,
            }),
        })
            .then(function (r) { return r.json(); })
            .then(function (json) {
            setSubmitting(false);
            if (!json || !json.ok) {
                showToast('❌ ' + ((json && json.error) || '提交评审失败'));
                setPendingEvent(null);
                return;
            }
            showToast('✅ ' + ((json.data && json.data.message) || '评审已提交'));
            onRefresh();
            onClose();
        })
            .catch(function (err) {
            setSubmitting(false);
            setPendingEvent(null);
            showToast('❌ 提交评审失败：' + ((err && err.message) || err));
        });
    };
    var detail = state.detail;
    var pr = detail && detail.pr;
    var files = detail ? splitDiffByFile(detail.diff) : [];
    var stateName = pr ? String(pr.state || '').toUpperCase() : '';
    var merged = Boolean(pr && pr.mergedAt);
    var pillText = merged ? '已合并' : stateName === 'OPEN' ? '打开' : stateName === 'CLOSED' ? '已关闭' : (pr && pr.isDraft ? '草稿' : stateName || '—');
    var pillBg = merged ? 'rgba(130,80,223,.18)' : stateName === 'OPEN' ? 'rgba(26,127,55,.16)' : 'rgba(207,34,46,.16)';
    var pillFg = merged ? '#a371f7' : stateName === 'OPEN' ? '#2ea043' : '#f85149';
    var textStyle = { color: 'var(--dsw-alias-label-primary, #1f2328)' };
    var dim = { color: 'var(--dsw-alias-label-secondary, #57606a)' };
    var line = '1px solid var(--dsw-alias-border-l2, rgba(127,127,127,.25))';
    var reviews = (pr && Array.isArray(pr.reviews)) ? pr.reviews : [];
    var comments = (pr && Array.isArray(pr.comments)) ? pr.comments : [];
    var commits = (pr && Array.isArray(pr.commits)) ? pr.commits : [];
    var checks = (pr && Array.isArray(pr.statusCheckRollup)) ? pr.statusCheckRollup : [];
    var checksPass = checks.filter(function (c) { return String(c.conclusion || '').toLowerCase() === 'success'; }).length;
    var checksFail = checks.filter(function (c) { var s = String(c.conclusion || '').toLowerCase(); return s === 'failure' || s === 'timed_out'; }).length;
    var header = h('div', {
        style: { display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderBottom: line, flexShrink: 0 },
    }, h('span', {
        style: { display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 10px', borderRadius: '999px', background: pillBg, color: pillFg, fontSize: '12px', fontWeight: 600, flexShrink: 0 },
    }, '◆', pillText), h('span', { style: Object.assign({ fontSize: '12px', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }, dim) }, (pr && pr.baseRefName && pr.headRefName) ? pr.headRefName + ' → ' + pr.baseRefName : 'Pull request', ' · #', String(prNumber)), h('span', { style: { flex: 1 } }), pr && pr.url
        ? h('button', {
            className: 'gh2-icon-btn',
            title: '在浏览器打开',
            onClick: function () { window.open(pr.url, '_blank', 'noopener,noreferrer'); },
        }, '↗')
        : null, h('button', { className: 'gh2-icon-btn', title: '关闭', onClick: onClose }, '✕'));
    var mainCol = [];
    if (state.loading) {
        mainCol.push(h('div', { key: 'l', style: Object.assign({ padding: '32px 20px', fontSize: '13px' }, dim) }, '正在读取 PR 详情…'));
    }
    else if (state.error) {
        mainCol.push(h('div', { key: 'e', style: { padding: '32px 20px', fontSize: '13px', color: 'var(--dsw-alias-state-error-primary,#cf222e)' } }, state.error));
    }
    else if (pr) {
        mainCol.push(h('div', { key: 'title', style: Object.assign({ padding: '16px 20px 4px', fontSize: '20px', fontWeight: 600, lineHeight: '1.35' }, textStyle) }, pr.title || ''));
        mainCol.push(h('div', {
            key: 'author',
            style: Object.assign({ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 20px 14px', fontSize: '12px', flexWrap: 'wrap' }, dim),
        }, h('span', {
            style: { width: '20px', height: '20px', borderRadius: '999px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(127,127,127,.2)', fontSize: '11px', fontWeight: 600 },
        }, String((pr.author && pr.author.login) || '?').slice(0, 1).toUpperCase()), h('span', { style: { color: 'var(--dsw-alias-label-primary, #1f2328)', fontWeight: 500 } }, (pr.author && pr.author.login) || '未知作者'), h('span', null, '提交于 ' + (pr.createdAt ? String(pr.createdAt).slice(0, 10) : '—')), pr.reviewDecision ? h('span', { style: { padding: '1px 7px', borderRadius: '999px', background: 'rgba(127,127,127,.16)' } }, String(pr.reviewDecision)) : null));
        mainCol.push(h('div', { key: 'body', style: Object.assign({ padding: '0 20px 8px', fontSize: '13px', lineHeight: '1.7' }, textStyle) }, pr.body && String(pr.body).trim()
            ? renderMarkdownLite(h, pr.body)
            : h('div', { style: Object.assign({ fontSize: '12px' }, dim) }, '（没有正文）')));
        mainCol.push(h('div', { key: 'diff', style: { padding: '8px 20px 4px' } }, h('button', { className: 'gh2-quick-btn', onClick: function () { setShowDiff(!showDiff); } }, showDiff ? '收起改动' : '查看 ' + files.length + ' 个文件的改动'), showDiff
            ? h('div', { style: { marginTop: '10px' } }, files.map(function (f, i) {
                return h('details', { key: f.path + i, style: { marginBottom: '6px', borderTop: i === 0 ? 'none' : line, paddingTop: '6px' } }, h('summary', { style: { cursor: 'pointer', fontSize: '12px', fontFamily: 'ui-monospace, monospace' } }, f.path + '  ', h('span', { style: { color: '#2ea043' } }, '+' + f.additions), ' ', h('span', { style: { color: '#f85149' } }, '-' + f.deletions)), h('pre', { style: { margin: '6px 0 0', padding: '8px', maxHeight: '260px', overflow: 'auto', background: 'rgba(127,127,127,.1)', borderRadius: '6px', fontSize: '11px', lineHeight: '1.5', whiteSpace: 'pre-wrap' } }, f.text));
            }))
            : null));
        mainCol.push(h('div', { key: 'activity', style: { padding: '14px 20px 20px', borderTop: line, marginTop: '10px' } }, h('div', { style: Object.assign({ fontSize: '13px', fontWeight: 600, marginBottom: '8px' }, textStyle) }, 'Activity'), h('div', { style: Object.assign({ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px' }, dim) }, commits.length ? h('div', null, '◦ ' + commits.length + ' 个提交') : null, pr.createdAt ? h('div', null, '◦ ' + ((pr.author && pr.author.login) || '某人') + ' 创建于 ' + String(pr.createdAt).slice(0, 10)) : null, reviews.map(function (rv, i) {
            var st = String(rv.state || '').toUpperCase();
            var label = st === 'APPROVED' ? '批准' : st === 'CHANGES_REQUESTED' ? '请求修改' : st === 'COMMENTED' ? '评论' : st;
            return h('div', { key: 'rv' + i, style: { display: 'flex', gap: '6px', alignItems: 'baseline' } }, h('span', null, st === 'APPROVED' ? '✓' : st === 'CHANGES_REQUESTED' ? '✕' : '◦'), h('span', { style: { color: 'var(--dsw-alias-label-primary, #1f2328)' } }, (rv.author && rv.author.login) || '某人'), h('span', null, label), rv.submittedAt ? h('span', { style: { opacity: .7 } }, String(rv.submittedAt).slice(0, 10)) : null);
        }), !commits.length && !reviews.length ? h('div', null, '（无活动记录）') : null)));
    }
    var sideCol = h('div', {
        style: { width: '236px', flexShrink: 0, borderLeft: line, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '16px', overflow: 'auto' },
    }, h('div', null, h('div', { style: Object.assign({ fontSize: '12px', fontWeight: 600, marginBottom: '6px' }, textStyle) }, 'Changes'), h('div', { style: Object.assign({ fontSize: '12px', display: 'flex', gap: '8px', alignItems: 'baseline' }, dim) }, h('span', null, ((pr && pr.changedFiles) || files.length) + ' 个文件'), h('span', { style: { color: '#2ea043' } }, '+' + ((pr && pr.additions) || 0)), h('span', { style: { color: '#f85149' } }, '-' + ((pr && pr.deletions) || 0)))), h('div', null, h('div', { style: Object.assign({ fontSize: '12px', fontWeight: 600, marginBottom: '6px' }, textStyle) }, 'Comments'), h('div', { style: Object.assign({ fontSize: '12px' }, dim) }, comments.length + ' 条评论')), h('div', null, h('div', { style: Object.assign({ fontSize: '12px', fontWeight: 600, marginBottom: '6px' }, textStyle) }, 'Reviewers'), reviews.length
        ? h('div', { style: { display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px' } }, reviews.map(function (rv, i) {
            var st = String(rv.state || '').toUpperCase();
            var icon = st === 'APPROVED' ? '✓' : st === 'CHANGES_REQUESTED' ? '✕' : '◦';
            var color = st === 'APPROVED' ? '#2ea043' : st === 'CHANGES_REQUESTED' ? '#f85149' : 'inherit';
            return h('div', { key: 'rv2' + i, style: { display: 'flex', gap: '6px' }, title: st }, h('span', { style: { color: color } }, icon), h('span', null, (rv.author && rv.author.login) || '—'));
        }))
        : h('div', { style: Object.assign({ fontSize: '12px' }, dim) }, '暂无评审')), h('div', null, h('div', { style: Object.assign({ fontSize: '12px', fontWeight: 600, marginBottom: '6px' }, textStyle) }, 'Checks'), checks.length
        ? h('div', { style: { fontSize: '12px', display: 'flex', gap: '8px' } }, h('span', { style: { color: '#2ea043' } }, '✓ ' + checksPass), checksFail ? h('span', { style: { color: '#f85149' } }, '✕ ' + checksFail) : null)
        : h('div', { style: Object.assign({ fontSize: '12px' }, dim) }, 'No checks reported')), h('div', { style: { marginTop: 'auto', borderTop: line, paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' } }, h('textarea', {
        value: comment,
        placeholder: '评审说明（请求修改时必填）',
        onChange: function (e) { setComment(e.target.value); },
        style: { width: '100%', minHeight: '60px', resize: 'vertical', fontSize: '12px', padding: '7px 9px', borderRadius: '8px', border: line, background: 'transparent', color: 'inherit', outline: 'none' },
    }), h('button', {
        className: 'gh2-quick-btn', disabled: submitting,
        style: { textAlign: 'center', background: pendingEvent === 'APPROVE' ? 'rgba(26,127,55,.16)' : 'transparent', borderColor: pendingEvent === 'APPROVE' ? '#2ea043' : undefined },
        onClick: function () { submit('APPROVE'); },
    }, pendingEvent === 'APPROVE' ? '✓ 再点确认批准' : '✓ 批准'), h('button', {
        className: 'gh2-quick-btn', disabled: submitting,
        style: { textAlign: 'center', background: pendingEvent === 'REQUEST_CHANGES' ? 'rgba(207,34,46,.14)' : 'transparent', borderColor: pendingEvent === 'REQUEST_CHANGES' ? '#f85149' : undefined },
        onClick: function () { submit('REQUEST_CHANGES'); },
    }, pendingEvent === 'REQUEST_CHANGES' ? '✕ 再点确认请求修改' : '✕ 请求修改'), h('button', {
        className: 'gh2-quick-btn', disabled: submitting,
        style: { textAlign: 'center', background: pendingEvent === 'COMMENT' ? 'rgba(9,105,218,.12)' : 'transparent', borderColor: pendingEvent === 'COMMENT' ? '#0969da' : undefined },
        onClick: function () { submit('COMMENT'); },
    }, pendingEvent === 'COMMENT' ? '💬 再点确认发表' : '💬 仅评论')));
    var overlayStyle = {
        position: 'fixed', inset: 0, zIndex: 2100, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,.55)', padding: '24px',
    };
    var cardStyle = {
        width: 'min(1040px, 96vw)', maxHeight: '88vh', display: 'flex', flexDirection: 'column',
        background: 'var(--dsw-alias-bg-primary, #ffffff)', color: 'var(--dsw-alias-label-primary, #1f2328)',
        border: line, borderRadius: '14px', boxShadow: '0 24px 60px rgba(0,0,0,.45)', overflow: 'hidden',
    };
    return h('div', { style: overlayStyle, onClick: function (e) { if (e.target === e.currentTarget)
            onClose(); } }, h('div', { className: 'gh2-theme', style: cardStyle }, header, h('div', { style: { display: 'flex', flex: 1, minHeight: 0 } }, h('div', { style: { flex: 1, minWidth: 0, overflow: 'auto' } }, mainCol), sideCol)));
}

// ---- [Bundled: session-pr-panel.js] ----
/**
 * 会话 PR 通道：右下角浮窗（只列本会话新建的 PR）+ 右列 PR 面板（Codex 那种窄面板）。
 *
 * 设计取舍：
 * 1. 数据只有一条来源：/api/github/session-created-prs（Host 侧登记簿 + 转写回填）。
 *    浮窗和面板读同一个接口，不各自打 gh。
 * 2. 浮窗是 shell.overlay 里的一层，只在「本会话确实提过 PR」时渲染；没 PR 就
 *    return null —— 这个位置一旦常驻就会变成骚扰。
 * 3. 面板不重造数据：详情走现有 /api/github/pr-detail（补了 repo 参数，支持跨仓 PR），
 *    diff 复用它已经拉好的 unified patch。
 */
const SESSION_PR_CSS = `
.ghsp-overlay{position:fixed;right:20px;bottom:148px;z-index:900;display:flex;flex-direction:column;align-items:flex-end;gap:8px;pointer-events:none;font-size:12px}
.ghsp-overlay>*{pointer-events:auto}

.ghsp-pill{display:inline-flex;align-items:center;gap:7px;height:30px;padding:0 11px 0 10px;border-radius:999px;border:1px solid var(--dsw-alias-border-l2);background:color-mix(in srgb, var(--dsw-alias-bg-base) 94%, #000 6%);color:var(--dsw-alias-label-primary);cursor:pointer;box-shadow:0 6px 20px rgba(0,0,0,.34);transition:border-color .12s ease,transform .12s ease}
body:not([data-ds-dark-theme]) .ghsp-pill{background:color-mix(in srgb, var(--dsw-alias-bg-base) 96%, #fff 4%);box-shadow:0 6px 20px rgba(0,0,0,.18)}
.ghsp-pill:hover{border-color:var(--dsw-alias-border-l2);transform:translateY(-1px)}
.ghsp-pill-text{font-weight:500;letter-spacing:.01em}
.ghsp-pill-delta{color:var(--dsw-alias-label-secondary);font-variant-numeric:tabular-nums}
.ghsp-pill-count{display:inline-flex;align-items:center;justify-content:center;min-width:16px;height:16px;padding:0 4px;border-radius:999px;background:var(--dsw-alias-brand-primary);color:#fff;font-size:10px;font-weight:600;line-height:1}

.ghsp-card{width:372px;max-height:min(56vh,470px);display:flex;flex-direction:column;border-radius:12px;border:1px solid var(--dsw-alias-border-l2);background:color-mix(in srgb, var(--dsw-alias-bg-base) 94%, #000 6%);box-shadow:0 18px 44px rgba(0,0,0,.34);overflow:hidden}
body:not([data-ds-dark-theme]) .ghsp-card{background:color-mix(in srgb, var(--dsw-alias-bg-base) 96%, #fff 4%);box-shadow:0 18px 44px rgba(0,0,0,.18)}
.ghsp-card-head{display:flex;align-items:center;gap:8px;padding:9px 10px 9px 12px;border-bottom:1px solid var(--dsw-alias-border-l2)}
.ghsp-card-title{flex:1;min-width:0;font-size:12px;font-weight:600;color:var(--dsw-alias-label-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ghsp-card-sub{font-size:11px;color:var(--dsw-alias-label-secondary)}
.ghsp-icon-btn{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:6px;border:0;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer}
.ghsp-icon-btn:hover{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary)}
.ghsp-list{margin:0;padding:4px;list-style:none;overflow:auto}
.ghsp-row{display:flex;flex-direction:column;gap:4px;width:100%;padding:8px 9px;border-radius:8px;border:0;background:transparent;text-align:left;cursor:pointer;color:inherit}
.ghsp-row:hover{background:var(--dsw-alias-bg-layer-2)}
.ghsp-row-top{display:flex;align-items:center;gap:6px;min-width:0}
.ghsp-row-num{font-size:11px;font-weight:600;color:var(--dsw-alias-label-secondary);font-variant-numeric:tabular-nums}
.ghsp-row-title{flex:1;min-width:0;font-size:12px;line-height:1.35;color:var(--dsw-alias-label-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ghsp-row-bottom{display:flex;align-items:center;gap:8px;font-size:11px;color:var(--dsw-alias-label-secondary)}
.ghsp-row-meta{display:flex;align-items:center;gap:7px;min-width:0;font-size:11px;color:var(--dsw-alias-label-secondary)}
.ghsp-row-repo{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:0 1 auto}
.ghsp-add{color:var(--dsw-alias-state-success-primary,#3fb950)}.ghsp-del{color:var(--dsw-alias-state-error-primary,#f85149)}
.ghsp-dot{width:6px;height:6px;border-radius:50%;flex:0 0 auto}
.ghsp-dot.pass{background:var(--dsw-alias-state-success-primary,#3fb950)}.ghsp-dot.fail{background:var(--dsw-alias-state-error-primary,#f85149)}.ghsp-dot.pending{background:var(--dsw-alias-state-warn-primary,#d29922)}.ghsp-dot.none{background:var(--dsw-alias-state-idle-primary)}

.ghsp-badge{display:inline-flex;align-items:center;height:17px;padding:0 6px;border-radius:999px;font-size:10px;font-weight:600;letter-spacing:.02em;border:1px solid transparent}
.ghsp-badge.open{color:var(--dsw-alias-state-success-primary,#3fb950);border-color:color-mix(in srgb, var(--dsw-alias-state-success-primary,#3fb950) 40%, transparent);background:color-mix(in srgb, var(--dsw-alias-state-success-primary,#3fb950) 10%, transparent)}
.ghsp-badge.draft{color:var(--dsw-alias-label-secondary);border-color:var(--dsw-alias-border-l2)}
.ghsp-badge.merged{color:#a371f7;border-color:rgba(163,113,247,.4);background:rgba(163,113,247,.1)}
.ghsp-badge.closed{color:var(--dsw-alias-state-error-primary,#f85149);border-color:color-mix(in srgb, var(--dsw-alias-state-error-primary,#f85149) 40%, transparent);background:color-mix(in srgb, var(--dsw-alias-state-error-primary,#f85149) 10%, transparent)}
.ghsp-badge.unknown{color:var(--dsw-alias-label-secondary);border-color:var(--dsw-alias-border-l2)}

.ghsp-panel{display:flex;flex-direction:column;height:100%;min-height:0;font-size:12px;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-base)}
.ghsp-head{flex:0 0 auto;padding:10px 12px 9px;border-bottom:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1)}
.ghsp-head-top{display:flex;align-items:center;gap:8px;min-width:0}
.ghsp-repo{font-size:11px;color:var(--dsw-alias-label-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ghsp-num{font-size:12px;font-weight:600;color:var(--dsw-alias-label-secondary);font-variant-numeric:tabular-nums}
.ghsp-head-actions{margin-left:auto;display:flex;align-items:center;gap:2px}
.ghsp-title{margin:5px 0 0;font-size:13px;line-height:1.45;font-weight:600;color:var(--dsw-alias-label-primary);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.ghsp-meta{display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;margin-top:6px;font-size:11px;color:var(--dsw-alias-label-secondary);min-width:0}
.ghsp-branch{display:inline-flex;align-items:center;gap:5px;max-width:100%;min-width:0;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10.5px}
.ghsp-branch>span:first-child{flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}
.ghsp-checks{display:inline-flex;align-items:center;gap:5px}

.ghsp-scroll{flex:1 1 auto;min-height:0;overflow:auto;overscroll-behavior:contain}
.ghsp-file{border-bottom:1px solid var(--dsw-alias-border-l1)}
.ghsp-file-head{display:flex;align-items:center;gap:7px;width:100%;padding:7px 10px;border:0;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);cursor:pointer;text-align:left;position:sticky;top:0;z-index:1}
.ghsp-file-head:hover{background:var(--dsw-alias-bg-layer-2)}
.ghsp-caret{width:10px;flex:0 0 auto;color:var(--dsw-alias-label-secondary);transition:transform .12s ease}
.ghsp-caret.open{transform:rotate(90deg)}
.ghsp-path{flex:1;min-width:0;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;direction:rtl;text-align:left}
.ghsp-stat{font-size:10.5px;font-variant-numeric:tabular-nums;white-space:nowrap}
.ghsp-diff{margin:0;padding:2px 0 6px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;line-height:1.55;background:var(--dsw-alias-bg-base);overflow-x:auto}
.ghsp-line{display:block;padding:0 10px;white-space:pre;tab-size:2}
.ghsp-line.add{background:color-mix(in srgb, var(--dsw-alias-state-success-primary,#3fb950) 13%, transparent);color:var(--dsw-alias-state-success-primary,#3fb950)}
.ghsp-line.del{background:color-mix(in srgb, var(--dsw-alias-state-error-primary,#f85149) 13%, transparent);color:var(--dsw-alias-state-error-primary,#f85149)}
.ghsp-line.hunk{color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-1);margin:4px 0;padding-top:2px;padding-bottom:2px}
.ghsp-line.meta{color:var(--dsw-alias-label-secondary);opacity:.75}
.ghsp-more{padding:6px 10px;font-size:11px;color:var(--dsw-alias-label-secondary)}

.ghsp-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;height:100%;padding:24px;text-align:center;color:var(--dsw-alias-label-secondary);font-size:12px}
.ghsp-empty strong{color:var(--dsw-alias-label-primary);font-size:13px}
.ghsp-skeleton{padding:14px 12px;display:flex;flex-direction:column;gap:8px}
.ghsp-bar{height:10px;border-radius:5px;background:var(--dsw-alias-bg-layer-2);animation:ghsp-pulse 1.2s ease-in-out infinite}
.ghsp-bar.w60{width:60%}.ghsp-bar.w40{width:40%}.ghsp-bar.w80{width:80%}
@keyframes ghsp-pulse{0%,100%{opacity:.55}50%{opacity:1}}
.ghsp-error{padding:14px 12px;font-size:12px;color:var(--dsw-alias-state-error-primary);display:flex;flex-direction:column;gap:8px;align-items:flex-start}
.ghsp-btn{display:inline-flex;align-items:center;gap:5px;height:24px;padding:0 9px;border-radius:6px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font-size:11px;cursor:pointer}
.ghsp-btn:hover{border-color:var(--dsw-alias-border-l2)}
.ghsp-tabs{display:flex;align-items:center;gap:6px;padding:6px 10px;border-bottom:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);overflow-x:auto;flex:0 0 auto}
.ghsp-tab{display:inline-flex;align-items:center;gap:5px;height:22px;padding:0 8px;border-radius:999px;border:1px solid var(--dsw-alias-border-l1);background:transparent;color:var(--dsw-alias-label-secondary);font-size:11px;cursor:pointer;white-space:nowrap}
.ghsp-tab.active{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2)}

/* ---- v2：更强的状态对比 + 面板分段 ---- */
.ghsp-badge{height:18px;padding:0 7px;font-size:10px;letter-spacing:.02em;border-width:1px}
.ghsp-badge.open{color:#1a7f37;background:rgba(26,127,55,.10);border-color:rgba(26,127,55,.4)}
.ghsp-badge.merged{color:#6e40c9;background:rgba(110,64,201,.10);border-color:rgba(110,64,201,.4)}
.ghsp-badge.closed{color:#cf222e;background:rgba(207,34,46,.10);border-color:rgba(207,34,46,.4)}
.ghsp-badge.draft{color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-2);border-color:var(--dsw-alias-border-l2)}
.ghsp-badge.unknown{color:var(--dsw-alias-label-secondary);background:transparent;border-color:var(--dsw-alias-border-l2)}
body[data-ds-dark-theme] .ghsp-badge.open{color:#3fb950;background:rgba(63,185,80,.16);border-color:rgba(63,185,80,.5)}
body[data-ds-dark-theme] .ghsp-badge.merged{color:#b392f0;background:rgba(163,113,247,.18);border-color:rgba(163,113,247,.5)}
body[data-ds-dark-theme] .ghsp-badge.closed{color:#f85149;background:rgba(248,81,73,.18);border-color:rgba(248,81,73,.5)}


.ghsp-sec{padding:10px 12px}
.ghsp-sec-title{padding:8px 12px 4px;font-size:10px;font-weight:600;letter-spacing:.06em;color:var(--dsw-alias-label-secondary);text-transform:uppercase}
.ghsp-muted{color:var(--dsw-alias-label-secondary);font-size:11px}
.ghsp-actions{display:flex;flex-wrap:wrap;gap:6px}
.ghsp-btn-primary{background:var(--dsw-alias-brand-primary);border-color:transparent;color:#fff}
.ghsp-btn-primary:hover{filter:brightness(1.08)}
.ghsp-btn[disabled]{opacity:.5;cursor:default}
.ghsp-btn-primary[disabled]{background:var(--dsw-alias-bg-layer-2);border-color:var(--dsw-alias-border-l1);color:var(--dsw-alias-label-secondary)}

.ghsp-md{font-size:12px;line-height:1.65;color:var(--dsw-alias-label-primary);word-break:break-word}
.ghsp-md p{margin:0 0 8px}
.ghsp-md h3,.ghsp-md h4,.ghsp-md h5{margin:12px 0 6px;font-size:12.5px;font-weight:600}
.ghsp-md ul,.ghsp-md ol{margin:0 0 8px;padding-left:18px}
.ghsp-md li{margin:2px 0}
.ghsp-md code{padding:1px 4px;border-radius:4px;background:var(--dsw-alias-bg-layer-2);font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px}
.ghsp-md pre{margin:0 0 8px;padding:8px;border-radius:8px;background:var(--dsw-alias-bg-layer-2);overflow:auto}
.ghsp-md pre code{background:transparent;padding:0}
.ghsp-md a{color:var(--dsw-alias-brand-primary);text-decoration:none}
.ghsp-md img{max-width:100%;border-radius:6px}
.ghsp-md blockquote{margin:0 0 8px;padding-left:8px;border-left:2px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary)}

.ghsp-note{padding:9px 12px;border-bottom:1px solid var(--dsw-alias-border-l1)}
.ghsp-note-head{display:flex;align-items:center;gap:6px;margin-bottom:5px;font-size:11px}
.ghsp-note-author{font-weight:600;color:var(--dsw-alias-label-primary)}
.ghsp-note-time{margin-left:auto;color:var(--dsw-alias-label-secondary);font-size:10px}
.ghsp-note .ghsp-icon-btn{margin-left:6px}

.ghsp-commit{display:flex;align-items:center;gap:8px;padding:3px 12px;font-size:11px;color:var(--dsw-alias-label-secondary)}
.ghsp-commit code{color:var(--dsw-alias-label-secondary);font-size:10.5px}
.ghsp-commit-msg{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--dsw-alias-label-primary)}

.ghsp-check{display:flex;align-items:center;gap:8px;padding:4px 0;font-size:11px}
.ghsp-check-name{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ghsp-check-state{color:var(--dsw-alias-label-secondary);font-size:10.5px}

.ghsp-notice{margin:8px 12px;padding:8px 10px;border-radius:8px;font-size:11px;line-height:1.5;color:var(--dsw-alias-state-warn-primary,#d29922);background:color-mix(in srgb, var(--dsw-alias-state-warn-primary,#d29922) 12%, transparent)}
.ghsp-file-row{display:flex;align-items:center;gap:8px;padding:5px 12px;font-size:11px}
.ghsp-file-row:hover{background:var(--dsw-alias-bg-layer-2)}
.ghsp-file-row .ghsp-path{flex:1}
.ghsp-file-head{display:flex;align-items:center;gap:2px;padding:0 6px 0 10px}
.ghsp-file-toggle{display:flex;flex:1;align-items:center;gap:7px;min-width:0;padding:7px 4px;border:0;background:transparent;color:inherit;cursor:pointer;text-align:left}
.ghsp-file-action{flex:0 0 auto;width:auto;padding:0 6px;font-size:10.5px}

.ghsp-line.pickable{cursor:pointer}
.ghsp-line.pickable:hover{background:var(--dsw-alias-bg-layer-2)}
.ghsp-line.sel{background:color-mix(in srgb, var(--dsw-alias-brand-primary) 22%, transparent);outline:1px solid var(--dsw-alias-brand-primary);outline-offset:-1px}

.ghsp-commentbar{flex:0 0 auto;display:flex;flex-direction:column;gap:6px;padding:9px 12px 10px;border-top:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1)}
.ghsp-commentbar-head{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--dsw-alias-label-secondary)}
.ghsp-commentbar-head>span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ghsp-textarea{width:100%;min-height:54px;max-height:160px;resize:vertical;padding:6px 8px;border-radius:8px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font-size:11px;line-height:1.5;font-family:inherit;outline:none}
.ghsp-textarea:focus{border-color:var(--dsw-alias-brand-primary)}

.ghsp-toast{flex:0 0 auto;margin:8px 12px 0;padding:6px 9px;border-radius:8px;font-size:11px}
.ghsp-toast.ok{color:var(--dsw-alias-state-success-primary,#3fb950);background:color-mix(in srgb, var(--dsw-alias-state-success-primary,#3fb950) 12%, transparent)}
.ghsp-toast.error{color:var(--dsw-alias-state-error-primary,#f85149);background:color-mix(in srgb, var(--dsw-alias-state-error-primary,#f85149) 12%, transparent)}
.ghsp-toast.info{color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-2)}

/* ---- v3：左右两栏 + 目标分支语义色 ---- */
.ghsp-panel{container-type:inline-size}
.ghsp-cols{flex:1 1 auto;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) 248px}
.ghsp-col-main{min-width:0;overflow:auto;padding-bottom:8px}
.ghsp-col-side{min-width:0;overflow:auto;padding:10px 10px 16px;border-left:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1)}
.ghsp-block{padding:10px 12px;border-bottom:1px solid var(--dsw-alias-border-l1)}
.ghsp-block:last-child{border-bottom:0}
.ghsp-block-title{display:flex;align-items:center;gap:8px;margin-bottom:8px;font-size:11px;font-weight:600;letter-spacing:.03em;color:var(--dsw-alias-label-secondary);text-transform:uppercase}
.ghsp-block-meta{margin-left:auto;font-weight:400;text-transform:none;letter-spacing:0;color:var(--dsw-alias-label-secondary)}
.ghsp-side-block{display:flex;flex-direction:column;gap:5px;padding-bottom:12px;margin-bottom:12px;border-bottom:1px solid var(--dsw-alias-border-l1)}
.ghsp-side-block:last-child{border-bottom:0;margin-bottom:0;padding-bottom:0}
.ghsp-side-title{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--dsw-alias-label-secondary)}
.ghsp-sub-title{font-size:10px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:var(--dsw-alias-label-secondary);margin:8px 0 4px}

.ghsp-target{display:inline-flex;align-items:center;justify-content:center;height:17px;max-width:132px;padding:0 6px;border-radius:999px;font-size:10px;font-weight:600;line-height:1;border:1px solid transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:0 0 auto}
/* 默认（浅色主题）：深字 + 浅底；深色主题在下面改成亮字 + 半透明底 */
.ghsp-target.main{color:#6e40c9;background:rgba(110,64,201,.10);border-color:rgba(110,64,201,.35)}
.ghsp-target.release{color:#9a6700;background:rgba(154,103,0,.10);border-color:rgba(154,103,0,.35)}
.ghsp-target.test{color:#0f7b8a;background:rgba(15,123,138,.10);border-color:rgba(15,123,138,.35)}
.ghsp-target.dev{color:#0b57d0;background:rgba(11,87,208,.10);border-color:rgba(11,87,208,.35)}
.ghsp-target.other{color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-2);border-color:var(--dsw-alias-border-l2)}
body[data-ds-dark-theme] .ghsp-target.main{color:#d2a8ff;background:rgba(163,113,247,.18);border-color:rgba(163,113,247,.5)}
body[data-ds-dark-theme] .ghsp-target.release{color:#e3b341;background:rgba(210,153,34,.18);border-color:rgba(210,153,34,.5)}
body[data-ds-dark-theme] .ghsp-target.test{color:#39c5cf;background:rgba(57,197,207,.16);border-color:rgba(57,197,207,.45)}
body[data-ds-dark-theme] .ghsp-target.dev{color:#58a6ff;background:rgba(88,166,255,.16);border-color:rgba(88,166,255,.45)}

@container (max-width: 620px) {
  /* 窄栏：整块一起滚（两列各自滚动会互相抢高度），主内容在前，审批/操作跟在后面 */
  .ghsp-cols{grid-template-columns:1fr;overflow:auto}
  .ghsp-col-main{order:1;overflow:visible}
  .ghsp-col-side{order:2;overflow:visible;border-left:0;border-top:1px solid var(--dsw-alias-border-l1)}
  .ghsp-head{padding:10px 10px 9px}
  .ghsp-meta{row-gap:4px}
  /* 窄栏里分支 + 目标 tag 单独占一整行，别把分支名挤成「p…」 */
  .ghsp-meta .ghsp-branch{flex:1 1 100%;margin-top:2px}
}

/* ---- v4：卡片式分区 + 懒加载骨架 + 高亮 ---- */
.ghsp-col-main,.ghsp-col-side{display:flex;flex-direction:column;gap:10px;padding:10px}
.ghsp-col-side{background:transparent;border-left:1px solid var(--dsw-alias-border-l1)}
.ghsp-card-block{border:1px solid var(--dsw-alias-border-l1);border-radius:12px;background:var(--dsw-alias-bg-layer-1);overflow:hidden;flex:0 0 auto}
.ghsp-card-head2{display:flex;align-items:center;gap:8px;padding:9px 12px;border-bottom:1px solid var(--dsw-alias-border-l1)}
.ghsp-card-block-title{font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--dsw-alias-label-secondary)}
.ghsp-card-block-meta{margin-left:auto;font-size:11px;color:var(--dsw-alias-label-secondary);font-variant-numeric:tabular-nums}
.ghsp-card-block-actions{margin-left:auto;display:flex;align-items:center;gap:6px}
.ghsp-card-block-meta + .ghsp-card-block-actions{margin-left:8px}
.ghsp-card-body{padding:10px 12px}
.ghsp-card-body.flush{padding:0}
.ghsp-card-body .ghsp-file:last-child{border-bottom:0}
.ghsp-card-body .ghsp-note:last-child{border-bottom:0}

.ghsp-btn-sm{height:21px;padding:0 7px;font-size:10.5px}
.ghsp-inline-loading{display:inline-flex;align-items:center;gap:6px;font-size:10.5px;color:var(--dsw-alias-label-secondary)}
.ghsp-spinner{width:10px;height:10px;border-radius:50%;border:1.5px solid var(--dsw-alias-border-l2);border-top-color:var(--dsw-alias-brand-primary);animation:ghsp-spin .7s linear infinite}
@keyframes ghsp-spin{to{transform:rotate(360deg)}}
.ghsp-skel-row{height:10px;border-radius:5px;background:var(--dsw-alias-bg-layer-2);margin:8px 12px;animation:ghsp-pulse 1.2s ease-in-out infinite}
.ghsp-fade{position:relative;max-height:280px;overflow:hidden}
.ghsp-fade:after{content:"";position:absolute;left:0;right:0;bottom:0;height:64px;background:linear-gradient(to bottom,transparent,var(--dsw-alias-bg-layer-1))}
.ghsp-more-btn{margin-top:6px}

.ghsp-file.active{background:color-mix(in srgb, var(--dsw-alias-brand-primary) 7%, transparent)}
.ghsp-check.fail{background:color-mix(in srgb, var(--dsw-alias-state-error-primary,#f85149) 9%, transparent);border-radius:6px;padding-left:6px;padding-right:6px;margin-left:-6px;margin-right:-6px}
.ghsp-checks-summary{display:flex;align-items:center;gap:6px;padding-bottom:6px;margin-bottom:2px;border-bottom:1px dashed var(--dsw-alias-border-l1);font-size:11px;color:var(--dsw-alias-label-secondary)}
.ghsp-check-chip.fail{color:var(--dsw-alias-state-error-primary)}
.ghsp-check-chip.pending{color:var(--dsw-alias-state-warn-primary)}
.ghsp-check-chip.pass{color:var(--dsw-alias-state-success-primary)}

/* ---- 头部审批按钮 ---- */
.ghsp-head-actions{display:flex;align-items:center;gap:6px;margin-left:auto;flex-wrap:wrap}
.ghsp-btn-danger{background:color-mix(in srgb, var(--dsw-alias-state-error-primary,#f85149) 22%, transparent);border-color:color-mix(in srgb, var(--dsw-alias-state-error-primary,#f85149) 55%, transparent);color:var(--dsw-alias-state-error-primary,#f85149)}
.ghsp-btn-on{background:color-mix(in srgb, var(--dsw-alias-brand-primary) 18%, transparent);border-color:color-mix(in srgb, var(--dsw-alias-brand-primary) 50%, transparent);color:var(--dsw-alias-brand-primary)}
.ghsp-select{height:21px;padding:0 4px;border-radius:6px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary);font-size:10.5px;cursor:pointer;outline:none}
.ghsp-select:hover{border-color:var(--dsw-alias-border-l2)}
.ghsp-check-row{display:flex;align-items:center;gap:6px;margin-top:8px;font-size:11px;color:var(--dsw-alias-label-secondary);cursor:pointer;user-select:none}
.ghsp-check-row input{accent-color:var(--dsw-alias-brand-primary);width:12px;height:12px;margin:0}
.ghsp-fix-btn{height:19px;padding:0 6px;font-size:10px;letter-spacing:.02em}
.ghsp-request{padding:8px 12px;border-bottom:1px solid var(--dsw-alias-border-l1)}
.ghsp-request:last-of-type{border-bottom:0}
.ghsp-request .ghsp-note-head{margin-bottom:4px}
.ghsp-clamp{display:-webkit-box;-webkit-line-clamp:8;-webkit-box-orient:vertical;overflow:hidden}

/* ---- 头部审批按钮：绿色、有厚度 ---- */
.ghsp-head-actions .ghsp-btn{height:24px;padding:0 10px;font-size:11px;font-weight:600;border-radius:7px;transition:background .12s ease,box-shadow .12s ease,transform .06s ease,border-color .12s ease}
.ghsp-head-actions .ghsp-btn:not([disabled]):active{transform:translateY(1px)}

.ghsp-btn-approve{color:#2ea043;border-color:rgba(46,160,67,.55);background:linear-gradient(180deg,rgba(46,160,67,.16),rgba(46,160,67,.07));box-shadow:inset 0 1px 0 rgba(255,255,255,.06)}
.ghsp-btn-approve:hover{background:linear-gradient(180deg,rgba(46,160,67,.26),rgba(46,160,67,.12));border-color:rgba(46,160,67,.75);box-shadow:0 0 0 3px rgba(46,160,67,.12)}
body:not([data-ds-dark-theme]) .ghsp-btn-approve{color:#1a7f37;border-color:rgba(26,127,55,.45);background:linear-gradient(180deg,rgba(26,127,55,.10),rgba(26,127,55,.04))}

.ghsp-btn-merge{color:#fff;border-color:rgba(35,134,54,.9);background:linear-gradient(180deg,#2ea043,#238636);box-shadow:inset 0 1px 0 rgba(255,255,255,.16),0 2px 8px rgba(35,134,54,.35)}
.ghsp-btn-merge:hover{background:linear-gradient(180deg,#3fb950,#2ea043);box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 3px 12px rgba(46,160,67,.45)}
body:not([data-ds-dark-theme]) .ghsp-btn-merge{background:linear-gradient(180deg,#1f883d,#1a7f37);border-color:rgba(26,127,55,.9)}

.ghsp-btn-auto{color:var(--dsw-alias-label-secondary);border-color:var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1)}
.ghsp-btn-auto:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2)}
.ghsp-btn-auto.on{color:#2ea043;border-color:rgba(46,160,67,.55);background:linear-gradient(180deg,rgba(46,160,67,.18),rgba(46,160,67,.08));box-shadow:inset 0 1px 0 rgba(255,255,255,.06)}
body:not([data-ds-dark-theme]) .ghsp-btn-auto.on{color:#1a7f37}

.ghsp-head-actions .ghsp-btn[disabled]{background:var(--dsw-alias-bg-layer-1);border-color:var(--dsw-alias-border-l1);color:var(--dsw-alias-label-secondary);box-shadow:none;opacity:.7}
.ghsp-head-actions .ghsp-select{height:24px;border-radius:7px;padding:0 6px;font-size:11px}
.ghsp-more{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:6px 10px;font-size:11px;color:var(--dsw-alias-label-secondary)}
.ghsp-menu{position:fixed;z-index:1000;min-width:168px;padding:4px;border-radius:10px;border:1px solid var(--dsw-alias-border-l2);background:color-mix(in srgb, var(--dsw-alias-bg-base) 96%, #000 4%);box-shadow:0 12px 32px rgba(0,0,0,.4)}
.ghsp-menu-head{padding:5px 8px 6px;font-size:10.5px;color:var(--dsw-alias-label-secondary);border-bottom:1px solid var(--dsw-alias-border-l1);margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ghsp-menu-item{display:block;width:100%;padding:6px 9px;border:0;border-radius:6px;background:transparent;color:var(--dsw-alias-label-primary);font-size:11.5px;text-align:left;cursor:pointer}
.ghsp-menu-item:hover{background:var(--dsw-alias-bg-layer-2)}
.ghsp-hint{position:fixed;bottom:186px;right:20px;max-width:360px;padding:6px 10px;border-radius:8px;font-size:11px;color:var(--dsw-alias-label-primary);background:color-mix(in srgb, var(--dsw-alias-bg-base) 96%, #000 4%);border:1px solid var(--dsw-alias-border-l2);box-shadow:0 8px 24px rgba(0,0,0,.35);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ghsp-drag-handle{cursor:grab;user-select:none}
.ghsp-drag-handle:active{cursor:grabbing}
.ghsp-pill{cursor:grab}
.ghsp-pill:active{cursor:grabbing}
.ghsp-card-age{font-size:10px;color:var(--dsw-alias-label-secondary);font-variant-numeric:tabular-nums;opacity:.8}
.ghsp-icon-btn.spinning svg{animation:ghsp-spin .8s linear infinite}
.ghsp-icon-btn[disabled]{opacity:.6;cursor:default}
.ghsp-detail-age{color:var(--dsw-alias-label-secondary);font-variant-numeric:tabular-nums;opacity:.75}
.ghsp-file-toggle{width:16px;height:16px;padding:0;border:0;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;font-size:10px;line-height:1}
.ghsp-file-toggle.ghost{cursor:default;opacity:.5}
.ghsp-btn:disabled{opacity:.5;cursor:not-allowed}
.ghsp-head-actions .ghsp-btn-merge:disabled{background:var(--dsw-alias-bg-layer-1);border-color:var(--dsw-alias-border-l1);color:var(--dsw-alias-label-secondary);box-shadow:none}
.ghsp-blocked{font-size:10.5px;color:var(--dsw-alias-state-warn-primary,#d29922);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:220px}
`;
let sessionPrStyleEl = null;
/** 绑定一次 visibilitychange：窗口回到前台立刻补一次，后台停掉轮询 */
function watchSessionPrVisibility() {
    if (prVisibilityBound || typeof document === "undefined" || !document.addEventListener)
        return () => { };
    prVisibilityBound = true;
    // 回到前台：用户就是要看最新状态，直接绕缓存
    var handler = function () { retunePolling(!document.hidden); };
    document.addEventListener("visibilitychange", handler);
    // 窗口重新获得焦点（切完 GitHub 网页回来）同样立刻刷新
    var onFocus = function () { retunePolling(true); };
    try {
        window.addEventListener("focus", onFocus);
    }
    catch (e) { /* 忽略 */ }
    return () => {
        try {
            document.removeEventListener("visibilitychange", handler);
        }
        catch (e) { /* 忽略 */ }
        try {
            window.removeEventListener("focus", onFocus);
        }
        catch (e) { /* 忽略 */ }
        prVisibilityBound = false;
    };
}
/** 插件卸载时把模块级状态清干净（面板计数泄漏会让浮窗永远不出现） */
function resetSessionPrModuleState() {
    openPanelCount = 0;
    prSubscribers.length = 0;
    stopSessionPrPolling();
}
/** 供 client.ts 在插件卸载时清掉轮询定时器（模块级单例的清理口） */
function stopSessionPrPollingExport() {
    try {
        stopSessionPrPolling();
    }
    catch (e) { /* 未开始轮询时无事可做 */ }
}
/** 注入/刷新本模块的样式（与主面板样式分开，避免 theme/change 时丢一半） */
function injectSessionPrStyles() {
    if (typeof document === "undefined")
        return () => { };
    if (sessionPrStyleEl && sessionPrStyleEl.parentNode) {
        sessionPrStyleEl.textContent = SESSION_PR_CSS;
        return () => { };
    }
    var style = document.createElement("style");
    style.id = "dsh-github-session-pr-styles";
    style.textContent = SESSION_PR_CSS;
    document.head.appendChild(style);
    sessionPrStyleEl = style;
    return () => {
        if (style.parentNode)
            style.parentNode.removeChild(style);
        if (sessionPrStyleEl === style)
            sessionPrStyleEl = null;
    };
}
/* ------------------------------------------------------------------ *
 * 状态与数据
 * ------------------------------------------------------------------ */
/** 当前正在看的会话（与 DSH 自己的「主视图」判定保持一致） */
function selectMainSession(state) {
    var byId = state && state.byId;
    if (!byId)
        return null;
    for (var id in byId) {
        var row = byId[id];
        if (row && row.retainedBy && row.retainedBy.mainView > 0)
            return id;
    }
    return null;
}
function useMainSessionId(useSessions) {
    // 父组件已经确认 useSessions 是函数（否则根本不挂载这个组件），这里无条件调用一次，
    // 保持 hook 顺序恒定——不要再套 typeof 判断，那会让"能力到没到"改变 hook 数量。
    var id = useSessions(selectMainSession);
    return id || null;
}
var openPanelCount = 0;
var prStore = { sid: null, items: [], loading: false, error: null, at: 0, signature: "" };
var prSubscribers = [];
var prTimer = null;
var prTimerSid = null;
var prVisibilityBound = false;
var prInflightSid = null;
/** false = 浮窗首屏只要数量与编号（不跑 gh）；展开卡片 / 打开面板后置 true，补元数据 */
var prWantFull = false;
/** 每 N 次轮询强制绕一次缓存：host 侧元数据有 TTL，纯靠缓存轮询永远落后一个 TTL */
var prTickCount = 0;
/** 连续失败次数：GitHub 抖动/断网时不要每 8 秒砸一次，指数退避到 64s */
var prFailStreak = 0;
var PR_FORCE_EVERY = 3;
var prLastForceAt = 0;
/** 浮窗卡片是否展开：展开时用户就在盯它，按「在看」的节奏刷 */
var overlayCardOpen = false;
function publishPrStore(next) {
    prStore = next;
    prSubscribers.slice().forEach(function (fn) {
        try {
            fn();
        }
        catch (e) { /* 单个订阅者出错不能拖垮其余界面 */ }
    });
}
function prSignature(items) {
    return (items || []).map(function (i) {
        return [i.repo, i.number, i.state, i.isDraft ? 1 : 0, i.additions, i.deletions, i.updatedAt || "",
            (i.checks && i.checks.state) || "", i.missing ? 1 : 0].join(":");
    }).join("|");
}
function loadSessionPrs(sid, force) {
    if (!sid)
        return;
    if (force) {
        prLastForceAt = Date.now();
        // 手动/强制刷新要有可见反馈：卡片上的 ⟳ 会转起来
        if (!prStore.refreshing)
            publishPrStore(Object.assign({}, prStore, { refreshing: true }));
    }
    // 同一会话单飞；切了会话就别被上一个会话的请求挡住（它的响应会被 sid 校验丢掉）
    if (prInflightSid === sid && !force)
        return;
    prInflightSid = sid;
    var qs = "/api/github/session-created-prs?sessionId=" + encodeURIComponent(sid)
        + (force ? "&refresh=1" : "")
        + (prWantFull ? "" : "&lite=1");
    fetch(qs, { headers: { accept: "application/json" } })
        .then(function (r) { return r.json(); })
        .then(function (json) {
        // 会话已经切走：这一发是旧会话的，丢掉不要覆盖新状态
        if (prStore.sid !== sid)
            return;
        if (json && json.ok) {
            if (prFailStreak > 0) {
                prFailStreak = 0;
                schedulePolling();
            }
            var items = (json.data && json.data.items) || [];
            var sig = prSignature(items);
            if (sig === prStore.signature) {
                // 内容没变：items 保持同一引用（不触发 diff 重算），但时间戳要通知出去，
                // 否则「刚刚/Ns」永远停在旧值，用户会以为刷新没生效。
                publishPrStore(Object.assign({}, prStore, { loading: false, error: null, at: Date.now() }));
            }
            else {
                publishPrStore({ sid: sid, items: items, loading: false, error: null, at: Date.now(), signature: sig });
            }
        }
        else {
            prFailStreak += 1;
            schedulePolling();
            publishPrStore(Object.assign({}, prStore, { loading: false, error: (json && (json.error || json.message)) || "读取失败" }));
        }
    })
        .catch(function (err) {
        if (prStore.sid !== sid)
            return;
        prFailStreak += 1;
        schedulePolling();
        publishPrStore(Object.assign({}, prStore, { loading: false, error: String((err && err.message) || err) }));
    })
        .finally(function () {
        if (prInflightSid === sid)
            prInflightSid = null;
    });
}
/** 切到某个会话的轮询；同一会话重复调用是幂等的 */
function ensureSessionPrPolling(sid) {
    if (!sid)
        return;
    if (prTimerSid === sid)
        return;
    prTimerSid = sid;
    if (prTimer) {
        clearInterval(prTimer);
        prTimer = null;
    }
    // 立刻清空旧会话的行：切换会话时最忌讳把上一个会话的 PR 继续挂在浮窗上
    publishPrStore({ sid: sid, items: [], loading: true, error: null, at: 0, signature: "" });
    loadSessionPrs(sid, false);
    schedulePolling();
}
/**
 * 轮询节奏跟着「看得多认真」走：
 * - 面板开着（正在看 diff / 检查）→ 8s；
 * - 只有浮窗挂着 → 30s（只是想知道有没有新 PR，不需要秒级）；
 * - 窗口在后台 → 完全停（回来时 visibilitychange 会立刻补一次）。
 * 原来不管什么状态都 8s，一天下来是几千次请求，白烧。
 */
function prPollInterval() {
    try {
        if (typeof document !== "undefined" && document.hidden)
            return 0;
    }
    catch (e) { /* 无 document 环境忽略 */ }
    var base = (openPanelCount > 0 || overlayCardOpen) ? 8000 : 30000;
    if (prFailStreak > 0) {
        var factor = Math.min(1 << Math.min(prFailStreak, 3), 8); // ×2 ×4 ×8，封顶 8 倍
        return Math.min(base * factor, 120000);
    }
    return base;
}
function schedulePolling() {
    if (prTimer) {
        clearInterval(prTimer);
        prTimer = null;
    }
    var sid = prTimerSid;
    if (!sid)
        return;
    var every = prPollInterval();
    if (every <= 0)
        return;
    var pollingSid = sid;
    prTimer = setInterval(function () {
        prTickCount += 1;
        // 每 PR_FORCE_EVERY 拍绕一次缓存；其余拍走缓存，省 gh
        loadSessionPrs(pollingSid, prTickCount % PR_FORCE_EVERY === 0);
    }, every);
}
/** 面板开合 / 窗口可见性变化时，按新节奏重排（同一会话） */
function retunePolling(force) {
    var sid = prTimerSid;
    if (!sid)
        return;
    schedulePolling();
    if (prPollInterval() > 0)
        loadSessionPrs(sid, force === true);
}
/** 切到「要完整元数据」：浮窗展开、或面板挂载时调用 */
function requestFullSessionPrs() {
    if (prWantFull)
        return;
    prWantFull = true;
    if (prTimerSid)
        loadSessionPrs(prTimerSid, true);
}
function stopSessionPrPolling() {
    if (prTimer)
        clearInterval(prTimer);
    prTimer = null;
    prTimerSid = null;
}
/** 订阅单例 store；sessionId 变化时切换轮询目标 */
function useSessionCreatedPrs(sessionId) {
    var [, bump] = React.useReducer(function (n) { return n + 1; }, 0);
    React.useEffect(function () {
        var listener = function () { bump(); };
        prSubscribers.push(listener);
        ensureSessionPrPolling(sessionId);
        return function () {
            var idx = prSubscribers.indexOf(listener);
            if (idx >= 0)
                prSubscribers.splice(idx, 1);
            // 没有任何订阅者了就不再空转（插件卸载/界面都关了）
            if (prSubscribers.length === 0)
                stopSessionPrPolling();
        };
    }, [sessionId]);
    var refresh = React.useCallback(function () {
        if (sessionId)
            loadSessionPrs(sessionId, true);
    }, [sessionId]);
    // store 属于别的会话时先给一个干净的加载态，别把别人的 PR 显示出来
    var state = prStore.sid === sessionId
        ? prStore
        : { sid: sessionId, items: [], loading: Boolean(sessionId), error: null, at: 0, signature: "" };
    return [state, refresh];
}
function prStateKey(item) {
    var state = String((item && item.state) || "").toUpperCase();
    if (state === "MERGED")
        return "merged";
    if (state === "CLOSED")
        return "closed";
    if (item && item.isDraft)
        return "draft";
    if (state === "OPEN")
        return "open";
    return "unknown";
}
function prStateLabel(key) {
    if (key === "merged")
        return "merged";
    if (key === "closed")
        return "closed";
    if (key === "draft")
        return "draft";
    if (key === "open")
        return "open";
    return "?";
}
/* ------------------------------------------------------------------ *
 * 浮窗
 * ------------------------------------------------------------------ */
function SessionPrOverlay(props) {
    // useSessions 是宿主注入的 hook：它没到位的首帧不能调用，否则下一帧多一个 hook 会炸。
    // 所以按「有没有」分成两个组件，让 React 用挂载/卸载来处理能力到达，而不是改变 hook 数量。
    if (typeof (props && props.useSessions) !== "function")
        return null;
    return React.createElement(SessionPrOverlayInner, props);
}
/** 浮窗位置：localStorage 持久化；坏数据当作没设置 */
const OVERLAY_POS_KEY = "dsh-github-flow:overlay-pos";
function loadOverlayPos() {
    try {
        var raw = localStorage.getItem(OVERLAY_POS_KEY);
        if (!raw)
            return null;
        var v = JSON.parse(raw);
        if (!v || typeof v.x !== "number" || typeof v.y !== "number")
            return null;
        if (!isFinite(v.x) || !isFinite(v.y))
            return null;
        return { x: v.x, y: v.y };
    }
    catch (e) {
        return null;
    }
}
function saveOverlayPos(pos) {
    try {
        if (!pos)
            localStorage.removeItem(OVERLAY_POS_KEY);
        else
            localStorage.setItem(OVERLAY_POS_KEY, JSON.stringify({ x: Math.round(pos.x), y: Math.round(pos.y) }));
    }
    catch (e) { /* 隐私模式/配额满：位置不持久化，但拖拽本身仍然可用 */ }
}
/** 「刚刚 / 12s / 2m」——让用户看得见新鲜度，而不是猜 */
function ageLabel(at) {
    if (!at)
        return "";
    var sec = Math.max(0, Math.round((Date.now() - at) / 1000));
    if (sec < 5)
        return "刚刚";
    if (sec < 60)
        return sec + "s";
    var min = Math.round(sec / 60);
    return min + "m";
}
function SessionPrOverlayInner(props) {
    var sessionId = useMainSessionId(props.useSessions);
    var pair = useSessionCreatedPrs(sessionId);
    var state = pair[0];
    var refresh = pair[1];
    var [open, setOpen] = React.useState(false);
    // 右键菜单：{x, y, item}；同时用一个短 toast 反馈「已复制」
    var [menu, setMenu] = React.useState(null);
    var [hint, setHint] = React.useState(null);
    /* ---------------- 拖拽：位置持久化到 localStorage ---------------- */
    var [pos, setPos] = React.useState(function () { return loadOverlayPos(); });
    var dragRef = React.useRef(null);
    var movedRef = React.useRef(false);
    function overlayStyle() {
        if (!pos)
            return undefined;
        return { left: pos.x + "px", top: pos.y + "px", right: "auto", bottom: "auto" };
    }
    function onDragStart(ev) {
        if (!ev || (ev.button !== undefined && ev.button !== 0))
            return;
        var wrap = ev.currentTarget && ev.currentTarget.closest ? ev.currentTarget.closest(".ghsp-overlay") : null;
        var rect = wrap && wrap.getBoundingClientRect ? wrap.getBoundingClientRect() : { left: 0, top: 0, width: 360, height: 240 };
        dragRef.current = {
            startX: ev.clientX || 0,
            startY: ev.clientY || 0,
            origX: pos ? pos.x : (rect.left || 0),
            origY: pos ? pos.y : (rect.top || 0),
            w: rect.width || 360,
            h: rect.height || 240,
        };
        movedRef.current = false;
        try {
            document.addEventListener("mousemove", onDragMove, true);
            document.addEventListener("mouseup", onDragEnd, true);
            // 拖的时候别顺手选中背后的正文
            if (document.body && document.body.style)
                document.body.style.userSelect = "none";
        }
        catch (e) { /* 无 DOM 环境忽略 */ }
        if (ev.preventDefault)
            ev.preventDefault();
    }
    function clampPos(x, y, w, h) {
        var vw = 1280;
        var vh = 800;
        try {
            vw = window.innerWidth || vw;
            vh = window.innerHeight || vh;
        }
        catch (e) { /* 忽略 */ }
        // 至少留 80px 在视口内，避免拖出去后再也抓不到
        var minX = 8 - w + 80;
        var maxX = vw - 80;
        var minY = 8;
        var maxY = vh - 40;
        return { x: Math.min(Math.max(x, minX), maxX), y: Math.min(Math.max(y, minY), maxY) };
    }
    function onDragMove(ev) {
        var d = dragRef.current;
        if (!d)
            return;
        var dx = (ev.clientX || 0) - d.startX;
        var dy = (ev.clientY || 0) - d.startY;
        if (!movedRef.current && Math.abs(dx) + Math.abs(dy) < 4)
            return; // 抖动阈值：没真的拖就别接管
        movedRef.current = true;
        setPos(clampPos(d.origX + dx, d.origY + dy, d.w, d.h));
    }
    function onDragEnd() {
        dragRef.current = null;
        try {
            document.removeEventListener("mousemove", onDragMove, true);
            document.removeEventListener("mouseup", onDragEnd, true);
            if (document.body && document.body.style)
                document.body.style.userSelect = "";
        }
        catch (e) { /* 忽略 */ }
        if (movedRef.current)
            saveOverlayPos(posRef.current);
    }
    // 拖动结束时要拿到最新 pos（setState 是异步的），用 ref 同步一份
    var posRef = React.useRef(pos);
    posRef.current = pos;
    React.useEffect(function () {
        return function () {
            try {
                document.removeEventListener("mousemove", onDragMove, true);
                document.removeEventListener("mouseup", onDragEnd, true);
                if (document.body && document.body.style)
                    document.body.style.userSelect = "";
            }
            catch (e) { /* 忽略 */ }
        };
    }, []);
    function resetPos() {
        setPos(null);
        saveOverlayPos(null);
    }
    function closeMenu() { setMenu(null); }
    // 菜单开着时：点别处 / Esc / 滚动 都关掉（右键菜单不关会很脏）
    React.useEffect(function () {
        if (!menu)
            return;
        var onDown = function (ev) {
            var el = ev && ev.target;
            if (el && el.closest && el.closest(".ghsp-menu"))
                return;
            closeMenu();
        };
        var onKey = function (ev) { if (ev && ev.key === "Escape")
            closeMenu(); };
        var onScroll = function () { closeMenu(); };
        try {
            document.addEventListener("mousedown", onDown, true);
            document.addEventListener("keydown", onKey, true);
            window.addEventListener("scroll", onScroll, true);
            window.addEventListener("resize", onScroll);
        }
        catch (e) { /* 无 DOM 环境忽略 */ }
        return function () {
            try {
                document.removeEventListener("mousedown", onDown, true);
                document.removeEventListener("keydown", onKey, true);
                window.removeEventListener("scroll", onScroll, true);
                window.removeEventListener("resize", onScroll);
            }
            catch (e) { /* 忽略 */ }
        };
    }, [menu]);
    function flashHint(text) {
        setHint(text);
        try {
            setTimeout(function () { setHint(null); }, 2600);
        }
        catch (e) { /* 忽略 */ }
    }
    function prUrlOf(item) {
        return (item && item.url) || ("https://github.com/" + (item && item.repo) + "/pull/" + (item && item.number));
    }
    function copyPrLink(item) {
        var url = prUrlOf(item);
        try {
            if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(url).then(function () { flashHint("已复制链接 " + url); }, function () { flashHint("复制失败，链接：" + url); });
            }
            else {
                flashHint("复制失败，链接：" + url);
            }
        }
        catch (e) {
            flashHint("复制失败，链接：" + url);
        }
        closeMenu();
    }
    function openOnGitHub(item) {
        closeMenu();
        var url = prUrlOf(item);
        if (props && typeof props.onOpenUrl === "function")
            props.onOpenUrl(url);
        else {
            try {
                window.open(url, "_blank", "noopener,noreferrer");
            }
            catch (e) { /* 忽略 */ }
        }
    }
    var items = state.items || [];
    // 面板已经打开时不再悬浮：它盖住的就是刚打开的那一栏
    if (openPanelCount > 0)
        return null;
    if (!sessionId || items.length === 0)
        return null;
    var headline = items[0];
    var total = items.length;
    if (!open) {
        return React.createElement("div", { className: "ghsp-overlay", style: overlayStyle() }, React.createElement("button", {
            type: "button",
            className: "ghsp-pill",
            "aria-label": "展开本会话提交的 PR",
            onMouseDown: onDragStart,
            onDoubleClick: resetPos,
            onClick: function () {
                // 拖完那一下也会触发 click，别让它顺手把卡片展开
                if (movedRef.current) {
                    movedRef.current = false;
                    return;
                }
                setOpen(true);
                requestFullSessionPrs();
            },
            title: "本会话提交的 PR（可拖动，双击归位）",
        }, renderOctocat(13, "currentColor"), React.createElement("span", { className: "ghsp-pill-text" }, "PR"), React.createElement("span", { className: "ghsp-pill-delta" }, "#" + headline.number), total > 1 ? React.createElement("span", { className: "ghsp-pill-count" }, String(total)) : null, React.createElement("svg", { width: 10, height: 10, viewBox: "0 0 12 12", "aria-hidden": "true" }, React.createElement("path", { d: "M3 8l3-4 3 4", fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" }))));
    }
    return React.createElement("div", { className: "ghsp-overlay", style: overlayStyle() }, React.createElement("section", { className: "ghsp-card", "aria-label": "本会话提交的 PR" }, React.createElement("header", {
        className: "ghsp-card-head ghsp-drag-handle",
        onMouseDown: onDragStart,
        onDoubleClick: resetPos,
        title: "拖动移动，双击归位",
    }, renderOctocat(13, "currentColor"), React.createElement("span", { className: "ghsp-card-title" }, "本会话提交的 PR"), React.createElement("span", { className: "ghsp-card-sub" }, String(total)), React.createElement("span", { className: "ghsp-card-age", title: "数据更新时间" }, ageLabel(state.at)), React.createElement("button", {
        type: "button",
        className: "ghsp-icon-btn" + (state.refreshing ? " spinning" : ""),
        title: state.refreshing ? "刷新中…" : "刷新（立即绕过缓存）",
        "aria-label": "刷新",
        disabled: Boolean(state.refreshing),
        onClick: function () { refresh(); },
    }, React.createElement("svg", { width: 12, height: 12, viewBox: "0 0 12 12", "aria-hidden": "true" }, React.createElement("path", { d: "M10 6a4 4 0 1 1-1.2-2.8M10 1.5V4H7.5", fill: "none", stroke: "currentColor", strokeWidth: 1.3, strokeLinecap: "round", strokeLinejoin: "round" }))), React.createElement("button", { type: "button", className: "ghsp-icon-btn", title: "收起", "aria-label": "收起", onClick: function () { setOpen(false); overlayCardOpen = false; retunePolling(); } }, React.createElement("svg", { width: 12, height: 12, viewBox: "0 0 12 12", "aria-hidden": "true" }, React.createElement("path", { d: "M2 3h8M2 6h8M2 9h8", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" })))), menu
        ? React.createElement("div", {
            className: "ghsp-menu",
            role: "menu",
            style: { left: menu.x + "px", top: menu.y + "px" },
            onContextMenu: function (ev) { if (ev && ev.preventDefault)
                ev.preventDefault(); },
        }, React.createElement("div", { className: "ghsp-menu-head" }, "#" + (menu.item && menu.item.number) + " " + (menu.item && menu.item.repo ? menu.item.repo : "")), React.createElement("button", {
            type: "button", role: "menuitem", className: "ghsp-menu-item",
            onClick: function () { closeMenu(); if (props.onOpenPr)
                props.onOpenPr({ repo: menu.item.repo, number: menu.item.number }); },
        }, "在面板里打开"), React.createElement("button", {
            type: "button", role: "menuitem", className: "ghsp-menu-item",
            onClick: function () { copyPrLink(menu.item); },
        }, "复制链接"), React.createElement("button", {
            type: "button", role: "menuitem", className: "ghsp-menu-item",
            onClick: function () { openOnGitHub(menu.item); },
        }, "跳转 GitHub"))
        : null, hint ? React.createElement("div", { className: "ghsp-hint" }, hint) : null, React.createElement("ul", { className: "ghsp-list" }, items.map(function (item) {
        var key = prStateKey(item);
        var checks = item.checks || { state: "none" };
        return React.createElement("li", { key: item.repo + "#" + item.number }, React.createElement("button", {
            type: "button",
            className: "ghsp-row",
            onClick: function () {
                if (props.onOpenPr)
                    props.onOpenPr({ repo: item.repo, number: item.number });
            },
            onContextMenu: function (ev) {
                if (ev && ev.preventDefault)
                    ev.preventDefault();
                var x = (ev && (ev.clientX || 0)) || 0;
                var y = (ev && (ev.clientY || 0)) || 0;
                setMenu({ x: x, y: y, item: item });
            },
        }, 
        // 两行：第一行只放编号 + 标题 + 状态（标题吃满宽度），第二行放目标分支、仓库、CI
        React.createElement("div", { className: "ghsp-row-top" }, React.createElement("span", { className: "ghsp-row-num" }, "#" + item.number), React.createElement("span", { className: "ghsp-row-title" }, item.pending ? "读取中…" : (item.title || "")), item.pending ? null : React.createElement("span", { className: "ghsp-badge " + (item.missing ? "unknown" : key) }, item.missing ? "?" : prStateLabel(key))), React.createElement("div", { className: "ghsp-row-meta" }, item.pending ? null : React.createElement(TargetTag, { base: item.baseRefName }), React.createElement("span", { className: "ghsp-row-repo", title: item.repo }, item.repo), item.pending
            ? React.createElement("span", { className: "ghsp-inline-loading" }, React.createElement("span", { className: "ghsp-spinner" }))
            : React.createElement("span", { className: "ghsp-dot " + (item.missing ? "none" : checks.state), title: "检查状态" }))));
    }))));
}
/* ------------------------------------------------------------------ *
 * 右列面板
 * ------------------------------------------------------------------ */
/** 读取本 tab 的导航参数（repo / number）；不同 DSH 版本给的位置不一样，逐个兜 */
function readTabParams(props, info) {
    var out = {};
    try {
        var nav = info && info.tab && info.tab.navigation;
        if (nav && nav.params && typeof nav.params === "object")
            Object.assign(out, nav.params);
    }
    catch (e) { /* 导航参数缺失不算错 */ }
    try {
        if (info && info.tab && info.tab.params && typeof info.tab.params === "object")
            Object.assign(out, info.tab.params);
    }
    catch (e) { /* 同上 */ }
    try {
        if (props && props.params && typeof props.params === "object")
            Object.assign(out, props.params);
    }
    catch (e) { /* 同上 */ }
    return out;
}
/**
 * PR 讨论串（reviews / comments / commits）单独拉。
 *
 * 为什么拆：这一段占详情响应的大头（实测 55KB / 2s），和「头部+按钮」一起取，
 * 用户要等 2.4s 才看见任何东西；拆开后 1.6s 就能先看到头，讨论区再补。
 */
function usePrThread(repo, number, tick) {
    var [state, setState] = React.useState({ loading: false, data: null, error: null });
    React.useEffect(function () {
        if (!repo || !number) {
            setState({ loading: false, data: null, error: null });
            return;
        }
        var alive = true;
        setState(function (prev) { return { loading: true, data: prev.data, error: null }; });
        var controller = typeof AbortController === "function" ? new AbortController() : null;
        var timer = setTimeout(function () { if (controller)
            controller.abort(); }, 25000);
        fetch("/api/github/pr-thread?repo=" + encodeURIComponent(repo) + "&number=" + String(number)
            + (tick > 0 ? "&refresh=1" : ""), { headers: { accept: "application/json" }, signal: controller ? controller.signal : undefined })
            .then(function (r) { return r.json(); })
            .then(function (json) {
            if (!alive)
                return;
            if (json && json.ok && json.data)
                setState({ loading: false, data: json.data, error: null });
            else
                setState({ loading: false, data: null, error: (json && (json.error || json.message)) || "读取讨论失败" });
        })
            .catch(function (err) {
            if (!alive)
                return;
            setState({ loading: false, data: null, error: err && err.name === "AbortError" ? "读取讨论超时" : String((err && err.message) || err) });
        })
            .then(function () { clearTimeout(timer); });
        return function () { alive = false; };
    }, [repo, number, tick]);
    return state;
}
function usePrDetail(repo, number, reloadTick = 0, forceTick = 0) {
    var [state, setState] = React.useState({ loading: Boolean(number), error: null, pr: null, diff: "", diffError: "" });
    React.useEffect(function () {
        if (!number) {
            setState({ loading: false, error: null, pr: null, diff: "", diffError: "" });
            return;
        }
        var alive = true;
        setState(function (prev) { return { loading: true, error: null, pr: prev && prev.pr && prev.pr.number === number ? prev.pr : null, diff: prev && prev.pr && prev.pr.number === number ? prev.diff : "", diffError: "" }; });
        // withDiff=0：详情不等 diff。大 PR 的 gh pr diff 会跑满 30s，等它等于整页白屏。
        // thread（reviews/comments/commits）拆成独立请求：core 先画出来，讨论区后到
        var qs = "/api/github/pr-detail?withDiff=0&withThread=0&number=" + String(number)
            + (forceTick > 0 ? "&refresh=1" : "");
        if (repo)
            qs += "&repo=" + encodeURIComponent(repo);
        var controller = typeof AbortController === "function" ? new AbortController() : null;
        // 超时兜底：host 慢或挂住时不能让用户对着骨架屏无限等（「看不到数据」最像的现场）
        var timer = setTimeout(function () { if (controller)
            controller.abort(); }, 15000);
        fetch(qs, { headers: { accept: "application/json" }, signal: controller ? controller.signal : undefined })
            .then(function (r) { return r.json(); })
            .then(function (json) {
            if (!alive)
                return;
            if (json && json.ok && json.data && json.data.pr) {
                setState({ loading: false, error: null, pr: json.data.pr, diff: (json.data.diff) || "", diffError: (json.data.diffError) || "", at: Date.now() });
            }
            else if (json && json.ok) {
                // 「ok 但没有 pr」曾经被当成「还没读完」→ 永远骨架屏。空成功必须报错。
                setState({ loading: false, error: "PR 详情为空（Host 返回 ok 但缺少 pr 字段）", pr: null, diff: "", diffError: "" });
            }
            else {
                setState({ loading: false, error: (json && (json.error || json.message)) || "读取 PR 失败", pr: null, diff: "", diffError: "" });
            }
        })
            .catch(function (err) {
            if (!alive)
                return;
            var msg = err && err.name === "AbortError"
                ? "读取 PR 超时（15 秒）。可能是 gh 慢或仓库很大；点重试，或直接在 GitHub 打开。"
                : String((err && err.message) || err);
            setState({ loading: false, error: msg, pr: null, diff: "", diffError: "" });
        })
            .then(function () { clearTimeout(timer); });
        return function () { alive = false; };
    }, [repo, number, reloadTick, forceTick]);
    // 写操作成功后先本地改状态：按钮/徽标立刻变，真正的对账交给随后的后台刷新。
    // 不这么做的话，点完「合并」要等一次往返（~0.8s）界面才动，用户会以为没生效。
    var patch = function (fields) {
        setState(function (prev) {
            if (!prev || !prev.pr)
                return prev;
            return Object.assign({}, prev, { pr: Object.assign({}, prev.pr, fields) });
        });
    };
    return Object.assign({}, state, { patch });
}
/** 评论条的行号文案：单行 `:12`，多行 `:12–18` */
function rangeLabel(sel) {
    if (!sel)
        return "";
    var from = Math.min(sel.from || 0, sel.to || 0);
    var to = Math.max(sel.from || 0, sel.to || 0);
    if (!from)
        return "";
    return from === to ? ":" + from : ":" + from + "–" + to;
}
/** 展开按钮的文案：剩余超过一批就说「继续加载 N 行」，否则直接说「显示剩余 N 行」 */
function nextChunkLabel(remaining) {
    return remaining > 2000 ? "继续加载 2000 行（剩 " + remaining + "）" : "显示剩余 " + remaining + " 行";
}
function DiffBlock(props) {
    var rows = React.useMemo(function () { return diffLinesWithNumbers(props.text); }, [props.text]);
    // 单文件默认 400 行封顶；数据在内存里，所以「看更多」就地分段加载——
    // 一次铺一万行 DOM 会把面板卡住，2000 行一批既够读又不卡。
    var base = props.cap || 400;
    var [shownTo, setShownTo] = React.useState(base);
    var cap = Math.max(base, shownTo);
    var shown = rows.length > cap ? rows.slice(0, cap) : rows;
    // 只有「新文件里的行」才能挂 RIGHT 侧的行内评论：删除行没有新行号
    function pick(row, ev) {
        if (!props.onPickLine)
            return;
        if (row.kind !== "add" && row.kind !== "ctx")
            return;
        props.onPickLine(row.newLine || 0, ev);
    }
    return React.createElement("pre", { className: "ghsp-diff" }, shown.map(function (row, i) {
        var pickable = (row.kind === "add" || row.kind === "ctx") && row.newLine;
        var isSel = pickable && props.selectedLine && row.newLine >= props.selectedLine
            && row.newLine <= (props.selectedLineEnd || props.selectedLine);
        return React.createElement("code", {
            key: i,
            className: "ghsp-line " + row.kind + (pickable ? " pickable" : "") + (isSel ? " sel" : ""),
            onClick: pickable ? function (ev) { pick(row, ev); } : undefined,
            // 键盘可达：diff 行是「可点的 code 元素」，不补 role/tabIndex 就永远 Tab 不到
            role: pickable ? "button" : undefined,
            tabIndex: pickable ? 0 : undefined,
            "aria-label": pickable ? "评论第 " + (row.newLine || 0) + " 行" : undefined,
            onKeyDown: pickable
                ? function (ev) {
                    if (ev && (ev.key === "Enter" || ev.key === " ")) {
                        if (ev.preventDefault)
                            ev.preventDefault();
                        pick(row, ev);
                    }
                }
                : undefined,
            title: pickable ? "点击评论这一行（Shift+点击 选一段；Enter 也可以）" : undefined,
        }, (row.newLine ? String(row.newLine).padStart(4, " ") + " " : "     ") + (row.text || " "));
    }), rows.length > cap
        ? React.createElement("div", { className: "ghsp-more" }, React.createElement("span", null, "还有 " + (rows.length - cap) + " 行未显示"), React.createElement("button", {
            type: "button",
            className: "ghsp-btn ghsp-btn-sm",
            onClick: function () { setShownTo(Math.min(rows.length, cap + 2000)); },
        }, nextChunkLabel(rows.length - cap)))
        : null);
}
function SessionPrPanel(props) {
    // 同上：useTabInfo 只有 tab 体内才注入，按有无分成两个组件，避免 hook 数量在两帧之间变化。
    if (typeof (props && props.useTabInfo) !== "function") {
        return React.createElement(SessionPrPanelBody, Object.assign({}, props, { __tabInfo: null }));
    }
    return React.createElement(SessionPrPanelWithInfo, props);
}
function SessionPrPanelWithInfo(props) {
    var info = props.useTabInfo();
    return React.createElement(SessionPrPanelBody, Object.assign({}, props, { __tabInfo: info }));
}
/**
 * 一行的行号：行内评论必须给 GitHub 一个「新文件的第几行」。
 * 统一 diff 里只有 hunk 头带区间，这里边扫边推。
 */
function diffLinesWithNumbers(text) {
    var rows = [];
    var lines = String(text || "").split("\n");
    var newNo = 0;
    var oldNo = 0;
    for (var i = 0; i < lines.length; i += 1) {
        var line = lines[i];
        if (line.indexOf("diff --git ") === 0)
            continue;
        if (line.indexOf("index ") === 0)
            continue;
        // ---/+++ 是文件头，不是内容行：GitHub 也不展示
        if (line.slice(0, 3) === "+++" || line.slice(0, 3) === "---")
            continue;
        var hm = /^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@/.exec(line);
        if (hm) {
            oldNo = Number(hm[1]);
            newNo = Number(hm[2]);
            rows.push({ kind: "hunk", text: line });
            continue;
        }
        if (line.indexOf("\\ No newline") === 0) {
            rows.push({ kind: "meta", text: line });
            continue;
        }
        var head = line.charAt(0);
        if (head === "+") {
            rows.push({ kind: "add", text: line, newLine: newNo });
            newNo += 1;
        }
        else if (head === "-") {
            rows.push({ kind: "del", text: line, oldLine: oldNo });
            oldNo += 1;
        }
        else {
            rows.push({ kind: "ctx", text: line, newLine: newNo, oldLine: oldNo });
            newNo += 1;
            oldNo += 1;
        }
    }
    return rows;
}
function reviewStateLabel(state) {
    var s = String(state || "").toUpperCase();
    if (s === "APPROVED")
        return "已批准";
    if (s === "CHANGES_REQUESTED")
        return "要求修改";
    if (s === "COMMENTED")
        return "评论";
    if (s === "DISMISSED")
        return "已忽略";
    return s || "评论";
}
function checkState(item) {
    var conclusion = String(item && item.conclusion || "").toUpperCase();
    var status = String(item && item.status || "").toUpperCase();
    var state = String(item && item.state || "").toUpperCase();
    if (status && status !== "COMPLETED")
        return { tone: "pending", label: "进行中" };
    if (state) {
        if (state === "SUCCESS")
            return { tone: "pass", label: "通过" };
        if (state === "PENDING")
            return { tone: "pending", label: "进行中" };
        return { tone: "fail", label: state.toLowerCase() };
    }
    if (conclusion === "SUCCESS" || conclusion === "NEUTRAL" || conclusion === "SKIPPED")
        return { tone: "pass", label: "通过" };
    if (conclusion === "FAILURE" || conclusion === "TIMED_OUT" || conclusion === "CANCELLED" || conclusion === "ACTION_REQUIRED")
        return { tone: "fail", label: conclusion.toLowerCase() };
    return { tone: "pending", label: conclusion ? conclusion.toLowerCase() : "等待中" };
}
function commitLabel(commit) {
    if (!commit)
        return "";
    return commit.messageHeadline || String(commit.messageBody || "").split("\n")[0] || commit.oid || "";
}
/* 把一段文本推进对话框：优先 insertText（追加，不动已输入的草稿），其次 setDraft，最后写剪贴板 */
function pushTextToComposer(props, text) {
    var actions = props && props.inputActions;
    if (actions && typeof actions.insertText === "function") {
        try {
            if (actions.insertText(text) !== false) {
                if (typeof actions.focus === "function")
                    actions.focus();
                return "inserted";
            }
        }
        catch (e) { /* 落到 setDraft */ }
    }
    if (actions && typeof actions.setDraft === "function") {
        try {
            actions.setDraft(text);
            if (typeof actions.focus === "function")
                actions.focus();
            return "replaced";
        }
        catch (e) { /* 落到剪贴板 */ }
    }
    try {
        if (navigator && navigator.clipboard) {
            navigator.clipboard.writeText(text);
            return "copied";
        }
    }
    catch (e) { /* 忽略 */ }
    return "failed";
}
/** 右列 PR 面板（Codex 式窄面板）：头部 + 变更/描述/讨论/检查 四个分段 + 评论动作 */
/** 目标分支语义色：同一条 PR 落到 main / release / test / dev，一眼要能分开 */
function targetTone(base) {
    var b = String(base || "").toLowerCase();
    if (!b)
        return "other";
    if (b === "main" || b === "master" || b === "prod" || b === "production")
        return "main";
    if (b.indexOf("release") === 0)
        return "release";
    if (b === "test" || b === "testing" || b === "qa" || b === "staging" || b === "stage" || b.indexOf("test") === 0)
        return "test";
    if (b === "dev" || b === "develop" || b === "development" || b.indexOf("dev") === 0)
        return "dev";
    return "other";
}
function targetLabel(base) {
    var b = String(base || "");
    if (!b)
        return "";
    // 长分支名截断，但保留语义前缀（release/xxx 至少能看到 release）
    return b.length > 18 ? b.slice(0, 17) + "…" : b;
}
function TargetTag(props) {
    var base = props && props.base;
    if (!base)
        return null;
    return React.createElement("span", {
        className: "ghsp-target " + targetTone(base),
        title: "目标分支：" + base,
    }, "→ " + targetLabel(base));
}
/** 单独的 diff 拉取：详情先出，diff 慢也不拖住整页 */
function usePrDiff(repo, number, reloadTick = 0, enabled = true) {
    var [state, setState] = React.useState({ loading: false, error: null, diff: "" });
    React.useEffect(function () {
        // 懒加载闸门：没点「加载 diff」就完全不发请求、不占骨架位
        if (!number || !enabled) {
            setState({ loading: false, error: null, diff: "" });
            return;
        }
        var alive = true;
        setState({ loading: true, error: null, diff: "" });
        var qs = "/api/github/pr-diff?number=" + String(number) + (repo ? "&repo=" + encodeURIComponent(repo) : "");
        var controller = typeof AbortController === "function" ? new AbortController() : null;
        // 客户端兜底超时：Host 侧的 gh 超时是 20s，这里给 30s，超时就明确报错而不是无限骨架
        var timer = setTimeout(function () { if (controller)
            controller.abort(); }, 30000);
        fetch(qs, { headers: { accept: "application/json" }, signal: controller ? controller.signal : undefined })
            .then(function (r) { return r.json(); })
            .then(function (json) {
            if (!alive)
                return;
            if (json && json.ok)
                setState({ loading: false, error: json.data && json.data.diffError ? String(json.data.diffError) : null, diff: (json.data && json.data.diff) || "" });
            else
                setState({ loading: false, error: (json && (json.error || json.message)) || "拉取 diff 失败", diff: "" });
        })
            .catch(function (err) {
            if (!alive)
                return;
            setState({ loading: false, error: String((err && err.name === "AbortError") ? "拉取 diff 超时" : ((err && err.message) || err)), diff: "" });
        })
            .then(function () { clearTimeout(timer); });
        return function () { alive = false; clearTimeout(timer); };
    }, [repo, number, reloadTick, enabled]);
    return state;
}
/**
 * 按文件取补丁（`/api/github/pr-files`）。
 *
 * 为什么需要：整份 diff 撞 GitHub 的 20000 行硬上限（或 30s 超时）时，面板就只剩
 * 「拉取失败」。按文件拿 patch 不受这个上限约束——大 PR 也能一个一个看。
 * 同时它还是文件清单的来源（详情 core 不再带 files 字段）。
 */
function usePrFiles(repo, number, tick = 0, enabled = true) {
    var [state, setState] = React.useState({ loading: false, error: null, files: [], truncated: false });
    React.useEffect(function () {
        if (!enabled || !repo || !number) {
            setState({ loading: false, error: null, files: [], truncated: false });
            return;
        }
        var alive = true;
        setState(function (prev) { return { loading: true, error: null, files: prev.files || [], truncated: prev.truncated || false }; });
        var controller = typeof AbortController === "function" ? new AbortController() : null;
        var timer = setTimeout(function () { if (controller)
            controller.abort(); }, 30000);
        fetch("/api/github/pr-files?repo=" + encodeURIComponent(repo) + "&number=" + String(number) + (tick > 0 ? "&refresh=1" : ""), { headers: { accept: "application/json" }, signal: controller ? controller.signal : undefined })
            .then(function (r) { return r.json(); })
            .then(function (json) {
            if (!alive)
                return;
            if (json && json.ok && json.data)
                setState({ loading: false, error: null, files: json.data.files || [], truncated: Boolean(json.data.truncated) });
            else
                setState({ loading: false, error: (json && (json.error || json.message)) || "读取文件补丁失败", files: [], truncated: false });
        })
            .catch(function (err) {
            if (!alive)
                return;
            setState({ loading: false, error: err && err.name === "AbortError" ? "读取文件补丁超时" : String((err && err.message) || err), files: [], truncated: false });
        })
            .then(function () { clearTimeout(timer); });
        return function () { alive = false; clearTimeout(timer); };
    }, [repo, number, tick, enabled]);
    return state;
}
/** 右列 PR 面板（v3）：左侧主展示（描述 / 变更 / 讨论），右侧审批与操作 */
/** 截断 markdown 时按行边界切：切在代码块/表格中间会渲染出半截标签 */
function clipMarkdown(text, limit) {
    var s = String(text || "");
    if (s.length <= limit)
        return s;
    var cut = s.slice(0, limit);
    var nl = cut.lastIndexOf("\n");
    if (nl > limit * 0.6)
        cut = cut.slice(0, nl);
    // 未闭合的代码围栏补一个，避免整段被当成代码
    var fences = (cut.match(/```/g) || []).length;
    if (fences % 2 === 1)
        cut += "\n```";
    return cut;
}
/** 右列 PR 面板（v4）：卡片式分区 + 懒加载 diff + 骨架屏 */
function SessionPrPanelBody(props) {
    // 面板自己开着的时候，右下角浮窗就是在盖自己：挂载计数让浮窗自动让位
    React.useEffect(function () {
        openPanelCount += 1;
        requestFullSessionPrs();
        publishPrStore(prStore);
        retunePolling();
        return function () {
            openPanelCount -= 1;
            publishPrStore(prStore);
            retunePolling();
        };
    }, []);
    var info = props.__tabInfo || null;
    var params = readTabParams(props, info);
    var sessionId = (props && props.sessionId) || null;
    var pair = useSessionCreatedPrs(sessionId);
    var list = pair[0];
    var initialNumber = Number(params.number) || null;
    var [selected, setSelected] = React.useState(initialNumber);
    var [selectedRepo, setSelectedRepo] = React.useState(params.repo || null);
    var [lineSel, setLineSel] = React.useState(null);
    var [comment, setComment] = React.useState("");
    var [sideComment, setSideComment] = React.useState("");
    var [busy, setBusy] = React.useState(null);
    var [notice, setNotice] = React.useState(null);
    var [reloadTick, setReloadTick] = React.useState(0);
    // 自动刷新只 bump 这个：元数据 30s 一刷，diff 不跟着重拉（几 MB 的 patch 没必要每 30s 传一次）
    var [detailTick, setDetailTick] = React.useState(0);
    // 讨论串的刷新节奏比 core 慢：它重（55KB），且内容只在有人评论时才变
    var [threadTick, setThreadTick] = React.useState(0);
    // diff 懒加载：不点不开拉。181 个文件的 PR 光 gh pr diff 就能跑满 30s，
    // 默认拉它等于让整个面板等一个「不怎么看」的区域。
    var [wantDiff, setWantDiff] = React.useState(false);
    var [expandedFiles, setExpandedFiles] = React.useState({});
    var [mergeMethod, setMergeMethod] = React.useState("squash");
    // 仓库允许哪几种合并方式（allow_*_merge 只在仓库对象上）——不查就会让人选一个必然被拒的方式
    var [mergeMethods, setMergeMethods] = React.useState(null);
    // 合并后是否删源分支：默认不删。删分支不可逆，必须用户显式勾。
    var [deleteBranch, setDeleteBranch] = React.useState(false);
    var [confirmMerge, setConfirmMerge] = React.useState(false);
    var [descExpanded, setDescExpanded] = React.useState(false);
    var [notesExpanded, setNotesExpanded] = React.useState(false);
    var [checksExpanded, setChecksExpanded] = React.useState(false);
    var [requestsExpanded, setRequestsExpanded] = React.useState(false);
    React.useEffect(function () {
        if (!selected)
            return;
        var timer = null;
        function refreshNow() {
            try {
                if (typeof document !== "undefined" && document.hidden)
                    return;
            }
            catch (e) { /* 忽略 */ }
            setDetailTick(function (n) { return n + 1; });
        }
        timer = setInterval(refreshNow, 10000);
        var onVisible = function () { refreshNow(); };
        try {
            if (typeof document !== "undefined" && document.addEventListener)
                document.addEventListener("visibilitychange", onVisible);
        }
        catch (e) { /* 忽略 */ }
        var onFocus = function () { refreshNow(); };
        try {
            if (typeof window !== "undefined" && window.addEventListener)
                window.addEventListener("focus", onFocus);
        }
        catch (e) { /* 忽略 */ }
        return function () {
            if (timer)
                clearInterval(timer);
            try {
                if (typeof document !== "undefined" && document.removeEventListener)
                    document.removeEventListener("visibilitychange", onVisible);
            }
            catch (e) { /* 忽略 */ }
            try {
                if (typeof window !== "undefined" && window.removeEventListener)
                    window.removeEventListener("focus", onFocus);
            }
            catch (e) { /* 忽略 */ }
        };
    }, [selected, selectedRepo]);
    React.useEffect(function () {
        var next = Number(params.number) || null;
        if (next && next !== selected) {
            setSelected(next);
            setSelectedRepo(params.repo || null);
            setLineSel(null);
            setComment("");
            setSideComment("");
            setWantDiff(false);
            setDescExpanded(false);
            setNotesExpanded(false);
            setChecksExpanded(false);
        }
    }, [params.number, params.repo]);
    React.useEffect(function () {
        if (!selectedRepo) {
            setMergeMethods(null);
            return;
        }
        var alive = true;
        fetch("/api/github/repo-merge-methods?repo=" + encodeURIComponent(selectedRepo), { headers: { accept: "application/json" } })
            .then(function (r) { return r.json(); })
            .then(function (json) {
            if (!alive)
                return;
            if (json && json.ok && json.data)
                setMergeMethods(json.data);
        })
            .catch(function () { });
        return function () { alive = false; };
    }, [selectedRepo]);
    // detailTick：自动刷新（吃 8s 缓存）；reloadTick：手动刷新/写操作后（穿透缓存）
    var detail = usePrDetail(selectedRepo, selected, detailTick, reloadTick);
    var thread = usePrThread(selectedRepo, selected, threadTick);
    // 把讨论串合进详情对象：下游（讨论/待修改意见/评审卡）无需关心数据来自两次请求
    var pr = detail.pr
        ? Object.assign({}, detail.pr, thread.data ? {
            reviews: thread.data.reviews || detail.pr.reviews || [],
            comments: thread.data.comments || detail.pr.comments || [],
            commits: thread.data.commits || detail.pr.commits || [],
        } : {})
        : null;
    var diffState = usePrDiff(selectedRepo, selected, reloadTick, wantDiff);
    React.useEffect(function () {
        if (!mergeMethods)
            return;
        var allowed = ["squash", "merge", "rebase"].filter(function (m) { return mergeMethods[m] !== false; });
        if (allowed.length === 0)
            return;
        if (allowed.indexOf(mergeMethod) === -1)
            setMergeMethod(allowed[0]);
    }, [mergeMethods, mergeMethod]);
    var diffParts = React.useMemo(function () {
        var nextFiles = splitDiffByFile(diffState.diff || "");
        var keep = {};
        // 默认只展开第一个文件：diff 不是这块的重点，先给个「能看」的入口
        if (nextFiles.length)
            keep[nextFiles[0].path] = true;
        return { files: nextFiles, open: keep };
    }, [diffState.diff]);
    var files = diffParts.files;
    var [openFiles, setOpenFiles] = React.useState({});
    function openUrl(url) {
        if (props && props.onOpenUrl)
            props.onOpenUrl(url);
        else if (url)
            window.open(url, "_blank", "noopener,noreferrer");
    }
    function flash(tone, text) {
        setNotice({ tone: tone, text: text });
        try {
            setTimeout(function () { setNotice(null); }, 4000);
        }
        catch (e) { /* 无定时器环境忽略 */ }
    }
    function selectItem(item) {
        setSelected(item.number);
        setSelectedRepo(item.repo);
        setLineSel(null);
        setComment("");
        setSideComment("");
        setWantDiff(false);
    }
    function composerText(kind) {
        var lines = [];
        var target = selectedRepo ? selectedRepo + "#" + selected : "#" + selected;
        if (kind === "pr") {
            lines.push("请处理这个 PR：" + target + " " + ((pr && pr.title) || ""));
            if (pr && pr.url)
                lines.push(pr.url);
            if (pr && pr.headRefName)
                lines.push("分支：" + pr.headRefName + " → " + (pr.baseRefName || "base"));
            lines.push("当前状态：" + ((pr && pr.state) || "?") + (pr && pr.isDraft ? "（draft）" : "") + "，改动 " + ((pr && pr.additions) || 0) + "+ / " + ((pr && pr.deletions) || 0) + "-，" + ((pr && pr.changedFiles) || 0) + " 个文件");
            if (pr && pr.reviewDecision)
                lines.push("评审结论：" + pr.reviewDecision);
            lines.push("");
            lines.push("请先看 diff 再动手；需要改的地方直接改代码，改完告诉我需要重新推哪些提交。");
        }
        else if (kind === "file" && lineSel) {
            lines.push("看这个改动：" + target + " 的 `" + lineSel.path + "`" + (lineSel.line ? " 第 " + lineSel.line + " 行" : ""));
            if (pr && pr.url)
                lines.push(pr.url);
            lines.push("");
            lines.push("请说明这里为什么这么改，以及是否有边界情况没覆盖；如果需要调整，直接给出改法。");
        }
        else {
            lines.push("关于 " + target + "：");
        }
        return lines.join("\n");
    }
    function clipBody(text, limit) {
        var s = String(text || "");
        return s.length > limit ? s.slice(0, limit) + "\n…（原文共 " + s.length + " 字，已截断）" : s;
    }
    function prRef() {
        return (selectedRepo || "") + "#" + selected;
    }
    /** 失败项里有没有「评审门禁」类检查（这类不是代码检查，修完要重新请求评审） */
    function isReviewGateCheck(c) {
        var name = String((c && (c.name || c.context)) || "");
        return /review|gate|approve|bot/i.test(name);
    }
    function fixCheckPrompt(list) {
        var lines = [];
        var sha = String((pr && pr.headRefOid) || "").slice(0, 8);
        var gateItems = list.filter(isReviewGateCheck);
        lines.push("PR " + prRef() + " 的检查没通过，请修到全绿。");
        lines.push("");
        lines.push("坐标");
        lines.push("- 仓库/编号：" + prRef());
        if (pr && pr.baseRefName)
            lines.push("- 目标分支：" + pr.baseRefName + (pr.headRefName ? " ← 源分支：" + pr.headRefName : ""));
        if (sha)
            lines.push("- 当前 HEAD：" + sha + "（先确认你改的就是这个提交之上，别修旧代码）");
        if (pr && pr.reviewDecision)
            lines.push("- 评审结论：" + pr.reviewDecision);
        if (pr && pr.url)
            lines.push("- PR：" + pr.url);
        lines.push("");
        lines.push("失败项（共 " + list.length + "）");
        list.forEach(function (c, i) {
            var name = c.name || c.context || "check";
            lines.push((list.length > 1 ? (i + 1) + ") " : "") + "「" + name + "」FAILED" + (c.workflowName ? "（workflow: " + c.workflowName + "）" : ""));
            if (c.detailsUrl || c.targetUrl)
                lines.push("   详情：" + (c.detailsUrl || c.targetUrl));
            if (isReviewGateCheck(c))
                lines.push("   性质：评审门禁（不是代码检查，见下面第 6 步）");
        });
        lines.push("");
        lines.push("怎么做");
        if (gateItems.length === list.length) {
            // 纯门禁：没有 workflow 日志可拉，失败原因只在评审意见里
            lines.push("1. 这类检查没有运行日志，原因看 PR 的评审意见，不要靠猜：`gh pr view " + String(selected) + " --json reviewDecision,reviews,comments`。");
        }
        else {
            lines.push("1. 先拉失败日志再动手，不要靠猜：`gh run view <run-id> --log-failed`（run id 在详情 URL 里），定位到具体断言/编译错误。");
        }
        lines.push("2. 只改与该失败相关的最小范围；不动无关文件、不 force-push、不 dismiss 别人的 review。");
        lines.push("3. 本地跑与失败检查等价的那条命令（workflow 里的测试/构建命令），确认本地先过。");
        lines.push("4. 提交并推送到源分支" + (pr && pr.headRefName ? " `" + pr.headRefName + "`" : "") + "。");
        lines.push("5. 推送后必须确认检查真的重跑了，而不是以为推完就完事：`gh pr checks " + String(selected) + " --watch`；若没有自动触发，用 `gh run rerun <run-id> --failed` 重跑。");
        if (gateItems.length > 0 || (pr && String(pr.reviewDecision || "").toUpperCase() !== "APPROVED")) {
            lines.push("6. 修完要**重新触发评审**：这是评审门禁类问题，光推代码不会自动放行——重新请求评审（`gh pr edit " + String(selected) + " --add-reviewer <reviewer>`，或在 PR 里 @ 对应 reviewer 说明已按意见修完），并确认 reviewDecision 变成 APPROVED 或新的一轮评审确实已触发。");
            lines.push("7. 回报：改了什么文件、本地验证命令与结果、推送的 commit sha、`gh pr checks " + String(selected) + "` 当前结果、评审是否已重新请求。");
        }
        else {
            lines.push("6. 回报：改了什么文件、本地验证命令与结果、推送的 commit sha、`gh pr checks " + String(selected) + "` 当前结果。");
        }
        lines.push("");
        lines.push("完成标准：上述检查全部变绿" + (gateItems.length > 0 ? "、且评审已重新请求并拿到结论" : "") + "；`gh pr checks " + String(selected) + "` 里不再有本次范围内的失败项。");
        return lines.join("\n");
    }
    function fixNotePrompt(items) {
        var lines = [];
        if (items.length === 1) {
            var one = items[0];
            lines.push("PR " + prRef() + " 有一条评审意见要处理：");
            lines.push("作者 @" + (one.author || "?") + " · " + reviewStateLabel(one.state || "COMMENTED"));
            lines.push("");
            lines.push(clipBody(one.body, 4000));
            lines.push("");
            lines.push("怎么做");
            lines.push("1. 按这条意见改代码，只改相关范围；不动无关文件、不 force-push。");
            lines.push("2. 本地跑相关测试/构建，确认能过再提交。");
            lines.push("3. 推送到源分支" + (pr && pr.headRefName ? " `" + pr.headRefName + "`" : "") + "——评审意见只有落到**新的 commit** 上才算处理完。");
            lines.push("4. **推完要重新请求评审**：GitHub 的 required_approving_review_count 不会因为新提交自动满足（多数仓库还要求 last-push approval）。重新请求 @" + (one.author || "<reviewer>") + " 复审（`gh pr edit " + String(selected) + " --add-reviewer " + (one.author || "<reviewer>") + "`，或在 PR 里 @ 对方说明已按意见修改）。");
            lines.push("5. 如果这是个对话线程：在对应 thread 里回一句「已在 <sha> 修复」并 resolve，别让意见挂着。");
            lines.push("6. 回报：改了哪些文件、本地验证结果、推送的 commit sha、复审是否已重新请求、线程是否已 resolve。");
            lines.push("做不到的部分说清原因，不要糊过去。");
            return lines.join("\n");
        }
        lines.push("PR " + prRef() + " 有 " + items.length + " 条评审意见，请逐条处理：");
        items.forEach(function (it, i) {
            lines.push("");
            lines.push("### " + (i + 1) + ") @" + (it.author || "?") + " · " + reviewStateLabel(it.state || "COMMENTED") + (it.at ? " · " + formatRelativeTime(it.at) : ""));
            lines.push(clipBody(it.body, 2000));
        });
        lines.push("");
        lines.push("怎么做");
        lines.push("1. 按编号逐条处理，只改相关范围；不动无关文件、不 force-push、不 dismiss 别人的 review。");
        lines.push("2. 每条都要能指到具体改动（文件/行）或说明为什么不做。");
        lines.push("3. 本地跑相关测试/构建后提交，推送到源分支" + (pr && pr.headRefName ? " `" + pr.headRefName + "`" : "") + "。");
        lines.push("4. **推完要重新请求评审**（新提交不会自动满足 required_approving_review_count，很多仓库还要求 last-push approval）：在 PR 里 @ 提出意见的评审人说明已全部处理，请复审；对应 review thread 逐条回复「已在 <sha> 修复」并 resolve。");
        lines.push("5. 全部处理完后跑一次 `gh pr checks " + String(selected) + "` 确认检查仍全绿，再回报。");
        lines.push("6. 回报格式：按编号列「改了什么 / 验证命令与结果 / 复审是否已请求」；有冲突或做不了的同样按编号说明原因。");
        return lines.join("\n");
    }
    function pushToComposer(text) {
        var how = pushTextToComposer(props, text);
        if (how === "failed")
            flash("error", "输入框不可用，也没有剪贴板权限");
        else if (how === "copied")
            flash("info", "输入框不可用，内容已复制到剪贴板");
        else
            flash("ok", "已放进输入框");
    }
    /** 面板里做过写操作后，浮窗那份列表也要立刻更新（否则卡片还显示旧状态） */
    function refreshSessionList() {
        setThreadTick(function (n) { return n + 1; });
        if (prTimerSid)
            loadSessionPrs(prTimerSid, true);
    }
    function postJson(url, body) {
        return fetch(url, {
            method: "POST",
            headers: { "content-type": "application/json", accept: "application/json" },
            body: JSON.stringify(body),
        }).then(function (r) { return r.json(); });
    }
    async function sendPrComment(text, kindLabel) {
        if (!selectedRepo || !selected || !text.trim())
            return;
        setBusy("comment");
        try {
            var json = await postJson("/api/github/pr-comment", { repo: selectedRepo, number: selected, body: text.trim() });
            if (json && json.ok) {
                flash("ok", kindLabel + "已发布到 PR");
                refreshSessionList();
                setComment("");
                setSideComment("");
                setReloadTick(function (n) { return n + 1; });
            }
            else {
                flash("error", (json && (json.error || json.message)) || "发布失败");
            }
        }
        catch (err) {
            flash("error", String((err && err.message) || err));
        }
        finally {
            setBusy(null);
        }
    }
    async function sendInlineComment(text) {
        if (!selectedRepo || !selected || !lineSel || !text.trim())
            return;
        var sha = pr && pr.headRefOid;
        var from = Math.min(lineSel.from, lineSel.to);
        var to = Math.max(lineSel.from, lineSel.to);
        if (!sha) {
            await sendPrComment("`" + lineSel.path + "` " + rangeLabel(lineSel) + "：\n\n" + text.trim(), "评论");
            return;
        }
        setBusy("inline");
        try {
            var payload = {
                repo: selectedRepo,
                number: selected,
                body: text.trim(),
                path: lineSel.path,
                line: to,
                side: "RIGHT",
                commit_id: sha,
            };
            if (from !== to)
                payload.start_line = from;
            var json = await postJson("/api/github/pr-inline-comment", payload);
            if (json && json.ok) {
                flash("ok", "行内评论已发布");
                refreshSessionList();
                setComment("");
                setLineSel(null);
                setReloadTick(function (n) { return n + 1; });
            }
            else {
                flash("error", (json && (json.error || json.message)) || "发布失败");
            }
        }
        catch (err) {
            flash("error", String((err && err.message) || err));
        }
        finally {
            setBusy(null);
        }
    }
    async function mergePr(action) {
        if (!selectedRepo || !selected)
            return;
        setBusy(action);
        try {
            var json = await postJson("/api/github/pr-merge", {
                repo: selectedRepo,
                number: selected,
                action: action,
                method: mergeMethod,
                delete_branch: deleteBranch,
            });
            if (json && json.ok) {
                flash("ok", (json.data && json.data.message) || "已提交");
                // 乐观更新：先按用户意图改本地状态，避免「点了没反应」的那 0.8s
                if (action === "merge")
                    detail.patch({ state: "MERGED", mergedAt: new Date().toISOString() });
                else if (action === "auto")
                    detail.patch({ autoMergeRequest: { enabledAt: new Date().toISOString(), mergeMethod: mergeMethod } });
                else if (action === "disable-auto")
                    detail.patch({ autoMergeRequest: null });
                refreshSessionList();
                setThreadTick(function (n) { return n + 1; });
                setConfirmMerge(false);
                setReloadTick(function (n) { return n + 1; });
            }
            else {
                flash("error", (json && (json.error || json.message)) || "合并失败");
            }
        }
        catch (err) {
            flash("error", String((err && err.message) || err));
        }
        finally {
            setBusy(null);
        }
    }
    async function submitReview(event) {
        if (!selectedRepo || !selected)
            return;
        if (event === "REQUEST_CHANGES" && !sideComment.trim()) {
            flash("error", "请求修改必须先写说明");
            return;
        }
        setBusy(event);
        try {
            var json = await postJson("/api/github/pr-review-submit", {
                repo: selectedRepo,
                number: selected,
                event: event,
                body: sideComment.trim(),
            });
            if (json && json.ok) {
                flash("ok", (json.data && json.data.message) || "已提交");
                if (event === "APPROVE")
                    detail.patch({ reviewDecision: "APPROVED" });
                else if (event === "REQUEST_CHANGES")
                    detail.patch({ reviewDecision: "CHANGES_REQUESTED" });
                refreshSessionList();
                setThreadTick(function (n) { return n + 1; });
                setSideComment("");
                setReloadTick(function (n) { return n + 1; });
            }
            else {
                flash("error", (json && (json.error || json.message)) || "提交失败");
            }
        }
        catch (err) {
            flash("error", String((err && err.message) || err));
        }
        finally {
            setBusy(null);
        }
    }
    /* ---------------- 没有选中 PR：本会话列表 ---------------- */
    if (!selected) {
        var items = (list && list.items) || [];
        return React.createElement("div", { className: "ghsp-panel" }, React.createElement("header", { className: "ghsp-head" }, React.createElement("div", { className: "ghsp-head-top" }, renderOctocat(14, "currentColor"), React.createElement("span", { className: "ghsp-repo" }, "本会话提交的 PR"))), items.length === 0
            ? (list && list.loading
                ? React.createElement("div", { className: "ghsp-skeleton" }, React.createElement("div", { className: "ghsp-bar w60" }), React.createElement("div", { className: "ghsp-bar w40" }))
                : (list && list.error
                    ? React.createElement("div", { className: "ghsp-error" }, React.createElement("span", null, "读取本会话 PR 失败：" + String(list.error)), React.createElement("button", { type: "button", className: "ghsp-btn", onClick: function () { pair[1](); } }, "重试"))
                    : React.createElement("div", { className: "ghsp-empty" }, React.createElement("strong", null, sessionId ? "本会话还没有提交 PR" : "这个标签页没有绑定会话"), React.createElement("span", null, sessionId
                        ? "用 github_pr 创建 PR 后这里会出现；如果 PR 是在别的会话里提的，要去那个会话的右下角浮窗看。"
                        : "它可能是上次启动恢复的旧标签：请从右下角浮窗重新打开，或直接刷新页面。"), React.createElement("span", { className: "ghsp-muted" }, "session: " + (sessionId || "（无）")))))
            : React.createElement("ul", { className: "ghsp-list", style: { padding: "6px" } }, items.map(function (item) {
                var missing = Boolean(item.missing);
                var pending = Boolean(item.pending);
                var stats = React.createElement("span", null, React.createElement("span", { className: "ghsp-add" }, "+" + (item.additions || 0)), " ", React.createElement("span", { className: "ghsp-del" }, "−" + (item.deletions || 0)));
                return React.createElement("li", { key: item.repo + "#" + item.number }, React.createElement("button", { type: "button", className: "ghsp-row", onClick: function () { selectItem(item); } }, React.createElement("div", { className: "ghsp-row-top" }, React.createElement("span", { className: "ghsp-row-num" }, "#" + item.number), React.createElement("span", { className: "ghsp-row-title" }, pending ? "读取中…" : (item.title || "")), pending ? null : React.createElement("span", { className: "ghsp-badge " + (missing ? "unknown" : prStateKey(item)) }, missing ? "?" : prStateLabel(prStateKey(item)))), React.createElement("div", { className: "ghsp-row-bottom" }, React.createElement("span", null, item.repo), pending ? React.createElement("span", { className: "ghsp-inline-loading" }, React.createElement("span", { className: "ghsp-spinner" }), "读取中…")
                    : (missing ? React.createElement("span", null, "元数据暂不可用（gh 未登录或超时）") : stats))));
            })));
    }
    /* ---------------- 详情 ---------------- */
    function cardBlock(key, title, meta, actions, body, flush) {
        return React.createElement("section", { key: key, className: "ghsp-card-block" }, React.createElement("div", { className: "ghsp-card-head2" }, React.createElement("span", { className: "ghsp-card-block-title" }, title), meta ? React.createElement("span", { className: "ghsp-card-block-meta" }, meta) : null, actions ? React.createElement("span", { className: "ghsp-card-block-actions" }, actions) : null), React.createElement("div", { className: "ghsp-card-body" + (flush ? " flush" : "") }, body));
    }
    var stateKey = pr ? prStateKey({ state: pr.state, isDraft: pr.isDraft }) : "unknown";
    var reviews = (pr && pr.reviews) || [];
    var comments = (pr && pr.comments) || [];
    var commits = (pr && pr.commits) || [];
    var checks = (pr && pr.statusCheckRollup) || [];
    var filesState = usePrFiles(selectedRepo, selected, threadTick, Boolean(selected && selectedRepo));
    // 文件清单优先用 /pr-files（详情 core 不再带 files 字段）
    var prFiles = (filesState.files.length > 0 ? filesState.files : ((pr && pr.files) || []));
    var prStateUpper = String((pr && pr.state) || "").toUpperCase();
    var mergeState = String((pr && pr.mergeStateStatus) || "").toUpperCase();
    var autoOn = Boolean(pr && pr.autoMergeRequest);
    var reviewUpper = String((pr && pr.reviewDecision) || "").toUpperCase();
    // 按钮只在「这件事还能做」时出现：已合并 / 已关闭的 PR，审批与合并都没有意义，直接不渲染。
    var actionsVisible = !pr || prStateUpper === "OPEN";
    /* 失败检查数：完全不同来源都要认（checkRun 的 conclusion、status context 的 state） */
    var failingChecks = checks.filter(function (c) {
        var conclusion = String((c && c.conclusion) || "").toUpperCase();
        var ctxState = String((c && c.state) || "").toUpperCase();
        if (ctxState)
            return ctxState === "FAILURE" || ctxState === "ERROR";
        return conclusion === "FAILURE" || conclusion === "TIMED_OUT" || conclusion === "CANCELLED"
            || conclusion === "ACTION_REQUIRED" || conclusion === "STARTUP_FAILURE";
    }).length;
    var changesRequested = reviewUpper === "CHANGES_REQUESTED";
    var approvedAlready = reviewUpper === "APPROVED";
    // 为什么禁用的原因要写清楚，别让用户点一个灰按钮猜；顺序按「先修什么最划算」排。
    var approveBlockedReason = !pr
        ? "正在读取 PR"
        : (pr.isDraft ? "草稿 PR 不能批准"
            : (mergeState === "DIRTY" ? "有冲突，先解决冲突再批准"
                : (approvedAlready ? "你已经批准过这个 PR" : null)));
    var mergeBlockedReason = !pr
        ? "正在读取 PR"
        : (pr.isDraft ? "草稿 PR 不能合并"
            : (mergeState === "DIRTY" ? "有冲突，先解决冲突"
                : (failingChecks > 0 ? failingChecks + " 项检查未通过"
                    : (changesRequested ? "评审要求修改，先处理意见"
                        : (mergeState === "BLOCKED" ? "分支保护未满足（检查未过或还缺批准）" : null)))));
    // 一行讲清「现在为什么合不了」，而不是让用户去猜按钮为什么不亮
    var blockedReasons = [];
    if (pr) {
        if (failingChecks > 0)
            blockedReasons.push(failingChecks + " 项检查未通过");
        if (changesRequested)
            blockedReasons.push("评审要求修改");
        if (mergeState === "DIRTY")
            blockedReasons.push("有合并冲突");
    }
    var blockedHint = (actionsVisible && blockedReasons.length > 0)
        ? React.createElement("span", { className: "ghsp-blocked", title: "这些条件不满足前无法合并" }, "不能合并：" + blockedReasons.join(" · "))
        : null;
    var headActions = React.createElement("div", { className: "ghsp-head-actions" }, actionsVisible ? React.createElement("button", {
        type: "button",
        className: "ghsp-btn ghsp-btn-sm ghsp-btn-approve",
        disabled: busy === "APPROVE" || Boolean(approveBlockedReason),
        title: approveBlockedReason || "批准这个 PR",
        onClick: function () { submitReview("APPROVE"); },
    }, busy === "APPROVE" ? "提交中…" : "批准") : null, actionsVisible ? React.createElement("button", {
        type: "button",
        className: "ghsp-btn ghsp-btn-sm " + (confirmMerge ? "ghsp-btn-danger" : "ghsp-btn-merge"),
        disabled: busy === "merge" || Boolean(mergeBlockedReason),
        title: mergeBlockedReason || "用当前方式合并（点两次确认）",
        onClick: function () {
            if (!confirmMerge) {
                setConfirmMerge(true);
                try {
                    setTimeout(function () { setConfirmMerge(false); }, 5000);
                }
                catch (e) { /* 无定时器忽略 */ }
                return;
            }
            mergePr("merge");
        },
    }, busy === "merge" ? "合并中…" : (confirmMerge ? "确认合并？" : "合并")) : null, 
    // 自动合并恰恰是「现在还不能合、等条件满足再合」用的，所以分支保护挡住时它仍然可用
    actionsVisible ? React.createElement("button", {
        type: "button",
        className: "ghsp-btn ghsp-btn-sm ghsp-btn-auto" + (autoOn ? " on" : ""),
        disabled: busy === "auto" || busy === "disable-auto" || !pr,
        title: autoOn ? "取消自动合并" : "开启自动合并：满足条件后自动合入",
        onClick: function () { mergePr(autoOn ? "disable-auto" : "auto"); },
    }, busy === "auto" ? "开启中…" : busy === "disable-auto" ? "取消中…" : autoOn ? "自动合并 ✓" : "自动合并") : null, actionsVisible ? React.createElement("select", {
        className: "ghsp-select",
        value: mergeMethod,
        title: mergeMethods ? "合并方式（按仓库允许项过滤）" : "合并方式",
        onChange: function (ev) { setMergeMethod(ev.target.value); },
    }, ["squash", "merge", "rebase"].map(function (m) {
        var ok = !mergeMethods || mergeMethods[m] !== false;
        return ok ? React.createElement("option", { key: m, value: m }, m) : null;
    })) : null, blockedHint, React.createElement("button", { type: "button", className: "ghsp-icon-btn", title: "在 GitHub 打开", "aria-label": "在 GitHub 打开", onClick: function () { if (pr && pr.url)
            openUrl(pr.url); } }, React.createElement("svg", { width: 12, height: 12, viewBox: "0 0 12 12", "aria-hidden": "true" }, React.createElement("path", { d: "M5 2H2.5A1.5 1.5 0 0 0 1 3.5v6A1.5 1.5 0 0 0 2.5 11h6A1.5 1.5 0 0 0 10 9.5V7M4.5 7.5 10 2m0 0H6.5M10 2v3.5", fill: "none", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" }))), React.createElement("button", { type: "button", className: "ghsp-icon-btn", title: "把这个 PR 放进对话框", "aria-label": "把这个 PR 放进对话框", onClick: function () { pushToComposer(composerText("pr")); } }, React.createElement("svg", { width: 12, height: 12, viewBox: "0 0 12 12", "aria-hidden": "true" }, React.createElement("path", { d: "M2 3h8v5H5L3 10V8H2z", fill: "none", stroke: "currentColor", strokeWidth: 1.1, strokeLinejoin: "round" }))), React.createElement("button", {
        type: "button",
        className: "ghsp-icon-btn" + (detail.loading ? " spinning" : ""),
        title: detail.loading ? "刷新中…" : "刷新（元数据 + 变更）",
        "aria-label": "刷新",
        disabled: Boolean(detail.loading),
        onClick: function () {
            setReloadTick(function (n) { return n + 1; });
            setDetailTick(function (n) { return n + 1; });
            setThreadTick(function (n) { return n + 1; });
        },
    }, React.createElement("svg", { width: 12, height: 12, viewBox: "0 0 12 12", "aria-hidden": "true" }, React.createElement("path", { d: "M10 6a4 4 0 1 1-1.2-2.8M10 1.5V4H7.5", fill: "none", stroke: "currentColor", strokeWidth: 1.3, strokeLinecap: "round", strokeLinejoin: "round" }))));
    /* ---- 卡片：描述 ---- */
    var bodyText = String((pr && pr.body) || "");
    // 描述默认整段展示：PR 正文就是「为什么这么改」，藏起来等于让评审去点两次。
    // 只有长到离谱（>6000 字）才折叠，并且按钮放在裁剪区外面，否则会被 max-height 一起切掉。
    var descHuge = bodyText.length > 6000;
    var descBody = !pr
        ? React.createElement("div", { className: "ghsp-skeleton" }, React.createElement("div", { className: "ghsp-bar w80" }), React.createElement("div", { className: "ghsp-bar w60" }))
        : (bodyText
            ? React.createElement("div", null, React.createElement("div", { className: descHuge && !descExpanded ? "ghsp-fade" : "", style: descHuge && !descExpanded ? { maxHeight: "520px" } : undefined }, React.createElement("div", { className: "ghsp-md" }, renderMarkdownLite(React.createElement, descHuge && !descExpanded ? clipMarkdown(bodyText, 6000) : bodyText))), descHuge && !descExpanded ? React.createElement("button", { type: "button", className: "ghsp-btn ghsp-btn-sm ghsp-more-btn", onClick: function () { setDescExpanded(true); } }, "展开全文") : null)
            : React.createElement("div", { className: "ghsp-muted" }, "这条 PR 没有正文。"));
    var descriptionCard = cardBlock("desc", "描述", null, null, descBody, false);
    /* ---- 卡片：变更（懒加载 diff）---- */
    var changesActions = !wantDiff
        ? React.createElement("button", {
            type: "button",
            className: "ghsp-btn ghsp-btn-sm",
            onClick: function () { setWantDiff(true); },
        }, "加载 diff")
        : (diffState.loading
            ? React.createElement("span", { className: "ghsp-inline-loading" }, React.createElement("span", { className: "ghsp-spinner" }), "拉取中…")
            : React.createElement("button", {
                type: "button",
                className: "ghsp-btn ghsp-btn-sm",
                onClick: function () { setReloadTick(function (n) { return n + 1; }); },
            }, "重新加载"));
    var changesBody;
    if (!wantDiff) {
        // 未加载 diff：先给文件清单（pr.files 是详情就带的，零额外请求）
        changesBody = React.createElement("div", null, prFiles.length === 0
            ? (detail.loading ? React.createElement("div", { className: "ghsp-skeleton" }, React.createElement("div", { className: "ghsp-bar w80" }), React.createElement("div", { className: "ghsp-bar w60" })) : React.createElement("div", { className: "ghsp-muted" }, "没有文件改动"))
            : prFiles.slice(0, 40).map(function (f) {
                var open = Boolean(expandedFiles[f.path]);
                var hasPatch = Boolean(String(f.patch || "").trim());
                return React.createElement("div", { key: f.path }, React.createElement("div", { className: "ghsp-file-row" }, hasPatch
                    ? React.createElement("button", {
                        type: "button", className: "ghsp-file-toggle",
                        title: open ? "收起这个文件的改动" : "只看这个文件的改动",
                        onClick: function () {
                            setExpandedFiles(function (prev) {
                                var next = Object.assign({}, prev);
                                if (next[f.path])
                                    delete next[f.path];
                                else
                                    next[f.path] = true;
                                return next;
                            });
                        },
                    }, open ? "▾" : "▸")
                    : React.createElement("span", { className: "ghsp-file-toggle ghost" }, "·"), React.createElement("span", { className: "ghsp-path", title: f.path }, f.path), React.createElement("span", { className: "ghsp-stat" }, React.createElement("span", { className: "ghsp-add" }, "+" + (f.additions || 0)), " ", React.createElement("span", { className: "ghsp-del" }, "−" + (f.deletions || 0))), React.createElement("button", { type: "button", className: "ghsp-icon-btn", title: "把这个文件放进对话框", onClick: function () {
                        pushToComposer("看这个改动：" + (selectedRepo || "") + "#" + selected + " 的 `" + f.path + "`（+" + (f.additions || 0) + " −" + (f.deletions || 0) + "）\n" + ((pr && pr.url) || ""));
                    } }, "＋")), open && hasPatch
                    ? React.createElement(DiffBlock, {
                        text: "diff --git a/" + f.path + " b/" + f.path + "\n--- a/" + f.path + "\n+++ b/" + f.path + "\n" + String(f.patch || ""),
                        cap: 3000,
                    })
                    : null);
            }), prFiles.length > 40 ? React.createElement("div", { className: "ghsp-muted", style: { padding: "6px 0" } }, "还有 " + (prFiles.length - 40) + " 个文件，点上方「加载 diff」看全量") : null);
    }
    else if (diffState.loading) {
        changesBody = React.createElement("div", null, React.createElement("div", { className: "ghsp-skel-row" }), React.createElement("div", { className: "ghsp-skel-row", style: { width: "72%" } }), React.createElement("div", { className: "ghsp-skel-row", style: { width: "86%" } }), React.createElement("div", { className: "ghsp-skel-row", style: { width: "58%" } }));
    }
    else if (diffState.error) {
        changesBody = React.createElement("div", null, React.createElement("div", { className: "ghsp-error" }, React.createElement("span", null, diffState.error), React.createElement("div", { className: "ghsp-actions" }, React.createElement("button", { type: "button", className: "ghsp-btn", onClick: function () { setReloadTick(function (n) { return n + 1; }); } }, "重试"), React.createElement("button", { type: "button", className: "ghsp-btn", onClick: function () { setWantDiff(false); } }, "按文件看"))), React.createElement("div", { className: "ghsp-muted", style: { marginTop: "6px" } }, filesState.loading ? "正在读取文件补丁…" : "整份 diff 拿不到时，回到文件列表逐个展开即可（不受 20000 行上限约束）。"));
    }
    else if (files.length > 0) {
        changesBody = React.createElement("div", null, files.map(function (file) {
            var isOpen = openFiles[file.path] === undefined ? Boolean(diffParts.open[file.path]) : openFiles[file.path];
            var active = lineSel && lineSel.path === file.path;
            return React.createElement("section", { key: file.path, className: "ghsp-file" + (active ? " active" : "") }, React.createElement("div", { className: "ghsp-file-head" }, React.createElement("button", {
                type: "button",
                className: "ghsp-file-toggle",
                "aria-expanded": isOpen,
                onClick: function () {
                    setOpenFiles(function (prev) {
                        var next = Object.assign({}, prev);
                        next[file.path] = !isOpen;
                        return next;
                    });
                },
            }, React.createElement("span", { className: "ghsp-caret" + (isOpen ? " open" : "") }, React.createElement("svg", { width: 8, height: 8, viewBox: "0 0 8 8", "aria-hidden": "true" }, React.createElement("path", { d: "M2 1l4 3-4 3", fill: "none", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" }))), React.createElement("span", { className: "ghsp-path", title: file.path }, file.path), React.createElement("span", { className: "ghsp-stat" }, React.createElement("span", { className: "ghsp-add" }, "+" + file.additions), " ", React.createElement("span", { className: "ghsp-del" }, "−" + file.deletions))), React.createElement("button", {
                type: "button",
                className: "ghsp-icon-btn ghsp-file-action",
                title: "把这个文件的改动放进对话框",
                onClick: function () {
                    setLineSel({ path: file.path, from: 0, to: 0 });
                    pushToComposer(composerText("file"));
                },
            }, "＋对话")), isOpen ? React.createElement(DiffBlock, {
                text: file.text,
                selectedLine: active ? Math.min(lineSel.from, lineSel.to) : 0,
                selectedLineEnd: active ? Math.max(lineSel.from, lineSel.to) : 0,
                onPickLine: function (line, ev) {
                    if (!line) {
                        setLineSel(null);
                        setComment("");
                        return;
                    }
                    // Shift+点击：在同一文件内把当前锚点扩成区间（GitHub 的多行评论也是这样选）
                    var extend = Boolean(ev && ev.shiftKey) && lineSel && lineSel.path === file.path;
                    setLineSel(extend ? { path: file.path, from: lineSel.from, to: line } : { path: file.path, from: line, to: line });
                    setComment("");
                },
            }) : null);
        }));
    }
    else {
        changesBody = React.createElement("div", null, React.createElement("div", { className: "ghsp-notice" }, diffState.error ? ("拿不到完整 diff：" + diffState.error + "。") : "diff 为空。", " 下面是文件清单，点 ↗ 去 GitHub 看全量。"), prFiles.slice(0, 60).map(function (f) {
            return React.createElement("div", { key: f.path, className: "ghsp-file-row" }, React.createElement("span", { className: "ghsp-path", title: f.path }, f.path), React.createElement("span", { className: "ghsp-stat" }, React.createElement("span", { className: "ghsp-add" }, "+" + (f.additions || 0)), " ", React.createElement("span", { className: "ghsp-del" }, "−" + (f.deletions || 0))));
        }));
    }
    var changesCard = cardBlock("changes", "变更", (files.length || prFiles.length) + " 个文件", changesActions, changesBody, true);
    /* ---- 卡片：讨论 ---- */
    var discussionItems = [];
    reviews.forEach(function (r, i) {
        discussionItems.push({ key: "r" + i, kind: "review", at: r.submittedAt || "", author: (r.author && r.author.login) || "", state: r.state, body: r.body || "" });
    });
    comments.forEach(function (c, i) {
        discussionItems.push({ key: "c" + i, kind: "comment", at: c.createdAt || "", author: (c.author && c.author.login) || "", state: "", body: c.body || "" });
    });
    discussionItems.sort(function (a, b) { return String(a.at) < String(b.at) ? -1 : 1; });
    var shownNotes = notesExpanded ? discussionItems : discussionItems.slice(0, 3);
    var discussionBody = React.createElement("div", null, discussionItems.length === 0
        ? (detail.loading ? React.createElement("div", { className: "ghsp-skeleton" }, React.createElement("div", { className: "ghsp-bar w60" })) : React.createElement("div", { className: "ghsp-muted" }, "还没有评审或评论"))
        : shownNotes.map(function (item) {
            return React.createElement("div", { key: item.key, className: "ghsp-note" }, React.createElement("div", { className: "ghsp-note-head" }, React.createElement("span", { className: "ghsp-note-author" }, "@" + item.author), item.kind === "review" ? React.createElement("span", { className: "ghsp-badge " + (String(item.state).toUpperCase() === "APPROVED" ? "open" : String(item.state).toUpperCase() === "CHANGES_REQUESTED" ? "closed" : "draft") }, reviewStateLabel(item.state)) : null, React.createElement("span", { className: "ghsp-note-time" }, item.at ? formatRelativeTime(item.at) : ""), React.createElement("button", { type: "button", className: "ghsp-icon-btn", title: "引用到对话框", onClick: function () {
                    pushToComposer("引用 @" + item.author + " 在 " + (selectedRepo || "") + "#" + selected + " 的意见：\n\n" + String(item.body).slice(0, 2000) + "\n\n请针对这条意见给出处理方案。");
                } }, "＋")), React.createElement("div", { className: "ghsp-md" }, renderMarkdownLite(React.createElement, item.body)));
        }), discussionItems.length > 3 ? React.createElement("button", {
        type: "button",
        className: "ghsp-btn ghsp-btn-sm",
        onClick: function () { setNotesExpanded(!notesExpanded); },
    }, notesExpanded ? "收起" : "显示全部 " + discussionItems.length + " 条") : null, commits.length > 0
        ? React.createElement("div", { style: { marginTop: "6px" } }, React.createElement("div", { className: "ghsp-sub-title" }, "提交 " + commits.length), commits.slice(0, 6).map(function (c, i) {
            return React.createElement("div", { key: (c.oid || "") + i, className: "ghsp-commit" }, React.createElement("code", null, String(c.oid || "").slice(0, 7)), React.createElement("span", { className: "ghsp-commit-msg", title: commitLabel(c) }, commitLabel(c)), React.createElement("span", { className: "ghsp-note-time" }, c.committedDate ? formatRelativeTime(c.committedDate) : ""));
        }), commits.length > 6 ? React.createElement("div", { className: "ghsp-muted", style: { paddingTop: "4px" } }, "还有 " + (commits.length - 6) + " 个提交") : null)
        : null);
    var discussionCard = cardBlock("discuss", "讨论", String(discussionItems.length), null, discussionBody, false);
    /* ---- 卡片：待修改意见（评审 + 评论，逐条可 fix，可批量）---- */
    var requests = [];
    var prAuthor = (pr && pr.author && pr.author.login) || "";
    reviews.forEach(function (r, i) {
        if (!String(r.body || "").trim())
            return;
        // 已批准的评审不进「待修改」队列：那是结论，不是待办
        if (String(r.state || "").toUpperCase() === "APPROVED")
            return;
        requests.push({ key: "r" + i, author: (r.author && r.author.login) || "", state: r.state || "COMMENTED", at: r.submittedAt || "", body: r.body });
    });
    comments.forEach(function (c, i) {
        if (!String(c.body || "").trim())
            return;
        // PR 作者自己的回复（「收到」「已改」）不是待办，别混进队列
        var who = (c.author && c.author.login) || "";
        if (prAuthor && who === prAuthor)
            return;
        requests.push({ key: "c" + i, author: who, state: "", at: c.createdAt || "", body: c.body });
    });
    // 最新在前：修 PR 的人通常先看最近这条
    requests.sort(function (a, b) { return String(a.at) < String(b.at) ? 1 : -1; });
    var shownRequests = requestsExpanded ? requests : requests.slice(0, 4);
    var requestsActions = requests.length
        ? React.createElement("button", {
            type: "button",
            className: "ghsp-btn ghsp-btn-sm",
            title: "把这些意见一次性推进对话框",
            onClick: function () { pushToComposer(fixNotePrompt(requests)); },
        }, "全部 fix " + requests.length)
        : null;
    var requestsBody = requests.length === 0
        ? (detail.loading
            ? React.createElement("div", { className: "ghsp-skeleton" }, React.createElement("div", { className: "ghsp-bar w60" }))
            : React.createElement("div", { className: "ghsp-muted" }, "还没有需要处理的意见"))
        : React.createElement("div", null, shownRequests.map(function (item) {
            var tone = String(item.state).toUpperCase() === "CHANGES_REQUESTED" ? "closed" : String(item.state).toUpperCase() === "APPROVED" ? "open" : "draft";
            return React.createElement("div", { key: item.key, className: "ghsp-request" }, React.createElement("div", { className: "ghsp-note-head" }, React.createElement("span", { className: "ghsp-note-author" }, "@" + (item.author || "?")), React.createElement("span", { className: "ghsp-badge " + tone }, reviewStateLabel(item.state || "COMMENTED")), React.createElement("span", { className: "ghsp-note-time" }, item.at ? formatRelativeTime(item.at) : ""), React.createElement("button", {
                type: "button",
                className: "ghsp-btn ghsp-btn-sm ghsp-fix-btn",
                title: "把这条意见推给 Agent 修",
                onClick: function () { pushToComposer(fixNotePrompt([item])); },
            }, "fix")), React.createElement("div", { className: "ghsp-md ghsp-clamp" }, renderMarkdownLite(React.createElement, item.body)));
        }), requests.length > 4
            ? React.createElement("button", { type: "button", className: "ghsp-btn ghsp-btn-sm", onClick: function () { setRequestsExpanded(!requestsExpanded); } }, requestsExpanded ? "收起" : "显示全部 " + requests.length + " 条")
            : null);
    var requestsCard = cardBlock("requests", "待修改意见", String(requests.length), requestsActions, requestsBody, false);
    /* ---- 卡片：检查 ---- */
    var failedChecks = checks.filter(function (c) { return checkState(c).tone === "fail"; }).length;
    var shownChecks = checksExpanded ? checks : checks.slice(0, 6);
    var checksBody = checks.length === 0
        ? (detail.loading ? React.createElement("div", { className: "ghsp-skeleton" }, React.createElement("div", { className: "ghsp-bar w60" })) : React.createElement("div", { className: "ghsp-muted" }, "没有上报的检查"))
        : React.createElement("div", null, React.createElement("div", { className: "ghsp-checks-summary" }, React.createElement("span", { className: "ghsp-dot " + (failedChecks ? "fail" : "pass") }), React.createElement("span", null, failedChecks ? failedChecks + " 项失败 / 共 " + checks.length + " 项" : "全部通过（" + checks.length + " 项）")), shownChecks.map(function (c, i) {
            var st = checkState(c);
            return React.createElement("div", { key: (c.name || "") + i, className: "ghsp-check" + (st.tone === "fail" ? " fail" : "") }, React.createElement("span", { className: "ghsp-dot " + st.tone }), React.createElement("span", { className: "ghsp-check-name", title: c.name }, c.name || c.context || "check"), st.tone === "fail"
                ? React.createElement("button", {
                    type: "button",
                    className: "ghsp-btn ghsp-btn-sm ghsp-fix-btn",
                    title: "把这条失败的检查推给 Agent 修",
                    onClick: function () { pushToComposer(fixCheckPrompt([c])); },
                }, "fix")
                : null, (c.detailsUrl || c.targetUrl)
                ? React.createElement("button", { type: "button", className: "ghsp-icon-btn", title: "打开", onClick: function () { openUrl(c.detailsUrl || c.targetUrl); } }, "↗")
                : null);
        }), checks.length > 6 ? React.createElement("button", { type: "button", className: "ghsp-btn ghsp-btn-sm", onClick: function () { setChecksExpanded(!checksExpanded); } }, checksExpanded ? "收起" : "全部 " + checks.length + " 项") : null);
    var failedList = checks.filter(function (c) { return checkState(c).tone === "fail"; });
    var checksActions = failedList.length
        ? React.createElement("button", {
            type: "button",
            className: "ghsp-btn ghsp-btn-sm",
            title: "把所有失败的检查一次性推给 Agent",
            onClick: function () { pushToComposer(fixCheckPrompt(failedList)); },
        }, "修复失败项 " + failedList.length)
        : null;
    var checksCard = cardBlock("checks", "检查", String(checks.length), checksActions, checksBody, false);
    /* ---- 卡片：评审 ---- */
    var reviewers = [];
    reviews.forEach(function (r) {
        var login = (r.author && r.author.login) || "";
        if (!login)
            return;
        var hit = reviewers.filter(function (x) { return x.login === login; })[0];
        if (hit) {
            hit.state = r.state || hit.state;
            return;
        }
        reviewers.push({ login: login, state: r.state || "COMMENTED" });
    });
    var reviewersBody = reviewers.length === 0
        ? (detail.loading ? React.createElement("div", { className: "ghsp-skeleton" }, React.createElement("div", { className: "ghsp-bar w40" })) : React.createElement("div", { className: "ghsp-muted" }, "还没有人评审"))
        : reviewers.map(function (r) {
            return React.createElement("div", { key: r.login, className: "ghsp-check" }, React.createElement("span", { className: "ghsp-dot " + (String(r.state).toUpperCase() === "APPROVED" ? "pass" : String(r.state).toUpperCase() === "CHANGES_REQUESTED" ? "fail" : "none") }), React.createElement("span", { className: "ghsp-check-name" }, "@" + r.login), React.createElement("span", { className: "ghsp-check-state" }, reviewStateLabel(r.state)));
        });
    var reviewersCard = cardBlock("reviewers", "评审", String(reviewers.length), null, reviewersBody, false);
    /* ---- 卡片：操作 ---- */
    var actionsBody = React.createElement("div", null, React.createElement("textarea", {
        className: "ghsp-textarea",
        placeholder: "写点意见：可发到对话、发到 PR，或作为「请求修改」的理由",
        value: sideComment,
        onChange: function (ev) { setSideComment(ev.target.value); },
    }), React.createElement("label", { className: "ghsp-check-row" }, React.createElement("input", {
        type: "checkbox",
        checked: deleteBranch,
        onChange: function (ev) { setDeleteBranch(Boolean(ev.target.checked)); },
    }), React.createElement("span", null, "合并后删除源分支")), React.createElement("div", { className: "ghsp-actions", style: { marginTop: "8px" } }, React.createElement("button", {
        type: "button",
        className: "ghsp-btn",
        disabled: busy === "REQUEST_CHANGES" || !sideComment.trim(),
        onClick: function () { submitReview("REQUEST_CHANGES"); },
    }, busy === "REQUEST_CHANGES" ? "提交中…" : "请求修改"), React.createElement("button", {
        type: "button",
        className: "ghsp-btn",
        disabled: busy === "comment" || !sideComment.trim(),
        onClick: function () { sendPrComment(sideComment, "评论"); },
    }, "发到 PR 评论"), React.createElement("button", {
        type: "button",
        className: "ghsp-btn",
        onClick: function () { pushToComposer(composerText("pr")); },
    }, "推到对话框")));
    var actionsCard = cardBlock("actions", "操作", null, null, actionsBody, false);
    /* ---- 选中某一行后的评论条 ---- */
    var commentBar = lineSel
        ? React.createElement("div", { className: "ghsp-commentbar" }, React.createElement("div", { className: "ghsp-commentbar-head" }, React.createElement("span", null, "评论 " + lineSel.path + " " + rangeLabel(lineSel)), React.createElement("button", { type: "button", className: "ghsp-icon-btn", title: "取消", onClick: function () { setLineSel(null); setComment(""); } }, "✕")), React.createElement("textarea", {
            className: "ghsp-textarea",
            placeholder: "这里要怎么改？（可直接发到 PR，或先放进对话框让 Agent 处理）",
            value: comment,
            onChange: function (ev) { setComment(ev.target.value); },
        }), React.createElement("div", { className: "ghsp-actions" }, React.createElement("button", {
            type: "button",
            className: "ghsp-btn ghsp-btn-primary",
            disabled: busy === "inline" || !comment.trim(),
            onClick: function () {
                if (!comment.trim())
                    return;
                var target = "`" + lineSel.path + "` " + rangeLabel(lineSel);
                if (lineSel.from > 0)
                    sendInlineComment(comment);
                else
                    sendPrComment(target + "：\n\n" + comment, "评论");
            },
        }, busy === "inline" ? "发送中…" : "发到 PR（行内）"), React.createElement("button", {
            type: "button",
            className: "ghsp-btn",
            disabled: !comment.trim(),
            onClick: function () {
                var where = "`" + lineSel.path + "` " + rangeLabel(lineSel);
                pushToComposer("在 " + (selectedRepo || "") + "#" + selected + " 的 " + where + "，我要求这样改：\n\n" + comment.trim() + "\n\n请直接改代码并告诉我改了哪些文件。");
            },
        }, "放进对话框")))
        : null;
    var headerSkeleton = detail.loading && !pr;
    return React.createElement("div", { className: "ghsp-panel" }, React.createElement("header", { className: "ghsp-head" }, React.createElement("div", { className: "ghsp-head-top" }, React.createElement("span", { className: "ghsp-badge " + stateKey }, prStateLabel(stateKey)), React.createElement("span", { className: "ghsp-repo", title: selectedRepo || "" }, selectedRepo || ""), React.createElement("span", { className: "ghsp-num" }, "#" + selected), headActions), React.createElement("h2", { className: "ghsp-title" }, (pr && pr.title) || (headerSkeleton ? "正在读取 PR…" : "PR #" + selected)), React.createElement("div", { className: "ghsp-meta" }, pr && pr.author && pr.author.login ? React.createElement("span", null, "@" + pr.author.login) : null, pr && pr.createdAt ? React.createElement("span", null, formatRelativeTime(pr.createdAt)) : null, pr && pr.headRefName
        ? React.createElement("span", { className: "ghsp-branch" }, React.createElement("span", { title: pr.headRefName }, pr.headRefName), React.createElement(TargetTag, { base: pr.baseRefName }))
        : null, React.createElement("span", { className: "ghsp-add" }, "+" + ((pr && pr.additions) || 0)), React.createElement("span", { className: "ghsp-del" }, "−" + ((pr && pr.deletions) || 0)), pr && pr.changedFiles ? React.createElement("span", null, pr.changedFiles + " 个文件") : null, (function () {
        if (!checks.length)
            return null;
        var rollup = summarizeRollupClient(checks);
        return React.createElement("span", { className: "ghsp-checks", title: "检查状态" }, React.createElement("span", { className: "ghsp-dot " + rollup.tone }), React.createElement("span", { className: "ghsp-check-chip " + rollup.tone }, rollup.label));
    })(), (function () {
        // 评审结论在面板里原本完全不可见（只在「待修改意见」里体现）。补一个小徽标：
        // 批准之后能立刻看到「已批准」，也解释了为什么合并按钮仍可能被禁用。
        var decision = String((pr && pr.reviewDecision) || "").toUpperCase();
        if (!decision)
            return null;
        var map = {
            APPROVED: ["pass", "已批准"],
            CHANGES_REQUESTED: ["fail", "需要修改"],
            REVIEW_REQUIRED: ["pending", "待评审"],
        };
        var hit = map[decision];
        if (!hit)
            return null;
        return React.createElement("span", { className: "ghsp-badge " + hit[0], title: "评审结论：" + decision }, hit[1]);
    })(), detail.at ? React.createElement("span", { className: "ghsp-detail-age", title: "元数据更新时间" }, "更新于 " + ageLabel(detail.at)) : null)), detail.error && !pr
        ? React.createElement("div", { className: "ghsp-error" }, React.createElement("span", null, (selectedRepo || "") + "#" + selected + "：" + detail.error), React.createElement("div", { className: "ghsp-actions" }, React.createElement("button", { type: "button", className: "ghsp-btn", onClick: function () { setReloadTick(function (n) { return n + 1; }); setDetailTick(function (n) { return n + 1; }); } }, "重试"), React.createElement("button", { type: "button", className: "ghsp-btn", onClick: function () { if (selectedRepo)
                openUrl("https://github.com/" + selectedRepo + "/pull/" + selected); } }, "在 GitHub 打开")))
        : React.createElement("div", { className: "ghsp-cols" }, React.createElement("main", { className: "ghsp-col-main" }, descriptionCard, changesCard, discussionCard, requestsCard), React.createElement("aside", { className: "ghsp-col-side" }, headerSkeleton ? null : checksCard, headerSkeleton ? null : reviewersCard, actionsCard)), notice ? React.createElement("div", { className: "ghsp-toast " + notice.tone }, notice.text) : null, commentBar);
}
/** 头部那条检查摘要 */
function summarizeRollupClient(checks) {
    var fail = 0;
    var pending = 0;
    for (var i = 0; i < checks.length; i += 1) {
        var st = checkState(checks[i]);
        if (st.tone === "fail")
            fail += 1;
        else if (st.tone === "pending")
            pending += 1;
    }
    if (fail > 0)
        return { tone: "fail", label: fail + " 项失败" };
    if (pending > 0)
        return { tone: "pending", label: "检查进行中" };
    return { tone: "pass", label: checks.length + " 项通过" };
}
/** 右列 tab 的标题（chip 上也走这里） */
function SessionPrTabTitle(props) {
    if (typeof (props && props.useTabInfo) !== "function")
        return renderTitle(0);
    return React.createElement(SessionPrTitleWithInfo, props);
}
function SessionPrTitleWithInfo(props) {
    var info = props.useTabInfo();
    var params = readTabParams(props, info);
    return renderTitle(Number(params.number) || 0);
}
function renderTitle(number) {
    return React.createElement("span", { style: { display: "flex", alignItems: "center", gap: "6px" } }, renderOctocat(13, "currentColor"), React.createElement("span", null, number ? "PR #" + number : "PR"));
}

// ---- [Bundled: sync-settings-modal.js] ----
/**
 * 全景驾驶舱「⚙️ 设置」模态弹窗组件：左侧分区导航（数据同步 / 网络代理 / 更新设置 / 关于）+ 右侧内容区
 */
function GlobalSyncSettingsModal(props) {
    if (!props.isOpen)
        return null;
    var [activeSection, setActiveSection] = React.useState(props.initialSection || "sync");
    var [strategy, setStrategy] = React.useState(props.currentSettings.strategy || "swr");
    var [localGitWatch, setLocalGitWatch] = React.useState(props.currentSettings.localGitWatch !== false);
    var [cloudSyncIntervalMs, setCloudSyncIntervalMs] = React.useState(Number(props.currentSettings.cloudSyncIntervalMs) || 600000);
    var [cacheMeta, setCacheMeta] = React.useState(getCacheStorageMeta());
    var [clearTip, setClearTip] = React.useState("");
    React.useEffect(function () {
        if (props.isOpen && props.currentSettings) {
            setStrategy(props.currentSettings.strategy || "swr");
            setLocalGitWatch(props.currentSettings.localGitWatch !== false);
            setCloudSyncIntervalMs(Number(props.currentSettings.cloudSyncIntervalMs) || 600000);
        }
    }, [props.isOpen, props.currentSettings]);
    var [updateMode, setUpdateMode] = React.useState("official");
    var [updateBusy, setUpdateBusy] = React.useState(false);
    var [updateMsg, setUpdateMsg] = React.useState(null);
    var [aboutVersion, setAboutVersion] = React.useState(null);
    React.useEffect(function () {
        if (!props.isOpen)
            return;
        fetch("/api/github/update-settings")
            .then(function (r) { return r.json(); })
            .then(function (j) {
            if (j && j.ok && j.data && j.data.mode) {
                setUpdateMode(j.data.mode);
            }
        })
            .catch(function () { });
        fetch("/api/github/check-update")
            .then(function (r) { return r.json(); })
            .then(function (j) {
            if (j && j.ok && j.data && j.data.currentVersion)
                setAboutVersion(j.data.currentVersion);
        })
            .catch(function () { });
    }, [props.isOpen]);
    var [proxyEnabled, setProxyEnabled] = React.useState(false);
    var [proxyUrl, setProxyUrl] = React.useState("");
    var [proxyNoProxy, setProxyNoProxy] = React.useState("localhost,127.0.0.1");
    var [proxyApplyNpm, setProxyApplyNpm] = React.useState(true);
    var [proxyBusy, setProxyBusy] = React.useState(false);
    var [proxyMsg, setProxyMsg] = React.useState(null);
    var [proxyProbe, setProxyProbe] = React.useState(null);
    React.useEffect(function () {
        if (!props.isOpen)
            return;
        fetch("/api/github/proxy")
            .then(function (r) { return r.json(); })
            .then(function (j) {
            if (j && j.ok && j.state) {
                setProxyEnabled(Boolean(j.state.config && j.state.config.url));
                setProxyUrl((j.state.config && j.state.config.url) || "");
                setProxyNoProxy((j.state.config && j.state.config.noProxy) || "localhost,127.0.0.1");
                setProxyApplyNpm(j.state.config ? j.state.config.applyToPackageManager !== false : true);
                if (j.state.lastProbe)
                    setProxyProbe(j.state.lastProbe);
            }
        })
            .catch(function () { });
    }, [props.isOpen]);
    React.useEffect(function () {
        var onKeyDown = function (e) {
            if (e.key === "Escape" || e.keyCode === 27) {
                props.onClose();
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return function () { window.removeEventListener("keydown", onKeyDown); };
    }, [props.onClose]);
    React.useEffect(function () {
        if (props.isOpen && props.initialSection) {
            setActiveSection(props.initialSection);
        }
    }, [props.isOpen, props.initialSection]);
    var handleUpdateSave = function () {
        setUpdateBusy(true);
        setUpdateMsg(null);
        fetch("/api/github/update-settings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ mode: updateMode }),
        })
            .then(function (r) { return r.json(); })
            .then(function (j) {
            setUpdateBusy(false);
            if (j && j.ok && j.data) {
                var d = j.data;
                var text = "";
                if (d.mode === "off") {
                    text = "✅ 已关闭自动检查更新（/gh upgrade 与一键升级仍可用），无需重启";
                }
                else if (d.probe && d.probe.latestVersion) {
                    text = "✅ 已切换至" + d.description + "，当前最新版本 v" + d.probe.latestVersion
                        + (d.probe.hasUpdate ? "（有可用更新）" : "（已是最新）") + "，无需重启";
                }
                else {
                    text = "✅ 已切换至" + d.description + "，但新源暂时不可达（版本探测失败，稍后会自动重试）；设置已生效，无需重启";
                }
                if (d.persisted === false) {
                    text += "；⚠️ 设置写盘失败，重启后需重新选择";
                }
                setUpdateMsg({ kind: "ok", text: text });
            }
            else {
                setUpdateMsg({ kind: "err", text: (j && j.message) || "保存失败" });
            }
        })
            .catch(function (e) {
            setUpdateBusy(false);
            setUpdateMsg({ kind: "err", text: "网络请求失败: " + (e && e.message ? e.message : e) });
        });
    };
    var h = React.createElement;
    var handleSave = function () {
        var updated = {
            strategy: strategy,
            localGitWatch: localGitWatch,
            cloudSyncIntervalMs: Number(cloudSyncIntervalMs) || 600000,
        };
        saveLocalSyncSettings(updated);
        props.onSave(updated);
        props.onClose();
    };
    var handleClear = function () {
        clearStoredGlobalOverview();
        props.onClearCache();
        setCacheMeta({ exists: false, sizeKb: 0, savedAt: 0 });
        setClearTip("本地缓存已彻底清空！");
        setTimeout(function () { setClearTip(""); }, 2000);
    };
    var handleProxySave = function () {
        setProxyBusy(true);
        setProxyMsg(null);
        fetch("/api/github/proxy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                url: proxyEnabled ? proxyUrl.trim() : "",
                noProxy: proxyNoProxy,
                applyToPackageManager: proxyApplyNpm,
            }),
        })
            .then(function (r) { return r.json(); })
            .then(function (j) {
            setProxyBusy(false);
            if (j && j.ok) {
                setProxyMsg({
                    kind: "ok",
                    text: j.state && j.state.config && j.state.config.url
                        ? "🌐 代理已保存并全局生效（驾驶舱 / 右侧栏 / Agent 工具 / 升级链路），无需重启"
                        : "已切换为系统默认网络（直连或系统环境代理），无需重启",
                });
                if (j.state && j.state.lastProbe)
                    setProxyProbe(j.state.lastProbe);
            }
            else {
                setProxyMsg({ kind: "err", text: (j && j.message) || "保存失败" });
            }
        })
            .catch(function (e) {
            setProxyBusy(false);
            setProxyMsg({ kind: "err", text: "网络请求失败: " + (e && e.message ? e.message : e) });
        });
    };
    var handleProxyProbe = function () {
        setProxyBusy(true);
        setProxyMsg(null);
        fetch("/api/github/proxy/probe", { method: "POST" })
            .then(function (r) { return r.json(); })
            .then(function (j) {
            setProxyBusy(false);
            if (j && j.ok && j.probe) {
                setProxyProbe(j.probe);
                setProxyMsg(j.probe.ok
                    ? { kind: "ok", text: "✅ GitHub API 可达 (" + j.probe.latencyMs + "ms)" }
                    : { kind: "err", text: "❌ " + (j.probe.error || "探测失败") });
            }
            else {
                setProxyMsg({ kind: "err", text: (j && j.message) || "探测失败" });
            }
        })
            .catch(function (e) {
            setProxyBusy(false);
            setProxyMsg({ kind: "err", text: "探测请求失败: " + (e && e.message ? e.message : e) });
        });
    };
    return h("div", { className: "dsh-github-modal-overlay", onClick: props.onClose }, h("div", {
        className: "dsh-github-modal-dialog",
        onClick: function (e) { e.stopPropagation(); },
    }, h("div", { className: "dsh-github-modal-header" }, h("h3", { style: { margin: 0, fontSize: "16px", fontWeight: 600 } }, "⚙️ 设置"), h("button", {
        style: { background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "var(--dsw-alias-label-secondary, #656d76)" },
        onClick: props.onClose,
    }, "✕")), h("div", { className: "dsh-github-modal-body" }, h("div", { className: "dsh-github-settings-nav" }, h("button", {
        className: "dsh-github-settings-nav-item" + (activeSection === "sync" ? " active" : ""),
        onClick: function () { setActiveSection("sync"); },
    }, "🔄 数据同步"), h("button", {
        className: "dsh-github-settings-nav-item" + (activeSection === "proxy" ? " active" : ""),
        onClick: function () { setActiveSection("proxy"); },
    }, "🌐 网络代理"), h("button", {
        className: "dsh-github-settings-nav-item" + (activeSection === "update" ? " active" : ""),
        onClick: function () { setActiveSection("update"); },
    }, "⬆️ 更新设置"), h("button", {
        className: "dsh-github-settings-nav-item" + (activeSection === "about" ? " active" : ""),
        onClick: function () { setActiveSection("about"); },
    }, "ℹ️ 关于")), h("div", { className: "dsh-github-settings-content" }, activeSection === "sync" ? h("div", null, h("div", { style: { fontSize: "12px", color: "var(--dsw-alias-label-secondary, #656d76)", marginBottom: "14px", lineHeight: "1.5" } }, "配置 GitHub 全景驾驶舱的数据拉取节奏。启用秒开模式可利用本地持久化缓存消除每次打开时的漫长等待。"), h("div", { style: { marginBottom: "16px" } }, h("div", { style: { fontSize: "13px", fontWeight: 600, marginBottom: "8px" } }, "数据刷新策略（三选一）"), h("div", {
        className: "dsh-github-radio-card" + (strategy === "swr" ? " active" : ""),
        onClick: function () { setStrategy("swr"); },
    }, h("input", { type: "radio", name: "sync-strategy", className: "dsh-github-radio", checked: strategy === "swr", readOnly: true }), h("div", null, h("div", { style: { fontWeight: 600, fontSize: "13px" } }, "⚡ 秒开展示旧数据 (SWR, 强烈推荐)"), h("div", { style: { fontSize: "12px", color: "var(--dsw-alias-label-secondary, #656d76)", marginTop: "2px" } }, "打开立即展示上次本地缓存（0ms秒开），后台静默同步一次最新状态。"))), h("div", {
        className: "dsh-github-radio-card" + (strategy === "auto" ? " active" : ""),
        onClick: function () { setStrategy("auto"); },
    }, h("input", { type: "radio", name: "sync-strategy", className: "dsh-github-radio", checked: strategy === "auto", readOnly: true }), h("div", { style: { flex: 1 } }, h("div", { style: { fontWeight: 600, fontSize: "13px" } }, "☁️ 云端数据定时自动同步 (SWR + 定时轮询)"), h("div", { style: { fontSize: "12px", color: "var(--dsw-alias-label-secondary, #656d76)", marginTop: "2px" } }, "首屏秒开旧数据并立即拉新，拉取完成后开始计时；循环静默更新 PR、Issue 与 Actions。内置窗口息屏自动避让，防止耗尽配额。"), strategy === "auto"
        ? h("div", {
            style: { display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" },
            onClick: function (e) { e.stopPropagation(); },
        }, h("span", { style: { fontSize: "12px", color: "var(--dsw-alias-label-secondary, #656d76)", fontWeight: 500 } }, "同步周期:"), h("select", {
            className: "dsh-github-btn-sm",
            style: { padding: "4px 8px", fontSize: "12px", cursor: "pointer", background: "var(--dsw-alias-bg-base, #fff)" },
            value: cloudSyncIntervalMs,
            onChange: function (e) { setCloudSyncIntervalMs(Number(e.target.value)); },
        }, h("option", { value: 300000 }, "5 分钟 (高频感知)"), h("option", { value: 600000 }, "10 分钟 (标准推荐)"), h("option", { value: 1800000 }, "30 分钟 (轻量节省)"), h("option", { value: 3600000 }, "1 小时 (极低频)")))
        : null)), h("div", {
        className: "dsh-github-radio-card" + (strategy === "manual" ? " active" : ""),
        onClick: function () { setStrategy("manual"); },
    }, h("input", { type: "radio", name: "sync-strategy", className: "dsh-github-radio", checked: strategy === "manual", readOnly: true }), h("div", null, h("div", { style: { fontWeight: 600, fontSize: "13px" } }, "📋 仅在手动点击时拉取 (Manual Only)"), h("div", { style: { fontSize: "12px", color: "var(--dsw-alias-label-secondary, #656d76)", marginTop: "2px" } }, "打开只浏览本地缓存，绝不自动触发后台 gh 进程，最省电、最省资源；想更新时点击「🔄 刷新」即可。")))), h("div", { style: { marginBottom: "16px", borderTop: "1px solid var(--dsw-alias-border-l2, #e1e4e8)", paddingTop: "14px" } }, h("div", { style: { fontSize: "13px", fontWeight: 600, marginBottom: "8px" } }, "高级自动化与状态感知"), h("label", {
        style: { display: "flex", alignItems: "flex-start", gap: "8px", cursor: "pointer", padding: "6px 8px", borderRadius: "6px", background: localGitWatch ? "var(--dsw-alias-bg-module-platform, rgba(9, 105, 218, 0.06))" : "transparent" },
    }, h("input", {
        type: "checkbox",
        style: { marginTop: "3px" },
        checked: localGitWatch,
        onChange: function (e) { setLocalGitWatch(e.target.checked); },
    }), h("div", null, h("div", { style: { fontWeight: 600, fontSize: "12px" } }, "📁 本地 Git 改动实时感知 (仅右侧栏生效)"), h("div", { style: { fontSize: "11px", color: "var(--dsw-alias-label-secondary, #656d76)", marginTop: "2px" } }, "定向监听当前仓库的 .git 核心元数据，代码修改、暂存与分支切换毫秒级自动对齐右侧栏，零网络流量消耗；全景首页不挂载，保持轻量。")))), h("div", {
        className: "dsh-github-cache-info-box",
    }, h("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, h("span", null, cacheMeta.exists
        ? `📦 本地缓存: 约 ${cacheMeta.sizeKb} KB (上次保存: ${new Date(cacheMeta.savedAt).toLocaleTimeString()})`
        : "📦 暂无本地持久化缓存"), cacheMeta.exists ? h("button", {
        className: "dsh-github-btn-sm",
        style: { padding: "3px 8px", fontSize: "11px", color: "var(--dsw-alias-state-error-primary, #cf222e)" },
        onClick: handleClear,
    }, "🗑️ 清空缓存") : null), clearTip ? h("div", { style: { color: "var(--dsw-alias-state-success, #2ea043)", marginTop: "4px", fontWeight: 500 } }, clearTip) : null)) : activeSection === "update" ? h("div", null, h("div", { style: { fontSize: "12px", color: "var(--dsw-alias-label-secondary, #656d76)", marginBottom: "14px", lineHeight: "1.5" } }, "选择插件新版本检测所用的 npm 源。检测与升级流量均遵循「🌐 网络代理」分区设置：启用 http/https 代理时自动经代理访问；socks5 代理下 npm 检测为直连（gh 与升级子进程链路仍走代理）。无论选择哪个源，安装与升级流程本身不受影响。"), h("div", { style: { marginBottom: "16px" } }, h("div", { style: { fontSize: "13px", fontWeight: 600, marginBottom: "8px" } }, "更新源"), h("div", {
        className: "dsh-github-radio-card" + (updateMode === "official" ? " active" : ""),
        onClick: function () { setUpdateMode("official"); },
    }, h("input", { type: "radio", className: "dsh-github-radio", checked: updateMode === "official", readOnly: true }), h("div", null, h("div", { style: { fontWeight: 600, fontSize: "13px" } }, "🌍 npm 官方源 (推荐)"), h("div", { style: { fontSize: "12px", color: "var(--dsw-alias-label-secondary, #656d76)", marginTop: "2px" } }, "版本全球首发最及时，刚发布的新版立即可见；国内直连可能较慢。"))), h("div", {
        className: "dsh-github-radio-card" + (updateMode === "mirror" ? " active" : ""),
        onClick: function () { setUpdateMode("mirror"); },
    }, h("input", { type: "radio", className: "dsh-github-radio", checked: updateMode === "mirror", readOnly: true }), h("div", null, h("div", { style: { fontWeight: 600, fontSize: "13px" } }, "🇨🇳 国内镜像 (npmmirror)"), h("div", { style: { fontSize: "12px", color: "var(--dsw-alias-label-secondary, #656d76)", marginTop: "2px" } }, "阿里云镜像，国内访问快；同步存在分钟级延迟，刚发布的新版可能暂时查不到。"))), h("div", {
        className: "dsh-github-radio-card" + (updateMode === "off" ? " active" : ""),
        onClick: function () { setUpdateMode("off"); },
    }, h("input", { type: "radio", className: "dsh-github-radio", checked: updateMode === "off", readOnly: true }), h("div", null, h("div", { style: { fontWeight: 600, fontSize: "13px" } }, "⛔ 不检查更新"), h("div", { style: { fontSize: "12px", color: "var(--dsw-alias-label-secondary, #656d76)", marginTop: "2px" } }, "关闭自动检查与新版提示横幅；/gh upgrade 命令与一键升级仍然可用。")))), h("div", { style: { display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" } }, h("button", {
        className: "dsh-github-btn-sm dsh-github-primary-btn",
        disabled: updateBusy,
        onClick: handleUpdateSave,
    }, updateBusy ? "验证中..." : "💾 保存并全局应用"), updateMsg ? h("span", {
        style: {
            fontSize: "12px",
            lineHeight: "1.5",
            color: updateMsg.kind === "ok"
                ? "var(--dsw-alias-state-success, #2ea043)"
                : updateMsg.kind === "err"
                    ? "var(--dsw-alias-state-error-primary, #cf222e)"
                    : "var(--dsw-alias-label-secondary, #656d76)",
        },
    }, updateMsg.text) : null)) : activeSection === "about" ? h("div", null, h("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" } }, renderOctocatBadge(40), h("div", null, h("div", { style: { fontSize: "15px", fontWeight: 600 } }, "DSH GitHub Flow"), h("div", { style: { fontSize: "12px", color: "var(--dsw-alias-label-secondary, #656d76)", marginTop: "2px" } }, "当前版本: v" + (aboutVersion || "…")))), h("div", { style: { fontSize: "12px", color: "var(--dsw-alias-label-secondary, #656d76)", marginBottom: "14px", lineHeight: "1.6" } }, "让 DeepSeek Harness Agent 拥有操作 GitHub 的原生手脚。原生复用宿主机 gh CLI 安全凭据，深度打通本地 Git 工作区与云端协作，提供 18 大领域 Agent 工具、人类 Slash 指令、Web 全景驾驶舱与一键跨平台升级。"), h("div", { style: { display: "flex", flexDirection: "column", gap: "8px", marginBottom: "14px" } }, h("div", { style: { display: "flex", alignItems: "center", gap: "8px", fontSize: "12px" } }, h("span", { style: { minWidth: "64px", color: "var(--dsw-alias-label-secondary, #656d76)" } }, "仓库地址"), h("a", { href: "https://github.com/ItQianChen/dsh-github-flow", target: "_blank", rel: "noopener noreferrer", style: { color: "var(--dsw-alias-link, #0969da)" } }, "github.com/ItQianChen/dsh-github-flow")), h("div", { style: { display: "flex", alignItems: "center", gap: "8px", fontSize: "12px" } }, h("span", { style: { minWidth: "64px", color: "var(--dsw-alias-label-secondary, #656d76)" } }, "npm 包"), h("a", { href: "https://www.npmjs.com/package/dsh-github-flow", target: "_blank", rel: "noopener noreferrer", style: { color: "var(--dsw-alias-link, #0969da)" } }, "npmjs.com/package/dsh-github-flow")), h("div", { style: { display: "flex", alignItems: "center", gap: "8px", fontSize: "12px" } }, h("span", { style: { minWidth: "64px", color: "var(--dsw-alias-label-secondary, #656d76)" } }, "开源协议"), h("a", { href: "https://github.com/ItQianChen/dsh-github-flow/blob/master/LICENSE", target: "_blank", rel: "noopener noreferrer", style: { color: "var(--dsw-alias-link, #0969da)" } }, "MIT License"))), h("div", {
        className: "dsh-github-about-star-box",
        style: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
        },
    }, h("span", { style: { fontSize: "18px" } }, "⭐"), h("div", { style: { flex: 1, fontSize: "12px", lineHeight: "1.5" } }, "如果这个插件对你的日常研发有帮助，欢迎到 GitHub 仓库点个 Star 支持一下——你的 Star 是持续迭代的动力！也欢迎提交 Issue 与 PR。"), h("a", {
        target: "_blank",
        href: "https://github.com/ItQianChen/dsh-github-flow",
        rel: "noopener noreferrer",
        className: "dsh-github-btn-sm dsh-github-primary-btn",
    }, "🌟 去点 Star"))) : h("div", null, h("div", { style: { fontSize: "12px", color: "var(--dsw-alias-label-secondary, #656d76)", marginBottom: "14px", lineHeight: "1.5" } }, "设置后插件的 GitHub 数据链路（本页面、右侧栏、Agent 工具调用、版本升级）全部经代理访问；未启用时默认使用系统环境代理或直连。保存后立即生效，无需重启。"), h("label", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", cursor: "pointer", fontSize: "13px" } }, h("input", {
        type: "checkbox",
        checked: proxyEnabled,
        onChange: function (e) { setProxyEnabled(Boolean(e.target.checked)); },
    }), "启用代理"), proxyEnabled ? h("div", null, h("div", { style: { fontSize: "12px", marginBottom: "4px" } }, "代理地址"), h("input", {
        className: "dsh-github-input",
        style: { width: "100%", boxSizing: "border-box", padding: "6px 10px", fontSize: "13px", marginBottom: "10px" },
        placeholder: "http://127.0.0.1:7890 或 socks5h://127.0.0.1:1080（DNS 由代理解析）",
        value: proxyUrl,
        onChange: function (e) { setProxyUrl(e.target.value); },
    }), h("div", { style: { fontSize: "12px", marginBottom: "4px" } }, "NO_PROXY 排除列表（逗号分隔，localhost 与 127.0.0.1 强制包含）"), h("input", {
        className: "dsh-github-input",
        style: { width: "100%", boxSizing: "border-box", padding: "6px 10px", fontSize: "12px", marginBottom: "10px" },
        value: proxyNoProxy,
        onChange: function (e) { setProxyNoProxy(e.target.value); },
    }), h("label", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", cursor: "pointer", fontSize: "12px" } }, h("input", {
        type: "checkbox",
        checked: proxyApplyNpm,
        onChange: function (e) { setProxyApplyNpm(Boolean(e.target.checked)); },
    }), "同时应用于 npm 版本探测与一键升级")) : null, h("div", { style: { display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" } }, h("button", {
        className: "dsh-github-btn-sm",
        style: { padding: "5px 12px", fontSize: "12px" },
        disabled: proxyBusy || !proxyEnabled,
        onClick: handleProxyProbe,
        title: "经当前配置探测 GitHub API 连通性（约 2.5 秒）",
    }, "🧪 测试连通性"), h("button", {
        className: "dsh-github-btn-sm",
        style: {
            padding: "5px 14px",
            fontSize: "12px",
            background: "var(--dsw-alias-link, #0969da)",
            color: "#ffffff",
            borderColor: "var(--dsw-alias-link, #0969da)",
            fontWeight: 600,
        },
        disabled: proxyBusy,
        onClick: handleProxySave,
    }, proxyBusy ? "处理中..." : "💾 保存并全局应用"), proxyProbe ? h("span", {
        style: {
            fontSize: "12px",
            fontWeight: 500,
            color: proxyProbe.ok ? "var(--dsw-alias-state-success, #2ea043)" : "var(--dsw-alias-state-error-primary, #cf222e)",
        },
        title: proxyProbe.error || "",
    }, proxyProbe.ok ? "✅ " + proxyProbe.latencyMs + "ms" : "❌ 探测失败") : null), proxyMsg ? h("div", {
        style: {
            marginTop: "8px",
            fontSize: "12px",
            lineHeight: "1.5",
            color: proxyMsg.kind === "ok"
                ? "var(--dsw-alias-state-success, #2ea043)"
                : proxyMsg.kind === "err"
                    ? "var(--dsw-alias-state-error-primary, #cf222e)"
                    : "var(--dsw-alias-label-secondary, #656d76)",
        },
    }, proxyMsg.text) : null))), h("div", { className: "dsh-github-modal-footer" }, activeSection === "sync" ? h("button", {
        className: "dsh-github-btn-sm",
        style: {
            padding: "6px 16px",
            background: "var(--dsw-alias-link, #0969da)",
            color: "#ffffff",
            borderColor: "var(--dsw-alias-link, #0969da)",
            fontWeight: 600,
        },
        onClick: handleSave,
    }, "保存同步设置") : null, h("button", {
        className: "dsh-github-btn-sm",
        style: { padding: "6px 14px" },
        onClick: props.onClose,
    }, activeSection === "sync" ? "取消" : "完成"))));
}

// ---- [Bundled: help-modal.js] ----
/**
 * 独立沉浸式指南大窗口组件 (Dedicated Large Reader Modal)
 *
 * 核心设计理由与交互契约：
 * 1. 彻底从设置小窗口剥离，打造 920px 宽屏、85vh 高度的沉浸式阅读视界；
 * 2. 深度适配 DSH 主题系统，全套样式基于 CSS 类与主题变量，支持深色 (data-ds-dark-theme) 与浅色无缝自适应；
 * 3. 拒绝技术自嗨清单，从用户行动视角组织：3分钟快速上手、Agent实战Prompt、双界面图解与常见排错；
 * 4. 宽屏卡片排列，配备 Prompt 一键复制到剪贴板与短暂反馈气泡；
 * 5. 监听键盘 Esc 键与遮罩点击秒关，复制完指令直接回到聊天输入框发送，零打扰、不中断工作流。
 */
function GithubHelpModal(props) {
    if (!props.isOpen)
        return null;
    var [activeTab, setActiveTab] = React.useState(props.initialTab || "quickstart");
    var [copiedIdx, setCopiedIdx] = React.useState(-1);
    React.useEffect(function () {
        if (props.isOpen && props.initialTab) {
            setActiveTab(props.initialTab);
        }
    }, [props.isOpen, props.initialTab]);
    React.useEffect(function () {
        var onKeyDown = function (e) {
            if (e.key === "Escape" || e.keyCode === 27) {
                props.onClose();
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return function () { window.removeEventListener("keydown", onKeyDown); };
    }, [props.onClose]);
    var handleCopy = function (text, idx) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
            setCopiedIdx(idx);
            setTimeout(function () { setCopiedIdx(-1); }, 2000);
        }
        else {
            prompt("请复制提示词：", text);
        }
    };
    var h = React.createElement;
    // 1. 顶部 Tab 导航项
    var tabs = [
        { id: "quickstart", label: "🚀 3分钟极速上手" },
        { id: "prompts", label: "🤖 Agent 提示词实战" },
        { id: "panels", label: "🖥️ 两大界面操作图解" },
        { id: "faq", label: "🔑 常见自愈排错" },
    ];
    // 2. 渲染各 Tab 独立视图
    var renderContent = function () {
        if (activeTab === "quickstart") {
            return h("div", null, h("div", { className: "dsh-github-help-desc", style: { fontSize: "13px", marginBottom: "16px" } }, "欢迎使用 DSH GitHub Flow！本插件让 DeepSeek Harness Agent 具备直接操作 GitHub 仓库的能力，同时为你提供沉浸式的本地与云端协作工作台。跟着下面 3 步即可快速跑通你的第一个人机协作研发闭环："), [
                {
                    step: "1",
                    title: "确认 GitHub CLI 登录状态",
                    desc: "本插件直接复用宿主机已有的安全登录态，绝不触碰任何明文 Token。",
                    actionText: "操作方式：在 DSH 任意聊天框输入 /gh 直接按回车；或查看右侧栏抽屉顶部的账号徽标。若显示未登录，在系统终端执行单行命令 gh auth login 即可完成授权。",
                },
                {
                    step: "2",
                    title: "打开你的代码仓库",
                    desc: "在 DSH 中打开任何包含 .git 的项目文件夹，插件将自动毫秒级绑定当前仓库上下文。",
                    actionText: "无需每次告诉 Agent 仓库叫什么名字，插件底层已自动完成 CWD 工作区绑定，提单与审查均精准面向当前项目。",
                },
                {
                    step: "3",
                    title: "直接向 Agent 下达工作指令",
                    desc: "像和资深研发搭档协作一样，在聊天输入框中直接吩咐 Agent 处理日常 GitHub 任务。",
                    actionText: "初次体验试一试直接对 Agent 说：\n👉 \"查看当前仓库有哪些开放的 PR，总结下改动要点\"",
                },
            ].map(function (s, i) {
                return h("div", { key: i, className: "dsh-github-help-card", style: { display: "flex", gap: "14px", alignItems: "flex-start" } }, h("div", { className: "dsh-github-help-step-badge" }, s.step), h("div", { style: { flex: 1 } }, h("div", { className: "dsh-github-help-title", style: { marginBottom: "4px" } }, s.title), h("div", { className: "dsh-github-help-desc", style: { marginBottom: "6px" } }, s.desc), h("div", { style: { fontSize: "12px", lineHeight: "1.6", whiteSpace: "pre-line", color: "inherit" } }, s.actionText)));
            }));
        }
        if (activeTab === "prompts") {
            var promptCards = [
                {
                    title: "🔀 场景一：自动创建 PR 并发起代码审查",
                    desc: "本地写完代码或实现新功能后，无需打开浏览器手动点点点，让 Agent 自主完成端到端提单。",
                    prompt: "帮我把当前分支创建一个 PR，标题简明概括改动要点，附带详细描述",
                    aiAction: "Agent 自动检查本地当前分支、比对与主干的 diff、推送到远程仓库并创建 GitHub PR，附带优雅的改动说明与关联标记。",
                },
                {
                    title: "🚨 场景二：CI / Actions 门禁报错秒级排查与自动修复",
                    desc: "构建挂了不用在网页反复翻几十页日志，直接吩咐 Agent 定位报错步骤并就地改代码。",
                    prompt: "检查当前仓库最近一次 CI 失败的原因，精确定位报错步骤并帮我尝试修复代码",
                    aiAction: "Agent 自动调用失败日志探测工具，秒级提取具体挂掉的构建步骤输出，精准定位语法/单测异常并就地修改本地代码。",
                },
                {
                    title: "📌 场景三：早会与每日任务待办盘点",
                    desc: "晨会前或开始工作时，一键拉取名下所有关联事项，做到心中有数。",
                    prompt: "帮我看看今天在 GitHub 上分配给我的 Issue 待办与等待我评审的 PR，汇总近期动态",
                    aiAction: "Agent 自动在账号维度跨仓库聚合所有分配给你的议题、等待评审的拉取请求以及提及你的动态，输出整洁紧凑的待办看板。",
                },
                {
                    title: "🛡️ 场景四：代码差异 (Diff) 安全审查与重构建议",
                    desc: "合并前把好最后一关，让大模型充当资深 Tech Lead 开展多维度代码走查。",
                    prompt: "审查当前分支与主干的代码差异 (diff)，检查是否存在潜在 Bug 或安全隐患并给出重构建议",
                    aiAction: "Agent 自动获取改动文件与行级差异，结合工程最佳实践逐项排查边界条件、内存泄漏、空指针与安全漏洞。",
                },
                {
                    title: "💬 场景五：团队方案提案与开源 RFC 研讨",
                    desc: "需要和团队讨论架构思路或征集想法时，直接将讨论沉淀在 GitHub Discussions 知识库中。",
                    prompt: "在当前仓库发起一个关于 '优化前端构建性能' 的 RFC 讨论方案",
                    aiAction: "Agent 自动调用 Discussions 工具在指定分类下发起主题，格式化排版技术方案正文，并返回可供团队直达探讨的链接。",
                },
            ];
            return h("div", null, h("div", { className: "dsh-github-help-desc", style: { fontSize: "13px", marginBottom: "14px" } }, "以下精选了开发者日常研发中最高频的 5 大真实协作场景。点击卡片右侧的「📋 一键复制」按钮，直接粘贴到聊天输入框发给 Agent 即可："), promptCards.map(function (c, idx) {
                var isCopied = copiedIdx === idx;
                return h("div", { key: idx, className: "dsh-github-help-card" }, h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" } }, h("div", { className: "dsh-github-help-title" }, c.title), h("button", {
                    className: "dsh-github-btn-sm",
                    onClick: function () { handleCopy(c.prompt, idx); },
                    style: {
                        padding: "4px 10px",
                        fontSize: "12px",
                        background: isCopied ? "#2ea043" : "var(--dsw-alias-link, #0969da)",
                        color: "#ffffff",
                        borderColor: isCopied ? "#2ea043" : "var(--dsw-alias-link, #0969da)",
                        fontWeight: 600,
                        transition: "all 0.2s ease",
                    },
                }, isCopied ? "✅ 已复制到剪贴板！" : "📋 一键复制 Prompt")), h("div", { className: "dsh-github-help-desc", style: { marginBottom: "10px" } }, c.desc), h("div", { className: "dsh-github-prompt-box" }, `"${c.prompt}"`), h("div", { style: { fontSize: "11px", color: "var(--dsw-alias-state-attention-primary, #d29922)", lineHeight: "1.4" } }, "💡 " + c.aiAction));
            }));
        }
        if (activeTab === "panels") {
            return h("div", null, h("div", { className: "dsh-github-help-desc", style: { fontSize: "13px", marginBottom: "16px" } }, "插件为人类开发者量身打造了两套互补的可视化工作台，消灭频繁在 VS Code、终端与浏览器切屏的上下文丢失痛点："), [
                {
                    title: "1. 全景驾驶舱 (Main Dashboard) —— 掌控全局资产",
                    items: [
                        "打开入口：点击 DSH 最左侧主导航栏的 Octocat 猫咪徽标，瞬间全屏展开；",
                        "SWR 0ms 瞬间秒开：采用本地持久化快照体系，打开界面零转圈、零等待；",
                        "名下仓库一览：一屏透视名下所有 GitHub 仓库、默认分支与 Star 状态，支持一键切换工作区；",
                        "三维待办 Issue 矩阵：智能划分「📥 用户提单（反馈到我名下仓库）」、「🎯 指派待办（分配给我）」与「✍️ 我发起的」，一键药丸筛选；",
                        "全局配置中心：右上方提供数据同步节奏、网络代理与更新源的集中配置弹窗。",
                    ],
                },
                {
                    title: "2. 会话右侧栏面板 (Sidebar Panel) —— 深度协同当前工作区",
                    items: [
                        "打开入口：位于每个会话工作区的右侧抽屉栏，深度锁定当前会话的物理 Git 仓库；",
                        "未提交改动 (Dirty Tab)：实时监听本地未提交文件列表与改动数量，开发改代码一目了然；",
                        "分支查看与安全切换：点击分支名称下拉秒级搜索本地/远程分支；具备未提交变更安全拦截，杜绝代码被冲掉；",
                        "Git 提交时间线 (Git Tab)：清晰三段式呈现待推送（领先）、待拉取（落后）与最近提交，点击任意提交行可弹出 Commit 完整详情弹窗；",
                        "动静解耦架构：修改本地代码只定向查询本地 .git 核心元数据（耗时仅 5ms），绝对不发起远端网络请求，杜绝网络风暴。",
                    ],
                },
            ].map(function (sec, idx) {
                return h("div", { key: idx, className: "dsh-github-help-card" }, h("div", { className: "dsh-github-help-title", style: { marginBottom: "8px" } }, sec.title), h("ul", { style: { margin: 0, paddingLeft: "18px", fontSize: "12px", lineHeight: "1.7", color: "var(--dsw-alias-label-secondary, #8b949e)" } }, sec.items.map(function (it, i) { return h("li", { key: i }, it); })));
            }));
        }
        if (activeTab === "faq") {
            var faqs = [
                {
                    q: "Q1: 界面提示「未登录 GitHub」或「Authentication Required」怎么办？",
                    a: "插件直接复用宿主系统的 GitHub CLI 登录态。请打开系统终端运行命令 `gh auth login`，依次选择 GitHub.com ➔ HTTPS ➔ 网页回车授权，一分钟内即可完成登录。登录完成后刷新界面即可自动识别。",
                },
                {
                    q: "Q2: 提示「缺少权限 (Scope)」或「SCOPE_REQUIRED」怎么办？",
                    a: "当调用项目看板（Projects v2）或云端开发机（Codespaces）时，GitHub 要求专有的 Token Scope。在系统终端执行对应的一键自愈命令完成增量授权即可（无需重新登录）：\n- 项目看板：`gh auth refresh -s read:project`\n- 云端开发机：`gh auth refresh -h github.com -s codespace`",
                },
                {
                    q: "Q3: 点击一键升级提示「处于 24h 安全保护期 (防投毒策略)」怎么办？",
                    a: "这是 DSH 官方内置包管理器针对刚发布未满 24 小时新版本的供应链防投毒安全锁机制。\n- 立即体验：请先【完全退出关闭 DSH 应用程序】，然后在系统终端执行复制的手动安装命令；\n- 稍后升级：无需任何操作，新版本发版满 24 小时后，再次点击一键升级即可自动安装。",
                },
                {
                    q: "Q4: 使用代理节点时偶尔出现网络波动怎么办？",
                    a: "插件内置了 1s ➔ 2s ➔ 4s 的阶梯指数退避重试机制。代理节点若发生短时抖动断流，系统会自动在后台静默发起自愈重试，在节点恢复后瞬间平滑拉取最新数据，不会立刻亮出大红横幅打扰你。同时电脑联网恢复瞬间也会自动触发静默更新。",
                },
            ];
            return h("div", null, h("div", { className: "dsh-github-help-desc", style: { fontSize: "13px", marginBottom: "14px" } }, "常见环境、权限与网络问题的排查与自愈指引："), faqs.map(function (f, idx) {
                return h("div", { key: idx, className: "dsh-github-help-card" }, h("div", { className: "dsh-github-help-title", style: { marginBottom: "6px", fontSize: "13px" } }, f.q), h("div", { className: "dsh-github-help-desc", style: { lineHeight: "1.6", whiteSpace: "pre-line" } }, f.a));
            }));
        }
        return null;
    };
    return h("div", { className: "dsh-github-modal-overlay", onClick: props.onClose }, h("div", {
        className: "dsh-github-help-dialog",
        onClick: function (e) { e.stopPropagation(); },
    }, 
    // 顶部标题栏
    h("div", { className: "dsh-github-help-header" }, h("div", { style: { display: "flex", alignItems: "center", gap: "8px" } }, h("span", { style: { fontSize: "20px" } }, "📖"), h("h3", { style: { margin: 0, fontSize: "16px", fontWeight: 600, color: "inherit" } }, "DSH GitHub Flow · 使用指南与实战手册")), h("button", {
        style: { background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "var(--dsw-alias-label-secondary, #8b949e)", padding: "0 4px" },
        onClick: props.onClose,
        title: "关闭 (Esc)",
    }, "✕")), 
    // 顶部四分类 Segment 导航栏
    h("div", { className: "dsh-github-help-nav" }, tabs.map(function (t) {
        var isActive = activeTab === t.id;
        return h("button", {
            key: t.id,
            className: "dsh-github-help-tab-btn" + (isActive ? " active" : ""),
            onClick: function () { setActiveTab(t.id); },
        }, t.label);
    })), 
    // 主内容滚动区
    h("div", { className: "dsh-github-help-scroll-body" }, renderContent()), 
    // 底部工具栏
    h("div", { className: "dsh-github-help-footer" }, h("div", { style: { fontSize: "12px", color: "var(--dsw-alias-label-tertiary, #8c959f)" } }, "💡 提示：按键盘 Esc 键可随时快速关闭大窗口返回会话"), h("button", {
        className: "dsh-github-btn-sm",
        style: { padding: "6px 16px", fontWeight: 600 },
        onClick: props.onClose,
    }, "关闭窗口"))));
}


        var currentPluginCtx = null;
        /**
         * 外部链接的统一打开策略：优先 DSH 自己的右侧栏浏览器标签
         * （ctx.sidebarRight.openTab('browser', { params: { url } }) —— 与 sidebar_open
         * 工具走的是同一条原生通道），拿不到这个能力时回退系统浏览器。
         *
         * 为什么不用 iframe：GitHub 对绝大多数页面发 X-Frame-Options: deny，
         * 内嵌必然白屏；原生 browser 标签是 DSH 自己托管的载体，没有这个限制。
         */
        function openUrlSmart(url) {
            try {
                if (!url || typeof url !== "string")
                    return false;
                if (!/^https?:\/\//i.test(url))
                    return false;
                var ctx = currentPluginCtx;
                var sidebarRight = ctx && typeof ctx.get === "function" ? ctx.get("sidebarRight") : null;
                if (sidebarRight && typeof sidebarRight.openTab === "function") {
                    sidebarRight.openTab("browser", { params: { url: url } });
                    return true;
                }
            }
            catch (e) {
                // 版本不匹配/服务未就绪：静默回退，不让一次跳转打断整个面板
            }
            return false;
        }
        /** 系统浏览器兜底（内部浏览器不可用时） */
        function openUrlFallback(url) {
            try {
                // 兜底路径也要校验 scheme：window.open 对 javascript:/file: 并不安全
                if (!/^https?:\/\//i.test(String(url || "")))
                    return;
                window.open(url, "_blank", "noopener,noreferrer");
            }
            catch (e) {
                /* 弹窗被拦截：无能为力，交给用户手点 */
            }
        }
        /** 内部浏览器优先 + 系统浏览器兜底：PR 面板的「在 GitHub 打开」 */
        function openUrlSmartOrFallback(url) {
            if (!url)
                return;
            if (!openUrlSmart(url))
                openUrlFallback(url);
        }
        /**
         * 打开某条 PR 的右列面板。
         *
         * 两步都要做：openTab 只把 tab 放进右栏的 tab 列表，右栏本身如果是收起状态，
         * 用户点完浮窗会「什么都没发生」——所以补一次 openRightbar(true, false)，
         * 让右栏以普通（非全屏）形态展开。
         */
        function openSessionPrTab(params) {
            var number = Number(params && params.number);
            if (!Number.isInteger(number) || number <= 0)
                return;
            var repo = params && typeof params.repo === "string" ? params.repo : undefined;
            var ctx = currentPluginCtx;
            var opened = false;
            try {
                var sidebarRight = ctx && typeof ctx.get === "function" ? ctx.get("sidebarRight") : null;
                if (sidebarRight && typeof sidebarRight.openTab === "function") {
                    // 用「仓库面板」那个类型（kind: github）承载 PR 面板：
                    // 单独注册的 github-pr 类型在某些页面状态下会变成 inactive，标签还在、内容却是空白。
                    // github 这个类型是工作区页面正在用的，天然激活；靠 params.number 分派到 PR 面板。
                    sidebarRight.openTab("github", { params: repo ? { repo: repo, number: number } : { number: number } });
                    opened = true;
                }
                var layout = ctx && typeof ctx.get === "function" ? ctx.get("layout") : null;
                if (layout && typeof layout.openRightbar === "function") {
                    layout.openRightbar(true, false);
                }
            }
            catch (e) {
                opened = false;
            }
            // 老版本 DSH 没有 sidebarRight / 没注册这个 tab 类型时，点浮窗不能变成"什么都没发生"：
            // 退到 PR 页面，至少用户拿到一个能用的结果。
            if (!opened && repo) {
                openUrlSmartOrFallback("https://github.com/" + repo + "/pull/" + number);
            }
            return opened;
        }
        /**
         * 全局捕获阶段的链接接管：只处理本插件面板里的 http(s) 链接。
         *
         * 为什么用 document 级捕获而不是逐个 <a> 加 onClick：面板里有十几处仓库/PR/
         * Issue/Actions 链接分散在多个渲染函数里，逐个改既容易漏、又会在下次改版时
         * 重新长出「跳系统浏览器」的链接。这里用 [class*="dsh-github"] 限定作用域。
         * 带修饰键（⌘/Ctrl/Shift/Alt）或非左键时不接管——那是用户明确要新标签/新窗口。
         */
        function installSmartLinkHandler() {
            if (typeof document === "undefined")
                return;
            document.addEventListener("click", function (ev) {
                try {
                    if (!ev || ev.defaultPrevented)
                        return;
                    if (ev.button !== 0 || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey)
                        return;
                    var target = ev.target;
                    var anchor = target && target.closest ? target.closest('a[href^="http"]') : null;
                    if (!anchor)
                        return;
                    var href = anchor.getAttribute("href");
                    if (!href)
                        return;
                    // PR 链接优先落到「我们的 PR 面板」：聊天里点 #630 时，跳 GitHub 网页要等、
                    // 还可能因为内嵌浏览器登录态缺失而一直转圈——而面板读的是本地 gh，秒开。
                    // 想去看网页版就按住 Shift/⌘ 点击，那个分支不会走到这里。
                    var pr = href.match(/github\.com\/([A-Za-z0-9_][A-Za-z0-9_.-]*)\/([A-Za-z0-9_][A-Za-z0-9_.-]*)\/pull\/(\d+)/i);
                    if (pr && openSessionPrTab({ repo: pr[1] + "/" + pr[2], number: Number(pr[3]) })) {
                        ev.preventDefault();
                        return;
                    }
                    // 其余链接：只有本插件面板里的才走「内置浏览器优先」
                    if (!target.closest('[class*="dsh-github"]'))
                        return;
                    if (openUrlSmart(href))
                        ev.preventDefault();
                }
                catch (e) {
                    // 拦截失败就走浏览器默认行为，绝不让它变成「点了没反应」
                }
            }, true);
        }
        /**
         * 按容器记录的 Tab 键应用互斥显示状态（hidden 页 + active 按钮）。
         * 模块级纯 DOM 操作：渲染函数（switchTab 点击路径）与宿主组件的 effect
         * （SWR 重渲染校正路径）共用——后者是必须的：React 重渲染会按 VDOM 初值
         * 重设 hidden/active，用户手动切的 Tab 会被一次后台数据同步拽回默认页。
         */
        function applyTabState(container, tabKey) {
            container.setAttribute("data-active-tab", tabKey);
            var rightbar = container.closest(".dsh-github-rightbar-container");
            if (rightbar) {
                rightbar.setAttribute("data-active-tab", tabKey);
            }
            var pages = container.querySelectorAll("[data-tab-page]");
            pages.forEach(function (page) {
                page.hidden = page.getAttribute("data-tab-page") !== tabKey;
            });
            var btns = container.querySelectorAll("[data-tab-btn]");
            btns.forEach(function (btn) {
                var active = btn.getAttribute("data-tab-btn") === tabKey;
                btn.classList.toggle("active", active);
                btn.setAttribute("aria-selected", active ? "true" : "false");
            });
        }
        /**
         * 未提交文件原生二级 Git Diff 下钻视图组件（右侧栏内就地渲染，零模态遮罩）
         */
        function UncommittedDiffView(props) {
            var f = props.file;
            var h = React.createElement;
            var [diffData, setDiffData] = React.useState(null);
            var [loading, setLoading] = React.useState(true);
            var [error, setError] = React.useState(null);
            var [copied, setCopied] = React.useState(false);
            React.useEffect(function () {
                var onKeyDown = function (e) {
                    if (e.key === "Escape" || e.keyCode === 27) {
                        props.onBack();
                    }
                };
                window.addEventListener("keydown", onKeyDown);
                return function () { window.removeEventListener("keydown", onKeyDown); };
            }, [props.onBack]);
            React.useEffect(function () {
                setLoading(true);
                setError(null);
                setDiffData(null);
                var fetchDiff = async function () {
                    var primaryUrl = "/api/github/file-diff?file=" + encodeURIComponent(f.path) + (props.cwd ? "&cwd=" + encodeURIComponent(props.cwd) : "");
                    var tryParseResponse = async function (res) {
                        var text = await res.text().catch(function () { return ""; });
                        var json = null;
                        if (text && (text.trim().startsWith("{") || text.trim().startsWith("["))) {
                            try {
                                json = JSON.parse(text);
                            }
                            catch (e) { }
                        }
                        return { ok: res.ok, status: res.status, text: text, json: json };
                    };
                    try {
                        var r1 = await fetch(primaryUrl);
                        var p1 = await tryParseResponse(r1);
                        if (p1.ok && p1.json && p1.json.ok && p1.json.data) {
                            setDiffData(p1.json.data);
                            setLoading(false);
                            return;
                        }
                        // 若主路由遇到 404 (后端常驻进程未重启)，自动降级请求常驻的 /api/github/action 端点
                        if (p1.status === 404) {
                            var r2 = await fetch("/api/github/action", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                    action: "get_file_diff",
                                    file: f.path,
                                    cwd: props.cwd || undefined,
                                }),
                            }).catch(function () { return null; });
                            if (r2) {
                                var p2 = await tryParseResponse(r2);
                                if (p2.ok && p2.json && p2.json.data) {
                                    setDiffData(p2.json.data);
                                    setLoading(false);
                                    return;
                                }
                            }
                            setLoading(false);
                            setError("后端对比接口未激活 (404)。请重启 DSH 桌面主程序以载入最新对比引擎；您也可点击上方「在 DSH 中打开」直接预览文件源码。");
                            return;
                        }
                        setLoading(false);
                        setError(p1.json?.error || p1.text || ("查询差异失败 (HTTP " + p1.status + ")"));
                    }
                    catch (err) {
                        setLoading(false);
                        setError(err?.message || "网络请求异常");
                    }
                };
                fetchDiff();
            }, [f.path, props.cwd]);
            var copyDiff = function () {
                if (!diffData?.diff)
                    return;
                if (navigator?.clipboard?.writeText) {
                    navigator.clipboard.writeText(diffData.diff).then(function () {
                        setCopied(true);
                        setTimeout(function () { setCopied(false); }, 2000);
                    }).catch(function () { });
                }
            };
            var statusColor = f.status === "??" ? "var(--dsw-alias-state-success-primary, #1a7f37)"
                : f.status.indexOf("D") >= 0 ? "var(--dsw-alias-state-error-primary, #cf222e)"
                    : "var(--dsw-alias-state-attention-primary, #9a6700)";
            var statusText = f.status === "??" ? "未跟踪新增"
                : f.status.indexOf("D") >= 0 ? "已删除"
                    : f.status.indexOf("R") >= 0 ? "已重命名"
                        : "已修改";
            return h("div", {
                className: "dsh-github-inline-diff-view",
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    minHeight: "260px",
                    padding: "4px 0",
                },
            }, 
            // 顶部操作与状态栏
            h("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "6px",
                    paddingBottom: "8px",
                    borderBottom: "1px solid var(--dsw-alias-border-subtle, rgba(0,0,0,0.1))",
                },
            }, h("div", { style: { display: "flex", alignItems: "center", gap: "6px" } }, h("button", {
                className: "dsh-github-btn-sm",
                style: { padding: "3px 8px", cursor: "pointer", fontWeight: 600, fontSize: "11px" },
                onClick: props.onBack,
                title: "返回未提交文件清单 (Esc)",
            }, "← 返回列表"), h("span", {
                className: "dsh-github-badge",
                style: {
                    backgroundColor: statusColor + "22",
                    color: statusColor,
                    fontWeight: 600,
                    fontSize: "11px",
                },
            }, `${f.status} ${statusText}`), diffData && diffData.additions !== undefined
                ? h("div", { style: { display: "flex", gap: "4px", fontSize: "11px", fontFamily: "monospace" } }, h("span", { style: { color: "var(--dsw-alias-state-success-primary, #1a7f37)", fontWeight: 600 } }, `+${diffData.additions}`), h("span", { style: { color: "var(--dsw-alias-state-error-primary, #cf222e)", fontWeight: 600 } }, `-${diffData.deletions}`))
                : null), h("div", { style: { display: "flex", alignItems: "center", gap: "6px" } }, diffData?.diff
                ? h("button", {
                    className: "dsh-github-btn-sm",
                    style: { padding: "3px 8px", fontSize: "11px", cursor: "pointer" },
                    onClick: copyDiff,
                    title: "复制 Unified Diff 原文",
                }, copied ? "✓ 已复制" : "📋 复制 Diff")
                : null, props.onOpenInDsh
                ? h("button", {
                    className: "dsh-github-btn-sm",
                    style: { padding: "3px 8px", fontSize: "11px", cursor: "pointer" },
                    onClick: function () {
                        if (props.onOpenInDsh)
                            props.onOpenInDsh(f.path);
                    },
                    title: "在 DSH 侧边栏打开查看该文件完整源码",
                }, "📄 在 DSH 中打开")
                : null)), 
            // 文件路径栏
            h("div", {
                style: {
                    fontSize: "11px",
                    fontFamily: "monospace",
                    color: "var(--dsw-alias-label-secondary, #656d76)",
                    wordBreak: "break-all",
                    padding: "3px 6px",
                    backgroundColor: "var(--dsw-alias-bg-subtle, rgba(0,0,0,0.03))",
                    borderRadius: "4px",
                },
                title: f.path,
            }, f.path), 
            // Diff 主体内容
            loading
                ? h("div", { style: { padding: "32px 0", textAlign: "center", opacity: 0.65, fontSize: "12px" } }, "⏳ 正在计算 Git 代码比对差异...")
                : error
                    ? h("div", {
                        style: {
                            padding: "16px",
                            color: "var(--dsw-alias-label-primary, #1f2328)",
                            fontSize: "12px",
                            lineHeight: "1.6",
                            backgroundColor: "var(--dsw-alias-bg-subtle, rgba(0,0,0,0.03))",
                            borderRadius: "6px",
                        },
                    }, h("div", { style: { color: "var(--dsw-alias-state-error-primary, #cf222e)", fontWeight: 600, marginBottom: "6px" } }, `⚠️ ${error}`), h("div", { style: { fontSize: "11px", opacity: 0.75 } }, "💡 提示：重启 DSH 桌面主程序即可激活本地比对路由；在此期间您也可点击上方「📄 在 DSH 中打开」直接预览文件源码。"))
                    : diffData?.isBinary
                        ? h("div", { style: { padding: "32px 0", textAlign: "center", opacity: 0.8, fontSize: "12px" } }, "📦 该文件为二进制格式（图片或编译产物），无法直接展示文本差异。")
                        : h("div", {
                            className: "dsh-github-inline-diff-content",
                            style: {
                                margin: 0,
                                padding: "4px 0",
                                fontFamily: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, monospace",
                                fontSize: "11px",
                                lineHeight: "1.5",
                                overflowX: "auto",
                                maxHeight: "68vh",
                                borderRadius: "6px",
                                border: "1px solid var(--dsw-alias-border-subtle, rgba(0,0,0,0.08))",
                                backgroundColor: "var(--dsw-alias-bg-canvas, #ffffff)",
                            },
                        }, (diffData?.diff || "").split("\n").map(function (line, idx) {
                            var isAdd = line.startsWith("+") && !line.startsWith("+++");
                            var isDel = line.startsWith("-") && !line.startsWith("---");
                            var isHunk = line.startsWith("@@");
                            var isHeader = line.startsWith("diff --git") || line.startsWith("index ") || line.startsWith("---") || line.startsWith("+++");
                            var lineStyle = {
                                display: "flex",
                                padding: "0 8px",
                                whiteSpace: "pre",
                                minWidth: "100%",
                                boxSizing: "border-box",
                            };
                            if (isAdd) {
                                lineStyle.backgroundColor = "var(--dsw-alias-state-success-subtle, rgba(46,160,67,0.15))";
                                lineStyle.color = "var(--dsw-alias-state-success-primary, #1a7f37)";
                            }
                            else if (isDel) {
                                lineStyle.backgroundColor = "var(--dsw-alias-state-error-subtle, rgba(248,81,73,0.15))";
                                lineStyle.color = "var(--dsw-alias-state-error-primary, #cf222e)";
                            }
                            else if (isHunk) {
                                lineStyle.backgroundColor = "var(--dsw-alias-bg-subtle, rgba(0,0,0,0.04))";
                                lineStyle.color = "var(--dsw-alias-label-secondary, #656d76)";
                                lineStyle.fontWeight = 600;
                                lineStyle.margin = "2px 0";
                            }
                            else if (isHeader) {
                                lineStyle.color = "var(--dsw-alias-label-muted, #8c959f)";
                                lineStyle.fontSize = "10px";
                            }
                            else {
                                lineStyle.color = "var(--dsw-alias-label-primary, #1f2328)";
                            }
                            return h("div", { key: idx, style: lineStyle }, line || " ");
                        })));
        }
        function renderGithubRepoView(h, data, loading, error, onRefresh, isRightbar = false, updateInfo = null, syncStatus = "", lastSyncedAt = 0, onOpenSettings = null, cwd = null, onSelectCommit = null, gitLogPagination = null, onShowToast = null, onOpenHelp = null, onOpenFile = null, dirtyPagination = null, activeDiffFile = null, onSelectDiffFile = null, onCloseDiff = null, onOpenInDsh = null, headerCardsVisible = true, onToggleHeaderCards = null, onReviewPr = null) {
            var auth = data ? data.auth : null;
            var repo = data ? data.repo : null;
            // 聚合根：候选仓库与当前绑定项（repoDiscovery='aggregate' 下才非空）
            var repoCandidates = (data && data.repoCandidates) || [];
            var repoRootPath = (data && data.repoRoot) || "";
            var repoVia = (data && data.repoVia) || "";
            var repoShortName = function (p) {
                var parts = String(p || "").split(/[\\/]/).filter(Boolean);
                return parts.length ? parts[parts.length - 1] : String(p || "");
            };
            var switchWorkspaceRepo = function (next) {
                if (!next || next === repoRootPath)
                    return;
                fetch("/api/github/select-repo", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ cwd: cwd || undefined, repo: next }),
                })
                    .then(function (r) { return r.json(); })
                    .then(function (json) {
                    if (!json || !json.ok) {
                        (onShowToast || function () { })(`❌ 切换仓库失败：${(json && json.error) || "未知错误"}`);
                        return;
                    }
                    (onShowToast || function () { })(`✅ 已绑定 ${repoShortName(next)}`);
                    onRefresh();
                })
                    .catch(function (err) {
                    (onShowToast || function () { })(`❌ 切换仓库失败：${(err && err.message) || err}`);
                });
            };
            // 候选 > 1 才渲染下拉框：只有一个仓库时它只是噪音
            var repoSelectorEl = (repo && repoCandidates.length > 1)
                ? h("span", { style: { display: "inline-flex", alignItems: "center", gap: "4px", minWidth: 0 } }, h("select", {
                    className: "dsh-github-repo-select",
                    value: repoRootPath || repoCandidates[0],
                    title: `当前工作区下有 ${repoCandidates.length} 个仓库，可手动切换绑定哪一个：\n${repoCandidates.join("\n")}`,
                    onChange: function (e) {
                        switchWorkspaceRepo(e && e.target ? e.target.value : "");
                    },
                }, repoCandidates.map(function (p) {
                    return h("option", { key: p, value: p }, repoShortName(p));
                })), repoVia === "manual"
                    ? h("span", {
                        className: "dsh-github-badge",
                        style: { backgroundColor: "rgba(56,139,253,.15)", color: "var(--dsw-alias-label-primary,#1f2328)", fontSize: "11px" },
                        title: "该仓库由你手动指定，不再按提交活跃度自动选择（选回第一项以外的任意项即保持手动）",
                    }, "手动")
                    : null)
                : null;
            var prs = (data && data.pullRequests) || [];
            var issues = (data && data.issues) || [];
            var runs = (data && data.runs) || [];
            // 对话里出现过的 PR：由宿主从会话转写里提取（/api/github/session-prs）
            var mentionedMeta = (data && data.mentioned) || { items: [], total: 0, filter: "all", loading: false };
            var mentionedAll = mentionedMeta.items || [];
            var mentionedFilter = mentionedMeta.filter || "all";
            var onMentionedFilter = data && data.onMentionedFilter;
            var onMentionedMore = data && data.onMentionedMore;
            var meLogin = (auth && auth.user) || "";
            // 「我参与」= 我发起的；评审过我这里拿不到（列表接口只回了 author），先只按作者判定
            var mentionedPrs = mentionedFilter === "mine"
                ? mentionedAll.filter(function (it) { return it.author && it.author.login === meLogin; })
                : mentionedAll;
            /*
             * 台账行骨架：[14px 状态脊柱][内容 flex][28px 右槽]。
             * 状态放左侧成列，眼睛才能纵向扫；右槽固定 28px，常态是时间、
             * hover 原位换成按钮——槽宽不变就不会 reflow，也不会和徽章抢位置。
             */
            var toneOf = function (t) {
                return t === "green" ? "success" : t === "red" ? "error"
                    : t === "yellow" ? "warn" : t === "blue" ? "running" : "neutral";
            };
            var renderRow = function (o) {
                var meta = (o.meta || []).filter(Boolean);
                var chipCls = "gh2-chip gh2-chip--" + (o.tone || "idle");
                return h("div", { key: o.key, className: "gh2-row" }, h("span", { className: "gh2-dot gh2-dot--" + (o.tone || "idle"), title: o.statusText || "" }, o.glyph || "◇"), h("div", { className: "gh2-row-main" }, h("div", { className: "gh2-row-title" }, o.prefix ? h("span", { className: "gh2-prefix" }, o.prefix) : null, o.href
                    ? h("a", { href: o.href, target: "_blank", title: o.titleTitle || undefined }, o.title)
                    : h("span", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: o.titleTitle || undefined }, o.title)), meta.length
                    ? h("div", { className: "gh2-row-sub" }, meta.map(function (m, i) {
                        return h("span", { key: i, className: m.mono ? "gh-mono" : undefined, title: m.title || undefined }, m.text);
                    }))
                    : null), h("div", { className: "gh2-row-slot" }, h("span", { className: "gh2-row-slot-time" }, o.time || ""), o.chip ? h("span", { className: chipCls, title: o.statusText || undefined }, o.chip) : null, o.action || null));
            };
            var effectiveUpdateInfo = updateInfo || data?.updateInfo;
            var upgradeBannerEl = effectiveUpdateInfo && effectiveUpdateInfo.hasUpdate
                ? h(UpgradeNotificationCard, { updateInfo: effectiveUpdateInfo, isRightbar })
                : null;
            var networkAlertBannerEl = (syncStatus === "failed" || auth?.networkError || (error && data))
                ? h(NetworkAlertBanner, {
                    isRightbar,
                    networkErrorReason: auth?.networkErrorReason || error || "连接 GitHub API 超时或网络不可达，本次未能获取最新数据。",
                    lastSyncedAt,
                    onRefresh,
                    onOpenProxy: function () {
                        try {
                            window.dispatchEvent(new CustomEvent("dsh-github-open-proxy"));
                        }
                        catch (e) { }
                    },
                })
                : null;
            var headerEl = h("div", { className: "dsh-github-header" }, h("div", { className: "dsh-github-title" }, renderOctocatBadge(isRightbar ? 26 : 30), h("h2", null, isRightbar ? "GitHub 仓库" : "GitHub 工作台"), renderPluginBadge(h), syncStatus ? h(SyncStatusBadge, { syncStatus, lastSyncedAt, isRightbar }) : null), h("div", { style: { display: "flex", alignItems: "center", gap: "6px" } }, isRightbar && onToggleHeaderCards ? h("button", {
                className: "dsh-github-btn-sm" + (!headerCardsVisible ? " active" : ""),
                onClick: onToggleHeaderCards,
                title: headerCardsVisible ? "收起上方仓库信息与快捷操作栏（增加下方工作区高度）" : "展开上方仓库信息与快捷操作栏",
                style: {
                    padding: "4px 8px",
                    fontSize: "11px",
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "3px",
                    cursor: "pointer",
                },
                "aria-expanded": headerCardsVisible ? "true" : "false",
            }, headerCardsVisible ? "🔼 收起" : "🔽 展开") : null, h("button", {
                className: "dsh-github-refresh-btn",
                onClick: onRefresh,
                disabled: loading,
            }, loading ? "刷新中..." : "🔄 刷新"), (onOpenHelp || onOpenSettings) ? h("button", {
                className: "dsh-github-btn-sm",
                onClick: () => (onOpenHelp ? onOpenHelp() : (onOpenSettings && onOpenSettings("help"))),
                title: "打开使用帮助与实战手册大窗口（Esc 可退出）",
                style: { padding: "4px 8px", fontSize: "12px" },
            }, "❓") : null, onOpenSettings ? h("button", {
                className: "dsh-github-btn-sm",
                onClick: () => onOpenSettings("sync"),
                title: "配置数据同步节奏、本地缓存、网络代理与插件信息",
                style: { padding: "4px 10px" },
            }, "⚙️") : null));
            var gitSt = data && data.gitStatus;
            var relInfo = data && data.releaseInfo;
            var branchPr = data && data.branchPr;
            var repoCardEl = h("div", { className: "gh2-card" }, h("div", { className: "gh2-card-top" }, h("span", { className: "gh2-repo-mark" }, "⌘"), repo
                ? h("a", { href: repo.url, target: "_blank", className: "gh2-slug", title: "在 GitHub 打开" }, repo.nameWithOwner)
                : h("span", { className: "gh2-slug gh2-slug--error" }, "未关联 GitHub 仓库"), repo
                ? h("button", {
                    className: "gh2-icon-btn",
                    title: "在 DSH 内部浏览器打开仓库主页",
                    onClick: function () {
                        if (repo?.url && !openUrlSmart(repo.url))
                            openUrlFallback(repo.url);
                    },
                }, "↗")
                : null), repo
                ? h("div", { className: "gh2-card-meta" }, h(BranchSelectorDropdown, {
                    currentBranch: gitSt?.branch || repo.defaultBranch || "main",
                    cwd,
                    branchesData: data?.branches,
                    onBranchSwitched: () => onRefresh(),
                    showToast: onShowToast || (() => { }),
                }), gitSt && (gitSt.ahead || gitSt.behind)
                    ? h("span", { className: "gh2-sync", title: "本地领先 / 落后远程的提交数" }, `↑${gitSt.ahead || 0} ↓${gitSt.behind || 0}`)
                    : null, gitSt && gitSt.dirtyCount
                    ? h("span", { className: "gh2-sync", title: "未提交改动数" }, `±${gitSt.dirtyCount}`)
                    : null, repoSelectorEl)
                : null, repo && repo.description
                ? h("div", { className: "gh2-card-desc", style: { fontSize: "12px", color: "var(--dsw-alias-label-secondary,#57606a)", paddingLeft: "32px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, repo.description)
                : null, !repo
                ? h("div", { className: "gh2-card-desc", style: { fontSize: "12px", color: "var(--dsw-alias-label-secondary,#57606a)", paddingLeft: "32px" } }, "本地已有仓库时，可用 git remote add origin <url> 关联远程")
                : null, 
            // 调试信息（账号 / scopes / 仓库根 / 绑定方式）默认折叠
            h("details", { className: "gh2-details" }, h("summary", null, auth && auth.loggedIn ? `@${auth.user}` : "详情"), h("div", { className: "gh2-details-body" }, repoRootPath ? h("div", null, `仓库根: ${repoRootPath}`) : null, h("div", null, `绑定方式: ${repoVia || "自动（最近活跃）"}`), repo && repo.stargazerCount !== undefined
                ? h("div", null, `Star: ${repo.stargazerCount} `, h("a", { href: `${repo.url}/stargazers`, target: "_blank", style: { color: "inherit" } }, "查看"))
                : null, auth && auth.loggedIn && Array.isArray(auth.scopes) && auth.scopes.length
                ? h("div", null, `CLI scopes(${auth.scopes.length}): ${auth.scopes.join(", ")}`)
                : null, gitSt
                ? h("div", null, `分支: ${gitSt.branch || "—"} · ahead ${gitSt.ahead || 0} / behind ${gitSt.behind || 0} · 脏文件 ${gitSt.dirtyCount || 0}`)
                : null)));
            var commitLog = data && data.commitLog;
            var renderCommitRow = function (c, tone) {
                return h("div", {
                    style: { display: "flex", alignItems: "baseline", gap: "8px", padding: "3px 6px", fontSize: "12px", cursor: "pointer", borderRadius: "4px" },
                    className: "dsh-github-commit-row",
                    title: `${c.subject}\n— ${c.author} · ${c.relative} · ${c.sha}\n（点击查看提交详情）`,
                    onClick: function () {
                        if (typeof onSelectCommit === "function") {
                            onSelectCommit(c);
                        }
                    },
                }, h("span", {
                    style: {
                        fontFamily: "monospace",
                        fontSize: "11px",
                        color: tone === "ahead" ? "var(--dsw-alias-state-success-primary, #1a7f37)"
                            : tone === "behind" ? "var(--dsw-alias-state-attention-primary, #9a6700)"
                                : "var(--dsw-alias-label-secondary, #656d76)",
                        flexShrink: 0,
                    },
                }, c.sha), h("span", {
                    style: {
                        flex: 1,
                        minWidth: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    },
                }, c.subject), h("span", { style: { fontSize: "11px", color: "var(--dsw-alias-label-secondary, #656d76)", whiteSpace: "nowrap", flexShrink: 0 } }, `${c.author} · ${c.relative}`));
            };
            var gitSectionEl = h("div", { className: "dsh-github-section" }, h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" } }, h("h3", { style: { margin: 0, display: "flex", alignItems: "center", gap: "6px" } }, renderGitIcon(16, "#1296db"), "Git 记录"), relInfo
                ? h(relInfo.url ? "a" : "span", {
                    ...(relInfo.url ? { href: relInfo.url, target: "_blank" } : {}),
                    className: "dsh-github-badge" + (relInfo.isPrerelease ? " dsh-badge-purple" : " dsh-badge-green"),
                    style: { fontSize: "10px", textDecoration: "none", flexShrink: 0 },
                    title: `最新 Release: ${relInfo.tagName}${relInfo.isPrerelease ? "（预发布）" : ""}${formatRelativeTime(relInfo.publishedAt) ? ` · ${formatRelativeTime(relInfo.publishedAt)}发布` : ""}\n点击打开 Release 页`,
                }, `🏷️ ${relInfo.tagName}`)
                : null), gitSt
                ? h("div", {
                    style: { display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "13px", marginBottom: "8px" },
                    title: "ahead/behind 相对上次 git fetch 的快照（非实时）",
                }, h(BranchSelectorDropdown, {
                    currentBranch: gitSt.branch,
                    cwd,
                    branchesData: data?.branches,
                    onBranchSwitched: () => onRefresh(),
                    showToast: onShowToast || (() => { }),
                }), gitSt.hasUpstream
                    ? h("span", null, `${gitSt.ahead > 0 ? "↑" + gitSt.ahead + " " : ""}${gitSt.behind > 0 ? "↓" + gitSt.behind : ""}${gitSt.ahead === 0 && gitSt.behind === 0 ? "✓ 与远程同步" : ""}`)
                    : h("span", { style: { opacity: 0.7 } }, "↑? ↓?（无 upstream）"), gitSt.dirtyCount > 0
                    ? h("span", null, `· ${gitSt.dirtyCount} 文件未提交`)
                    : h("span", null, "· 工作区干净"))
                : null, commitLog && commitLog.aheadCommits && commitLog.aheadCommits.length > 0
                ? h("div", { style: { marginBottom: "10px" } }, h("div", { style: { fontSize: "12px", fontWeight: 600, marginBottom: "4px", color: "var(--dsw-alias-state-success-primary, #1a7f37)" } }, `↑ 本地领先远程 ${commitLog.aheadCommits.length} 个提交（待 push）`), commitLog.aheadCommits.map(function (c, i) { return h("div", { key: "a" + i }, renderCommitRow(c, "ahead")); }))
                : null, commitLog && commitLog.behindCommits && commitLog.behindCommits.length > 0
                ? h("div", { style: { marginBottom: "10px" } }, h("div", { style: { fontSize: "12px", fontWeight: 600, marginBottom: "4px", color: "var(--dsw-alias-state-attention-primary, #9a6700)" } }, `↓ 远程领先本地 ${commitLog.behindCommits.length} 个提交（待 pull · 快照口径）`), commitLog.behindCommits.map(function (c, i) { return h("div", { key: "b" + i }, renderCommitRow(c, "behind")); }))
                : null, (() => {
                var baseRecent = (commitLog && commitLog.recent) || [];
                var extraRecent = (gitLogPagination && gitLogPagination.extraCommits) || [];
                var allRecentCommits = baseRecent.concat(extraRecent);
                var totalCommits = commitLog && commitLog.totalCount;
                var loadingMore = Boolean(gitLogPagination && gitLogPagination.loadingMore);
                var hasMore = Boolean(gitLogPagination && gitLogPagination.hasMore);
                var onLoadMore = gitLogPagination ? gitLogPagination.onLoadMore : null;
                if (allRecentCommits.length === 0)
                    return null;
                return h("div", null, h("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" } }, h("div", { style: { fontSize: "12px", fontWeight: 600, opacity: 0.85 } }, "🕘 最近提交"), totalCommits
                    ? h("div", { style: { fontSize: "11px", opacity: 0.6 } }, `${allRecentCommits.length} / ${totalCommits}`)
                    : null), allRecentCommits.map(function (c, i) { return h("div", { key: "r" + (c.sha || i) }, renderCommitRow(c, "recent")); }), h("div", { style: { marginTop: "10px", textAlign: "center" } }, loadingMore
                    ? h("div", { style: { fontSize: "11px", opacity: 0.75, padding: "6px 0" } }, "⏳ 正在加载更多提交…")
                    : (hasMore && onLoadMore)
                        ? h("button", {
                            className: "dsh-github-btn-sm",
                            style: {
                                cursor: "pointer",
                                padding: "4px 14px",
                                borderRadius: "14px",
                                border: "1px solid var(--dsw-alias-border-l2, #d0d7de)",
                                background: "var(--dsw-alias-bg-module-platform, #f6f8fa)",
                                color: "inherit",
                                fontSize: "11px",
                                lineHeight: "1.6",
                            },
                            onClick: onLoadMore,
                        }, `⬇️ 下滑或点击加载更多 (${allRecentCommits.length}${totalCommits ? " / " + totalCommits : ""})`)
                        : (allRecentCommits.length >= 15)
                            ? h("div", { style: { fontSize: "11px", opacity: 0.5, padding: "4px 0" } }, `✓ 已加载全部 ${allRecentCommits.length} 条提交`)
                            : null));
            })(), !commitLog || ((commitLog.aheadCommits || []).length === 0 && (commitLog.behindCommits || []).length === 0 && (commitLog.recent || []).length === 0)
                ? h("div", { className: "dsh-github-empty" }, "无提交记录")
                : null, branchPr
                ? h("div", { className: "dsh-github-item", style: { display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginTop: "8px" } }, h("span", null, "🔀"), branchPr.url
                    ? h("a", { className: "dsh-github-item-title", href: branchPr.url, target: "_blank" }, `PR #${branchPr.number} ${branchPr.title}`)
                    : h("span", { className: "dsh-github-item-title" }, `PR #${branchPr.number} ${branchPr.title}`), branchPr.isDraft ? h("span", { className: "dsh-github-badge dsh-badge-yellow" }, "DRAFT") : null)
                : null);
            var baseDirty = (gitSt && gitSt.dirtyFiles) || [];
            var extraDirty = (dirtyPagination && dirtyPagination.extraDirtyFiles) || [];
            var allDirtyFiles = [];
            var seenDirtyPaths = new Set();
            baseDirty.concat(extraDirty).forEach(function (f) {
                if (f && f.path && !seenDirtyPaths.has(f.path)) {
                    seenDirtyPaths.add(f.path);
                    allDirtyFiles.push(f);
                }
            });
            var visibleDirtyLimit = (dirtyPagination && dirtyPagination.visibleCount) || 15;
            var displayedDirty = allDirtyFiles.slice(0, visibleDirtyLimit);
            var totalDirtyCount = gitSt ? gitSt.dirtyCount : allDirtyFiles.length;
            var hasMoreDirtyToLoad = displayedDirty.length < totalDirtyCount;
            var dirtyHeaderTitle = gitSt && totalDirtyCount > displayedDirty.length
                ? `📁 未提交清单 (${displayedDirty.length} / ${totalDirtyCount})`
                : `📁 未提交清单 (${gitSt ? gitSt.dirtyCount : 0})`;
            var dirtySectionEl = activeDiffFile
                ? h(UncommittedDiffView, {
                    file: activeDiffFile,
                    onBack: onCloseDiff || (() => { }),
                    cwd: cwd,
                    onOpenInDsh: onOpenInDsh,
                })
                : h("div", { className: "dsh-github-section" }, h("div", { className: "dsh-github-section-header" }, h("h3", null, dirtyHeaderTitle)), !gitSt || gitSt.dirtyCount === 0
                    ? h("div", { className: "dsh-github-empty" }, "工作区干净，没有未提交的变更 ✓")
                    : h("div", { style: { fontSize: "12px", lineHeight: "1.9" } }, displayedDirty.map(function (f, i) {
                        var statusColor = f.status === "??" ? "var(--dsw-alias-state-success-primary, #1a7f37)"
                            : f.status.indexOf("D") >= 0 ? "var(--dsw-alias-state-error-primary, #cf222e)"
                                : f.status.indexOf("M") >= 0 || f.status.indexOf("R") >= 0 ? "var(--dsw-alias-state-attention-primary, #9a6700)"
                                    : "inherit";
                        var statusText = f.status === "??" ? "未跟踪新增"
                            : f.status.indexOf("D") >= 0 ? "已删除"
                                : f.status.indexOf("R") >= 0 ? "已重命名"
                                    : "已修改";
                        return h("div", {
                            key: f.path || i,
                            className: "dsh-github-dirty-item",
                            title: `${f.path} (${statusText} [${f.status}])\n点击查看代码改动对比 (Unified Diff)`,
                            onClick: function () {
                                if (typeof onSelectDiffFile === "function") {
                                    onSelectDiffFile(f);
                                }
                            },
                        }, h("span", {
                            style: {
                                minWidth: "24px",
                                textAlign: "center",
                                opacity: 0.85,
                                fontSize: "11px",
                                fontFamily: "monospace",
                                color: statusColor,
                                fontWeight: 600,
                            },
                        }, f.status === "??" ? "??" : f.status), h("span", { style: { wordBreak: "break-all", flex: 1, fontSize: "12px" } }, f.path));
                    }), hasMoreDirtyToLoad
                        ? h("div", { style: { marginTop: "10px", textAlign: "center" } }, dirtyPagination?.loadingMore
                            ? h("div", { style: { fontSize: "11px", opacity: 0.75, padding: "6px 0" } }, "⏳ 正在加载更多未提交变更…")
                            : h("div", {
                                style: {
                                    fontSize: "11px",
                                    opacity: 0.7,
                                    padding: "6px 0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "6px",
                                    cursor: "pointer",
                                    borderRadius: "4px",
                                },
                                title: "向下滑动滚轮或点击加载更多",
                                onClick: function () {
                                    if (dirtyPagination && typeof dirtyPagination.onLoadMore === "function") {
                                        dirtyPagination.onLoadMore();
                                    }
                                },
                            }, h("span", null, "⬇️ 向下滑动自动加载"), h("span", { style: { fontFamily: "monospace" } }, `(${displayedDirty.length} / ${totalDirtyCount})`)))
                        : totalDirtyCount > 15
                            ? h("div", { style: { textAlign: "center", fontSize: "11px", opacity: 0.5, padding: "6px 0", marginTop: "8px" } }, `✓ 已加载全部 ${totalDirtyCount} 个未提交变更`)
                            : null));
            // 快捷操作栏 (仅在检测到关联仓库时展示，未绑定仓库时不展示虚假按钮)
            // 快捷操作：写操作要顺手可达，但不必视觉抢眼——降级为列表底部的一行文字链接
            var actionsBarEl = repo
                ? h("div", { className: "gh2-quick" }, h("button", {
                    className: "gh2-quick-btn",
                    onClick: () => { if (repo?.url) {
                        const u = `${repo.url}/compare`;
                        if (!openUrlSmart(u))
                            openUrlFallback(u);
                    } },
                }, "新建 PR"), h("button", {
                    className: "gh2-quick-btn",
                    onClick: () => { if (repo?.url) {
                        const u = `${repo.url}/issues/new`;
                        if (!openUrlSmart(u))
                            openUrlFallback(u);
                    } },
                }, "新建 Issue"), h("button", {
                    className: "gh2-quick-btn",
                    onClick: () => { if (repo?.url) {
                        const u = `${repo.url}/pulls`;
                        if (!openUrlSmart(u))
                            openUrlFallback(u);
                    } },
                }, "全部 PR"), h("button", {
                    className: "gh2-quick-btn",
                    onClick: () => { if (repo?.url) {
                        const u = `${repo.url}/issues`;
                        if (!openUrlSmart(u))
                            openUrlFallback(u);
                    } },
                }, "全部 Issues"))
                : null;
            var prSectionEl = h("div", { className: "dsh-github-section" }, h("div", { className: "dsh-github-section-header" }, h("h3", { className: "gh2-section-title" }, "Pull requests"), h("span", { className: "gh2-section-count" }, String(prs.length))), prs.length === 0
                ? h("div", { className: "gh2-empty" }, "没有打开的 PR")
                : h("div", { className: "gh2-list" }, prs.map(function (pr) {
                    var ci = rollupCiStatus(pr.statusCheckRollup);
                    var rv = reviewDecisionBadge(pr.reviewDecision);
                    var tone = pr.mergeable === "CONFLICTING" || ci === "fail" ? "error"
                        : pr.isDraft ? "neutral"
                            : ci === "pending" ? "running" : "success";
                    var glyph = tone === "error" ? "✕" : tone === "neutral" ? "◇" : tone === "running" ? "○" : "●";
                    var statusText = [
                        pr.mergeable === "CONFLICTING" ? "代码冲突" : "可合并",
                        ci === "fail" ? "CI 失败" : ci === "pending" ? "CI 运行中" : ci === "pass" ? "CI 通过" : "",
                        rv ? rv.text : "",
                    ].filter(Boolean).join(" · ");
                    return renderRow({
                        key: "pr-" + pr.number,
                        glyph: glyph,
                        tone: tone,
                        chip: pr.mergeable === "CONFLICTING" ? "冲突" : ci === "fail" ? "CI 失败" : ci === "pending" ? "运行中" : "可合并",
                        statusText: statusText,
                        prefix: "#" + pr.number,
                        title: (pr.isDraft ? "[Draft] " : "") + (pr.title || ""),
                        href: pr.url,
                        meta: [
                            { text: `${pr.headRefName || "?"} → ${pr.baseRefName || "?"}`, mono: true },
                        ],
                        time: formatRelativeTime(pr.updatedAt),
                        action: typeof onReviewPr === "function"
                            ? h("button", {
                                className: "gh2-icon-btn gh2-row-slot-btn",
                                title: "在面板内评审这个 PR",
                                onClick: function (e) { e.stopPropagation(); e.preventDefault(); onReviewPr(pr.number); },
                            }, "✓")
                            : null,
                    });
                })));
            var issueSectionEl = h("div", { className: "dsh-github-section" }, h("div", { className: "dsh-github-section-header" }, h("h3", { className: "gh2-section-title" }, "Issues"), h("span", { className: "gh2-section-count" }, String(issues.length))), issues.length === 0
                ? h("div", { className: "gh2-empty" }, "没有打开的 Issue")
                : h("div", { className: "gh2-list" }, issues.map(function (issue) {
                    var labels = (issue.labels || []).map(function (l) { return typeof l === "string" ? l : (l && l.name) || ""; }).filter(Boolean);
                    var author = issue.author && (issue.author.login || issue.author.name);
                    return renderRow({
                        key: "issue-" + issue.number,
                        glyph: "○",
                        tone: "neutral",
                        statusText: "进行中",
                        prefix: "#" + issue.number,
                        title: issue.title || "",
                        href: issue.url,
                        meta: [
                            author ? { text: "@" + author } : null,
                            labels.length ? { text: labels.slice(0, 2).join(", "), title: labels.join(", ") } : null,
                        ].filter(Boolean),
                        time: formatRelativeTime(issue.updatedAt),
                    });
                })));
            // 同名 + 同分支的运行折叠成一组（matrix / 重跑会把同一个 job 刷出好几条）
            var runGroups = (function () {
                var order = [];
                var map = {};
                runs.forEach(function (r) {
                    var key = String(r.name || "") + "\u0000" + String(r.headBranch || "");
                    var ts = Date.parse(r.createdAt || "") || 0;
                    if (!map[key]) {
                        map[key] = { key: key, sample: r, count: 0, ids: [], latestTs: ts };
                        order.push(key);
                    }
                    map[key].count += 1;
                    map[key].ids.push(r.databaseId);
                    if (ts > map[key].latestTs) {
                        map[key].latestTs = ts;
                        map[key].sample = r;
                    }
                });
                return order.map(function (k) { return map[k]; });
            })();
            var runSectionEl = h("div", { className: "dsh-github-section" }, h("div", { className: "dsh-github-section-header" }, h("h3", { className: "gh2-section-title" }, "Actions"), h("span", { className: "gh2-section-count" }, String(runs.length))), runs.length === 0
                ? h("div", { className: "gh2-empty" }, "暂无工作流运行")
                : h("div", { className: "gh2-list" }, runGroups.map(function (group) {
                    var r = group.sample;
                    var badge = runConclusionBadge(r.conclusion, r.status);
                    var conclusion = String(r.conclusion || "").toLowerCase();
                    var glyph = conclusion === "success" ? "●"
                        : conclusion === "failure" || conclusion === "startup_failure" ? "✕"
                            : conclusion === "cancelled" ? "⊘"
                                : conclusion === "timed_out" ? "⏱"
                                    : conclusion === "skipped" ? "⤼"
                                        : String(r.status || "").toLowerCase() === "in_progress" ? "○"
                                            : conclusion === "" ? "◷" : "◇";
                    return renderRow({
                        key: group.key,
                        glyph: glyph,
                        tone: toneOf(badge.tone),
                        chip: badge.label.replace(/^[^\u4e00-\u9fa5]+/, "").trim(),
                        statusText: `${badge.label}（status ${r.status || "-"} / conclusion ${r.conclusion || "-"}）`,
                        title: r.name || "",
                        href: r.url,
                        meta: [
                            { text: r.headBranch || "", mono: true },
                            group.count > 1 ? { text: `${group.count} 次`, title: `同名同分支共 ${group.count} 条：${group.ids.join(", ")}` } : null,
                        ].filter(Boolean),
                        time: formatRelativeTime(r.createdAt),
                        action: h("button", {
                            className: "gh2-icon-btn gh2-row-slot-btn",
                            title: "在 GitHub 打开这次运行",
                            onClick: function () { if (r.url && !openUrlSmart(r.url))
                                openUrlFallback(r.url); },
                        }, "↗"),
                    });
                })));
            var mentionedSectionEl = (function () {
                var groups = [
                    { key: "open", label: "待审", match: function (it) { return !it.mergedAt && String(it.state || "").toUpperCase() === "OPEN" && !it.isDraft; } },
                    { key: "draft", label: "草稿", match: function (it) { return Boolean(it.isDraft); } },
                    { key: "merged", label: "已合并", match: function (it) { return Boolean(it.mergedAt); } },
                    { key: "closed", label: "已关闭", match: function (it) { return String(it.state || "").toUpperCase() === "CLOSED" && !it.mergedAt; } },
                ];
                var ungrouped = [];
                var buckets = {};
                mentionedPrs.forEach(function (it) {
                    var placed = false;
                    for (var i = 0; i < groups.length; i += 1) {
                        if (groups[i].match(it)) {
                            (buckets[groups[i].key] = buckets[groups[i].key] || []).push(it);
                            placed = true;
                            break;
                        }
                    }
                    if (!placed)
                        ungrouped.push(it);
                });
                if (ungrouped.length)
                    buckets.other = ungrouped;
                var filterBtn = function (key, label) {
                    var active = mentionedFilter === key;
                    return h("button", {
                        key: key,
                        className: "gh2-quick-btn",
                        style: active ? { borderColor: "var(--gh-c-accent)", color: "var(--gh-c-accent)" } : undefined,
                        onClick: function () { if (typeof onMentionedFilter === "function")
                            onMentionedFilter(key); },
                    }, label);
                };
                var rowsFor = function (list) {
                    return h("div", { className: "gh2-list" }, list.map(function (it) {
                        var stateName = String(it.state || "").toUpperCase();
                        var isMerged = Boolean(it.mergedAt);
                        var tone = stateName === "OPEN" ? (it.isDraft ? "idle" : "ok") : isMerged ? "busy" : "bad";
                        var glyph = stateName === "OPEN" ? "●" : isMerged ? "◆" : "✕";
                        return renderRow({
                            key: "mentioned-" + it.number,
                            glyph: glyph,
                            tone: tone,
                            chip: it.isDraft ? "草稿" : stateName === "OPEN" ? "待审" : isMerged ? "已合并" : "已关闭",
                            statusText: stateName + (isMerged ? " · merged" : ""),
                            prefix: "#" + it.number,
                            title: it.title || "",
                            href: it.url || undefined,
                            meta: it.author && it.author.login ? [{ text: "@" + it.author.login }] : [],
                            time: formatRelativeTime(it.updatedAt || it.createdAt),
                            action: h("button", {
                                className: "gh2-icon-btn gh2-row-slot-btn",
                                title: "在面板内查看与评审",
                                onClick: function (e) {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    if (typeof onReviewPr === "function")
                                        onReviewPr(it.number);
                                },
                            }, "✓"),
                        });
                    }));
                };
                return h("div", { className: "dsh-github-section" }, h("div", { className: "dsh-github-section-header" }, h("h3", { className: "gh2-section-title" }, "会话中提到的 PR"), h("span", { className: "gh2-section-count" }, String(mentionedAll.length) + (mentionedMeta.total > mentionedAll.length ? "/" + mentionedMeta.total : ""))), h("div", { style: { display: "flex", gap: "6px", marginBottom: "8px" } }, filterBtn("all", "全部"), filterBtn("mine", "我发起的")), mentionedPrs.length === 0
                    ? h("div", { className: "gh2-empty" }, h("div", null, mentionedMeta.loading ? "正在从会话里提取…" : "这段对话里还没有出现过 PR"), h("div", { style: { fontSize: "11px", opacity: .75 } }, "贴一个 PR 地址、owner/repo#123 或直接写 #3934 都会出现在这里"))
                    : h("div", { style: { display: "flex", flexDirection: "column", gap: "12px" } }, groups.concat([{ key: "other", label: "其他" }]).map(function (g) {
                        var list = buckets[g.key];
                        if (!list || list.length === 0)
                            return null;
                        return h("div", { key: g.key }, h("div", { style: { display: "flex", alignItems: "center", gap: "6px", margin: "0 2px 4px", fontSize: "11px", color: "var(--gh-c-fg2)" } }, h("span", null, g.label), h("span", { style: { opacity: .7 } }, String(list.length))), rowsFor(list));
                    })), mentionedAll.length > 0 && mentionedAll.length < mentionedMeta.total
                    ? h("div", { style: { marginTop: "8px", textAlign: "center" } }, h("button", {
                        className: "gh2-quick-btn",
                        disabled: Boolean(mentionedMeta.loading),
                        onClick: function () { if (typeof onMentionedMore === "function")
                            onMentionedMore(); },
                    }, mentionedMeta.loading ? "加载中…" : "加载更多（已显示 " + mentionedAll.length + " / " + mentionedMeta.total + "）"))
                    : null);
            })();
            var authGuideEl = (!auth?.loggedIn && !auth?.networkError && syncStatus !== "failed")
                ? h(AuthGuideCard, { auth, onRefresh, isRightbar })
                : null;
            var TAB_DEFS = [
                { key: "git", label: "Git", count: null, icon: renderGitIcon(12, "currentColor") },
                { key: "dirty", label: "未提交", count: gitSt ? gitSt.dirtyCount : null },
                { key: "prs", label: "PR", count: prs.length },
                { key: "issues", label: "Issues", count: issues.length },
                { key: "runs", label: "Actions", count: runs.length },
                { key: "mentioned", label: "会话", count: mentionedPrs.length },
            ].filter(function (t) {
                if ((t.key === "git" || t.key === "dirty") && !gitSt)
                    return false;
                return true;
            });
            var defaultTab = gitSt ? "git" : (prs.length === 0 && issues.length > 0 ? "issues" : "prs");
            var switchTab = function (container, tabKey) {
                container.setAttribute("data-active-tab", tabKey);
                applyTabState(container, tabKey);
                var rightbar = container.closest(".dsh-github-rightbar-container");
                if (rightbar) {
                    rightbar.setAttribute("data-active-tab", tabKey);
                }
            };
            var tabsBarEl = h("div", { className: "gh2-segments" }, ...TAB_DEFS.map(function (t) {
                return h("button", {
                    key: t.key,
                    className: "gh2-segment" + (t.key === defaultTab ? " gh2-segment--active" : ""),
                    "data-tab-btn": t.key,
                    onClick: function (e) {
                        var container = e.target.closest("[data-active-tab]");
                        if (container)
                            switchTab(container, t.key);
                    },
                }, t.icon || null, h("span", null, t.label), t.count !== null ? h("span", { className: "gh2-count" }, String(t.count)) : null);
            }));
            var tabbedContentEl = h("div", { "data-active-tab": defaultTab }, tabsBarEl, h("div", { "data-tab-page": "prs", hidden: defaultTab !== "prs" }, prSectionEl), h("div", { "data-tab-page": "issues", hidden: defaultTab !== "issues" }, issueSectionEl), h("div", { "data-tab-page": "runs", hidden: defaultTab !== "runs" }, runSectionEl), gitSt ? h("div", { "data-tab-page": "git", hidden: defaultTab !== "git" }, gitSectionEl) : null, gitSt ? h("div", { "data-tab-page": "dirty", hidden: defaultTab !== "dirty" }, dirtySectionEl) : null, h("div", { "data-tab-page": "mentioned", hidden: defaultTab !== "mentioned" }, mentionedSectionEl));
            // 顺序即层级：我在哪（锚点）→ 我该看哪（tab）→ 内容 → 我要做什么（快捷操作）
            return [
                headerEl,
                networkAlertBannerEl,
                upgradeBannerEl,
                authGuideEl,
                headerCardsVisible ? repoCardEl : null,
                tabbedContentEl,
                headerCardsVisible && repo ? actionsBarEl : null,
            ].filter(Boolean);
        }
        // 1. 右侧栏专属视图 (Right Sidebar Tab Body)
        function GithubRightbarBody(props) {
            var sessionId = props ? props.sessionId : null;
            var cwd = null;
            if (props && typeof props.useSessions === "function" && sessionId) {
                try {
                    cwd = props.useSessions((sessions) => sessions?.byId?.[sessionId]?.cwd) || null;
                }
                catch (e) { }
            }
            var initialSettings = React.useMemo(() => getLocalSyncSettings(), []);
            var [syncSettings, setSyncSettings] = React.useState(initialSettings);
            var initialSnapshot = React.useMemo(() => getStoredRightbarSnapshot(cwd), [cwd]);
            var [data, setData] = React.useState(initialSnapshot?.data || null);
            var [syncStatus, setSyncStatus] = React.useState(initialSnapshot ? "cached" : "loading");
            var [lastSyncedAt, setLastSyncedAt] = React.useState(initialSnapshot?.savedAt || 0);
            var [loading, setLoading] = React.useState(false);
            var [error, setError] = React.useState(null);
            var [updateInfo, setUpdateInfo] = React.useState(null);
            var [toastMsg, setToastMsg] = React.useState(null);
            var cloudTimerRef = React.useRef(null);
            var dataRef = React.useRef(data);
            dataRef.current = data;
            var lastCwdRef = React.useRef(cwd);
            var containerRef = React.useRef(null);
            var showToast = (msg) => {
                setToastMsg(msg);
                setTimeout(() => setToastMsg(null), 5000);
            };
            React.useEffect(() => {
                if (lastCwdRef.current === cwd)
                    return;
                lastCwdRef.current = cwd;
                var snap = getStoredRightbarSnapshot(cwd);
                setData(snap?.data || null);
                setSyncStatus(snap ? "cached" : "loading");
                setLastSyncedAt(snap?.savedAt || 0);
                setError(null);
            }, [cwd]);
            React.useEffect(function () {
                var onSettingsChange = function (e) {
                    if (e && e.detail) {
                        setSyncSettings(e.detail);
                    }
                };
                var onCacheCleared = function () {
                    setData(null);
                    setLastSyncedAt(0);
                    setSyncStatus("loading");
                };
                window.addEventListener("dsh-github-sync-settings-change", onSettingsChange);
                window.addEventListener("dsh-github-cache-cleared", onCacheCleared);
                return function () {
                    window.removeEventListener("dsh-github-sync-settings-change", onSettingsChange);
                    window.removeEventListener("dsh-github-cache-cleared", onCacheCleared);
                };
            }, []);
            React.useEffect(() => {
                var timer = setTimeout(function () {
                    fetch("/api/github/check-update")
                        .then(function (res) { return res.json(); })
                        .then(function (json) {
                        if (json && json.ok && json.data) {
                            setUpdateInfo(json.data);
                        }
                    })
                        .catch(function () { });
                }, 300);
                return function () { clearTimeout(timer); };
            }, []);
            var loadData = React.useCallback(async (forceRefresh = false) => {
                if (!forceRefresh && syncSettings.strategy === "manual" && dataRef.current) {
                    return;
                }
                if (forceRefresh || !dataRef.current) {
                    setLoading(true);
                }
                setSyncStatus(dataRef.current ? "syncing" : "loading");
                setError(null);
                var controller = new AbortController();
                var timedOut = false;
                var timer = setTimeout(function () { timedOut = true; controller.abort(); }, 45000);
                try {
                    if (forceRefresh) {
                        await fetch("/api/github/refresh", { method: "POST", signal: controller.signal }).catch(() => { });
                    }
                    var url = "/api/github/overview";
                    var params = [];
                    if (forceRefresh) {
                        params.push("force=true");
                    }
                    if (sessionId) {
                        params.push("sessionId=" + encodeURIComponent(sessionId));
                    }
                    if (cwd) {
                        params.push("cwd=" + encodeURIComponent(cwd));
                    }
                    if (params.length > 0) {
                        url += "?" + params.join("&");
                    }
                    // 接入 1s/2s/4s 阶梯退避重试，平滑吸收代理节点与网络的偶发抖动断流
                    var { res, json } = await fetchWithRetry(url, {}, {
                        signal: controller.signal,
                        maxRetries: 3,
                        baseDelayMs: 1000,
                        onRetry: (attempt) => {
                            setSyncStatus("syncing");
                            setError(`网络抖动，正在自愈重试 (${attempt}/3)...`);
                        },
                    });
                    if (!res.ok) {
                        var errText = (typeof json === "string" ? json : JSON.stringify(json)) || res.statusText;
                        var msg = `后端服务未就绪 (${res.status}): ${errText}`;
                        setSyncStatus("failed");
                        setError(msg);
                        if (forceRefresh) {
                            showToast("❌ 刷新失败：" + msg);
                        }
                        return;
                    }
                    if (json.ok && json.data) {
                        var isFail = Boolean(json.partialFailure ||
                            json.data.partialFailure ||
                            json.data.networkError ||
                            json.data.auth?.networkError ||
                            json.error);
                        var failReason = String(json.error ||
                            json.fetchError ||
                            json.data.networkErrorReason ||
                            json.data.auth?.networkErrorReason ||
                            "拉取云端数据失败");
                        if (isFail) {
                            setSyncStatus("failed");
                            setError(failReason);
                            var curData = dataRef.current;
                            if (curData && (curData.pullRequests?.length > 0 || curData.issues?.length > 0 || curData.runs?.length > 0)) {
                                if (json.data.pullRequests?.length > 0 || json.data.issues?.length > 0) {
                                    setData(json.data);
                                }
                            }
                            else {
                                setData(json.data);
                            }
                            if (forceRefresh) {
                                showToast("❌ 刷新失败：" + failReason);
                            }
                        }
                        else {
                            setData(json.data);
                            saveStoredRightbarData(cwd, json.data);
                            var syncTs = json.fromCache && json.data.lastUpdated
                                ? (Date.parse(json.data.lastUpdated) || Date.now())
                                : Date.now();
                            setLastSyncedAt(syncTs);
                            setSyncStatus(json.fromCache ? "cached" : "fresh");
                            setError(null);
                            if (forceRefresh) {
                                showToast("✅ 刷新成功，已同步最新数据");
                            }
                        }
                        if (json.data.updateInfo) {
                            setUpdateInfo(json.data.updateInfo);
                        }
                    }
                    else if (dataRef.current) {
                        setSyncStatus("failed");
                        var failMsg = json.error || "获取状态失败";
                        setError(failMsg);
                        if (forceRefresh) {
                            showToast("❌ 刷新失败：" + failMsg);
                        }
                    }
                    else {
                        setError(json.error || "获取状态失败");
                    }
                }
                catch (err) {
                    setSyncStatus("failed");
                    var catchFailReason = (timedOut || err.name === "AbortError")
                        ? "网络连接超时 (45 秒)：请检查网络或在代理设置中放行 127.0.0.1"
                        : (err.message || "网络异常");
                    setError(catchFailReason);
                    if (forceRefresh) {
                        showToast("❌ 刷新失败：" + catchFailReason);
                    }
                }
                finally {
                    clearTimeout(timer);
                    setLoading(false);
                    if (syncSettings.strategy === "auto") {
                        scheduleNextCloudSync();
                    }
                }
            }, [cwd, sessionId, syncSettings.strategy]);
            var scheduleNextCloudSync = React.useCallback(() => {
                if (cloudTimerRef.current)
                    clearTimeout(cloudTimerRef.current);
                if (syncSettings.strategy !== "auto")
                    return;
                var interval = Math.max(300000, Number(syncSettings.cloudSyncIntervalMs) || 600000);
                cloudTimerRef.current = setTimeout(() => {
                    if (typeof document !== "undefined" && document.visibilityState === "hidden") {
                        var onVisible = () => {
                            if (document.visibilityState === "visible") {
                                document.removeEventListener("visibilitychange", onVisible);
                                loadData(false);
                            }
                        };
                        document.addEventListener("visibilitychange", onVisible);
                        return;
                    }
                    loadData(false);
                }, interval);
            }, [syncSettings.strategy, syncSettings.cloudSyncIntervalMs, loadData]);
            React.useEffect(() => {
                if (cloudTimerRef.current)
                    clearTimeout(cloudTimerRef.current);
                if (syncSettings.strategy === "swr" || syncSettings.strategy === "auto") {
                    var timer = setTimeout(function () { loadData(false); }, 300);
                    return function () {
                        clearTimeout(timer);
                        if (cloudTimerRef.current)
                            clearTimeout(cloudTimerRef.current);
                    };
                }
                else if (!dataRef.current) {
                    loadData(false);
                }
                return function () {
                    if (cloudTimerRef.current)
                        clearTimeout(cloudTimerRef.current);
                };
            }, [cwd, sessionId, syncSettings.strategy, syncSettings.cloudSyncIntervalMs, loadData]);
            // 纯本地 Git 状态局部刷新：只更新未提交改动(Dirty)、分支与提交记录，彻底切断连带远端网络风暴
            var refreshLocalGit = React.useCallback(async () => {
                if (!cwd)
                    return;
                try {
                    var res = await fetch("/api/github/local-git-status?cwd=" + encodeURIComponent(String(cwd)));
                    if (!res.ok)
                        return;
                    var json = await res.json().catch(() => null);
                    if (json && json.ok && json.data) {
                        setData((prev) => {
                            if (!prev)
                                return prev;
                            var next = {
                                ...prev,
                                gitStatus: json.data.gitStatus !== undefined ? json.data.gitStatus : prev.gitStatus,
                                commitLog: json.data.commitLog !== undefined ? json.data.commitLog : prev.commitLog,
                                branches: json.data.branches !== undefined ? json.data.branches : prev.branches,
                            };
                            saveStoredRightbarData(cwd, next);
                            return next;
                        });
                    }
                }
                catch {
                    // 纯本地静默更新，网络异常或组件卸载不打扰用户
                }
            }, [cwd]);
            React.useEffect(() => {
                if (!syncSettings.localGitWatch || !cwd || !data?.repo)
                    return;
                var aborted = false;
                var watchController = new AbortController();
                var pollWatch = async () => {
                    while (!aborted) {
                        try {
                            var res = await fetch("/api/github/git-watch?cwd=" + encodeURIComponent(String(cwd)), {
                                signal: watchController.signal,
                            });
                            if (!res.ok) {
                                await new Promise((r) => setTimeout(r, 6000));
                                continue;
                            }
                            var json = await res.json().catch(() => null);
                            if (aborted)
                                break;
                            if (json && json.changed) {
                                // 仅局部刷新本地未提交文件、分支与提交记录，零网络流量，彻底切断连带远端网络风暴！
                                refreshLocalGit();
                            }
                        }
                        catch (err) {
                            if (aborted || err.name === "AbortError")
                                break;
                            await new Promise((r) => setTimeout(r, 6000));
                        }
                    }
                };
                pollWatch();
                return () => {
                    aborted = true;
                    watchController.abort();
                };
            }, [cwd, data?.repo, syncSettings.localGitWatch, refreshLocalGit]);
            React.useEffect(() => {
                var container = containerRef && containerRef.current;
                if (!container)
                    return;
                var active = container.getAttribute("data-active-tab");
                if (active)
                    applyTabState(container, active);
            }, [data]);
            React.useEffect(() => {
                var onFocus = () => {
                    if (!data?.auth?.loggedIn) {
                        fetch("/api/github/auth?force=true")
                            .then(function (res) { return res.json(); })
                            .then(function (json) {
                            if (json && json.ok && json.auth && json.auth.loggedIn) {
                                loadData(true);
                            }
                        })
                            .catch(function () { });
                    }
                    else if (syncSettings.localGitWatch && data?.repo) {
                        // 聚焦时若开启了本地 Git 监听，仅局部刷新本地状态，杜绝多余远端请求
                        refreshLocalGit();
                    }
                };
                var onOnline = () => {
                    // 监听网络由断网恢复连接瞬间，自动静默发起一次全量同步，消除离线警告横幅并拉新
                    loadData(false);
                };
                window.addEventListener("focus", onFocus);
                window.addEventListener("online", onOnline);
                return () => {
                    window.removeEventListener("focus", onFocus);
                    window.removeEventListener("online", onOnline);
                };
            }, [data, loadData, refreshLocalGit, syncSettings.localGitWatch]);
            var [aboutModalOpen, setAboutModalOpen] = React.useState(false);
            var [rightbarModalOpen, setRightbarModalOpen] = React.useState(false);
            var [rightbarModalSection, setRightbarModalSection] = React.useState("sync");
            var [helpModalOpen, setHelpModalOpen] = React.useState(false);
            var [selectedCommit, setSelectedCommit] = React.useState(null);
            var [reviewPrNumber, setReviewPrNumber] = React.useState(null);
            var [extraCommits, setExtraCommits] = React.useState([]);
            var [loadingMore, setLoadingMore] = React.useState(false);
            var [hasMoreCommits, setHasMoreCommits] = React.useState(true);
            React.useEffect(function () {
                loadMentioned({ append: false });
                // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [sessionId, cwd, lastSyncedAt]);
            var [visibleDirtyCount, setVisibleDirtyCount] = React.useState(15);
            var [extraDirtyFiles, setExtraDirtyFiles] = React.useState([]);
            var [loadingMoreDirty, setLoadingMoreDirty] = React.useState(false);
            var [hasMoreDirty, setHasMoreDirty] = React.useState(true);
            var [activeDiffFile, setActiveDiffFile] = React.useState(null);
            var [headerCardsVisible, setHeaderCardsVisible] = React.useState(() => getStoredHeaderCardsVisible());
            // 对话中出现过的 PR：独立于 overview 拉取（数据源是会话转写，不是 GitHub）
            var [mentioned, setMentioned] = React.useState({ items: [], total: 0, filter: "all", loading: false });
            var loadMentioned = React.useCallback(function (opts) {
                if (!sessionId) {
                    setMentioned({ items: [], total: 0, filter: "all", loading: false });
                    return;
                }
                setMentioned(function (prev) { return Object.assign({}, prev, { loading: true }); });
                var offset = opts && opts.append ? (mentioned.items || []).length : 0;
                var qs = "/api/github/session-prs?sessionId=" + encodeURIComponent(sessionId)
                    + "&limit=12&offset=" + offset
                    + (cwd ? "&cwd=" + encodeURIComponent(cwd) : "");
                fetch(qs)
                    .then(function (r) { return r.json(); })
                    .then(function (json) {
                    var payload = json && json.ok && json.data ? json.data : null;
                    setMentioned(function (prev) {
                        var nextItems = payload && Array.isArray(payload.items)
                            ? (opts && opts.append ? (prev.items || []).concat(payload.items) : payload.items)
                            : (opts && opts.append ? prev.items : []);
                        return {
                            items: nextItems,
                            total: payload ? payload.total || 0 : 0,
                            filter: prev.filter || "all",
                            loading: false,
                        };
                    });
                })
                    .catch(function () {
                    setMentioned(function (prev) { return Object.assign({}, prev, { loading: false }); });
                });
            }, [sessionId, cwd, mentioned.items.length]);
            var toggleHeaderCards = React.useCallback(() => {
                setHeaderCardsVisible(function (prev) {
                    var next = !prev;
                    saveStoredHeaderCardsVisible(next);
                    return next;
                });
            }, []);
            React.useEffect(function () {
                setExtraCommits([]);
                setHasMoreCommits(true);
                setExtraDirtyFiles([]);
                setVisibleDirtyCount(15);
                setHasMoreDirty(true);
                setActiveDiffFile(null);
            }, [cwd, data]);
            var loadMoreCommits = function () {
                if (loadingMore || !hasMoreCommits)
                    return;
                var baseCount = (data?.commitLog?.recent?.length || 0);
                var currentCount = baseCount + extraCommits.length;
                var total = data?.commitLog?.totalCount;
                if (total !== undefined && currentCount >= total) {
                    setHasMoreCommits(false);
                    return;
                }
                setLoadingMore(true);
                var url = "/api/github/git-log?limit=15&skip=" + currentCount + (cwd ? "&cwd=" + encodeURIComponent(cwd) : "");
                fetch(url)
                    .then(function (r) { return r.json(); })
                    .then(function (j) {
                    setLoadingMore(false);
                    if (j && j.ok && j.data && Array.isArray(j.data.commits)) {
                        if (j.data.commits.length === 0) {
                            setHasMoreCommits(false);
                        }
                        else {
                            setExtraCommits(function (prev) { return prev.concat(j.data.commits); });
                            if (j.data.totalCount !== undefined && (currentCount + j.data.commits.length) >= j.data.totalCount) {
                                setHasMoreCommits(false);
                            }
                        }
                    }
                    else {
                        setHasMoreCommits(false);
                    }
                })
                    .catch(function () {
                    setLoadingMore(false);
                });
            };
            var loadMoreDirtyFiles = function () {
                if (loadingMoreDirty)
                    return;
                var total = data?.gitStatus?.dirtyCount || 0;
                var baseFiles = data?.gitStatus?.dirtyFiles || [];
                var loadedCount = baseFiles.length + extraDirtyFiles.length;
                // 若当前已持有的文件列表中还有未展示的内容，按 15 条步长递增展示窗口（0ms 纯前端瞬时响应）
                if (visibleDirtyCount < loadedCount) {
                    setVisibleDirtyCount(function (prev) {
                        return Math.min(prev + 15, loadedCount);
                    });
                    return;
                }
                // 若当前已展示数已经达到总数，说明全量全部展示完毕，无需发起请求
                if (visibleDirtyCount >= total && total > 0) {
                    setHasMoreDirty(false);
                    return;
                }
                // 仅在当前已知条数小于总数时向后端增量拉取后续条目
                setLoadingMoreDirty(true);
                var skip = loadedCount;
                var limit = 15;
                var url = "/api/github/uncommitted-files?limit=" + limit + "&skip=" + skip + (cwd ? "&cwd=" + encodeURIComponent(cwd) : "");
                var fetchWithFallback = async function () {
                    try {
                        var r = await fetch(url);
                        if (r.status === 404) {
                            // 自动无缝降级走常驻端点 /api/github/action
                            r = await fetch("/api/github/action", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                    action: "get_uncommitted_files",
                                    limit: limit,
                                    skip: skip,
                                    cwd: cwd || undefined,
                                }),
                            });
                        }
                        if (!r.ok) {
                            setLoadingMoreDirty(false);
                            return;
                        }
                        var j = await r.json().catch(function () { return null; });
                        setLoadingMoreDirty(false);
                        if (j && j.ok && j.data && Array.isArray(j.data.items)) {
                            if (j.data.items.length === 0) {
                                setHasMoreDirty(false);
                            }
                            else {
                                setExtraDirtyFiles(function (prev) {
                                    return prev.concat(j.data.items);
                                });
                                setVisibleDirtyCount(function (prev) {
                                    return prev + j.data.items.length;
                                });
                                if (!j.data.hasMore || (loadedCount + j.data.items.length) >= total) {
                                    setHasMoreDirty(false);
                                }
                            }
                        }
                        else {
                            setHasMoreDirty(false);
                        }
                    }
                    catch (e) {
                        setLoadingMoreDirty(false);
                    }
                };
                fetchWithFallback();
            };
            React.useEffect(function () {
                var el = containerRef && containerRef.current;
                if (!el)
                    return;
                var onScroll = function () {
                    var activeBtn = el.querySelector(".dsh-github-tab-btn.active");
                    var activeTab = activeBtn ? activeBtn.getAttribute("data-tab-btn") : (el.getAttribute("data-active-tab") || "git");
                    var threshold = 120;
                    if (el.scrollHeight - el.scrollTop - el.clientHeight < threshold) {
                        if (activeTab === "git") {
                            loadMoreCommits();
                        }
                        else if (activeTab === "dirty") {
                            loadMoreDirtyFiles();
                        }
                    }
                };
                // 监听鼠标滚轮向下滚事件（即使用户收起卡片导致内容暂未撑出滚动条，只要向下滚轮也能瞬间响应！）
                var onWheel = function (e) {
                    if (!e || e.deltaY <= 0)
                        return;
                    var activeBtn = el.querySelector(".dsh-github-tab-btn.active");
                    var activeTab = activeBtn ? activeBtn.getAttribute("data-tab-btn") : (el.getAttribute("data-active-tab") || "git");
                    var threshold = 120;
                    var atBottom = (el.scrollHeight - el.scrollTop - el.clientHeight < threshold) || (el.scrollHeight <= el.clientHeight + 40);
                    if (atBottom) {
                        if (activeTab === "git") {
                            loadMoreCommits();
                        }
                        else if (activeTab === "dirty") {
                            loadMoreDirtyFiles();
                        }
                    }
                };
                el.addEventListener("scroll", onScroll, { passive: true });
                el.addEventListener("wheel", onWheel, { passive: true });
                return function () {
                    el.removeEventListener("scroll", onScroll);
                    el.removeEventListener("wheel", onWheel);
                };
            }, [data, extraCommits, loadingMore, hasMoreCommits, cwd, extraDirtyFiles, loadingMoreDirty, hasMoreDirty, visibleDirtyCount, headerCardsVisible]);
            // 视口充盈智能自适应：当用户点击收起卡片导致页面变矮、未能产生滚动条时，自动将后续条目拉取补齐！
            React.useEffect(function () {
                var el = containerRef && containerRef.current;
                if (!el)
                    return;
                var timer = setTimeout(function () {
                    var activeBtn = el.querySelector(".dsh-github-tab-btn.active");
                    var activeTab = activeBtn ? activeBtn.getAttribute("data-tab-btn") : (el.getAttribute("data-active-tab") || "git");
                    if (activeTab === "dirty") {
                        var total = data?.gitStatus?.dirtyCount || 0;
                        var hasMore = total > 0 && visibleDirtyCount < total;
                        if (hasMore && el.scrollHeight <= el.clientHeight + 60) {
                            loadMoreDirtyFiles();
                        }
                    }
                }, 120);
                return function () { clearTimeout(timer); };
            }, [headerCardsVisible, visibleDirtyCount, data]);
            React.useEffect(() => {
                var onOpenAbout = () => {
                    var el = containerRef && containerRef.current;
                    if (!el)
                        return;
                    var rect = el.getBoundingClientRect();
                    var visible = rect.width > 0 && rect.height > 0;
                    if (visible)
                        setAboutModalOpen(true);
                };
                var onOpenProxy = () => {
                    var el = containerRef && containerRef.current;
                    if (!el)
                        return;
                    var rect = el.getBoundingClientRect();
                    var visible = rect.width > 0 && rect.height > 0;
                    if (visible) {
                        setRightbarModalSection("proxy");
                        setRightbarModalOpen(true);
                    }
                };
                window.addEventListener("dsh-github-open-about", onOpenAbout);
                window.addEventListener("dsh-github-open-proxy", onOpenProxy);
                return () => {
                    window.removeEventListener("dsh-github-open-about", onOpenAbout);
                    window.removeEventListener("dsh-github-open-proxy", onOpenProxy);
                };
            }, []);
            var openRightbarSettings = (section) => {
                if (section) {
                    setRightbarModalSection(section);
                }
                else {
                    setRightbarModalSection("sync");
                }
                setRightbarModalOpen(true);
            };
            var h = React.createElement;
            var toastEl = toastMsg
                ? h("div", {
                    style: {
                        padding: "8px 12px",
                        marginBottom: "10px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        background: toastMsg.startsWith("✅") ? "rgba(46, 160, 67, 0.15)" : "rgba(207, 34, 46, 0.15)",
                        color: toastMsg.startsWith("✅") ? "var(--dsw-alias-state-success, #2ea043)" : "var(--dsw-alias-state-error-primary, #cf222e)",
                        border: "1px solid " + (toastMsg.startsWith("✅") ? "rgba(46, 160, 67, 0.35)" : "rgba(207, 34, 46, 0.35)"),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "8px",
                    },
                }, h("span", null, toastMsg), h("button", { onClick: () => setToastMsg(null), style: { background: "none", border: "none", cursor: "pointer", color: "inherit", fontSize: "14px" } }, "✕"))
                : null;
            var openFileInDsh = function (f) {
                if (!f || !f.path)
                    return;
                try {
                    var rel = f.path.replace(/\\/g, "/");
                    var address = "dsh-resource://file/session/" + encodeURIComponent(sessionId || "") + "/" + encodeURIComponent(rel);
                    var activeCtx = props?.ctx || currentPluginCtx;
                    if (activeCtx && activeCtx.sidebarRight && typeof activeCtx.sidebarRight.openResource === "function") {
                        activeCtx.sidebarRight.openResource(address);
                    }
                    else {
                        window.dispatchEvent(new CustomEvent("dsh-open-file", { detail: { path: f.path, cwd: cwd, sessionId: sessionId } }));
                    }
                }
                catch (e) { }
            };
            return h("div", { className: "dsh-github-rightbar-container gh2-theme", ref: containerRef }, toastEl, ...renderGithubRepoView(h, data ? Object.assign({}, data, { mentioned: mentioned, onMentionedFilter: (f) => setMentioned((prev) => Object.assign({}, prev, { filter: f })), onMentionedMore: () => loadMentioned({ append: true }) }) : data, loading, error, () => loadData(true), true, updateInfo, syncStatus, lastSyncedAt, openRightbarSettings, cwd, (c) => setSelectedCommit(c), {
                extraCommits: extraCommits,
                loadingMore: loadingMore,
                hasMore: hasMoreCommits,
                onLoadMore: loadMoreCommits,
            }, showToast, () => setHelpModalOpen(true), openFileInDsh, {
                visibleCount: visibleDirtyCount,
                extraDirtyFiles: extraDirtyFiles,
                loadingMore: loadingMoreDirty,
                hasMore: hasMoreDirty,
                onLoadMore: loadMoreDirtyFiles,
            }, activeDiffFile, (f) => setActiveDiffFile(f), () => setActiveDiffFile(null), openFileInDsh, headerCardsVisible, toggleHeaderCards, (n) => setReviewPrNumber(n)), h(GlobalSyncSettingsModal, {
                isOpen: aboutModalOpen,
                initialSection: "about",
                onClose: () => setAboutModalOpen(false),
                currentSettings: syncSettings,
                onSave: function () { },
                onClearCache: function () { setData(null); },
            }), h(GlobalSyncSettingsModal, {
                isOpen: rightbarModalOpen,
                initialSection: rightbarModalSection,
                onClose: () => setRightbarModalOpen(false),
                currentSettings: syncSettings,
                onSave: function (newSettings) { setSyncSettings(newSettings); },
                onClearCache: function () {
                    setData(null);
                    setLastSyncedAt(0);
                    setSyncStatus("loading");
                },
            }), h(GithubHelpModal, {
                isOpen: helpModalOpen,
                onClose: () => setHelpModalOpen(false),
            }), selectedCommit
                ? h(CommitDetailModal, {
                    commit: selectedCommit,
                    onClose: function () { setSelectedCommit(null); },
                    cwd: cwd,
                })
                : null, h(PrReviewModal, {
                isOpen: reviewPrNumber !== null,
                prNumber: reviewPrNumber,
                cwd: cwd,
                onClose: function () { setReviewPrNumber(null); },
                onRefresh: function () { loadData(true); },
                showToast: showToast,
            }));
        }
        // 2. 右侧栏 Tab 标题组件
        function GithubRightbarTitle() {
            var h = React.createElement;
            return h("span", { style: { display: "flex", alignItems: "center", gap: "6px" } }, renderOctocat(15, "#58a6ff"), h("span", null, "GitHub"));
        }
        // 3. 右侧栏“开始”引导页的大图标 (Artwork)
        function GithubArtwork() {
            return renderOctocatBadge(32);
        }
        // 4. 左侧栏的全局入口已移除（2026-10 改造）：入口改为会话 PR 浮窗 + 右列面板，
        //    全局驾驶舱整体下线。这里保留注释是为了让下一次读到「为什么没有 panellist」
        //    的人知道那是主动删除，而不是漏注册。
        var inject = ["slots", "sidebarRightTabs", "sessions", "layout", "theme", "sidebarRight"];
        

    function apply(ctx) {
            currentPluginCtx = ctx;
            if (typeof window !== "undefined" && window.document) {
                var sweep = () => {
                    document.querySelectorAll(".dsh-github-right-card, .dsh-github-mounted-card, #dsh-github-floating-drawer").forEach((el) => el.remove());
                };
                sweep();
                setTimeout(sweep, 300);
                setTimeout(sweep, 1500);
            }
            if (ctx.effect) {
                ctx.effect(() => injectStyles(), "github: styles");
                ctx.effect(() => injectSessionPrStyles(), "github: session pr styles");
                ctx.effect(() => () => stopSessionPrPollingExport(), "github: session pr polling");
                ctx.effect(() => watchSessionPrVisibility(), "github: session pr visibility");
                ctx.effect(() => () => resetSessionPrModuleState(), "github: session pr teardown");
            }
            else {
                injectStyles();
                injectSessionPrStyles();
            }
            if (ctx.on) {
                ctx.on("theme/change", () => {
                    injectStyles();
                    injectSessionPrStyles();
                });
            }
            // 链接优先落到 DSH 内部浏览器标签（副作用可重复安装：同一函数引用只登记一次）
            installSmartLinkHandler();
            if (ctx.sidebarRightTabs && typeof ctx.sidebarRightTabs.register === "function") {
                ctx.effect(() => {
                    return ctx.sidebarRightTabs.register({
                        id: "dsh-github-flow",
                        kind: "github",
                        priority: "plugin",
                        title: () => "GitHub 仓库",
                        guide: [
                            {
                                id: "workspace.github",
                                commandId: "workspace.github",
                                order: 40,
                                title: () => "GitHub 仓库",
                                description: () => "查看与操作当前工作区目录下的 GitHub 仓库（由 dsh-github-flow 插件提供）",
                                icon: GithubArtwork,
                            },
                        ],
                    });
                }, "github: sidebar right tab definition");
                // 会话 PR 面板：与「仓库面板」并列的第二种 tab 类型。
                // 它只服务浮窗里点进来的那一条 PR，不带仓库级仪表盘。
                ctx.effect(() => {
                    return ctx.sidebarRightTabs.register({
                        id: "github-pr",
                        kind: "github-pr",
                        priority: "plugin",
                        title: () => "PR",
                        guide: [],
                    });
                }, "github: session pr tab definition");
            }
            /** 读当前 tab 的 params.number（读不到就当 0 = 仓库面板） */
            function readTabNumber(props) {
                try {
                    var info = typeof (props && props.useTabInfo) === "function" ? props.useTabInfo() : null;
                    var params = info && info.tab && info.tab.navigation && info.tab.navigation.params;
                    return (params && Number(params.number)) || 0;
                }
                catch (e) {
                    return 0;
                }
            }
            /**
             * 一个 tab 类型，两种内容：
             * - params.number 存在 → 会话 PR 面板（从浮窗/PR 链接点进来）
             * - 否则 → 仓库面板（左侧栏的历史入口）
             *
             * 为什么合并：单独注册的 github-pr 类型在部分页面状态下会 inactive，
             * 表现为「标签在、内容空白」。用工作区正在用的 github 类型承载，不依赖二次注册。
             */
            function GithubTabBody(props) {
                var number = readTabNumber(props);
                return React.createElement(number ? SessionPrPanel : GithubRightbarBody, number ? Object.assign({}, props, { onOpenUrl: openUrlSmartOrFallback }) : props);
            }
            function GithubTabTitleDef(props) {
                var number = readTabNumber(props);
                return React.createElement(number ? SessionPrTabTitle : GithubRightbarTitle, props);
            }
            if (ctx.slots) {
                ctx.slots.inject("sidebar.right.pane.tab", () => {
                    return ctx.slots.register({
                        name: "sidebar.right.pane.tab",
                        key: "dsh-github-flow",
                    }, GithubTabBody);
                });
                ctx.slots.inject("sidebar.right.pane.tab.title", () => {
                    return ctx.slots.register({
                        name: "sidebar.right.pane.tab.title",
                        key: "dsh-github-flow",
                    }, GithubTabTitleDef);
                });
                // ---- 会话 PR：浮窗 + 右列面板（本次改造的全部前端入口） ----
                ctx.slots.inject("shell.overlay", () => {
                    return ctx.slots.register({
                        name: "shell.overlay",
                        id: "github-session-pr",
                        order: 70,
                        label: "本会话 PR",
                    }, (props) => React.createElement(SessionPrOverlay, Object.assign({}, props, { onOpenPr: openSessionPrTab, onOpenUrl: openUrlSmartOrFallback })));
                });
                ctx.slots.inject("sidebar.right.pane.tab", () => {
                    return ctx.slots.register({
                        name: "sidebar.right.pane.tab",
                        key: "github-pr",
                    }, (props) => React.createElement(SessionPrPanel, Object.assign({}, props, { onOpenUrl: openUrlSmartOrFallback })));
                });
                ctx.slots.inject("sidebar.right.pane.tab.title", () => {
                    return ctx.slots.register({
                        name: "sidebar.right.pane.tab.title",
                        key: "github-pr",
                    }, SessionPrTabTitle);
                });
            }
        }
        exports.apply = apply;
        exports.inject = inject;
        exports.name = "dsh-github-flow";
        return module.exports;
    }
});
