import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
  //create beforeEach hook to navigate to the page before each test
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");

    await expect(page).toHaveTitle("Practice");

    //another way to verify the title of the page is to get the title of the page and then use an assertion to verify it
    expect(await page.title()).toBe("Practice");
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

  test("Verify Checkboxes are Unchecked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    let firstCheckbox = page.locator("input#box1");
    let secondCheckbox = page.locator("input#box2");

    await firstCheckbox.uncheck();
    await secondCheckbox.uncheck();
    //verify that the checkboxes are unchecked
    await expect(firstCheckbox).not.toBeChecked();
    await expect(secondCheckbox).not.toBeChecked();

    //the other way to verify that the checkboxes are unchecked is to use the isChecked method and verify that it returns false
    //we pass boolean values to the toBeTruthy and toBeFalsy assertions, so we can use them to verify that the checkboxes are unchecked
    expect(await firstCheckbox.isChecked()).toBeFalsy();
    expect(await secondCheckbox.isChecked()).toBeFalsy();
  });

  test("Verify Text of an Element", async ({ page }) => {
    let header = page.locator("span.h1y");

    //pass webelement itself in the assertion and then call the toHaveText assertion on it, and pass the expected text as an argument to the assertion
    await expect(header).toHaveText("Test Automation Practice");

    let actualText = header.innerText();
    //I pass the value as argument to the assertion and then call the toBe assertion on it, and pass the expected text as an argument to the assertion
    expect(actualText).toEqual("Test Automation Practice"); // toEqual does not return Promise
  });
});
