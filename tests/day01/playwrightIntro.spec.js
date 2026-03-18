//const {test} = require("playwright/test");
import {test} from "@playwright/test";

test("", async ({page}) => {
    //navigate to the specific url, method returns promise, so we need to await it
    await
    page.goto("https://www.google.com/");
    //if return time returns promise we need to await it, if not we can just return it
await page.waitForTimeout(3000);
});