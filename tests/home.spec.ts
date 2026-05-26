import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Hero 主标可见", async ({ page }) => {
  await expect(
    page.getByRole("heading", {
      name: /用 AI 接住.*企业.*真实的.*麻烦事/
    })
  ).toBeVisible();
});

test("Hero 副标可见", async ({ page }) => {
  await expect(page.getByText("客服、文案、工具、流程")).toBeVisible();
});

test("Nav 4 项存在(桌面端可见)", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  const navItems = ["能做什么", "公益项目", "关于", "联系"];
  for (const name of navItems) {
    await expect(
      page.getByRole("link", { name, exact: true }).first()
    ).toBeVisible();
  }
});

test("三栏服务可见", async ({ page }) => {
  await expect(
    page.getByRole("heading", { name: "重复的活让机器干" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "缺的小工具我帮你做" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "内容素材一次给齐" })
  ).toBeVisible();
});

test("公益项目段 CTA 指向 school.szhopc.cn", async ({ page }) => {
  // Hero CTA 也叫"看公益项目"(锚点 #causes),用 href 过滤只匹配真外链
  const cta = page
    .locator('a[href*="school.szhopc.cn"]')
    .first();
  await expect(cta).toBeVisible();
});

test("三个企业子域链接齐全", async ({ page }) => {
  // next.config trailingSlash: true → 实际渲染为 /agents/,用前缀匹配
  const hrefs = ["/agents", "/vibe-coding", "/ai-content"];
  for (const href of hrefs) {
    await expect(
      page.locator(`a[href^="${href}"]`).first()
    ).toBeVisible();
  }
});

test("微信二维码可见", async ({ page }) => {
  await expect(
    page.locator('img[src="/wechat-qr.jpg"]').first()
  ).toBeVisible();
});

test("移动端首屏无横向溢出", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const hasHorizontalOverflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth
  );
  expect(hasHorizontalOverflow).toBe(false);
});

test("作品集分三段可见", async ({ page }) => {
  await expect(
    page.getByRole("heading", { name: /企业服务 · AI Agent 系列/ })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /公益项目/ }).first()
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /学习工具/ })
  ).toBeVisible();
});

test("#updates 段已删除", async ({ page }) => {
  await expect(page.getByText("公开进展")).toHaveCount(0);
  await expect(page.getByText("Build in public")).toHaveCount(0);
});
