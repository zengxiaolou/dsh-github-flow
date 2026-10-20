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
/** 把一个 unified diff 按 `diff --git` 拆成单文件块 */
export declare function splitDiffByFile(patch: string): Array<{
    path: string;
    text: string;
    additions: number;
    deletions: number;
}>;
/** markdown-lite：标题、无序/有序列表、围栏代码、段落 */
export declare function renderMarkdownLite(h: any, source: string): any[];
export declare function PrReviewModal(props: PrReviewModalProps): any;
