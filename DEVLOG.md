# DEVLOG

## 关键事实

- 项目名:`szhopc-site`;生产主域:`business.szhopc.cn`;用途是 szh 的个人 IP / 作品集 / build in public hub,信任向,不承接商单落地页。
- 技术栈定为 Next.js App Router + TypeScript + Tailwind CSS,使用 `output: "export"` 做纯静态 SSG。
- 字体使用系统字体栈,不使用 `next/font/google`,避免受限网络下构建失败。
- 页面数据拆到 `src/config/site.ts`、`src/data/works.ts`、`src/data/updates.ts`;首版只包含 Hero、作品集、Build in public、About、联系/关注。
- 作品首批外链:校园需求板 `https://xuqiu.szhopc.cn`;生态环境英语词汇 App `https://vocab.17szh.cn`。
- GitHub 仓库:`https://github.com/saiziheng/szhopc-site`;Vercel 项目:`szh1/szhopc-site`;首个手动生产部署:`dpl_4kwidAWcfehyTwnEh9yNdZCyeT2n`,后续 GitHub push 会触发自动 production deploy,最新部署以 `npx vercel ls szhopc-site --scope szh1` 为准。
- 阿里云 DNS 新增两条记录:`@ A 76.76.21.21 TTL 600` 与 `www CNAME cname.vercel-dns.com TTL 600`。

## 选型理由

- 个人 hub 只需要可信、轻、可维护的静态展示,不引入后端、数据库或 CMS。
- App Router + TypeScript + Tailwind 与已有 vibe coding 项目同栈,后续交给 Codex / cc 都容易接手。
- 把 tagline、作品和时间线抽成数据文件,是为了后续更新内容时少碰页面结构。
- 页面优先移动端首屏体验,让陌生人打开后先知道 szh 是谁、做过什么、如何继续看。

## 卡点与解法

- 联系方式既要可联系又要脱敏:首版展示 GitHub 公开主页、抖音账号状态和混淆邮箱,不放手机号。
- OPC 身份表达容易抽象:首版只写“学生版 OPC 实践样本”,聚焦需求发现、原型开发、内容传播、客户交付和复盘沉淀的最小闭环。
- DNS 与部署会影响生产域名:执行前先查询 `szhopc.cn` 现有记录,有冲突不覆盖,以 Vercel inspect 输出为准。
- Codex 沙箱读不到刚刷新的 GitHub keyring,导致 `gh auth status` 一度误报 token invalid;用本机权限确认 keyring 登录态后继续创建仓库。
- 本地 Next build 在沙箱中因 Turbopack 端口绑定受限失败;用本机权限重跑通过,并补 `turbopack.root` 避免 `/Users/mac/package-lock.json` 干扰 workspace root 判断。
- Vercel apex 证书生效有几十秒窗口;`curl` 与 Playwright 首次验证曾遇到证书 SAN 未更新,等待后复测通过。
- `npm audit --omit=dev` 当前报告 2 个 moderate,来源为 Next 内部依赖 PostCSS;当前稳定版 `next@16.2.6` 尚无非破坏性升级路径,未执行 `npm audit fix --force`。

## 验证证据

- 本地 `npm run typecheck`:通过。
- 本地 `npm run lint`:通过。
- 本地 `npm run build`:通过,静态路由 `/` 与 `/_not-found` 生成成功。
- 本地 Playwright 移动端 smoke:`npm run test:e2e` 通过,覆盖 Hero、作品集 CTA、校园需求板外链和横向溢出。
- 生产 `curl -I https://szhopc.cn`:HTTP/2 200,证书校验通过。
- 生产 `curl -I https://www.szhopc.cn`:HTTP/2 200,证书校验通过。
- 生产 Playwright 移动端 smoke:`PLAYWRIGHT_BASE_URL=https://szhopc.cn npm run test:e2e` 通过,确认首屏 Hero、作品集卡片与 `https://xuqiu.szhopc.cn` 外链。
- Vercel inspect:production deployment 状态 Ready;alias 包含 `https://szhopc.cn`、`https://www.szhopc.cn` 和 `https://szhopc-site.vercel.app`。

## 内容种子

- 选题角度:我给自己搭了一个个人 IP hub,它不是简历,而是 AI 协作交付现场。
- 3 秒 Hook:一个大学生的网站,最重要的不是好看,而是让真实项目被看见。
- 视频主线:从域名分工、作品卡片、build in public 时间线到工程黑箱,展示一次 AI 协作搭站全过程。
- 结尾 CTA:持续更新 `business.szhopc.cn`,把每个小作品都变成可验证的信任资产。

## 2026-05-27 域名迁移

- 按 szh 指令,本站 canonical / 生产主域从 `szhopc.cn` 迁到 `business.szhopc.cn`。
- `szhopc.cn` / `www.szhopc.cn` 从 Vercel 项目域名中解绑,根域暂不放 szh 站点内容。

## 黑匣子自评

1. 记录低摩擦度:中等偏低摩擦。DEVLOG 的 5 段结构足够轻,适合在本地验证、部署、DNS 完成后集中补证据;不适合每个 CLI 小波动都展开记录。
2. 是否产出可复用经验与内容种子:有。可复用经验包括“个人 IP hub 与商单域名分离”“Next 静态站禁用 Google Font 依赖”“DNS 写入前先查空记录”“沙箱 keyring 与本机 keyring 可能不一致”。内容种子可直接转成 build in public 视频。
3. 漏记与噪音:漏记了更细的视觉取舍,例如为什么首屏使用暗色工作台背景、为什么作品卡片只保留两张。噪音主要是 Vercel CLI 下载时的 Node engine warning、Next telemetry 提示和 Playwright 的 Node deprecation warning,这些保留结论即可。
4. 模板改进建议:验收包可以固定增加“证书/DNS 生效窗口”一栏,把第一次失败和最终通过分开记,避免 cc 误判为未完成。
