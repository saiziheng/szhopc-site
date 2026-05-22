# 架构全貌(AI 导航)

> 给 AI / 新接手者 30 秒读懂这个项目的地图。**改代码后顺手更新这份**(谁最后动谁刷新)。
> 配套:策略 / 决策的"为什么"看 vault `05-Vibe-Coding/szhopc-site/项目卡片.md`;过程黑匣子看 `docs/DEVLOG.md`。
> 最后更新:2026-05-22(分支 feat/redesign-v2)

## 一句话架构

szh 个人 IP 主域 hub(`szhopc.cn`)。Next.js App Router **纯静态导出**(`output: "export"`)、无后端 / 无数据库 / 无 `.env`;首页是单页 **tab 切换**(纯前端 useState,不真换页),指南另走独立静态路由。内容全部是 `src/config` + `src/data` 里的静态数据。

## 文件树 + 每文件职责(只列关键)

```
src/
├── app/
│   ├── layout.tsx          # 根布局:metadata(title/desc/canonical/OG)、<html lang=zh-CN>
│   ├── page.tsx            # ⭐ 首页主文件("use client"):Hero + tab 导航 + 各 Panel,全部组件都在这
│   ├── globals.css         # ⭐ 主题:自托管字体 @font-face + CSS 变量(配色)+ 动效 + 暗码 @theme
│   └── guides/
│       ├── page.tsx        # /guides 指南列表页(独立路由,当前空)
│       └── [slug]/page.tsx # /guides/<slug> 指南详情页(静态生成,dynamicParams=false)
├── config/
│   └── site.ts             # ⭐ 文案源:TAGLINE、siteConfig(name/domain/url)、contactLinks
└── data/
    ├── works.ts            # 作品列表 works[](title/summary/href/preview)
    ├── updates.ts          # 公开进展 updates[](date/title/body)
    └── guides.ts           # 指南数据 guides[](当前空)+ 占位路由 + getGuideBySlug()
public/
├── fonts/                  # 自托管 Noto Serif/Sans SC woff2 子集(latin + 简中)
├── work-campus.svg         # 作品预览图:校园需求板(占位,待真实截图)
└── work-vocab.svg          # 作品预览图:词汇 App
tests/home.spec.ts          # Playwright 移动端 smoke
```

`page.tsx` 内部组件:`ArrowIcon` / `SectionHeading`(eyebrow+标题+body 的通用段头)/ `WorksPanel` / `UpdatesPanel` / `GuidesPanel` / `AboutPanel` / `ContactPanel` / `panels` 映射 / `Home`(持有 activeTab 状态)。

## 数据流

- **内容**:`src/config/site.ts` + `src/data/*.ts`(纯静态)→ 被 `page.tsx` 的各 Panel `import` 渲染。**无 fetch、无后端、无运行时数据**。
- **首页交互**:`Home` 用 `useState<TabId>` 持有当前 tab → 顶部 nav 按钮 `setActiveTab` → 渲染 `panels[activeTab]`。**纯客户端切换,不改 URL、不刷新**。
- **指南**:首页有一个「指南」tab(展示入口/列表),完整指南是独立路由 `/guides` 和 `/guides/<slug>`(`generateStaticParams` 从 `guideRoutes` 预生成)。

## 入口:要改什么 → 看哪

| 我想改 | 去哪 |
|---|---|
| 文案 / tagline / 联系方式 | `src/config/site.ts` |
| 作品条目 | `src/data/works.ts` |
| 公开进展时间线 | `src/data/updates.ts` |
| 新增一篇指南 | `src/data/guides.ts` 加一条 → 自动生成 `/guides/<slug>` |
| 配色 / 字体 / 动效 | `src/app/globals.css`(CSS 变量 `--accent` 等) |
| 页面结构 / tab / Hero | `src/app/page.tsx` |
| SEO / OG / 标题 | `src/app/layout.tsx` |

## 视觉令牌(改配色只动这里)

`globals.css` `:root`:暖白底 `--background:#FAF8F3`、墨黑字 `--foreground:#1A1A1A`、单一强调靛蓝 `--accent:#1F3A5F`、`--muted` / `--line` / `--line-strong` / `--accent-soft`。字体:标题 `--font-serif`(Noto Serif SC),正文 `--font-sans`(Noto Sans SC),均自托管。

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
