const CASES = {
  resilience: {
    title: "大学生心理韧性",
    topic: "高水平运动员与普通大学生心理韧性差异及运动行为影响",
    participants: "高水平运动员、普通大学生",
    dataSource: "survey",
    purpose: "compare",
    groups: "two",
    variableType: "continuous",
    variables:
      "自变量: 群体类型、每周运动频率\n因变量: 心理韧性总分\n控制变量: 性别、年级、专项经历\n可能中介: 运动自我效能",
  },
  fitness: {
    title: "体质健康追踪",
    topic: "体育课程与运动 APP 参与对大学生体质健康变化的影响",
    participants: "大一至大三学生",
    dataSource: "fitness",
    purpose: "compare",
    groups: "longitudinal",
    variableType: "continuous",
    variables:
      "自变量: 课程类型、APP 使用频率\n因变量: 体测总分、耐力跑、BMI、肺活量\n时间点: 学期初、学期末、下一学年",
  },
  interview: {
    title: "奥运冠军访谈编码",
    topic: "奥运冠军比赛阅读能力的形成机制与结构模型",
    participants: "高水平运动员、教练员、奥运冠军访谈文本",
    dataSource: "interview",
    purpose: "model",
    groups: "single",
    variableType: "text",
    variables:
      "文本材料: 访谈转写稿、比赛复盘片段\n初始范畴: 情境感知、对手判断、临场决策、经验迁移\n目标: 形成比赛阅读能力结构模型",
  },
};

const METHOD_LIBRARY = {
  descriptive: {
    title: "描述统计与分布可视化",
    priority: "基础必做",
    why: "先用均值、标准差、频数、箱线图或折线图呈现样本基本情况，避免直接进入复杂模型。",
    checks: ["核对缺失值与异常值", "区分连续变量、分类变量和等级变量", "图表标题与变量单位保持一致"],
  },
  reliability: {
    title: "信度 / 效度检查",
    priority: "问卷优先",
    why: "问卷研究需要先确认量表质量，再讨论组间差异、相关或回归结果。",
    checks: ["Cronbach's alpha", "KMO 与 Bartlett 球形检验", "题项反向计分与维度归属"],
  },
  ttest: {
    title: "独立样本 t 检验或非参数检验",
    priority: "两组比较",
    why: "当研究对象分为两组且因变量为连续变量时，可用于判断两组均值差异。",
    checks: ["样本量是否过小", "正态性与方差齐性", "同时报告效应量而不只看 p 值"],
  },
  anova: {
    title: "方差分析或非参数多组比较",
    priority: "多组比较",
    why: "多组样本比较时，需要先整体检验差异，再做事后比较定位具体差异。",
    checks: ["组间样本量是否悬殊", "事后比较方法选择", "必要时补充效应量"],
  },
  paired: {
    title: "前后测比较与变化趋势图",
    priority: "追踪数据",
    why: "同一批学生跨时间测量时，应关注个体变化和时间趋势，而不是只看单个时间点。",
    checks: ["学生编号是否可匿名匹配", "缺测样本处理方式", "折线图展示变化趋势"],
  },
  regression: {
    title: "相关分析与回归分析",
    priority: "预测关系",
    why: "当研究关心运动行为、课程参与或心理变量对结果的影响时，可建立解释或预测模型。",
    checks: ["相关不等于因果", "变量编码与共线性检查", "残差诊断与模型解释边界"],
  },
  mediation: {
    title: "中介 / 调节模型思路",
    priority: "解释机制",
    why: "机制类问题需要说明变量如何发生作用，但首版只建议建模路径，不自动替代统计软件。",
    checks: ["理论依据先于模型", "样本量是否支持复杂模型", "中介与调节不要混用概念"],
  },
  grounded: {
    title: "扎根理论编码流程",
    priority: "质性研究",
    why: "访谈文本适合先做开放编码，再归纳主轴范畴，最后形成选择性编码和理论模型。",
    checks: ["不要上传未脱敏访谈原文", "保留原始语句到编码的证据链", "至少两轮编码一致性复核"],
  },
};

const form = document.querySelector("#researchForm");
const caseTitle = document.querySelector("#caseTitle");
const recommendations = document.querySelector("#recommendations");
const reportText = document.querySelector("#reportText");
const copyState = document.querySelector("#copyState");

let currentCase = "resilience";

function field(id) {
  return document.querySelector(`#${id}`);
}

function loadCase(caseKey) {
  currentCase = caseKey;
  const seed = CASES[caseKey];
  caseTitle.textContent = seed.title;
  Object.entries(seed).forEach(([key, value]) => {
    if (field(key)) field(key).value = value;
  });
  document.querySelectorAll(".case-card").forEach((button) => {
    button.classList.toggle("active", button.dataset.case === caseKey);
  });
  render();
}

function formState() {
  return {
    topic: field("topic").value.trim(),
    participants: field("participants").value.trim(),
    dataSource: field("dataSource").value,
    purpose: field("purpose").value,
    groups: field("groups").value,
    variableType: field("variableType").value,
    variables: field("variables").value.trim(),
  };
}

function selectMethods(state) {
  const selected = new Set(["descriptive"]);

  if (state.dataSource === "survey") selected.add("reliability");
  if (state.groups === "two" && state.variableType === "continuous") selected.add("ttest");
  if (state.groups === "multi") selected.add("anova");
  if (state.groups === "prepost" || state.groups === "longitudinal") selected.add("paired");
  if (state.purpose === "predict" || state.purpose === "compare") selected.add("regression");
  if (state.purpose === "explain") selected.add("mediation");
  if (state.dataSource === "interview" || state.variableType === "text") selected.add("grounded");
  if (state.purpose === "model" && state.variableType === "text") selected.add("grounded");
  if (state.purpose === "model" && state.variableType !== "text") selected.add("mediation");

  return Array.from(selected).map((key) => METHOD_LIBRARY[key]);
}

function labelOf(selectId, value) {
  const option = document.querySelector(`#${selectId} option[value="${value}"]`);
  return option ? option.textContent : value;
}

function deriveSummary(state, methods) {
  const sourceMap = {
    survey: "问卷实证研究",
    interview: "质性访谈研究",
    fitness: "体测追踪研究",
    behavior: "运动行为研究",
    intervention: "教学干预研究",
  };

  document.querySelector("#studyType").textContent = sourceMap[state.dataSource];
  document.querySelector("#dataShape").textContent = `${labelOf("groups", state.groups)} + ${labelOf("variableType", state.variableType)}`;
  document.querySelector("#firstCheck").textContent = methods[1]?.title || methods[0].title;
}

function renderRecommendations(methods) {
  recommendations.innerHTML = methods
    .map(
      (method) => `
        <article class="method-card">
          <h4>${method.title}<span>${method.priority}</span></h4>
          <p>${method.why}</p>
          <ul>${method.checks.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      `,
    )
    .join("");
}

function buildReport(state, methods) {
  return `体育科研方法建议书

一、研究主题
${state.topic || "待补充研究主题"}

二、研究对象
${state.participants || "待补充研究对象"}

三、初步判断
- 数据来源:${labelOf("dataSource", state.dataSource)}
- 研究目的:${labelOf("purpose", state.purpose)}
- 样本结构:${labelOf("groups", state.groups)}
- 核心变量类型:${labelOf("variableType", state.variableType)}

四、变量结构
${state.variables || "待补充自变量、因变量、控制变量或文本材料来源。"}

五、推荐方法路径
${methods.map((method, index) => `${index + 1}. ${method.title}: ${method.why}`).join("\n")}

六、数据处理提醒
- 首版 Demo 只使用模拟数据，不上传、不保存真实学生信息。
- 如涉及问卷，先做反向题处理、缺失值检查、信度 / 效度检查。
- 如涉及访谈，先完成匿名化，再建立原始语句、初始编码、范畴归纳的证据链。
- 输出结果应由导师或统计老师复核，本工具只提供方法辅助。

七、下一步请王老师把关
- 研究生是否能看懂这条方法链路。
- 推荐方法是否贴近体育科研常见论文。
- 哪一个场景最值得优先做深。`;
}

function render() {
  const state = formState();
  const methods = selectMethods(state);
  deriveSummary(state, methods);
  renderRecommendations(methods);
  reportText.textContent = buildReport(state, methods);
  copyState.textContent = "";
}

document.querySelectorAll(".case-card").forEach((button) => {
  button.addEventListener("click", () => loadCase(button.dataset.case));
});

document.querySelector("#resetCase").addEventListener("click", () => loadCase(currentCase));
form.addEventListener("input", render);
form.addEventListener("change", render);

document.querySelector("#copyReport").addEventListener("click", async () => {
  await navigator.clipboard.writeText(reportText.textContent);
  copyState.textContent = "已复制";
  window.setTimeout(() => {
    copyState.textContent = "";
  }, 1800);
});

loadCase(currentCase);
