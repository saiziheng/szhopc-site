// 「小生意 AI 获客内容试点」落地页数据。文案给小老板看,少技术词。

export type PainPoint = {
  title: string;
  body: string;
};

export type Deliverable = {
  title: string;
  body: string;
  items: string[];
};

export type SampleOutput = {
  industry: string;
  title: string;
  status: "样张占位";
  channel: string;
  headline: string;
  body: string;
  cta: string;
  includes: string[];
};

export type BeforeAfter = {
  scene: string;
  before: string;
  after: string;
  note: string;
};

export type Audience = {
  name: string;
  scenario: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  time: string;
  body: string;
};

export type TrustPoint = {
  title: string;
  body: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const painPoints: PainPoint[] = [
  { title: "朋友圈想发,但不知道写什么", body: "活动、菜品、房源、车源都有,一到发文案就像硬广,发完也没人问。" },
  { title: "短视频能拍,但开头抓不住人", body: "知道要拍抖音 / 小红书,但脚本、标题、开场白没人帮你拆。" },
  { title: "客户来问了,几句话没接住", body: "客户问价格、效果、怎么预约,回复太散,很容易聊着聊着就没下文。" },
  { title: "想做活动,但表达不够专业", body: "团购、直播预热、节假日促销都能做,问题是说不清卖点和行动指令。" },
  { title: "没有一个能直接发给客户看的页面", body: "客户想了解你,只能翻朋友圈。缺一个简单、清楚、能留联系方式的展示页。" }
];

export const deliverables = {
  headline: "先交付一包能立刻发出去的获客内容",
  note: "不一上来做复杂系统。第一版先把“说什么、怎么发、客户怎么接住”整理成可以直接用的材料。",
  groups: [
    {
      title: "内容获客",
      body: "让你的活动、产品和服务有一套能发出去的表达。",
      items: ["5 条朋友圈文案", "3 个短视频脚本", "5 个标题 / 开头 Hook"]
    },
    {
      title: "成交承接",
      body: "客户开始问之后,给你一套更稳的回复和引导。",
      items: ["3 条客户咨询回复话术", "1 条引导加微信 / 预约 / 到店的话术", "1 份可复制的私聊跟进模板"]
    },
    {
      title: "页面样张",
      body: "需要时给一版轻页面,让客户打开就知道你是谁、卖什么、怎么联系。",
      items: ["活动页 / 预约页结构", "手机端首屏文案", "微信入口占位"]
    }
  ] as Deliverable[],
  more: "后续真实试点成熟后,再把效果记录、截图反馈和脱敏案例替换进来。"
} as const;

export const sampleOutputs: SampleOutput[] = [
  {
    industry: "餐饮",
    title: "周末团购朋友圈样张",
    status: "样张占位",
    channel: "朋友圈",
    headline: "周末小聚,不用再纠结吃什么",
    body: "2-4 人小桌套餐今晚开放预约。热菜、主食、饮品一次配好,适合下班后和朋友坐一坐。",
    cta: "想看菜单,私信我发你图片。",
    includes: ["活动卖点", "到店理由", "私信指令"]
  },
  {
    industry: "直播",
    title: "直播预热短视频样张",
    status: "样张占位",
    channel: "短视频脚本",
    headline: "今晚 8 点,把最常被问的 3 个问题讲透",
    body: "开头先点出痛点,中段展示产品细节,结尾用限时福利引导进直播间。",
    cta: "想要清单,评论区留“直播”。",
    includes: ["3 秒 Hook", "镜头顺序", "催单话术"]
  },
  {
    industry: "民宿",
    title: "节假日预订小红书样张",
    status: "样张占位",
    channel: "小红书笔记",
    headline: "这个假期,找一个安静但不无聊的地方住两晚",
    body: "把房间亮点、周边路线、适合人群和预订方式讲清楚,减少来回解释。",
    cta: "想看空房日期,加微信发你。",
    includes: ["种草标题", "路线卖点", "预订引导"]
  }
];

export const beforeAfter: BeforeAfter[] = [
  {
    scene: "餐饮活动",
    before: "本周有团购套餐,欢迎大家来店里吃。",
    after: "这周末想和朋友吃顿省心的,可以看这套 2-4 人小桌套餐。菜、主食、饮品都配好,私信我发菜单,晚上也能约。",
    note: "把“给谁、什么场景、怎么行动”说完整。"
  },
  {
    scene: "直播预热",
    before: "今晚直播,大家记得来看。",
    after: "今晚 8 点直播,我会把最近问得最多的 3 个问题一次讲清楚。想买但拿不准的人,先来听 10 分钟再决定。",
    note: "给用户一个进直播间的具体理由。"
  },
  {
    scene: "客户咨询",
    before: "价格在图上,你看一下。",
    after: "这款适合你刚才说的日常通勤场景。价格我发你,如果想稳妥一点,我建议先看 A 款和 B 款的差别。",
    note: "先承接需求,再给选择,最后引导下一步。"
  }
];

export const audiences: Audience[] = [
  { name: "餐饮", scenario: "套餐活动、到店引流、社群复购" },
  { name: "直播带货", scenario: "直播预热、产品讲解、成交催单" },
  { name: "民宿 / 酒店", scenario: "节假日推广、预订咨询、路线种草" },
  { name: "饰品 / 服装", scenario: "上新种草、朋友圈成交、小红书标题" },
  { name: "二手车", scenario: "车源包装、客户问答、信任说明" },
  { name: "本地服务", scenario: "服务介绍、预约引导、老客转介绍" }
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "10 分钟诊断",
    time: "先问 5 个问题",
    body: "你卖什么、想吸引谁、平常在哪发、最近有什么活动、希望客户做什么。"
  },
  {
    step: "02",
    title: "做一版样张",
    time: "先产出可看版本",
    body: "把朋友圈、脚本、回复话术或轻页面先做成一版,让你能直接判断有没有用。"
  },
  {
    step: "03",
    title: "试用后微调",
    time: "用反馈换案例",
    body: "你真实发出去、试着回复客户,再一起看哪里要改,后续脱敏记录成案例。"
  }
];

export const pilotRules = {
  title: "第一批试点规则",
  intro: "第一批名额不多,免费 / 低价帮你做一版。交换条件提前说清楚:",
  rules: [
    "给真实反馈:好不好用、有没有带来咨询",
    "允许把过程和效果脱敏后做成案例",
    "觉得有用,帮我转介绍 1 个朋友"
  ],
  note: "不是卖课,也不是让你买软件。先把你现有的生意包装得更容易被看懂。"
} as const;

export const trustPoints: TrustPoint[] = [
  {
    title: "不是只会讲 AI 概念",
    body: "我已经做过 2 个真实上线作品,都可以直接点开访问。"
  },
  {
    title: "先小步试,不让你赌大钱",
    body: "第一版只做能发出去的内容和轻页面,先看反馈,再决定要不要继续。"
  },
  {
    title: "联系方式先占位,不编造",
    body: "微信号和二维码等 szh 素材补齐后替换,当前页面只保留清晰占位。"
  }
];

export const faqs: Faq[] = [
  {
    question: "我不懂 AI,能用吗?",
    answer: "能。你只需要讲清楚自己的生意和最近想推的东西,我负责把它整理成能发出去的内容。"
  },
  {
    question: "一定要做网站吗?",
    answer: "不一定。很多小生意先做朋友圈、短视频脚本和咨询话术就够了。只有需要展示页时才做轻页面。"
  },
  {
    question: "免费 / 低价是不是之后会强制收费?",
    answer: "不会强制。第一批是试点交换:你给真实反馈和可脱敏案例,我们一起判断是否值得继续。"
  },
  {
    question: "会不会把我的客户信息写到网上?",
    answer: "不会。页面只展示样张占位和脱敏案例结构,不写客户隐私、不放未授权聊天记录。"
  },
  {
    question: "多久能看到第一版?",
    answer: "简单内容包会优先做成可看的第一版。具体时间按你的材料完整度和当次范围确认。"
  },
  {
    question: "适合什么样的老板?",
    answer: "适合愿意试、愿意反馈、业务本身已经有产品或服务,只是缺表达和承接的小生意老板。"
  }
];
