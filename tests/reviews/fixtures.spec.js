import { test, firefox, webkit, chromium } from "@playwright/test";

test("Context Fixture Example @context-fixture", async ({ context }) => {
  const page1 = await context.newPage();
  await page1.goto("https://the-internet-5chk.onrender.com/");

  await page1.waitForTimeout(3000);

  const page2 = await context.newPage();
  await page2.goto("https://cydeo.com/");

  await page2.waitForTimeout(3000);

  const page3 = await context.newPage();
  let credentials = Buffer.from(
    `${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`,
  ).toString("base64");

  await page3.setExtraHTTPHeaders({ Authorization: `Basic ${credentials}` });

  await page3.goto("https://qa.sep.tdtm.cydeo.com/taws");

  await page3.waitForTimeout(3000);

  await page1.bringToFront(); // manually switching focus to the first page in view of the tester
  await page1.click("//a[text()='A/B Testing']");
  await page1.waitForTimeout(10000);
});

test("Browser Fixture Example @browser-fixture", async ({ browser }) => {
  const context1 = await browser.newContext();

  const page1 = await context1.newPage();
  await page1.goto("https://the-internet-5chk.onrender.com/");
  await page1.waitForTimeout(3000);

  const page2 = await context1.newPage();
  await page2.goto("https://cydeo.com/");
  await page2.waitForTimeout(3000);

  const context2 = await browser.newContext();

  const page3 = await context2.newPage();
  await page3.goto("https://github.com/");
  await page3.waitForTimeout(3000);

  const page4 = await context2.newPage();
  await page4.goto("https://www.linkedin.com/");
  await page4.waitForTimeout(3000);
});

test("Custom browser config @custom-fixture", async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://the-internet-5chk.onrender.com/");
  await page.waitForTimeout(3000);

  const browser2 = await webkit.launch();
  const context2 = await browser2.newContext();
  const page2 = await context2.newPage();

  await page2.goto("https://cydeo.com/");
  await page2.waitForTimeout(3000);

  const browser3 = await chromium.launch();
  const context3 = await browser3.newContext();
  const page3 = await context3.newPage();

  await page3.goto("https://www.linkedin.com/");
  await page3.waitForTimeout(3000);
});

test("GET get request example", async ({ request }) => {
  // defining the base URL and API endpoint
  let baseURL = "https://api.example.com";
  let endPoint = "/users";

  // sendeeing GET request to the API endpoint to get response
  let response = await request.get(`${baseURL}${endPoint}`);

  // verify that the status code of the response is 200.
  await expect(response.status()).toBe(200);

  // verify that the response type is JSON.
  await expect(response.headers()["content-type"]).toContain(
    "application/json",
  );

  // parsing the response body as JSON
  let responseBody = await response.json();

  // verify that the response body contains 10 users.
  await expect(responseBody.length).toBe(10);

  // verify that the first user in the response has the name "John Doe".
  await expect(responseBody[0].name).toBe("John Doe");

  // verify the email address of the first user is "john.doe@example.com".
  await expect(responseBody[0].email).toBe("john.doe@example.com");
});

test("POST post request example", async ({ request }) => {
  // defining the base URL and API endpoint
  let baseURL = "https://api.example.com";
  let endPoint = "/users";

  // Creating payload for the POST request
  let newUser = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    passsword: "password123",
    habits: ["reading", "traveling", "cooking"],
  };

  // sending POST request to the API endpoint with the payload to create a new user.
  let response = await request.post(`${baseURL}${endPoint}`, newUser);

  // verify that the status code of the response is 201.
  await expect(response.status()).toBe(201);

  // verify that the response type is JSON.
  await expect(response.headers()["content-type"]).toContain(
    "application/json",
  );

  // parsing the response body as JSON
  let responseBody = await response.json();

  // verify that the user created has the same name, email, and habits as the payload.
  await expect(responseBody[0].name).toBe(newUser.name);
  await expect(responseBody[0].email).toBe(newUser.email);
  await expect(responseBody[0].habits).toEqual(newUser.habits);
});

test("PUT put request example", async ({ request }) => {
  // defining the base URL and API endpoint
  let baseURL = "https://api.example.com";
  let endPoint = "/users/1";

  // Creating payload for the PUT request
  let updatedUser = {
    name: "Jane Doe",
    email: "jane.doe123@example.com",
    passsword: "password123",
    habits: ["reading", "traveling", "cooking"],
  };

  // sending PUT request to the API endpoint with the payload to update the user with id 1.
  let response = await request.put(`${baseURL}${endPoint}`, updatedUser);

  // verify that the status code of the response is 200.
  await expect(response.status()).toBe(200);

  // verify that the response type is JSON.
  await expect(response.headers()["content-type"]).toContain(
    "application/json",
  );

  // parsing the response body as JSON
  let responseBody = await response.json();

  // verify that the user updated has the same name, email, and habits as the payload.
  await expect(responseBody[0].name).toBe(updatedUser.name);
  await expect(responseBody[0].email).toBe(updatedUser.email);
  await expect(responseBody[0].habits).toEqual(updatedUser.habits);
});

test("DELETE delete request example", async ({ request }) => {
  // defining the base URL and API endpoint
  let baseURL = "https://api.example.com";
  let endPoint = "/users/1";

  // sending DELETE request to the API endpoint with the id 1 to delete the user with id 1.
  let response = await request.delete(`${baseURL}${endPoint}`);

  // verify that the status code of the response is 204.
  await expect(response.status()).toBe(204);

  // send GET request to the API endpoint to verify that the user with id 1 has been deleted.
  let getResponse = await request.get(`${baseURL}${endPoint}`);

  // verify that the status code of the GET response is 404, indicating that the user with id 1 has been deleted.
  await expect(getResponse.status()).toBe(404);
});

/** 
 * REST API TESTING LIBRARIES:
    Java: RestAssured

    C#: RestSharp

    Python: Requests


Task:
  Step1: Set the base URL to "https://api.example.com" and the API endpoint to "/users".
  Step2: Send get request to the API endpoint to get the response.
  Step3: Verify that the status code of the response is 200.
  Step4: Verify that the response type is JSON.
  Step5: Parse the response body as JSON and verify that it contains a list of users.
  Step6: Verify that the response body contains 10 users.
  Step7: Verify that the first user in the response has the name "John Doe".
  Step8: Verify that the email address of the first user is "john.doe123@example.com"


*/
