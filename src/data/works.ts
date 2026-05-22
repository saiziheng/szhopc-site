export type Work = {
  title: string;
  summary: string;
  meta: string[];
  href: string;
  preview: string;
};

export const works: Work[] = [
  {
    title: "校园需求板",
    summary: "让全校同学投票,决定我下一个做的校园小工具——需求自己浮出来。",
    meta: ["已上线", "Next.js + Postgres", "学生在用"],
    href: "https://xuqiu.17szh.cn",
    preview: "/work-campus.svg"
  },
  {
    title: "生态环境英语词汇 App",
    summary: "654 个考点词,闪卡 + 测验 + 考前闪过,期末一站刷完。",
    meta: ["已上线", "654 词", "移动端"],
    href: "https://vocab.17szh.cn",
    preview: "/work-vocab.svg"
  }
];
