import { expect, test } from "@playwright/test";
import path from "path";
import fs from "fs"; //usually if i need to verify the content of the file, i will use fs module to read the file and compare it with expected content
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test("File downloads", async ({ page }) => {
  const downloadPromise = page.waitForEvent("download");

  await page.goto("https://the-internet.herokuapp.com/download");
  await page.click("text='random_data.txt'");

  const download = await downloadPromise;

  const downloadsDir = path.join(__dirname, "downloads");
  fs.mkdirSync(downloadsDir, { recursive: true });

  const downloadPath = path.join(downloadsDir, download.suggestedFilename());

  await download.saveAs(downloadPath);

  expect(fs.existsSync(downloadPath)).toBeTruthy();
});

test("File Uploads", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");

  let filePath = await path.join(__dirname, "./uploads/TestUpload.txt");

  await page.waitForTimeout(2000);
  //no need for event listener here .setInputFiles will handle the file upload process and trigger the necessary events on the page
  await page.setInputFiles("//input[@id='file-upload']", filePath); //clicks upload btn based on the 1st argument which is the locator

  await page.waitForTimeout(2000);

  await expect(page.getByText("File Uploaded!")).toBeVisible();
});
