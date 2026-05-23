export type Service = {
  slug: string;
  title: string;
  oneLine: string;
  audience: string;
  href: string;
};

export const services: Service[] = [
  {
    slug: "agents",
    title: "智能体定制",
    oneLine: "把你重复的工作压成一个能自己跑的 AI 智能体。",
    audience: "想把流程 / 客服 / 内容生产自动化的人或小团队",
    href: "/agents"
  },
  {
    slug: "vibe-coding",
    title: "vibe coding 承接",
    oneLine: "你想要的网站、Demo、工具,我用 AI 协作做出来并上线。",
    audience: "学生项目 / 个人产品 / 早期验证 / 课程作业升级版",
    href: "/vibe-coding"
  },
  {
    slug: "ai-content",
    title: "AI 协作内容获客",
    oneLine: "帮小生意把朋友圈、视频号、海报做成你直接能发的成品。",
    audience: "餐饮 / 美业 / 教培 / 实体零售小店主",
    href: "/ai-content"
  }
];
