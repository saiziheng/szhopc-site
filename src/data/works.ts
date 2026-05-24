export type WorkCategory = "enterprise" | "cause" | "learning";

export type Work = {
  title: string;
  summary: string;
  href: string | null;
  preview?: string;
  category: WorkCategory;
  featured?: boolean;
  stats?: string;
};

export const works: Work[] = [
  {
    title: "AI 客服 Agent",
    summary: "南京本地小老板的售前接待。上传 FAQ 文档,7×24 引用源回答。",
    href: null,
    preview: "/case-customer-service.svg",
    category: "enterprise",
    featured: true,
    stats: "2026-05-24 立项,Codex 本地交付中。即将上线 kefu.szhopc.cn。"
  },
  {
    title: "AI 客户跟进 Agent",
    summary: "把微信聊天记录变成客户档案,提醒该跟进谁、生成话术。",
    href: null,
    category: "enterprise",
    stats: "2026-05-24 立项。与客服 Agent 互补:接进来 + 留住人。即将上线 client.szhopc.cn。"
  },
  {
    title: "校园需求板",
    summary: "同学提工具需求,投票补充。",
    href: "https://xuqiu.szhopc.cn",
    category: "cause"
  },
  {
    title: "反馈板",
    summary: "给所有应用的通用反馈工具。",
    href: "https://feedback.szhopc.cn",
    category: "cause"
  },
  {
    title: "毛概助手",
    summary: "8 章+多选题,期末刷题用。",
    href: "https://maogai.szhopc.cn",
    category: "learning"
  },
  {
    title: "生态英语词汇",
    summary: "专业词刷词 App。",
    href: "https://vocab.szhopc.cn",
    category: "learning"
  }
];
