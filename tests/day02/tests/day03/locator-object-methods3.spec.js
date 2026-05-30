import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
  });

  test("Check", async ({ page }) => {
    let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();

    let checkbox1 = page.locator("//input[@id='box1']");
    await checkbox1.check(); //dont use click() method to check the checkbox, use check() or uncheck() method instead

  });

  test("Uncheck", async ({ page }) => {
    let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();

    let checkbox2 = page.locator("#box2");
    await checkbox2.uncheck();

  });

  test("Select option", async ({ page }) => {
    let dropdownLink = page.getByText("Dropdown");
    await dropdownLink.click();

    let simpleDrowopdown = page.locator("//select[@id='dropdown']");
    //whatever is in the ("") is the value of the option you want to select, not the visible text or index
    //await simpleDrowopdown.selectOption("1");//so if single param then it is value, 
    // if 2 params then it is selecting by text or index
 
    //label is for linkText, value is for value and index is for index
    //await simpleDrowopdown.selectOption({ label: "Option 1" });//selecting by text
    await simpleDrowopdown.selectOption({ index: 1 });//selecting by index
  });
});
