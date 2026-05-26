export type PublicUpdate = {
  date: string;
  title: string;
  body: string;
};

export const updates: PublicUpdate[] = [
  {
    date: "2026-05-21",
    title: "个人 hub v1 搭建",
    body: "把 business.szhopc.cn 定位为个人 IP / 作品集 / build in public 入口,与商单域名 17szh.cn 分开。"
  },
  {
    date: "2026-05-21",
    title: "校园需求板上线为首个作品锚点",
    body: "用一个学校真实场景的小工具验证需求发现、快速开发和公开复盘的闭环。"
  },
  {
    date: "2026-05-21",
    title: "工程黑箱成为固定动作",
    body: "每个项目保留关键事实、选型、卡点、验证证据和内容种子,避免做完就忘。"
  },
  {
    date: "2026-05-21",
    title: "学生版 OPC 继续收敛",
    body: "把身份表达从“会用 AI 工具”收敛到“用 AI 完成需求发现到复盘沉淀的最小闭环”。"
  }
];
