//for test driven development always create a test group
import { test } from "@playwright/test";
//pw-describe is used to create test groups, it allows us to group related tests together and also provides hooks like beforeEach, afterEach, beforeAll, afterAll
//pw-test is used to create individual test cases, it allows us to write the actual test logic and assertions

import { CommonUI } from "./CommonUI";

test.describe("Start Application Page @sep01", () => {

  //to crate before each pw-beforeEach() hook, it will run before each test in the describe block, it is used to set up the test environment, like navigating to the page, logging in, etc. It helps us to avoid code duplication and make our tests more maintainable. It can also be used to reset the state of the application before each test, so that tests do not interfere with each other.
  test.beforeEach(async ({ page }) => {
    await CommonUI.login(page);
    await page.waitForTimeout(3000);
  });
    
    //.describe() is the description of user story, feature, or functionality that we are testing. It helps us to organize our tests and make them more readable. It can also be nested to create sub-groups of tests.
  test("Clicking the Terms & Conditions link opens a new Terms & Conditions tab @sep01-1", async ({ page }) => {
    //embed credentials into URL, or encode credentials and add to the header
    //to encode credentials, go into >user settings JSON > add env variables to JSON
    //another approach is to create .env file and add env variables to it, then use dotenv package to load env variables from .env file into process.env
    //if there is a promise you add await, someimes event listeners are used to handle promises, but in this case we can directly use await page.goto() because it will wait for the page to load before moving on to the next line of code.
    //popups and new tabs are considered as promises, so we need to use event listeners to handle them. In this case, we can use page.waitForEvent('popup') to wait for the new tab to open after clicking the link.
    
  });

  test("First stepper is blue initially and changes to green once Step 1 is completed", async ({
    page,
  }) => {});

  test("Personal input fields are enabled and accept user input", async ({
    page,
  }) => {});
});