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
    title: "智能客服智能体",
    summary: "正在接入第一家企业客户(2026-05-24 启动)。",
    href: null,
    preview: "/case-customer-service.svg",
    category: "enterprise",
    featured: true,
    stats: "启动后会用客户脱敏对话与真实数据公开案例。"
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
