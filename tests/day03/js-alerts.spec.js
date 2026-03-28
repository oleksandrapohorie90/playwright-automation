import { expect, test } from "@playwright/test";
test.describe("Test Group", () => {
    //create beforeEach to navigate to https://the-internet-5chk.onrender.com/javascript_alerts before each test
    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet-5chk.onrender.com/javascript_alerts");
    });

  test("Regular alert", async ({page}) => {
    page.on("dialog", async (alert) => {
        console.log(`Alert Message: ${alert.message()}`);
          await page.waitForTimeout(3000);
          await alert.accept();
    });

    let clickForJSAlertButton = page.locator("//button[@onclick='jsAlert()']");
    clickForJSAlertButton.click();
    await page.waitForTimeout(3000);
    
  });

  test ("Confirmation Alert", async ({page}) => {
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

  test("Prompt Alert", async ({page}) => {
    page.on("dialog", async (alert) => {
    //if no need to see a message no need for this line
    console.log(`Alert Message: ${alert.message()}`);
    await page.waitForTimeout(3000);
    await alert.accept("CYDEO");
    });

    let clickForJSPromptAlertButton = page.locator("//button[contains(text(),'JS Prompt']");
    await clickForJSPromptAlertButton.click();
    await page.waitForTimeout(3000);//ususally you dont add pausings so delete in real tests
  }); 

});