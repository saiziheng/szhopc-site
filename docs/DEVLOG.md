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

## 2026-05-22 · 定位/包装/可信优化

- 本轮是叠加优化,不重设视觉:继续保持暖白底、墨黑字、单一靛蓝、编辑型 tab 结构。
- tagline 从“用 AI 协作,一个人交付真实产品”改为“一个人,把想法做成真实上线的产品”,把主张从工具方式前移到结果承诺。
- Hero 在 CTA 下新增 3 个轻量信任锚:`2 · 真实上线作品`、`100% · 可点开访问`、`持续 · build in public`;只使用当前真实可验证事实,不放夸大数字。
- 作品 summary 改成用户收益表达,并新增 `meta: string[]` 渲染工程元信息,用小号灰字补足“已上线 / 技术栈 / 使用状态”等可信细节。
- About 轻改为“一人公司”的价值主张:用 AI 跑通需求发现、原型开发、上线验证和复盘表达的完整闭环。

## 2026-05-23 · commercial-pivot 高转化落地页升级

### 关键事实

- 分支:`feat/commercial-pivot`;本轮只做本地 review 分支,不部署、不推 origin、不碰 Vercel/DNS。
- 首页从上一轮「文字列表式商业页」升级为 12 段商业落地页:Hero / 痛点 / 交付包 / 手机样张 / Before-After / 适合对象 / 3 步流程 / 试点规则 / 信任点 / 真实作品证明 / FAQ / 微信 CTA。
- 视觉方向执行「专业商务·暖白升级」:保留暖白 `#FAF8F3` 与靛蓝 `#1F3A5F`,新增表面层、暖金提示色、轻网格纹理、柔和阴影和手机 mockup 层次。
- `src/data/offer.ts` 扩展为商业落地页数据源,集中管理样张、before/after、流程、FAQ、信任点和适合对象。
- 新增 `src/components/` 小组件:手机样张 mockup、Before/After 对比卡、3 步流程、段落标题和 inline SVG 图标。

### 选型理由

- 小生意老板先看“我能拿到什么”,所以把产出可视化前置到首屏和样张区,减少抽象 AI 解释。
- 样张全部标「样张占位」,信任数据只保留 2 个真实上线作品,避免虚假案例 / 虚假证言。
- 用原生 `details` 做 FAQ,用锚点做 CTA,不引入客户端状态和重型 UI 库,保持静态导出简单。
- 组件拆分只围绕高复用视觉模块,页面仍是清晰的静态组合,方便 cc review 和后续替换真实案例。

### 卡点与解法

- 全局 `a { color: inherit }` 会覆盖 Tailwind `text-white`,导致主 CTA 蓝底文字发黑。解法:给主 CTA 加 `primary-cta` 类,在 `globals.css` 中强制白字。
- Codex 内置 Browser 打开 `localhost` / `127.0.0.1` 被 `ERR_BLOCKED_BY_CLIENT` 拦截。解法:改用项目 Playwright 在本地 dev server 做桌面/移动截图、console 和交互验证。
- `127.0.0.1:4322` 访问 dev server 时出现 Next HMR WebSocket 报错;使用 dev server 自身地址 `http://localhost:4322` 复测后 console 无错误。
- 外部作品链接在测试环境打开会被网络拦截,测试改为验证 `href` 与可见信任信息,不依赖外网跳转成功。

### 验证证据

- `npm run lint`:通过。
- `npm run typecheck`:通过。
- `npm run build`:通过,静态路由包含 `/`、`/_not-found`、`/guides`、`/guides/placeholder`。
- `PLAYWRIGHT_BASE_URL=http://127.0.0.1:4322 npm run test:e2e`:通过,移动端覆盖 Hero、样张、Before/After、流程、FAQ、CTA、微信占位、作品 href 与横向溢出。
- Playwright 本地预览:`http://localhost:4322`,桌面 1440x1000 与移动 375x900 均确认样张 / Before-After / 流程 / 联系 CTA 可见,无横向溢出,console 无 error/warning。

### 占位清单

- 微信号和二维码仍为占位,等待 szh 提供公开素材后替换。
- 商业案例仍为「样张占位」,未写入虚假客户、虚假数据或虚假证言。
- 真实作品证明仍只使用校园需求板与生态环境英语词汇 App 两个已上线作品。

## 2026-05-23 · Hero 重构为 Jobs 5 段戏剧化结构

### 关键事实

- 分支:`feat/commercial-pivot`;只本地 review,不部署、不推 origin/backup、不碰 Vercel/DNS。
- 首页结构从 12 段(Hero / 痛点 / 交付包 / 样张 / Before-After / 适合对象 / 流程 / 试点规则 / 信任 / 作品 / FAQ / 联系)压缩为 5 段戏剧化(Jobs 5-act):
  - **Act 1 · ONE LINE**(`#top`)— 保留 Hero 整体不动;TAGLINE / 副标题 / 2 个 CTA / 2 列 ProofStrip / PhoneMockup 全部保留。
  - **Act 2 · ONE EXAMPLE**(`#example`)— 整段重写,用一个餐饮场景(`sampleOutputs[0]` + `beforeAfter[0]`)同时承载痛点、交付样张、改写效果。左栏 PhoneMockup,右栏 Before/After + 一行解读。
  - **Act 3 · ONE PROMISE**(`#process`)— 整合原 Process(3 步)+ Pilot Rules,新增「前 5 个」名额锚定 chip,一段说清「怎么开始 + 试点规则 + 名额」。
  - **Act 4 · ONE TRUST**(`#works`)— 真实作品列表(沿用 `data/works.ts`),不再放抽象 Trust 段;作品本身就是 trust。
  - **Act 5 · ONE ACTION**(`#contact`)— 居中 WeChatCard,标题改为「加我微信,聊 10 分钟。」;删除「其他入口」blocks,只保留一行邮箱兜底。
- 顶栏 nav 锚点从「样张/流程/FAQ」改成「看例子/流程/作品/联系」4 个锚点。
- 顶栏 PrimaryCta 文案「申请一次免费诊断」**不动**(szh 反复打磨过);Hero SecondaryCta 从「看手机样张」改为「看一个真实例子」。
- 删除的页内段:Pain(5 条)、Deliverables(3 块)、Sample strip(多张样张列表)、Before-After 其他 2 条、Audiences(6 行业)、Trust(3 个抽象信任点)、FAQ(6 条)、Contact 「其他入口」。
- **数据保留**:`src/data/offer.ts` 字段一字不删(导出留着无害,避免破坏外部依赖);`SampleOutputStrip` 组件也保留(未删除)。

### 选型理由

- 12 段并列违反 Jobs 5-act 戏剧节奏:小老板每段都浅尝一口,没有一个段落让他「停下来」。改成 5 段后每段只做一件事,信息密度反而更高。
- 一个具体场景 > 五条抽象痛点。痛点列表会让小老板感受到「你在教育我」;一个改前 vs 改后的真实样张让他直接看到「你能给我什么」。
- 6 行业并列违反 focus 原则。删掉行业列表后,落地页对每个行业反而更有冲击——「我们做的是这种东西」比「我们覆盖 6 个行业」更有说服力。
- FAQ 删除:小老板不读 FAQ。剩下的疑虑放进微信对话里解决,反而能筛出真客户。
- 抽象 Trust 段删除:作品本身就是 trust,不需要再多 3 个抽象说法。

### 卡点与解法

- 现有 e2e 测试(`tests/home.spec.ts`)断言了 FAQ、样张占位多张、虚假案例/证言 ProofStrip、Before-After 整段标题等已删元素,重构后必然失败。解法:同步重写测试,覆盖新 5 段每段的关键可见元素 + 主 CTA 跳转 + 无横向溢出。
- 担心删 `data/offer.ts` 字段会破坏其他依赖(如旧文档引用)。解法:不删任何字段、只在 `page.tsx` 内不再 import 即可,体积成本可忽略。
- ProcessSteps 与 Pilot Rules 整合为一段时担心视觉过重。解法:用 `0.4fr_1fr` 两列布局把「前 5 个」名额做成左侧 chip、规则做成右侧卡片,卡片视觉分量保持原来 Pilot Rules 段相近。

### 验证证据

- `npm run lint`:通过(无警告)。
- `npm run typecheck`:通过。
- `npm run build`:通过,静态路由仍为 `/`、`/_not-found`、`/guides`、`/guides/placeholder`,无新增/丢失。
- `page.tsx` 行数从 422 → 313(-108 行,-26%);`SectionShell` 实例数从 11 → 4(Hero 仍是单独 `<section>` 不走 `SectionShell`,合计 5 段)。
- e2e 测试已同步重写;本地无 Playwright 浏览器权限未跑,留给 cc 在前台跑。

### 占位清单

- 微信号/二维码仍为占位(沿用上轮)。
- 真实作品列表仍只用校园需求板 + 生态环境英语词汇 App。
- 样张内容仍标「样张占位」,未替换为脱敏真实案例。
- 顶栏 PrimaryCta 文案「申请一次免费诊断」未动(szh 拍板)。
