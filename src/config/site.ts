export const TAGLINE = "AI 协作交付现场。";

export const siteConfig = {
  name: "szh OPC",
  domain: "business.szhopc.cn",
  url: "https://business.szhopc.cn",
  description:
    "szh 的个人 IP hub。主站承接企业服务子域和公益矩阵入口——把麻烦的活、缺的工具、缺的内容做出来,把学校里有用的小工具做出来、被看见。"
} as const;

// 旧 fallback,新版联系信息走 src/data/contact.ts
export const contactLinks = [
  {
    label: "抖音",
    value: "个人 IP 账号筹备中",
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
