import { test, expect } from "@playwright/test";

test("Verify that all links under ul tag are displayed and enabled", async ({
  page,
}) => {
  // Open the application homepage.
  await page.goto("https://the-internet-5chk.onrender.com/");

  // Verify the URL contains the expected domain.
  await expect(page).toHaveURL(/onrender\.com/);

  // Verify the page title is correct.
  await expect(page).toHaveTitle("Practice");

  // Locate all links under the ul element.
  const links = page.locator("//ul[@class='list-group']/li/a");
  const count = await links.count();

  // Check that each link is visible and enabled.
  for (let i = 0; i < count; i++) {
    const link = links.nth(i);
    await expect(link).toBeVisible();
    await expect(link).toBeEnabled();
  }
});

//----------------------------------------------------------------------

test("Search CYDEO on google", async ({ page }) => {
  // Open the Google homepage.
  await page.goto("https://www.google.com/");

  // Verify the page title is Google.
  await expect(page).toHaveTitle("Google");

  // Locate the Google search box, enter CYDEO, and search.
  const searchBox = page.locator("//textarea[@class='gLFyf']");
  await searchBox.fill("CYDEO");
  await searchBox.press("Enter");

  // Verify the resulting page title contains CYDEO.
  await expect(page).toHaveTitle(/CYDEO/);
});