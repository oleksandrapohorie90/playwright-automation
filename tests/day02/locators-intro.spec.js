//in dev tools you can copy element and paste it in the class for AI to generate locators
import { test } from "@playwright/test";

test("Simple google test", async ({page}) => {
  await page.goto("https://www.google.com");

  await page.waitForTimeout(2000);
  
  let searchBox = page.locator("//textarea[@id='APjFqb']jghghf");
   // let searchBox = page.locator("textarea#gLFyf");
  //await searchBox.type("Cydeo");
  await searchBox.fill("Cydeo");
  await page.waitForTimeout(2000);
  
  await searchBox.press("Enter");

});

//getByRole usually you prioritize, if not available then XPath or CSSCode
//getByLabel is the next after getByRole
//getByText is the next after getByLabel
//getByPlaceholder is the next after getByText
//getTestId is the last one to use, because it is not visible to users, it is only for developers, so it is not a good locator to use, but if there is no other option, then you can use it.