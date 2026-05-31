import { test } from "@playwright/test";

test.describe("Test Group", () => {
  //create beforeEach to navigate to the page before each test
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
  });

  test("innertext(): retrieves the visible text of an element", async ({
    page,
  }) => {
    let headerElement = page.locator("//h1/span[@class='h1y']");
    let actualText = await headerElement.innerText();
    console.log("The actual text is: " + actualText);
  });

  test("inputValue(): only works with <input>, <textarea>, <select>, retrieves the input value", async ({
    page,
  }) => {
    let inputLink = page.getByText("Inputs");
    await inputLink.click();

    let inputBox = page.locator("//input[@type='number']");
    await page.waitForTimeout(3000);

    inputBox.fill("12345");
    await page.waitForTimeout(3000);
    //after I entered the value I want to get the expectedValue
    let actualInput = await inputBox.inputValue();
    console.log("The actual input value is: " + actualInput);

  });

  test("getAttribute(): retrieves the attribute value of an element", async ({
    page,
  }) => {
    //in order to be a link it must have a href attribute, so we will get the href attribute value of the link
    let abTestingLink = page.getByText("A/B Testing");
    let hrefValue = await abTestingLink.getAttribute("href");
    console.log("The href value of the link is: " + hrefValue);
  });
});
