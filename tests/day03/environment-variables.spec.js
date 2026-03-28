import { expect, test } from "@playwright/test";
test("", async ({
    page,
  }) => {
    //TO SET UP ENV VARIABLES GO TO SEARCH FIELD >user settings and select JSON
  
    console.log("Username: " + process.env.PRACTICE_USERNAME);
    console.log("Password: " + process.env.PRACTICE_PASSWORD);
});

test("Bypass authentication by Encoding the credentials base64 format", async ({
  page,
}) => {
  //bae64 is a way to encode the credentials in a format that is not easily readable, but it is not secure and can be easily decoded. It is not recommended to use this method for authentication.
  //later added env variables to avoid hardcoding credentials in the source code
  let encodedCredentials = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64"); //YWRtaW46
  //need to add to header of the request
  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredentials}`,
  });
  page.goto("https://the-internet-5chk.onrender.com/basic_auth");

  await page.waitForTimeout(2000);
});
