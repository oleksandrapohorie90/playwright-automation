import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/");

  let actualTitle = await page.title();
  console.log(actualTitle);
});

test("Getting the current url of the page", async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/");
  let actualUrl = await page.url();
  console.log(actualUrl);
});


test("Set the window size", async ({ page }) => {

    await page.goto("https://the-internet-5chk.onrender.com/");
  await page.waitForTimeout(3000);
  await page.setViewportSize({ width: 1850, height: 1080 });

  await page.waitForTimeout(3000);
});