import { test } from "@playwright/test";

test("Get the title of the page", async ({ page }) => {

    await page.goto("https://the-internet-5chk.onrender.com/");

    let actualTitle = await page.title();
    console.log(actualTitle);
    
});

test("Get the URL of the page", async ({ page }) => {

    await page.goto("https://the-internet-5chk.onrender.com/");

    let actualURL = await page.url();
    console.log(actualURL);
});

test("Set the window size", async ({ page }) => {

  await page.goto("https://the-internet-5chk.onrender.com/");
  
  await page.setViewportSize({ width: 800, height: 600 });

  let actualURL = await page.url();
  console.log(actualURL);
});


//================================
test("Simple google test", async ({ page }) => {

    await page.goto("https://www.google.com/");

    await page.waitForTimeout(3000);

    let searchBox =  page.locator("//textarea[@class='gLFyf']");

    await searchBox.fill("CYDEO");

    await searchBox.press("Enter");
});
