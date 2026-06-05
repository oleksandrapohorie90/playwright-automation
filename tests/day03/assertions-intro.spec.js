import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
  //create beforeEach hook to navigate to the page before each test
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
  });

  test("Verify Checkboxes are Checked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    let firstCheckbox = page.locator("input#box1");
    let secondCheckbox = page.locator("input#box2");

    await firstCheckbox.check();
    await secondCheckbox.check();
    //we are passing locators to the expect function and then calling the toBeChecked assertion on them
    //they return a promise so we need to await them
    await expect(firstCheckbox).toBeChecked();
    await expect(secondCheckbox).toBeChecked();

    //is returning a boolean value so we can use it in an if statement or log it to the console, 
    //so we can call categorized methods on it like isChecked, isDisabled, isVisible, etc.
    expect(await firstCheckbox.isChecked()).toBeTruthy();
    expect(await secondCheckbox.isChecked()).toBeTruthy();

  });

  test("Verify Checkboxes are Unchecked", async ({ page }) => {});

  test("Verify Text of an Element", async ({ page }) => {});
});
