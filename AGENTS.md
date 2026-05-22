# AGENTS.md · szhopc-site

> 本仓库是 szh 由 Obsidian vault 统一管理的 vibe-coding 项目之一。**Codex/cc 在本目录运行时不会自动读 vault**,动手前先主动打开下面的权威上下文。

## 这个项目是什么

个人 IP / 作品集 / build in public hub,生产域 `szhopc.cn`。信任向,**不承接商单落地页**(商单在 `17szh.cn` 体系)。栈:Next.js App Router + TypeScript + Tailwind,静态导出(`output:"export"`),自托管字体、不在线拉取。

## 动手前必读(按序)

1. **策略 / 范围 / 决策 / anti-scope(权威)**:`/Users/mac/Obsidian/saiziheng-vault/05-Vibe-Coding/szhopc-site/项目卡片.md`(+ `验收包.md`)
2. **设计系统底座**(色板 / 字体 / 间距,与公益站同源——但个人站表达层更活):`/Users/mac/Obsidian/saiziheng-vault/07-Knowledge/主题笔记/校园公益工具-共享外壳规范.md` 的 token 部分,仅作同源参考
3. **选型 / 卡点 / 验证 / 验收**:本仓库 `docs/ARCHITECTURE.md`、`docs/DEVLOG.md`(及根 `DEVLOG.md`)
4. **vault 公共规则与当前主线**:`/Users/mac/Obsidian/saiziheng-vault/AGENTS.md`、`AI_STATE.md`

## 硬约束

- **暂停部署中**:默认不部署、不绑域名、不碰 DNS、**不 `git push`**(push 会触发 Vercel production 部署)。本地 commit 即可,挂着等 szh 明确说"部署 / push"。
- 字体严禁在线拉取(`next/font/google`),只用 `public/fonts/` 自托管。
- 不读 / 写 / 外发密钥、Token、`.env`;不删文件。
- 改动后回写 `docs/DEVLOG.md`,并按需同步 vault 项目卡片。
