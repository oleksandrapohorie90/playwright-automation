import {test} from "@playwright/test";

test('Window pop-up practice', async ({page}) => {
   let promisedNewPage = page.waitForEvent("popup"); //waits for the pop-up to appear, created event listener for pop-up
    //playwright has auto switching
    //but to see manually
    await page.bringToFront(); //brings the original page to the front
    await page.goto("https://the-internet-5chk.onrender.com/windows");
    await page.click("text='Click Here'");
    
    await page.waitForTimeout(3000);
    let newPage = await promisedNewPage; //awaits for the pop-up to appear, it will return the new page object of the pop-up

    await expect(newPage).toHaveTitle("New Window"); //verifies that the title of the pop-up is "New Window"
    await expect(page).toHaveTitle("Windows"); //verifies that the title of the original page is "The Internet"

    await page.waitForTimeout(3000);

    let firstWindowElement = page.getByText("Opening a new window"); //clicks on the link with text "Click Here" again to open another pop-up
    await expect(firstWindowElement).toBeVisible(); //verifies that the element with text "Opening a new window" is visible on the original page

    await page.waitForTimeout(3000);
    let secondWindowElement = newPage.getByText("New Window"); //gets the element with text "New Window" on the pop-up page
    await expect(secondWindowElement).toBeVisible(); //verifies that the element with text "New Window" is visible on the pop-up page
    await page.waitForTimeout(3000);
});