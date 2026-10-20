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

export interface PrReviewModalProps {
  isOpen: boolean;
  cwd?: string;
  prNumber: number | null;
  onClose: () => void;
  onRefresh?: () => void;
  showToast?: (msg: string) => void;
}

type ReviewEvent = 'APPROVE' | 'REQUEST_CHANGES' | 'COMMENT';

declare const React: any;

/** 把一个 unified diff 按 `diff --git` 拆成单文件块 */
export function splitDiffByFile(patch: string): Array<{ path: string; text: string; additions: number; deletions: number }> {
  var text = String(patch || '');
  if (!text) return [];
  var parts = text.split(/^diff --git /m).filter(function (p) { return p.trim() !== ''; });
  return parts.map(function (body) {
    var full = 'diff --git ' + body;
    var nameMatch = body.match(/a\/(\S+) b\/(\S+)/);
    var filePath = nameMatch ? nameMatch[2] : (body.split('\n')[0] || '未知文件');
    var additions = 0;
    var deletions = 0;
    full.split('\n').forEach(function (line) {
      if (line.startsWith('+') && !line.startsWith('+++')) additions += 1;
      else if (line.startsWith('-') && !line.startsWith('---')) deletions += 1;
    });
    return { path: filePath, text: full, additions: additions, deletions: deletions };
  });
}

/** 行内元素：`code`、**bold**、[text](url) */
function renderInline(h: any, text: string, keyBase: string) {
  var nodes: any[] = [];
  var re = /(`[^`]+`)|(\*\*[^*]+\*\*)|(!\[[^\]]*\]\([^)]+\))|(\[[^\]]+\]\([^)]+\))/g;
  var last = 0;
  var m: RegExpExecArray | null;
  var i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    var token = m[0];
    if (token.charAt(0) === '`') {
      nodes.push(h('code', { key: keyBase + '-' + i, style: { fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: '.92em', padding: '1px 4px', borderRadius: '4px', background: 'rgba(127,127,127,.16)' } }, token.slice(1, -1)));
    } else if (token.slice(0, 2) === '**') {
      nodes.push(h('strong', { key: keyBase + '-' + i }, token.slice(2, -2)));
    } else if (token.slice(0, 2) === '![') {
      // 图片：PR 正文里的截图很常见，直接渲染；宽度跟容器走
      var im = token.match(/!\[([^\]]*)\]\(([^)]+)\)/);
      if (im) {
        nodes.push(h('img', {
          key: keyBase + '-' + i,
          src: im[2],
          alt: im[1] || '',
          loading: 'lazy',
          style: { maxWidth: '100%', borderRadius: '8px', margin: '4px 0', display: 'block', border: '1px solid rgba(127,127,127,.2)' },
        }));
      }
    } else {
      var lm = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (lm) nodes.push(h('a', { key: keyBase + '-' + i, href: lm[2], target: '_blank', style: { color: 'var(--dsw-alias-link,#0969da)' } }, lm[1]));
    }
    last = m.index + token.length;
    i += 1;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/** markdown-lite：标题、无序/有序列表、围栏代码、段落 */
export function renderMarkdownLite(h: any, source: string) {
  var lines = String(source || '').replace(/\r\n/g, '\n').split('\n');
  var out: any[] = [];
  var i = 0;
  var key = 0;
  var para: string[] = [];

  var flushPara = function () {
    if (para.length === 0) return;
    var text = para.join(' ').trim();
    if (text) out.push(h('p', { key: 'p' + key++, style: { margin: '0 0 10px', lineHeight: '1.65' } }, renderInline(h, text, 'pi' + key)));
    para = [];
  };

  while (i < lines.length) {
    var line = lines[i];
    if (/^\s*```/.test(line)) {
      flushPara();
      var buf: string[] = [];
      i += 1;
      while (i < lines.length && !/^\s*```/.test(lines[i])) { buf.push(lines[i]); i += 1; }
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
      var parseRow = function (row: string) {
        return row.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(function (c) { return c.trim(); });
      };
      var head = parseRow(line);
      i += 2;
      var bodyRows: string[][] = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) { bodyRows.push(parseRow(lines[i])); i += 1; }
      out.push(h('div', { key: 'tbl' + key++, style: { overflowX: 'auto', margin: '0 0 12px' } },
        h('table', { style: { borderCollapse: 'collapse', width: '100%', fontSize: '12px' } },
          h('thead', null, h('tr', null, head.map(function (cell, ci) {
            return h('th', { key: ci, style: { textAlign: 'left', padding: '5px 8px', borderBottom: '1px solid rgba(127,127,127,.3)', fontWeight: 600, whiteSpace: 'nowrap' } }, renderInline(h, cell, 'th' + ci));
          }))),
          h('tbody', null, bodyRows.map(function (row, ri) {
            return h('tr', { key: ri }, row.map(function (cell, ci) {
              return h('td', { key: ci, style: { padding: '5px 8px', borderBottom: '1px solid rgba(127,127,127,.14)', verticalAlign: 'top' } }, renderInline(h, cell, 'td' + ri + '-' + ci));
            }));
          }))
        )
      ));
      continue;
    }
    if (/^\s*([-*]|\d+\.)\s+/.test(line)) {
      flushPara();
      var ordered = /^\s*\d+\./.test(line);
      var items: string[] = [];
      while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*([-*]|\d+\.)\s+/, ''));
        i += 1;
      }
      out.push(h(ordered ? 'ol' : 'ul', { key: 'l' + key++, style: { margin: '0 0 12px', paddingLeft: '22px', lineHeight: '1.7' } },
        items.map(function (t, idx) { return h('li', { key: idx }, renderInline(h, t, 'li' + idx)); })));
      continue;
    }
    if (line.trim() === '') { flushPara(); i += 1; continue; }
    para.push(line.trim());
    i += 1;
  }
  flushPara();
  return out;
}

export function PrReviewModal(props: PrReviewModalProps) {
  var h = React.createElement;
  var isOpen = Boolean(props && props.isOpen);
  var prNumber = props ? props.prNumber : null;
  var cwd = props ? props.cwd : undefined;
  var onClose = (props && props.onClose) || function () {};
  var onRefresh = (props && props.onRefresh) || function () {};
  var showToast = (props && props.showToast) || function () {};

  var [state, setState] = React.useState({ loading: false, error: null as string | null, detail: null as any });
  var [comment, setComment] = React.useState('');
  var [pendingEvent, setPendingEvent] = React.useState(null as ReviewEvent | null);
  var [submitting, setSubmitting] = React.useState(false);
  var [showDiff, setShowDiff] = React.useState(false);

  React.useEffect(function () {
    if (!isOpen || !prNumber) return;
    var cancelled = false;
    setState({ loading: true, error: null, detail: null });
    setComment('');
    setPendingEvent(null);
    setShowDiff(false);
    var qs = '/api/github/pr-detail?number=' + encodeURIComponent(String(prNumber)) + (cwd ? '&cwd=' + encodeURIComponent(cwd) : '');
    fetch(qs)
      .then(function (r) { return r.json(); })
      .then(function (json: any) {
        if (cancelled) return;
        if (!json || !json.ok) { setState({ loading: false, error: (json && json.error) || '读取 PR 详情失败', detail: null }); return; }
        setState({ loading: false, error: null, detail: json.data });
      })
      .catch(function (err: any) {
        if (cancelled) return;
        setState({ loading: false, error: (err && err.message) || String(err), detail: null });
      });
    return function () { cancelled = true; };
  }, [isOpen, prNumber, cwd]);

  if (!isOpen || !prNumber) return null;

  var submit = function (event: ReviewEvent) {
    if (pendingEvent !== event) { setPendingEvent(event); return; }
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
      .then(function (json: any) {
        setSubmitting(false);
        if (!json || !json.ok) { showToast('❌ ' + ((json && json.error) || '提交评审失败')); setPendingEvent(null); return; }
        showToast('✅ ' + ((json.data && json.data.message) || '评审已提交'));
        onRefresh();
        onClose();
      })
      .catch(function (err: any) {
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

  var reviews: any[] = (pr && Array.isArray(pr.reviews)) ? pr.reviews : [];
  var comments: any[] = (pr && Array.isArray(pr.comments)) ? pr.comments : [];
  var commits: any[] = (pr && Array.isArray(pr.commits)) ? pr.commits : [];
  var checks: any[] = (pr && Array.isArray(pr.statusCheckRollup)) ? pr.statusCheckRollup : [];
  var checksPass = checks.filter(function (c) { return String(c.conclusion || '').toLowerCase() === 'success'; }).length;
  var checksFail = checks.filter(function (c) { var s = String(c.conclusion || '').toLowerCase(); return s === 'failure' || s === 'timed_out'; }).length;

  var header = h('div', {
    style: { display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderBottom: line, flexShrink: 0 },
  },
    h('span', {
      style: { display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 10px', borderRadius: '999px', background: pillBg, color: pillFg, fontSize: '12px', fontWeight: 600, flexShrink: 0 },
    }, '◆', pillText),
    h('span', { style: Object.assign({ fontSize: '12px', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }, dim) },
      (pr && pr.baseRefName && pr.headRefName) ? pr.headRefName + ' → ' + pr.baseRefName : 'Pull request',
      ' · #', String(prNumber)),
    h('span', { style: { flex: 1 } }),
    pr && pr.url
      ? h('button', {
          className: 'gh2-icon-btn',
          title: '在浏览器打开',
          onClick: function () { window.open(pr.url, '_blank', 'noopener,noreferrer'); },
        }, '↗')
      : null,
    h('button', { className: 'gh2-icon-btn', title: '关闭', onClick: onClose }, '✕')
  );

  var mainCol: any[] = [];
  if (state.loading) {
    mainCol.push(h('div', { key: 'l', style: Object.assign({ padding: '32px 20px', fontSize: '13px' }, dim) }, '正在读取 PR 详情…'));
  } else if (state.error) {
    mainCol.push(h('div', { key: 'e', style: { padding: '32px 20px', fontSize: '13px', color: 'var(--dsw-alias-state-error-primary,#cf222e)' } }, state.error));
  } else if (pr) {
    mainCol.push(h('div', { key: 'title', style: Object.assign({ padding: '16px 20px 4px', fontSize: '20px', fontWeight: 600, lineHeight: '1.35' }, textStyle) }, pr.title || ''));
    mainCol.push(h('div', {
      key: 'author',
      style: Object.assign({ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 20px 14px', fontSize: '12px', flexWrap: 'wrap' }, dim),
    },
      h('span', {
        style: { width: '20px', height: '20px', borderRadius: '999px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(127,127,127,.2)', fontSize: '11px', fontWeight: 600 },
      }, String((pr.author && pr.author.login) || '?').slice(0, 1).toUpperCase()),
      h('span', { style: { color: 'var(--dsw-alias-label-primary, #1f2328)', fontWeight: 500 } }, (pr.author && pr.author.login) || '未知作者'),
      h('span', null, '提交于 ' + (pr.createdAt ? String(pr.createdAt).slice(0, 10) : '—')),
      pr.reviewDecision ? h('span', { style: { padding: '1px 7px', borderRadius: '999px', background: 'rgba(127,127,127,.16)' } }, String(pr.reviewDecision)) : null
    ));

    mainCol.push(h('div', { key: 'body', style: Object.assign({ padding: '0 20px 8px', fontSize: '13px', lineHeight: '1.7' }, textStyle) },
      pr.body && String(pr.body).trim()
        ? renderMarkdownLite(h, pr.body)
        : h('div', { style: Object.assign({ fontSize: '12px' }, dim) }, '（没有正文）')));

    mainCol.push(h('div', { key: 'diff', style: { padding: '8px 20px 4px' } },
      h('button', { className: 'gh2-quick-btn', onClick: function () { setShowDiff(!showDiff); } },
        showDiff ? '收起改动' : '查看 ' + files.length + ' 个文件的改动'),
      showDiff
        ? h('div', { style: { marginTop: '10px' } }, files.map(function (f: any, i: number) {
            return h('details', { key: f.path + i, style: { marginBottom: '6px', borderTop: i === 0 ? 'none' : line, paddingTop: '6px' } },
              h('summary', { style: { cursor: 'pointer', fontSize: '12px', fontFamily: 'ui-monospace, monospace' } },
                f.path + '  ',
                h('span', { style: { color: '#2ea043' } }, '+' + f.additions), ' ',
                h('span', { style: { color: '#f85149' } }, '-' + f.deletions)),
              h('pre', { style: { margin: '6px 0 0', padding: '8px', maxHeight: '260px', overflow: 'auto', background: 'rgba(127,127,127,.1)', borderRadius: '6px', fontSize: '11px', lineHeight: '1.5', whiteSpace: 'pre-wrap' } }, f.text));
          }))
        : null
    ));

    mainCol.push(h('div', { key: 'activity', style: { padding: '14px 20px 20px', borderTop: line, marginTop: '10px' } },
      h('div', { style: Object.assign({ fontSize: '13px', fontWeight: 600, marginBottom: '8px' }, textStyle) }, 'Activity'),
      h('div', { style: Object.assign({ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px' }, dim) },
        commits.length ? h('div', null, '◦ ' + commits.length + ' 个提交') : null,
        pr.createdAt ? h('div', null, '◦ ' + ((pr.author && pr.author.login) || '某人') + ' 创建于 ' + String(pr.createdAt).slice(0, 10)) : null,
        reviews.map(function (rv: any, i: number) {
          var st = String(rv.state || '').toUpperCase();
          var label = st === 'APPROVED' ? '批准' : st === 'CHANGES_REQUESTED' ? '请求修改' : st === 'COMMENTED' ? '评论' : st;
          return h('div', { key: 'rv' + i, style: { display: 'flex', gap: '6px', alignItems: 'baseline' } },
            h('span', null, st === 'APPROVED' ? '✓' : st === 'CHANGES_REQUESTED' ? '✕' : '◦'),
            h('span', { style: { color: 'var(--dsw-alias-label-primary, #1f2328)' } }, (rv.author && rv.author.login) || '某人'),
            h('span', null, label),
            rv.submittedAt ? h('span', { style: { opacity: .7 } }, String(rv.submittedAt).slice(0, 10)) : null);
        }),
        !commits.length && !reviews.length ? h('div', null, '（无活动记录）') : null
      )
    ));
  }

  var sideCol = h('div', {
    style: { width: '236px', flexShrink: 0, borderLeft: line, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '16px', overflow: 'auto' },
  },
    h('div', null,
      h('div', { style: Object.assign({ fontSize: '12px', fontWeight: 600, marginBottom: '6px' }, textStyle) }, 'Changes'),
      h('div', { style: Object.assign({ fontSize: '12px', display: 'flex', gap: '8px', alignItems: 'baseline' }, dim) },
        h('span', null, ((pr && pr.changedFiles) || files.length) + ' 个文件'),
        h('span', { style: { color: '#2ea043' } }, '+' + ((pr && pr.additions) || 0)),
        h('span', { style: { color: '#f85149' } }, '-' + ((pr && pr.deletions) || 0)))),

    h('div', null,
      h('div', { style: Object.assign({ fontSize: '12px', fontWeight: 600, marginBottom: '6px' }, textStyle) }, 'Comments'),
      h('div', { style: Object.assign({ fontSize: '12px' }, dim) }, comments.length + ' 条评论')),

    h('div', null,
      h('div', { style: Object.assign({ fontSize: '12px', fontWeight: 600, marginBottom: '6px' }, textStyle) }, 'Reviewers'),
      reviews.length
        ? h('div', { style: { display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px' } },
            reviews.map(function (rv: any, i: number) {
              var st = String(rv.state || '').toUpperCase();
              var icon = st === 'APPROVED' ? '✓' : st === 'CHANGES_REQUESTED' ? '✕' : '◦';
              var color = st === 'APPROVED' ? '#2ea043' : st === 'CHANGES_REQUESTED' ? '#f85149' : 'inherit';
              return h('div', { key: 'rv2' + i, style: { display: 'flex', gap: '6px' }, title: st },
                h('span', { style: { color: color } }, icon),
                h('span', null, (rv.author && rv.author.login) || '—'));
            }))
        : h('div', { style: Object.assign({ fontSize: '12px' }, dim) }, '暂无评审')),

    h('div', null,
      h('div', { style: Object.assign({ fontSize: '12px', fontWeight: 600, marginBottom: '6px' }, textStyle) }, 'Checks'),
      checks.length
        ? h('div', { style: { fontSize: '12px', display: 'flex', gap: '8px' } },
            h('span', { style: { color: '#2ea043' } }, '✓ ' + checksPass),
            checksFail ? h('span', { style: { color: '#f85149' } }, '✕ ' + checksFail) : null)
        : h('div', { style: Object.assign({ fontSize: '12px' }, dim) }, 'No checks reported')),

    h('div', { style: { marginTop: 'auto', borderTop: line, paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' } },
      h('textarea', {
        value: comment,
        placeholder: '评审说明（请求修改时必填）',
        onChange: function (e: any) { setComment(e.target.value); },
        style: { width: '100%', minHeight: '60px', resize: 'vertical', fontSize: '12px', padding: '7px 9px', borderRadius: '8px', border: line, background: 'transparent', color: 'inherit', outline: 'none' },
      }),
      h('button', {
        className: 'gh2-quick-btn', disabled: submitting,
        style: { textAlign: 'center', background: pendingEvent === 'APPROVE' ? 'rgba(26,127,55,.16)' : 'transparent', borderColor: pendingEvent === 'APPROVE' ? '#2ea043' : undefined },
        onClick: function () { submit('APPROVE'); },
      }, pendingEvent === 'APPROVE' ? '✓ 再点确认批准' : '✓ 批准'),
      h('button', {
        className: 'gh2-quick-btn', disabled: submitting,
        style: { textAlign: 'center', background: pendingEvent === 'REQUEST_CHANGES' ? 'rgba(207,34,46,.14)' : 'transparent', borderColor: pendingEvent === 'REQUEST_CHANGES' ? '#f85149' : undefined },
        onClick: function () { submit('REQUEST_CHANGES'); },
      }, pendingEvent === 'REQUEST_CHANGES' ? '✕ 再点确认请求修改' : '✕ 请求修改'),
      h('button', {
        className: 'gh2-quick-btn', disabled: submitting,
        style: { textAlign: 'center', background: pendingEvent === 'COMMENT' ? 'rgba(9,105,218,.12)' : 'transparent', borderColor: pendingEvent === 'COMMENT' ? '#0969da' : undefined },
        onClick: function () { submit('COMMENT'); },
      }, pendingEvent === 'COMMENT' ? '💬 再点确认发表' : '💬 仅评论')
    )
  );

  var overlayStyle: any = {
    position: 'fixed', inset: 0, zIndex: 2100, display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'rgba(0,0,0,.55)', padding: '24px',
  };
  var cardStyle: any = {
    width: 'min(1040px, 96vw)', maxHeight: '88vh', display: 'flex', flexDirection: 'column',
    background: 'var(--dsw-alias-bg-primary, #ffffff)', color: 'var(--dsw-alias-label-primary, #1f2328)',
    border: line, borderRadius: '14px', boxShadow: '0 24px 60px rgba(0,0,0,.45)', overflow: 'hidden',
  };

  return h('div', { style: overlayStyle, onClick: function (e: any) { if (e.target === e.currentTarget) onClose(); } },
    h('div', { className: 'gh2-theme', style: cardStyle },
      header,
      h('div', { style: { display: 'flex', flex: 1, minHeight: 0 } },
        h('div', { style: { flex: 1, minWidth: 0, overflow: 'auto' } }, mainCol),
        sideCol
      )
    )
  );
}
