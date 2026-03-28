import {test} from "@playwright/test";

test.describe("Mouse Actions Test Group", () => {
    //create a before to navigate to https://the-internet-5chk.onrender.com/ before each test
    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet-5chk.onrender.com/");
        await page.waitForTimeout(3000);
    });
    //create a after method to wait for 3 seconds after each test
    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(3000);
    });

    test("Left Click", async ({page}) => {
       page.click("text='A/B Testing'"); //clicks on the link with text "A/B Testing"
    });

    test("Right Click", async ({ page }) => {
       page.click("text='A/B Testing'", { button: "right" });
    });

    test("Hover", async ({ page }) => {
      // when you call hover() method from fixture you need to provide an Xpath
      //but when you caall hover() method from element dont have to provide it
      await page.click("text='Hovers'"); //clicks on the link with text "Hovers"
      //await page.waitForTimeout(3000);
      // page.hover("//img[@alt='User Avatar']");//hovers over the first image with alt text "User Avatar"
      // await page.waitForTimeout(3000);
      // page.mouse.wheel(0, 500);
      let elements = await page.locator("//img[@alt='User Avatar']").all();
      for (let e of elements) {
        await e.hover();
        await page.waitForTimeout(1000);
      }
    });

    test("Mouse wheel scrolling", async ({ page }) => {
       //playwright automatically scrolls to the element you want to interact with but if you want to scroll manually you can use mouse wheel method
        page.mouse.wheel(0, 2000); //scrolls down 2000 pixels
    });

    test("Scrolling to specific element", async ({ page }) => {
      await inputsLink.scrollIntoViewIfNeeded(); //scrolls to the element if it is not in view
      let inputsLink = page.getByText("Inputs");
      await page.waitForTimeout(3000);
      await inputsLink.click(); //scrolling is done automatically so it will still click
    });

    test("Drag and Drop", async ({ page }) => {
        page.click("text='Drag and Drop'"); //clicks on the link with text "Drag and Drop"
        await page.waitForTimeout(3000);
        await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']"); //drags the element with id "column-a" and drops it on the element with id "column-b"
        //second approach
        let sourceElement = page.locator("//div[@id='column-a']");
        let targetElement = page.locator("//div[@id='column-b']");
        await sourceElement.dragTo(targetElement);
    });

    });
