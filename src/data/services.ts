export type ServiceItem = { text: string; tail?: string };

export type Service = {
  slug: string;
  title: string;
  items: ServiceItem[];
  href: string;
};

export const services: Service[] = [
  {
    slug: "agents",
    title: "重复的活让机器干",
    href: "/agents",
    items: [
      { text: "客服咨询 / 同问题答 N 遍", tail: "AI 客服自动答疑" },
      { text: "表格录入 / 文件归档 / 数据整理", tail: "自动化流程" },
      { text: "报表生成 / 内容初稿", tail: "让 AI 跑底稿,你只验收" }
    ]
  },
  {
    slug: "vibe-coding",
    title: "缺的小工具我帮你做",
    href: "/vibe-coding",
    items: [
      { text: "想要内部系统 / 活动页 / 小程序,外包贵又慢" },
      { text: "公众号机器人 / 微信群助理 / 数据看板" },
      { text: "2-3 天到 2 周交付,能用、能改、能上线" }
    ]
  },
  {
    slug: "ai-content",
    title: "内容素材一次给齐",
    href: "/ai-content",
    items: [
      { text: "朋友圈文案 / 海报 / 视频脚本" },
      { text: "公众号文 / 营销邮件 / 抖音文案" },
      { text: "交付的是你直接能发的成品,不是教程" }
    ]
  }
];
