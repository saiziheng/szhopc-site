# DEVLOG

## 关键事实

- 项目名:`szhopc-site`;生产主域:`szhopc.cn`;用途是 szh 的个人 IP / 作品集 / build in public hub,信任向,不承接商单落地页。
- 技术栈定为 Next.js App Router + TypeScript + Tailwind CSS,使用 `output: "export"` 做纯静态 SSG。
- 字体使用系统字体栈,不使用 `next/font/google`,避免受限网络下构建失败。
- 页面数据拆到 `src/config/site.ts`、`src/data/works.ts`、`src/data/updates.ts`;首版只包含 Hero、作品集、Build in public、About、联系/关注。
- 作品首批外链:校园需求板 `https://xuqiu.17szh.cn`;生态环境英语词汇 App `https://vocab.17szh.cn`。

## 选型理由

- 个人 hub 只需要可信、轻、可维护的静态展示,不引入后端、数据库或 CMS。
- App Router + TypeScript + Tailwind 与已有 vibe coding 项目同栈,后续交给 Codex / cc 都容易接手。
- 把 tagline、作品和时间线抽成数据文件,是为了后续更新内容时少碰页面结构。
- 页面优先移动端首屏体验,让陌生人打开后先知道 szh 是谁、做过什么、如何继续看。

## 卡点与解法

- 联系方式既要可联系又要脱敏:首版展示 GitHub 公开主页、抖音账号状态和混淆邮箱,不放手机号。
- OPC 身份表达容易抽象:首版只写“学生版 OPC 实践样本”,聚焦需求发现、原型开发、内容传播、客户交付和复盘沉淀的最小闭环。
- DNS 与部署会影响生产域名:执行前先查询 `szhopc.cn` 现有记录,有冲突不覆盖,以 Vercel inspect 输出为准。

## 验证证据

- 待补:本地 `npm run typecheck`。
- 待补:本地 `npm run lint`。
- 待补:本地 `npm run build`。
- 待补:Playwright 移动端 smoke。
- 待补:生产 `curl -I https://szhopc.cn`。

## 内容种子

- 选题角度:我给自己搭了一个个人 IP hub,它不是简历,而是 AI 协作交付现场。
- 3 秒 Hook:一个大学生的网站,最重要的不是好看,而是让真实项目被看见。
- 视频主线:从域名分工、作品卡片、build in public 时间线到工程黑箱,展示一次 AI 协作搭站全过程。
- 结尾 CTA:持续更新 `szhopc.cn`,把每个小作品都变成可验证的信任资产。
