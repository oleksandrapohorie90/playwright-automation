import { expect, test } from "@playwright/test";

test("Bypass authentication by embedding the credetials in the url", async ({
  page, //https://username:password@the-internet-5chk.onrender.com/basic_auth
}) => {
    //not recommended for security reason since we expose username and password
  await page.goto(
    "https://admin:admin@the-internet-5chk.onrender.com/basic_auth",
  );
  await page.waitForTimeout(2000);
});

test("Bypass authentication by Encoding the credentials base64 format", async ({ page }) => {

//bae64 is a way to encode the credentials in a format that is not easily readable, but it is not secure and can be easily decoded. It is not recommended to use this method for authentication.

let encodedCredentials = Buffer.from("admin:admin").toString("base64"); //YWRtaW46
//need to add to header of the request
await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredentials}`});
page.goto("https://the-internet-5chk.onrender.com/basic_auth");

await page.waitForTimeout(2000);

});
//but you do not want to reveal your credentials in the source code