//const {test} = require("playwright/test");
import {test} from "@playwright/test";

//{} to pass a set of fixtures - page fixture we need for every single autmation test, so we can destructure it and use it in our test

test("Simple google test", async ({page}) => {
    //navigate to the specific url, method returns promise, so we need to await it
    await
    page.goto("https://www.google.com/");
    //if return time returns promise we need to await it, if not we can just return it
await page.waitForTimeout(3000);
});