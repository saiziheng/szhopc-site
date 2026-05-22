export const TAGLINE = "帮小生意用 AI 做获客内容和成交工具";

export const siteConfig = {
  name: "szh",
  domain: "szhopc.cn",
  url: "https://szhopc.cn",
  description:
    "帮餐饮、直播、民宿、饰品、二手车、本地服务等小生意,用 AI 快速做出朋友圈文案、短视频脚本、客户咨询话术和简单获客页面。第一批免费 / 低价试点。"
} as const;

// 微信为主。二维码 / 微信号素材待 szh 提供,先占位,不编造联系方式。
export const wechat = {
  id: "（待补：微信号）",
  qrcode: null as string | null, // 待补：放入 public/ 后填 "/wechat-qr.png"
  note: "加微信请备注「获客试点」"
} as const;

export const contactLinks = [
  {
    label: "微信",
    value: "（待补：微信号）",
    href: null
  },
  {
    label: "GitHub",
    value: "github.com/saiziheng",
    href: "https://github.com/saiziheng"
  },
  {
    label: "邮箱",
    value: "saizh0329 [at] gmail.com",
    href: null
  }
] as const;
