import { test, expect } from "@playwright/test";
//JS doesnt have a list, so we can use an array to store multiple elements, and then we can use a loop to iterate through the array and perform actions on each element
test.describe("Test Group", () => {
  //if array is used to store locators, we need to declare the array outside of the beforeEach hook, so that it can be accessed by all the tests in the test group
  let elements;
  //you cannot locate array unless you navigate to the page, so we need to locate the elements inside the beforeEach hook, and then store them in the array, so that they can be accessed by all the tests in the test group

  //create a beforeEach hook to navigate to the page before each test
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
    elements = await page.locator("//ul[@class='list-group']/li/a").all(); //will get array of locators
  });

  test("Verify there are 50 link elements", async ({ page }) => {
    //1st create an array to store the elements, we can use the locator method to get the elements and then use the all method to get all the elements that match the locator and store them in the array
    //let elements = await page.locator("//ul[@class='list-group']/li/a").all(); //will get array of locators
    //2nd use an assertion to verify that there are 50 elements in the array, we can use the length property of the array to get the number of elements in the array and then use the toBe assertion to verify that it is equal to 50
    expect(elements.length).toBe(50);
    //expect(elements.length).toBeGreaterThanOrEqual(20);
  });

  test("Verify each link has a valid href attribute", async ({ page }) => {
    //each of 50 has href attribute, we can use a loop to iterate through the array and then use the toHaveAttribute assertion to verify that each element has the href attribute
    //let elements = await page.locator("//ul[@class='list-group']/li/a").all(); //will get array of locators
    for (let e of elements) {
      await expect(e).toHaveAttribute("href");
    }
  });

  test("Verify all links are visible and clickable", async ({ page }) => {
    //each of this links is visible and clickable, we can use a loop to iterate through the array and then use the toBeVisible and toBeEnabled assertions to verify that each element is visible and enabled, we can also use the getAttribute method to get the value of the href attribute and verify that it is not null
    //let elements = await page.locator("//ul[@class='list-group']/li/a").all(); //will get array of locators
    for (let e of elements) {
      await expect(e).toBeVisible();
      //another way to erify you can pass exact value to the assertion and then call the toBe assertion on it, and pass true as an argument to the assertion
      //expect(await e.isVisible()).toBeTruthy();
      await expect(e).toBeEnabled();
      //expect(await e.isEnabled()).toBeTruthy(); //we passed a boolean value to the assertion, so we can use it to verify that the element is enabled
      expect(await e.getAttribute("href")).not.toBeNull();
    }
  });
});
