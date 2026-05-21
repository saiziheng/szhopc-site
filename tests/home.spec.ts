import { expect, test } from "@playwright/test";

test("mobile homepage exposes hero, portfolio links, and campus external target", async ({
  page,
  context
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "我是 szh,正在用 AI 协作完成真实项目。"
    })
  ).toBeVisible();
  await expect(page.getByText("一个大学生的 AI 协作交付现场")).toBeVisible();

  const portfolioCta = page.getByRole("link", { name: /看作品集/ }).first();
  await expect(portfolioCta).toHaveAttribute("href", "#works");
  await portfolioCta.click();
  await expect(page).toHaveURL(/#works$/);

  const campusCard = page.getByRole("link", { name: /校园需求板/ });
  await expect(campusCard).toHaveAttribute("href", "https://xuqiu.17szh.cn");

  const popupPromise = context.waitForEvent("page");
  await campusCard.click();
  const popup = await popupPromise;
  await expect(popup).toHaveURL(/https:\/\/xuqiu\.17szh\.cn\/?/);
  await popup.close();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth
  );
  expect(hasHorizontalOverflow).toBe(false);
});
