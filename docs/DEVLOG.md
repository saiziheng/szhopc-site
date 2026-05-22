# DEVLOG · redesign v2

## 关键事实

- 分支:`feat/redesign-v2`;本次只做 review 分支,不合并 `main`,不触发生产部署,不改域名/DNS。
- 目标:把 `szhopc.cn` 从深色科技模板感首页,重设为编辑型个人作品集 hub。
- 视觉 token 固定为暖白底 `#FAF8F3`、墨黑字 `#1A1A1A`、单一强调色靛蓝 `#1F3A5F`。
- 字体改为自托管 Noto Serif SC(标题) + Noto Sans SC(正文),woff2 子集放在 `public/fonts/`,通过 `@font-face` 加载。
- 首页改为纯前端 tab 切换,顶部 tab 为:作品 / 公开进展 / 指南 / About / 联系。
- 预留指南结构:`/guides/` 静态列表页 + `/guides/placeholder/` 占位静态详情页;首页指南列表保持空状态。

## 选型理由

- 统一暖白底贯穿全站,用分隔线和排版分区,避免旧版米色、深蓝、白色来回跳。
- 作品改成编辑条目而不是厚卡片,更像作品集/杂志目录,也更适合后续持续追加项目。
- 单一靛蓝只用于 CTA、当前 tab、序号、链接和分隔,把“信任感”放在内容和留白上。
- tab 切换能避免长滚动单页越来越杂,也给后续指南、作品、联系信息留出可扩展结构。
- 指南用静态路由而不是 CMS,保持 `output: "export"` 与 Vercel 静态部署路径一致。

## 卡点与解法

- `output: "export"` 下动态路由必须能静态枚举。空指南列表时,`/guides/[slug]` 构建会报缺少静态参数;解法是保留一个不展示在首页列表里的 `placeholder` 静态路由,只用于证明结构跑通。
- 旧版 hero 图 `public/opc-workbench.svg` 仍含金黄/棕橙残留。新版已移除该素材,并把作品缩略图改成暖白 + 靛蓝的线性图。
- 自托管字体体积不能用完整字体包。复用 `school-site` 已验证的 Noto Serif/Sans SC latin + chinese-simplified woff2 子集,避免在线字体请求。
- 全页截图会捕捉到淡入动效早期状态。将进入动画调得更克制,初始 opacity 从 0.72 开始,减少“内容像未加载完成”的观感。

## 验证证据

- `npm run typecheck`:通过。
- `npm run lint`:通过。
- `npm run build`:通过,生成 `out/`;静态路由包含 `/`、`/guides`、`/guides/placeholder`。
- `npm run test:e2e`:通过,移动端覆盖首屏 Hero、tab 切换、当前 tab 高亮、指南空状态、作品外链和横向溢出。
- 375px 移动端截图已检查:首屏无横向溢出,tab 不挤压,Hero 纯排版可读。
- 搜索验证:`out src public README.md next.config.ts package.json` 中无 `fonts.googleapis`、`gstatic`、`next/font/google`。
- 搜索验证:无旧强调色 `#f7c95f`、`#9c5b20`、`#8f4f17`,无 `linear-gradient`。

## 占位清单

- 抖音入口仍是“个人 IP 账号筹备中”,等 szh 提供公开账号 ID 后再替换。
- 邮箱仍采用脱敏写法 `saizh0329 [at] gmail.com`,没有新增真实手机号。
- 合作入口暂写为“商单交付仍走 17szh.cn”,需要 review 后确认是否保留直链。
- 指南列表为空,占位路由 `/guides/placeholder/` 不进入首页列表。
- 旧根目录 `DEVLOG.md` 仍保留 v1 部署记录;本次 redesign v2 的活跃记录以 `docs/DEVLOG.md` 为准。

## 内容种子

- 选题角度:我把个人主页从“AI 科技模板”改成了一个更像作品集目录的信任入口。
- 3 秒 Hook:个人网站不是越酷越好,它首先要让别人相信你真的做过东西。
- 视频主线:五个杂乱病灶 -> 单色编辑风 -> 自托管字体 -> tab 信息架构 -> 不部署,先交给 review。
- 结尾 CTA:等 review 通过后,再决定是否合并 main 并部署到 `szhopc.cn`。
