import { expect, test } from "@playwright/test";

test("mobile homepage exposes hero, portfolio links, and campus external target", async ({
  page,
  context
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "用 AI 协作,一个人交付真实产品"
    })
  ).toBeVisible();
  await expect(page.getByText("一人公司实践")).toBeVisible();

  const worksTab = page.getByRole("tab", { name: "作品" });
  const updatesTab = page.getByRole("tab", { name: "公开进展" });
  const guidesTab = page.getByRole("tab", { name: "指南" });

  await expect(worksTab).toHaveAttribute("aria-selected", "true");

  await updatesTab.click();
  await expect(updatesTab).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("heading", { name: "把进展写下来,让判断可追踪。" })).toBeVisible();

  await guidesTab.click();
  await expect(guidesTab).toHaveAttribute("aria-selected", "true");
  await expect(page.getByText("指南列表暂空。")).toBeVisible();

  const portfolioCta = page.getByRole("button", { name: /看作品/ }).first();
  await portfolioCta.click();
  await expect(worksTab).toHaveAttribute("aria-selected", "true");

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
