import {test} from "@playwright/test";
//1st param is the description
//2nd param is the callback function which will have the test steps
//test.describe is used to group the test cases
//{} is used to define the scope of the test.describe block
test.describe("Practicecydeo", () => {

    test.beforeAll(async () => {
        console.log("Before all is executed");
    });

    test.afterAll(async () => {
        console.log("After all is executed");
    });

    test.beforeEach(async ({ page }) => {
      await page.goto("https://the-internet-5chk.onrender.com/");
    });

    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(3000);
    });

    test("title of page", async ({ page }) => {
        console.log(await page.title());
    });

    test("URL of page", async ({ page }) => {
        console.log(page.url());
    });

});