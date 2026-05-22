import { expect, test } from "@playwright/test";

test("mobile commercial landing page renders samples, flow, FAQ, and contact CTA", async ({
  page
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "帮小生意用 AI 做获客内容和成交工具"
    })
  ).toBeVisible();
  await expect(page.getByText("小生意 AI 获客内容试点").first()).toBeVisible();
  await expect(page.getByText("真实上线作品").first()).toBeVisible();
  await expect(page.getByText("虚假案例/证言").first()).toBeVisible();

  await expect(page.getByRole("heading", { name: "先让你看到“做出来长什么样”。" })).toBeVisible();
  await expect(page.getByText("样张占位").first()).toBeVisible();
  await expect(page.getByText("周末团购朋友圈样张")).toBeVisible();
  await expect(page.getByRole("heading", { name: "同一件事,换一种说法,客户更容易接住。" })).toBeVisible();

  await expect(page.getByRole("heading", { name: "先诊断,再做样张,最后用真实反馈微调。" })).toBeVisible();
  await expect(page.getByText("10 分钟诊断")).toBeVisible();

  await expect(page.getByRole("heading", { name: "小老板通常会先问这些。" })).toBeVisible();
  await page.getByText("一定要做网站吗?").click();
  await expect(page.getByText("很多小生意先做朋友圈、短视频脚本和咨询话术就够了。")).toBeVisible();

  await page.getByRole("link", { name: /申请一次免费诊断/ }).first().click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.getByText("微信二维码").last()).toBeVisible();
  await expect(page.getByText("待补：微信号").first()).toBeVisible();

  const campusLink = page.getByRole("link", { name: /校园需求板/ });
  await expect(campusLink).toHaveAttribute("href", "https://xuqiu.17szh.cn");
  await expect(page.getByText("已上线 · Next.js + Postgres · 学生在用")).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth
  );
  expect(hasHorizontalOverflow).toBe(false);
});
