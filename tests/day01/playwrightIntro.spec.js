//const {test} = require("playwright/test");
import {test} from "@playwright/test"; //new way to import test from playwright, it is the same as the old way, but it is more modern and it is recommended to use it in new projects, it is also more compatible with modern JavaScript features like ES modules and async/await, so we can use it without any issues in our tests.

//{} to pass a set of fixtures - page fixture we need for every single autmation test, so we can destructure it and use it in our test
//page.goto() to navigate to the specific url, method returns promise, so we need to await it
//page dixture is the same as driver in selenium, it is the main object that we use to interact with the browser, 
// it has all the methods that we need to interact with the browser

//remember most of the methods return promise, so we need to await them, give sometime for promise to be resolved;
//if not we can just return them - also thats why we have sync
test("Simple google test", async ({page}) => {
    //navigate to the specific url, method returns promise, so we need to await it
    await
    page.goto("https://www.google.com/");
    //if return time returns promise we need to await it, if not we can just return it
await page.waitForTimeout(3000);
});

//to pause page.waitForTimeout() is used, it is a method that is used to wait for a specific amount of time, 
//it takes the time in milliseconds as an argument, so 3000 means 3 seconds, 
//it is useful when we want to see the result of our test before it closes the browser, but it is not recommended to use it in real tests, because it can slow down the test execution and make it less reliable, instead we should use other methods like page.waitForSelector() or page.waitForNavigation() to wait for specific elements or navigation to happen.