export const TAGLINE = "帮小生意用 AI 做获客内容和成交工具";

export const siteConfig = {
  name: "szh",
  domain: "szhopc.cn",
  url: "https://szhopc.cn",
  description:
    "帮餐饮、直播、民宿、饰品、二手车、本地服务等小生意,用 AI 快速做出朋友圈文案、短视频脚本、客户咨询话术和简单获客页面。第一批免费 / 低价试点。"
} as const;

// 微信为主。szh 定稿:只展示二维码,不显示微信号文本(扫码即可加)。
export const wechat = {
  id: null as string | null, // szh 选定不显示微信号文本,扫码加好友
  qrcode: "/wechat-qr.png" as string | null,
  note: "加微信请备注「获客试点」"
} as const;

export const contactLinks = [
  {
    label: "微信",
    value: "扫码添加",
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
