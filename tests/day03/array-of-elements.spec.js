import { expect, test } from "@playwright/test";

test.describe("Test Group", () => {
  let elements;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
    elements = await page.locator("//ul[@class='list-group']/li/a").all(); //will get array of locators
  });

  test("Verify there are exactly 50 link elements within the <ul> tag", async ({
    page,
  }) => {
    expect(elements.length).toBe(50);
    //expect(elements.length).toBeGreaterThanOrEqual(20);
  });

  test("Verify there each of 50 links elements within the <ul> tag visible and clickable", async ({
    page,
  }) => {
    for (let e of elements) {
      await expect(e).toBeVisible();
      expect(await e.isVisible()).toBeTruthy();
      expect(e).toBeEnabled();
      expect(await e.isEnabled()).toBeTruthy();
      expect(await e.getAttribute("href")).not.toBeNull();
    }
  });

  test("Verify there each of 50 links elements within the <ul> tag has href attribute", async ({
    page,
  }) => {
    for (let e of elements) {
      await expect(e).toHaveAttribute("href");
    }
  });
});
