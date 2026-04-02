//for test driven development always create a test group
import { test } from "@playwright/test";
//pw-describe is used to create test groups, it allows us to group related tests together and also provides hooks like beforeEach, afterEach, beforeAll, afterAll
//pw-test is used to create individual test cases, it allows us to write the actual test logic and assertions
test.describe("Start Application Page @sep01", () => {
    //.describe() is the description of user story, feature, or functionality that we are testing. It helps us to organize our tests and make them more readable. It can also be nested to create sub-groups of tests.
  test("Clicking the Terms & Conditions link opens a new Terms & Conditions tab @sep01-1", async ({ page }) => {
    //embed credentials into URL, or encode credentials and add to the header
    Buffer.from(`${}:${}`).toString("base64"); 
    //to encode credentials, go into >user settings JSON > add env variables to JSON
    //another approach is to create .env file and add env variables to it, then use dotenv package to load env variables from .env file into process.env

    await page.goto("https://qa.sep.tdtm.cydeo.com/taws"); //if there is a promise you add await, someimes event listeners are used to handle promises, but in this case we can directly use await page.goto() because it will wait for the page to load before moving on to the next line of code.
    //popups and new tabs are considered as promises, so we need to use event listeners to handle them. In this case, we can use page.waitForEvent('popup') to wait for the new tab to open after clicking the link.
    await page.waitForTimeout(3000);
  });

  test("First stepper is blue initially and changes to green once Step 1 is completed", async ({
    page,
  }) => {});

  test("Personal input fields are enabled and accept user input", async ({
    page,
  }) => {});
});