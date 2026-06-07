import { test, expect } from "@playwright/test";

test("Verify that all links under ul are displayed and enabled", async ({
  page,
}) => {
  await page.goto("https://the-internet-5chk.onrender.com/");

  await expect(page).toHaveURL(/onrender\.com/);
  await expect(page).toHaveTitle("Practice");

  const links = page.locator("//ul[@class='list-group']/li/a");
  await expect(links).toHaveCount(await links.count());

  const linkCount = await links.count();
  for (let i = 0; i < linkCount; i++) {
    const link = links.nth(i);
    await expect(link).toBeVisible();
    await expect(link).toBeEnabled();
  }
});
