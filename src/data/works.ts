export type Work = {
  title: string;
  summary: string;
  href: string;
  preview: string;
};

export const works: Work[] = [
  {
    title: "校园需求板",
    summary: "一个给同学收集、排序、补充校园小工具需求的公益验证作品。",
    href: "https://xuqiu.17szh.cn",
    preview: "/work-campus.svg"
  },
  {
    title: "生态环境英语词汇 App",
    summary: "面向生态环境相关课程复习的移动端刷词小应用。",
    href: "https://vocab.17szh.cn",
    preview: "/work-vocab.svg"
  }
];
