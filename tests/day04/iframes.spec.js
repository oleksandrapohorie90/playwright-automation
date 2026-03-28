import { test, expect } from "@playwright/test";

test("Iframes Test",async ({page}) => {
    await page.goto("https://the-internet-5chk.onrender.com/iframe");
    let myFrame = page.frameLocator("//iframe[@id='mce_0_ifr']");
    let elementInsideFrame = myFrame.locator("//body[@id='tinymce']");
    await elementInsideFrame.clear();
    //await elementInsideFrame.press("Control+A", "Backspace");//allows to also clear
    await page.waitForTimeout(3000);
    await elementInsideFrame.fill("Hello Cydeo");
    await page.waitForTimeout(3000);

    await expect(elementInsideFrame).toHaveText("Hello Cydeo");

});


