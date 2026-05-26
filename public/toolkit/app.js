"use strict";

const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const TOOLS = [
  { key: "diagnose", ic: "诊", name: "获客诊断", desc: "填 5 个问题,看清你生意的获客卡点和该先做什么。" },
  { key: "moments", ic: "圈", name: "朋友圈文案", desc: "选行业和目标,生成 3 版能直接发的朋友圈文案。" },
  { key: "script", ic: "拍", name: "短视频脚本", desc: "给你标题、3 秒 Hook、分镜顺序和结尾 CTA。" },
  { key: "reply", ic: "答", name: "客服话术", desc: "客户问价、犹豫、比价时,怎么接住、怎么引导。" },
  { key: "pilot", ic: "48", name: "48h 试点方案", desc: "生成一份 48 小时能跑起来的第一版交付计划。" }
];

function industrySelect(id, label) {
  let opts = '<option value="" disabled selected>请选择</option>';
  INDUSTRY_KEYS.forEach((k) => { opts += `<option value="${k}">${esc(INDUSTRIES[k].full)}</option>`; });
  return `<div class="field"><label class="q" for="${id}">${esc(label)}</label><select id="${id}" required>${opts}</select></div>`;
}

function copyBtn() {
  return `<button type="button" class="copybtn" onclick="copyText(this)">复制</button>`;
}
function copyText(btn) {
  const txt = btn.closest(".body").querySelector(".text").innerText;
  try {
    const ta = document.createElement("textarea");
    ta.value = txt; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    document.execCommand("copy"); document.body.removeChild(ta);
    btn.textContent = "已复制 ✓"; btn.classList.add("done");
    setTimeout(() => { btn.textContent = "复制"; btn.classList.remove("done"); }, 1600);
  } catch (e) { btn.textContent = "请手动选择复制"; }
}

const honestFooter = `
<footer><div class="wrap">
<p><b>关于这个工具箱:</b>这是 szh(一个用 AI 协作做真实交付的在校学生 / 一人公司)做的演示。生成的内容是基于常见小生意场景的<strong>结构化样张和建议</strong>,需要按你的真实生意调整,不是承诺。</p>
<p>这里<b>不承诺</b>具体盈利、不承诺具体降本金额、不替你运营账号、不碰你的账号密码。所有内容只在你这台设备上本地生成,不上传、不保存。</p>
<p>了解更多真实作品 → <a href="https://business.szhopc.cn" target="_blank" rel="noopener">business.szhopc.cn</a></p>
</div></footer>`;

const ctaBox = `
<div class="cta-box"><h3>想把这一版,真的做成你能用的?</h3>
<p>第一批试点免费 / 低价。交换:给真实反馈、允许脱敏做案例、觉得有用帮转介绍 1 个朋友。</p>
<a class="wx" href="https://business.szhopc.cn" target="_blank" rel="noopener">去 business.szhopc.cn 加微信(备注「获客试点」)</a>
<p class="sm">不卖课、不让你买软件、不碰你的账号密码。先把你现有的生意包装得更容易被看懂。</p></div>`;

// ---------------- 首页 ----------------
function renderHome() {
  let cards = TOOLS.map((t) =>
    `<button class="tool-card" onclick="go('${t.key}')"><span class="ic">${esc(t.ic)}</span><h3>${esc(t.name)}</h3><p>${esc(t.desc)}</p></button>`
  ).join("");
  return `
  <header class="hero">
    <span class="badge">小生意 AI 获客工具箱 · Demo</span>
    <h1>不讲 AI 大道理。选一个工具,马上拿到能用的东西。</h1>
    <p class="lead">给餐饮、直播、民宿、饰品、二手车、本地服务的小老板:诊断你的获客卡点,生成能直接发的朋友圈、短视频脚本、客服话术,和一份 48 小时能跑起来的试点方案。</p>
    <div class="hero-meta"><span>不用注册</span><span>不收集任何信息</span><span>纯本地生成</span></div>
  </header>
  <div class="tool-grid">${cards}</div>
  ${honestFooter}`;
}

// ---------------- 工具1:获客诊断 ----------------
function renderDiagnose() {
  let painOpts = '<option value="" disabled selected>请选择</option>';
  Object.keys(PAIN_DIAG).forEach((k) => { painOpts += `<option value="${k}">${esc(PAIN_DIAG[k].label)}</option>`; });
  return `
  ${toolHead("获客诊断", "填 5 个问题,60 秒看清你生意的获客卡点。越具体,诊断越准。")}
  <form id="f">
    ${industrySelect("industry", "1 · 你做的是哪一行?")}
    <div class="field"><label class="q">2 · 现在客户主要从哪来?</label><div class="sub">可多选,没有固定渠道也很常见。</div>
      <div class="chips" id="channels">${chip("ch", ["朋友圈", "短视频", "直播", "私域微信群", "到店自然客流", "老客转介绍", "几乎没有固定渠道"])}</div></div>
    <div class="field"><label class="q" for="pain">3 · 最近最让你头疼的是哪件?</label><select id="pain" required>${painOpts}</select></div>
    <div class="field"><label class="q">4 · 你已经在做哪些?(有基础的话)</label><div class="sub">可多选,用来判断先补哪一块最划算。</div>
      <div class="chips" id="haves">${chip("hv", ["在发短视频", "常发朋友圈", "有在直播", "有微信私域"])}</div></div>
    <div class="field"><label class="q" for="repeat">5 · 哪件事你每天 / 每周重复做、最想省掉?(选填)</label>
      <input type="text" id="repeat" placeholder="一句话,可留空" maxlength="80" /></div>
    <button type="submit" class="go">生成我的获客诊断 →</button>
    <p class="form-foot">纯本地运算,填的内容只在你这台设备上。</p>
  </form></div>
  <div class="out" id="out" aria-live="polite"></div>`;
}
function bindDiagnose() {
  $("#f").addEventListener("submit", (e) => {
    e.preventDefault();
    const I = INDUSTRIES[$("#industry").value] || INDUSTRIES.other;
    const pain = PAIN_DIAG[$("#pain").value];
    const channels = checked("channels"), haves = checked("haves"), repeat = $("#repeat").value.trim();
    const diag = [{ b: pain.lead, t: pain.lines[0] }, { b: "下一步方向", t: pain.lines[1] }];
    if (channels.includes("几乎没有固定渠道") || !channels.length)
      diag.push({ b: "渠道", t: "你目前几乎没有稳定获客渠道——<b>好处是没历史包袱</b>。建议先押注 1 个渠道(多数小生意从朋友圈 + 私域起步最快),别一上来铺全平台。" });
    else
      diag.push({ b: "渠道", t: "你已经在用 " + esc(channels.join(" / ")) + ",<b>不缺触点,缺的是每个触点上的「表达」</b>。先把现有渠道的内容质量提上去,比新开渠道划算。" });
    if (haves.length) diag.push({ b: "已有基础", t: "你已经在做 " + esc(haves.join(" / ")) + ",这部分可以<b>直接接上 AI 内容包提速</b>,不用从零开始。" });
    if (repeat) diag.push({ b: "重复劳动", t: "你最想省掉「" + esc(repeat) + "」。这类<b>重复、可模板化的事</b>正是第一版最值得先做成话术库 / 模板的地方。" });

    const order = [pain.primary, ...["content", "deal", "page"].filter((k) => k !== pain.primary)];
    const packs = order.map((k, i) => {
      const p = PACKS[k];
      return `<div class="pack${i === 0 ? " primary" : ""}">${i === 0 ? '<span class="tag">★ 建议先做这个</span>' : ""}<h4>${esc(p.title)}</h4><p class="pbody">${esc(p.body)}</p><ul>${p.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`;
    }).join("");
    const path = PROCESS.map((p) => `<div class="ps"><span class="pn">${esc(p.n)}</span><div class="pc"><div class="pt">${esc(p.time)}</div><h4>${esc(p.t)}</h4><p>${esc(p.b)}</p></div></div>`).join("");

    const out =
      resultHead(I.name + " · 你的获客诊断", pain.lead, "下面是基于你填的情况给出的诊断和第一版方向。全部是建议和样张,需要按你的真实生意一起调。") +
      sec(1, "当前获客卡点诊断", diag.map((d) => `<div class="diag-item"><span class="dot"></span><span class="t"><b>${d.b}</b> · ${d.t}</span></div>`).join("")) +
      sec(2, "适合你先做的 AI 交付包", packs) +
      sec(3, "48 小时试点路径", `<div class="path">${path}</div>`) +
      sec(4, "为什么找 szh,而不是自己随便用 AI 工具",
        `<ul class="why">
        <li><b>不是给你一个工具,是给你能直接发出去的成品。</b>AI 工具要你自己想 prompt、自己判断好坏;这里直接交付能用的文案、脚本和话术。</li>
        <li><b>懂小生意的表达,不是套通用模板。</b>诊断和样张按你这一行的真实场景做。</li>
        <li><b>先小步试,不让你赌大钱。</b>第一版只做能发出去的内容和轻页面,看反馈再决定。</li>
        <li><b>已有 2 个真实上线作品,可直接点开看</b>(<a href="https://business.szhopc.cn" target="_blank" rel="noopener">business.szhopc.cn</a>),不是只会讲概念。</li></ul>`) +
      `<p class="hint" style="margin:0 0 18px">想直接拿到内容?试试上方的「朋友圈文案」「短视频脚本」「客服话术」工具。</p>` +
      ctaBox + redo();
    showOut(out);
  });
}

// ---------------- 工具2:朋友圈文案 ----------------
function renderMoments() {
  let goalOpts = '<option value="" disabled selected>请选择</option>';
  Object.keys(MOMENT_GOALS).forEach((k) => { goalOpts += `<option value="${k}">${esc(MOMENT_GOALS[k].label)}</option>`; });
  return `
  ${toolHead("朋友圈文案生成器", "选行业和目标,填一句你想推的东西,生成 3 版能直接发的朋友圈文案。")}
  <form id="f">
    ${industrySelect("industry", "1 · 你做的是哪一行?")}
    <div class="field"><label class="q" for="goal">2 · 这条朋友圈想干嘛?</label><select id="goal" required>${goalOpts}</select></div>
    <div class="field"><label class="q" for="topic">3 · 一句话说你想推什么?</label>
      <div class="sub">比如:周末 2-4 人套餐 / 新到一批秋款 / 今晚 8 点直播</div>
      <input type="text" id="topic" placeholder="想推的产品、活动或主题" maxlength="40" required /></div>
    <button type="submit" class="go">生成 3 版文案 →</button>
    <p class="form-foot">生成后可一键复制,记得按你的真实情况改细节(价格、时间、名额)。</p>
  </form></div>
  <div class="out" id="out" aria-live="polite"></div>`;
}
function bindMoments() {
  $("#f").addEventListener("submit", (e) => {
    e.preventDefault();
    const I = INDUSTRIES[$("#industry").value] || INDUSTRIES.other;
    const goal = MOMENT_GOALS[$("#goal").value];
    const topic = $("#topic").value.trim() || I.nouns[0];
    const blocks = goal.tones.map((tone, i) => {
      const a = I.audience[i % I.audience.length];
      const s = I.scenes[i % I.scenes.length];
      const c = I.ctas[i % I.ctas.length];
      const n = I.nouns[i % I.nouns.length];
      const text = tone.build(I, topic, a, s, c, n);
      return copyCard(tone.tag, "朋友圈文案", text, "记得把价格 / 时间 / 名额换成你的真实信息。");
    }).join("");
    const out =
      resultHead(I.name + " · 朋友圈文案", goal.label, goal.hint) +
      sec(1, "3 版文案(挑一版改改就能发)", blocks) +
      sec(2, "为什么这么写", `<ul class="why">
        <li><b>先说「给谁、什么场景」,再说产品。</b>客户先对号入座,才会接着看。</li>
        <li><b>结尾一定要有明确动作。</b>「私信我」「扣 1」「加微信」比「欢迎咨询」有效得多。</li>
        <li><b>限时版别天天发。</b>偶尔用一次制造紧迫感,用多了会失效。</li></ul>`) +
      ctaBox + redo();
    showOut(out);
  });
}

// ---------------- 工具3:短视频脚本 ----------------
function renderScript() {
  let goalOpts = '<option value="" disabled selected>请选择</option>';
  Object.keys(SCRIPT_GOALS).forEach((k) => { goalOpts += `<option value="${k}">${esc(SCRIPT_GOALS[k].label)}</option>`; });
  return `
  ${toolHead("短视频脚本生成器", "给你 3 个标题、3 个 3 秒 Hook、分镜顺序和结尾 CTA。照着拍就行。")}
  <form id="f">
    ${industrySelect("industry", "1 · 你做的是哪一行?")}
    <div class="field"><label class="q" for="topic">2 · 这条视频讲什么?</label>
      <div class="sub">比如:招牌菜怎么点 / 这款适合什么人 / 怎么挑不踩坑</div>
      <input type="text" id="topic" placeholder="一句话主题" maxlength="40" required /></div>
    <div class="field"><label class="q" for="goal">3 · 主要想达到什么?</label><select id="goal" required>${goalOpts}</select></div>
    <button type="submit" class="go">生成脚本 →</button>
    <p class="form-foot">脚本是骨架,真实拍摄时按你的产品和说话风格调。</p>
  </form></div>
  <div class="out" id="out" aria-live="polite"></div>`;
}
function bindScript() {
  $("#f").addEventListener("submit", (e) => {
    e.preventDefault();
    const I = INDUSTRIES[$("#industry").value] || INDUSTRIES.other;
    const topic = $("#topic").value.trim() || I.nouns[0];
    const gkey = $("#goal").value;
    const goal = SCRIPT_GOALS[gkey];
    const endCta = typeof goal.endCta === "function" ? goal.endCta(I) : goal.endCta;
    const titles = SCRIPT_TITLES.slice(0, 3).map((f) => `<li>${esc(f(topic))}</li>`).join("");
    const hooks = SCRIPT_HOOKS.map((f) => `<li>${esc(f(topic))}</li>`).join("");
    const shots = SCRIPT_SHOTS(I, topic).map((sh) => `<div class="shot"><span class="st">${esc(sh.s)}</span><span class="sd">${esc(sh.do)}</span></div>`).join("");
    const out =
      resultHead(I.name + " · 短视频脚本", topic, "目标:" + goal.label + "。下面是可直接照拍的骨架。") +
      sec(1, "3 个标题(挑一个,或自己合)", `<ul class="titles">${titles}</ul>`) +
      sec(2, "3 个 3 秒 Hook(开头别浪费)", `<ul class="hooks">${hooks}</ul>`) +
      sec(3, "分镜顺序", `<div class="shots">${shots}</div>`) +
      sec(4, "结尾 CTA", `<div class="copy"><div class="body"><p class="text">${esc(endCta)}</p>${copyBtn()}</div></div>`) +
      sec(5, "拍摄提醒", `<ul class="why">
        <li><b>前 3 秒决定生死。</b>别做片头、别自我介绍,直接上钩子。</li>
        <li><b>给具体,别给形容词。</b>「份量管饱」要拍出来,不是嘴上说。</li>
        <li><b>一条只讲一件事。</b>贪多反而没人记住。</li></ul>`) +
      ctaBox + redo();
    showOut(out);
  });
}

// ---------------- 工具4:客服话术 ----------------
function renderReply() {
  let scOpts = '<option value="" disabled selected>请选择</option>';
  Object.keys(REPLY_SCENARIOS).forEach((k) => { scOpts += `<option value="${k}">${esc(REPLY_SCENARIOS[k].label)}</option>`; });
  return `
  ${toolHead("客服成交话术生成器", "客户问价、犹豫、比价、担心质量时,怎么接住、怎么自然引导到下一步。")}
  <form id="f">
    ${industrySelect("industry", "1 · 你做的是哪一行?")}
    <div class="field"><label class="q" for="scene">2 · 客户现在是哪种情况?</label><select id="scene" required>${scOpts}</select></div>
    <button type="submit" class="go">生成回复话术 →</button>
    <p class="form-foot">话术是思路,不是逐字背稿。按你的真实语气说出来更自然。</p>
  </form></div>
  <div class="out" id="out" aria-live="polite"></div>`;
}
function bindReply() {
  $("#f").addEventListener("submit", (e) => {
    e.preventDefault();
    const I = INDUSTRIES[$("#industry").value] || INDUSTRIES.other;
    const sc = REPLY_SCENARIOS[$("#scene").value];
    const rows = sc.build(I);
    const replyHtml = rows.map((r) => `<div class="ri"><span class="rl">${esc(r.sc)}</span><span class="rt">${esc(r.t)}</span></div>`).join("");
    const full = rows.map((r) => r.t).join("\n");
    const out =
      resultHead(I.name + " · 客服成交话术", sc.label, "三步:先承接情绪 → 给具体 / 给理由 → 引导下一个动作。") +
      sec(1, "按这三步回", `<div class="reply">${replyHtml}</div>`) +
      sec(2, "连起来发(可复制)", `<div class="copy"><div class="body"><p class="text">${esc(full)}</p>${copyBtn()}</div></div>`) +
      sec(3, "守住的边界", `<ul class="list-plain warn">
        <li>不夸大效果、不承诺盈利、不乱降价。</li>
        <li>价格按真实情况说范围,别凭空报。</li>
        <li>留联系方式 ≠ 死缠;客户没意向就礼貌收场。</li></ul>`) +
      ctaBox + redo();
    showOut(out);
  });
}

// ---------------- 工具5:48h 试点方案 ----------------
function renderPilot() {
  let focusOpts = '<option value="" disabled selected>请选择</option>';
  Object.keys(PILOT_FOCUS).forEach((k) => { focusOpts += `<option value="${k}">${esc(PILOT_FOCUS[k].label)}</option>`; });
  return `
  ${toolHead("48 小时试点方案生成器", "生成一份 48 小时能跑起来的第一版交付计划:谁做什么、要你给什么、第一版交付什么。")}
  <form id="f">
    ${industrySelect("industry", "1 · 你做的是哪一行?")}
    <div class="field"><label class="q" for="focus">2 · 第一版最想先解决哪个?</label><select id="focus" required>${focusOpts}</select></div>
    <div class="field"><label class="q">3 · 你手上有现成素材吗?</label><div class="sub">影响第一版能多快出。</div>
      <div class="chips" id="mat">${chip("mt", ["有图 / 视频", "有现成文案 / 介绍", "有客户常问的问题", "基本没有,得现整"])}</div></div>
    <button type="submit" class="go">生成 48 小时方案 →</button>
    <p class="form-foot">这是计划框架,具体时间按你的素材完整度一起定。</p>
  </form></div>
  <div class="out" id="out" aria-live="polite"></div>`;
}
function bindPilot() {
  $("#f").addEventListener("submit", (e) => {
    e.preventDefault();
    const I = INDUSTRIES[$("#industry").value] || INDUSTRIES.other;
    const focus = PILOT_FOCUS[$("#focus").value];
    const mats = checked("mat");
    const hasMat = mats.length && !(mats.length === 1 && mats[0] === "基本没有,得现整");
    const timeline = [
      { n: "0h", t: "10 分钟对齐", b: "微信 / 电话聊清楚:你卖什么、想吸引谁、希望客户做什么、第一版先解决「" + esc(focus.label.replace(/^先解决/, "")) + "」。" },
      { n: "0-2h", t: "你给素材", b: "你按下面「需要你提供」清单发给我," + (hasMat ? "你已有部分素材,这步会很快。" : "没有也没关系,我会用提问帮你现整出来。") },
      { n: "2-24h", t: "出第一版", b: "我做出可看的第一版交付物(见下方清单),发给你过目。" },
      { n: "24-36h", t: "你试用", b: "你真实发出去 / 试着回客户,记下哪里顺、哪里别扭。" },
      { n: "36-48h", t: "一起微调", b: "按你的反馈改一版,确定能继续用的版本,后续脱敏记录成案例。" }
    ];
    const tl = timeline.map((p) => `<div class="ps"><span class="pn">${esc(p.n)}</span><div class="pc"><h4>${esc(p.t)}</h4><p>${esc(p.b)}</p></div></div>`).join("");
    const deliv = focus.firstDeliverables.map((x) => `<li>${esc(x)}</li>`).join("");
    const need = focus.needFromMerchant.map((x) => `<li>${esc(x)}</li>`).join("");
    const out =
      resultHead(I.name + " · 48 小时试点方案", focus.label, "目标是 48 小时内跑出一个你能判断「有没有用」的第一版,而不是一上来做大系统。") +
      sec(1, "0-48 小时时间线", `<div class="path">${tl}</div>`) +
      sec(2, "第一版交付物", `<ul class="list-plain">${deliv}</ul>`) +
      sec(3, "需要你提供", `<ul class="list-plain">${need}</ul>`) +
      sec(4, "不需要你提供(放心)", `<ul class="list-plain warn"><li>账号密码、后台权限</li><li>付款记录、客户隐私数据</li><li>未脱敏的聊天全文</li></ul>`) +
      sec(5, "试点交换条件", `<ul class="list-plain"><li>给真实反馈:好不好用、有没有带来咨询</li><li>允许把过程和效果脱敏后做成案例</li><li>觉得有用,帮我转介绍 1 个朋友</li></ul>`) +
      sec(6, "不承诺边界", `<ul class="list-plain warn"><li>不承诺具体盈利、不承诺具体降本金额</li><li>不替你运营账号、不碰投流账户</li><li>第一版是「能发出去的内容 / 轻页面」,不是完整软件系统</li></ul>`) +
      ctaBox + redo();
    showOut(out);
  });
}

// ---------------- 共享渲染件 ----------------
function toolHead(title, hint) { return `<div class="card"><h2>${esc(title)}</h2><p class="hint">${esc(hint)}</p>`; }
function chip(prefix, arr) { return arr.map((v, i) => `<span class="chip"><input type="checkbox" id="${prefix}${i}" value="${esc(v)}"><label for="${prefix}${i}">${esc(v)}</label></span>`).join(""); }
function checked(id) { return [...document.querySelectorAll("#" + id + " input:checked")].map((i) => i.value); }
function resultHead(badge, title, sub) { return `<div class="result-head"><span class="badge">${esc(badge)}</span><h2>${esc(title)}</h2><p>${esc(sub)}</p></div>`; }
function sec(n, title, body) { return `<div class="sec"><div class="sec-title"><span class="n">${n}</span><h3>${esc(title)}</h3></div>${body}</div>`; }
function copyCard(label, ph, text, note) {
  return `<div class="copy"><div class="ch"><span class="label">${esc(label)}</span><span class="ph">样张 · 按真实情况改</span></div><div class="body"><p class="text">${esc(text)}</p>${copyBtn()}<p class="note">${esc(note)}</p></div></div>`;
}
function redo() { return `<div class="redo"><button type="button" onclick="location.hash='#/'+CURRENT;window.scrollTo(0,0);">← 重新填一遍</button></div>`; }
function showOut(html) {
  const o = $("#out"); o.innerHTML = html; o.classList.add("show"); o.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ---------------- 路由 ----------------
const VIEWS = {
  diagnose: { render: renderDiagnose, bind: bindDiagnose },
  moments: { render: renderMoments, bind: bindMoments },
  script: { render: renderScript, bind: bindScript },
  reply: { render: renderReply, bind: bindReply },
  pilot: { render: renderPilot, bind: bindPilot }
};
let CURRENT = "";

function go(key) { location.hash = "#/" + key; }

function navHtml(active) {
  const links = TOOLS.map((t) => `<a class="${active === t.key ? "active" : ""}" onclick="go('${t.key}')">${esc(t.name)}</a>`).join("");
  return `<div class="topbar"><div class="inner"><span class="brand" onclick="location.hash='#/'">获客工具箱<span class="dot">·</span></span><nav>${links}</nav></div></div>`;
}

function route() {
  const hash = location.hash.replace(/^#\/?/, "");
  const key = VIEWS[hash] ? hash : "";
  CURRENT = key;
  const top = navHtml(key);
  if (!key) { document.body.innerHTML = top + '<div class="wrap">' + renderHome() + "</div>"; window.scrollTo(0, 0); return; }
  const v = VIEWS[key];
  document.body.innerHTML = top + '<div class="wrap" style="padding-top:24px">' + v.render() + "</div>" + honestFooter;
  v.bind();
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", route);
