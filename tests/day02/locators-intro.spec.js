//in dev tools you can copy element and paste it in the class for AI to generate locators
import { test } from "@playwright/test";

test("Simple google test", async ({page}) => {
  await page.goto("https://www.google.com");

  await page.waitForTimeout(2000);
  
  let searchBox = page.locator("//textarea[@id='APjFqb']");
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
