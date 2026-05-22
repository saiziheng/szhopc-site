// 「小生意 AI 获客内容试点」落地页数据。文案给小老板看,少技术词。

export type PainPoint = { title: string; body: string };

export const painPoints: PainPoint[] = [
  { title: "不会发朋友圈", body: "想发又不知道写什么,发出来像硬广,没人看也没人问。" },
  { title: "短视频没脚本", body: "知道该拍视频,但不会写脚本、开头抓不住人。" },
  { title: "客户咨询不会回", body: "客户来问价问效果,几句话没接住就走了,转化全靠运气。" },
  { title: "活动不会写", body: "想做团购、促销、新品活动,文案憋半天还是没吸引力。" },
  { title: "没有能发出去的展示页", body: "想把生意发给客户看,却没有一个像样、能直接打开的页面。" }
];

export const deliverables = {
  headline: "第一版统一交付:AI 获客内容包",
  note: "不一上来做复杂系统。先给你一版能立刻用的内容,看能不能真的帮你获客。",
  items: [
    "5 条朋友圈文案",
    "3 个短视频脚本",
    "5 个标题 / 开头 Hook",
    "3 条客户咨询回复话术",
    "1 条引导加微信 / 预约 / 到店的话术"
  ],
  more: "需要的话再加:活动页 / 预约页、简单获客网页 Demo。"
} as const;

export const audiences: string[] = [
  "餐饮",
  "直播带货",
  "民宿 / 酒店",
  "饰品 / 服装",
  "二手车",
  "本地服务"
];

export const pilotRules = {
  title: "第一批试点规则",
  intro: "第一批名额不多,免费 / 低价帮你做一版。只需要你愿意:",
  rules: [
    "给真实反馈：好不好用、有没有带来咨询",
    "允许把效果脱敏后做成案例",
    "觉得有用,帮我转介绍 1 个朋友"
  ],
  note: "不是卖课,也不是让你买软件。"
} as const;

export type CasePlaceholder = { tag: string; title: string; status: string };

export const caseStudies = {
  note: "真实试点案例会陆续替换下方样张。",
  placeholders: [
    { tag: "餐饮", title: "团购引流朋友圈 + 到店话术", status: "样张占位" },
    { tag: "直播", title: "直播预热脚本 + 催单话术", status: "样张占位" },
    { tag: "民宿", title: "节假日小红书笔记 + 预订话术", status: "样张占位" }
  ] as CasePlaceholder[]
} as const;
