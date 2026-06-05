import { expect, test } from "@playwright/test";

test("iframe test", async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/iframe");

  let iframepage = page.frameLocator("//iframe[@id='mce_0_ifr']");
  //if you want to locate any element from the iframe you need to use frameLocator and then you can use it to locate any element from the iframe, like this:
  let elementInsideTheFrame = iframepage.locator("//body[@id='tinymce']");
  await page.waitForTimeout(3000);
  //await elementInsideTheFrame.clear();
  await elementInsideTheFrame.press("Control+A", "Backspace"); //allows to also clear

  await page.waitForTimeout(3000);
  await elementInsideTheFrame.fill("Hello Cydeo");
  await page.waitForTimeout(3000);
  await expect(elementInsideTheFrame).toHaveText("Hello Cydeo");
  await page.waitForTimeout(3000);
  //if you want to locate any element outside iframe then you need to use page
});

//   test('', async ({ page }) => {
//   });

//   test('', async ({ page }) => {
//   });
