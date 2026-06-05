import { expect, test } from "@playwright/test";
test.describe("Test Group", () => {
  //create beforeEach to navigate to https://the-internet-5chk.onrender.com/javascript_alerts before each test
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/javascript_alerts");
  });
  //alert is handled automatically; by default it clicks on the OK button, but if you want to click on the Cancel button,
  //you can use the dismiss method, and if you want to enter text in the prompt alert, you can use the accept method and pass the text as an argument to the method
  test("Regular alert", async ({ page }) => {
    //but if you need to handle manually then you need to use .on() method
    //dialog means alert, confirmation, and prompt, so we can use the same method to handle all three types of alerts
    //but once alert is captured I need to name it and then I can use it to perform actions on it,
    //like getting the message of the alert, accepting the alert, dismissing the alert, etc.
    page.on("dialog", async (alert) => {
      console.log(`Alert Message: ${alert.message()}`);
      await page.waitForTimeout(3000);
      await alert.accept(); 
    });

    let clickForJSAlertButton = page.locator("//button[@onclick='jsAlert()']");
    clickForJSAlertButton.click();
    await page.waitForTimeout(3000);
  });

  test("Confirmation Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      //if no need to see a message no need for this line
      console.log(`Alert Message: ${alert.message()}`);
      await page.waitForTimeout(3000);
      await alert.dismiss();
    });
    let clickForJSAlertButton = page.locator("//button[@onclick='jsPrompt()']");
    clickForJSAlertButton.click();
    await page.waitForTimeout(3000);
  });

  test("Prompt Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      //if no need to see a message no need for this line
      console.log(`Alert Message: ${alert.message()}`);
      await page.waitForTimeout(3000);
      await alert.accept("CYDEO");
    });

    let clickForJSPromptAlertButton = page.locator(
      "//button[@onclick='jsPrompt()']",
    );
    await clickForJSPromptAlertButton.click();
    await page.waitForTimeout(3000); //ususally you dont add pausings so delete in real tests
  });
});
