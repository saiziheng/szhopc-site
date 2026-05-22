# 架构全貌(AI 导航)

> 给 AI / 新接手者 30 秒读懂这个项目的地图。**改代码后顺手更新这份**(谁最后动谁刷新)。
> 配套:策略 / 决策的"为什么"看 vault `05-Vibe-Coding/szhopc-site/项目卡片.md`;过程黑匣子看 `docs/DEVLOG.md`。
> 最后更新:2026-05-23(分支 feat/commercial-pivot)

## 一句话架构

szh 商业验证转化中枢(`szhopc.cn`)。Next.js App Router **纯静态导出**(`output: "export"`)、无后端 / 无数据库 / 无 `.env`;首页是移动优先的 12 段商业落地页,承接「熟人点击 -> 免费诊断 -> 试点交付 -> 反馈与转介绍」。内容全部来自 `src/config` + `src/data`,页面为静态 server component。

## 文件树 + 每文件职责(只列关键)

```
src/
├── app/
│   ├── layout.tsx          # 根布局:metadata(title/desc/canonical/OG)、<html lang=zh-CN>
│   ├── page.tsx            # ⭐ 首页主文件:12 段商业落地页组合,静态 server component
│   ├── globals.css         # ⭐ 主题:自托管字体 @font-face + CSS 变量(配色/表面/阴影)+ 动效 + 暗码 @theme
│   └── guides/
│       ├── page.tsx        # /guides 指南列表页(独立路由,当前空)
│       └── [slug]/page.tsx # /guides/<slug> 指南详情页(静态生成,dynamicParams=false)
├── components/
│   ├── before-after.tsx    # Before / After 对比卡
│   ├── icons.tsx           # inline SVG 图标,无外部图标库
│   ├── phone-mockup.tsx    # 手机样张 mockup + 样张列表
│   ├── process-steps.tsx   # 3 步流程组件
│   └── section-heading.tsx # 统一段落标题组件
├── config/
│   └── site.ts             # ⭐ 文案源:TAGLINE、siteConfig、微信占位、contactLinks
└── data/
    ├── works.ts            # 作品列表 works[](title/summary/href/preview)
    ├── offer.ts            # ⭐ 商业落地页数据:痛点/交付/样张/before-after/流程/FAQ/信任点
    ├── updates.ts          # 公开进展 updates[](date/title/body)
    └── guides.ts           # 指南数据 guides[](当前空)+ 占位路由 + getGuideBySlug()
public/
├── fonts/                  # 自托管 Noto Serif/Sans SC woff2 子集(latin + 简中)
├── work-campus.svg         # 作品预览图:校园需求板(占位,待真实截图)
└── work-vocab.svg          # 作品预览图:词汇 App
tests/home.spec.ts          # Playwright 移动端 smoke
```

首页 12 段:`Hero` / 痛点 / 交付包 / 手机样张 / Before-After / 适合对象 / 3 步流程 / 试点规则 / 信任点 / 真实作品证明 / FAQ / 最终微信 CTA。

## 数据流

- **内容**:`src/config/site.ts` + `src/data/offer.ts` + `src/data/works.ts`(纯静态)→ 被 `page.tsx` 和 `src/components/*` 渲染。**无 fetch、无后端、无运行时数据**。
- **首页交互**:锚点跳转、FAQ 原生 `details`、外链作品。无客户端 state,保持静态导出简单。
- **指南路由**:保留独立静态路由 `/guides` 和 `/guides/<slug>`(`generateStaticParams` 从 `guideRoutes` 预生成),但当前商业首页不再把指南作为主导航核心。

## 入口:要改什么 → 看哪

| 我想改 | 去哪 |
|---|---|
| 文案 / tagline / 联系方式 | `src/config/site.ts` |
| 落地页样张 / FAQ / 流程 / before-after | `src/data/offer.ts` |
| 作品条目 | `src/data/works.ts` |
| 公开进展时间线 | `src/data/updates.ts` |
| 新增一篇指南 | `src/data/guides.ts` 加一条 → 自动生成 `/guides/<slug>` |
| 配色 / 字体 / 动效 | `src/app/globals.css`(CSS 变量 `--accent` 等) |
| 页面结构 / Hero / 段落顺序 | `src/app/page.tsx` |
| SEO / OG / 标题 | `src/app/layout.tsx` |

## 视觉令牌(改配色只动这里)

`globals.css` `:root`:暖白底 `--background:#FAF8F3`、墨黑字 `--foreground:#1A1A1A`、单一强调靛蓝 `--accent:#1F3A5F` 不改;新增 `--surface`、`--surface-muted`、`--warm-chip`、`--warm-ink`、`--shadow-*` 做「专业商务·暖白升级」层次。字体:标题 `--font-serif`(Noto Serif SC),正文 `--font-sans`(Noto Sans SC),均自托管。

## 外部依赖 / 服务

- **托管**:Vercel(`szh1/szhopc-site`)。
- **域名**:`szhopc.cn`(apex A `76.76.21.21` + `www` CNAME),阿里云 DNS。
- **无** 数据库 / API / 环境变量 / 第三方运行时依赖。字体本地自托管,不依赖 `next/font/google`。

## 关键约束

- 纯静态:`next.config.ts` 用 `output: "export"`、`images.unoptimized`;不要引入需要服务端的特性。
- 字体严禁在线拉取(`next/font/google`),只用 `public/fonts/` 自托管 woff2。
- 部署 / DNS 归 Codex(硬线),cc 不执行 `vercel` / `aliyun`。

## 关键决策(只放指针,不重复内容)

- 设计方向、重设决策、优化轮次 → vault `05-Vibe-Coding/szhopc-site/项目卡片.md`
- 选型理由 / 卡点 / 验证证据 → 本 repo `docs/DEVLOG.md`
