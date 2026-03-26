//toBeChecked() toBeTruthy()
import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
//create beforeEach hook to navigate to the page before each test
test.beforeEach(async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/"); 
  
  await expect(page).toHaveTitle("Practice");//one way to assert the title of the page 

  expect(await page.title()).toBe("Practice");//another way to assert the title of the page
});

test("Verify checkboxes are checked", async ({ page }) => {
    //need await since getByText is async function and returns a promise
    await page.getByText("Checkboxes").click();

    let firstCheckbox = page.locator("inout#box1");
    let secondCheckbox = page.locator("input#box2");
    
    //assert first checkbox is checked
    //await firstCheckbox.check(); 
    await secondCheckbox.check();

   //await expect(firstCheckbox).toBeChecked();
   await expect(secondCheckbox).toBeChecked();

   //await expect(await firstCheckbox).toBeChecked();
   await expect(await secondCheckbox).toBeChecked();
});

test("Verify checkboxes are unchecked", async ({ page }) => {
    await page.getByText("Checkboxes").click();

    let firstCheckbox = page.locator("inout#box1");
    let secondCheckbox = page.locator("input#box2");

    //await firstCheckbox.uncheck();
    await secondCheckbox.uncheck();
    
    //assert first checkbox is unchecked
    //await expect(firstCheckbox).not.toBeChecked();
    await expect(secondCheckbox).not.toBeChecked();

    //-------------------------
    //expect(await firstCheckbox.isChecked()).toBeFalsy();
    expect(await secondCheckbox.isChecked()).toBeFalsy();

});

test("Verify visible text of the element", async ({ page }) => {

let headerElement = page.locator("span.h1y");
//since i pass locator instead of xpath any method i call afterwards will return me promise
await headerElement.toHaveText("Test Automation Practice");//assert the text content of the element

//but if you dont want any method to return you promise you can call innerText() method which will return you the text content of the element and then you can assert it
let actualText = await headerElement.innerText(); //actualtext is a string and not a promise since innerText() method returns the text content of the element and not a promise, so we can assert it without awaiting it
expect(actualText).toBe("Test Automation Practice");

expect(actualText).toBe("Test Automation Practice");//so now it returns the text content of the element and we can assert it without awaiting it


});
});