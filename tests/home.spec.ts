import { expect, test } from "@playwright/test";

// 落地页重构后:5 段戏剧化结构(ONE LINE / EXAMPLE / PROMISE / TRUST / ACTION)。
// 测试覆盖每段的关键可见元素 + 主 CTA 跳转 + 无横向溢出。
test("mobile commercial landing page renders 5-act structure with example, promise, trust, action", async ({
  page
}) => {
  await page.goto("/");

  // Act 1 · ONE LINE
  await expect(
    page.getByRole("heading", {
      name: "帮小生意用 AI 做获客内容和成交工具"
    })
  ).toBeVisible();
  await expect(page.getByText("小生意 AI 获客内容试点").first()).toBeVisible();
  await expect(page.getByText("真实上线作品").first()).toBeVisible();

  // Act 2 · ONE EXAMPLE — 一个餐饮场景的 Before/After
  await expect(page.getByRole("heading", { name: "朋友圈帖子,改前 vs 改后。" })).toBeVisible();
  await expect(page.getByText("餐饮活动").first()).toBeVisible();
  await expect(page.getByText("把“给谁、什么场景、怎么行动”说完整。")).toBeVisible();

  // Act 3 · ONE PROMISE — 流程 + 试点期前 5 个
  await expect(page.getByRole("heading", { name: "试点期前 5 个免费,先做样张再判断。" })).toBeVisible();
  await expect(page.getByText("10 分钟诊断")).toBeVisible();
  await expect(page.getByText("前 5 个")).toBeVisible();
  await expect(page.getByText("第一批试点规则")).toBeVisible();

  // Act 4 · ONE TRUST — 真实作品
  await expect(page.getByRole("heading", { name: "2 个真实上线作品,直接点开看。" })).toBeVisible();
  const campusLink = page.getByRole("link", { name: /校园需求板/ });
  await expect(campusLink).toHaveAttribute("href", "https://xuqiu.17szh.cn");
  await expect(page.getByText("已上线 · Next.js + Postgres · 学生在用")).toBeVisible();

  // Act 5 · ONE ACTION — 加微信
  await page.getByRole("link", { name: /申请一次免费诊断/ }).first().click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.getByRole("heading", { name: "加我微信,聊 10 分钟。" })).toBeVisible();
  await expect(page.getByText("加微信请备注「获客试点」")).toBeVisible();

  // 无横向溢出
  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth
  );
  expect(hasHorizontalOverflow).toBe(false);
});
