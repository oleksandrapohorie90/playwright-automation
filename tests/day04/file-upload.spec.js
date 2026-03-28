import {expect, test} from "@playwright/test";

test('File downloads practice', async ({page}) => {
//create event listener for download
let promisedDownloadEvent = page.waitForEvent('download');
await  page.goto("https://the-internet-5chk.onrender.com/download");
await page.click("text='Insurance.jpg"); //triggers the download event

let download = await promisedDownloadEvent;
let downloadPath = page.join(__dirname,"./downloads", dowbnload.suggestedFilename());
await download.saveAs(downloadPath);

expect(fs.existsSync(downloadPath)).toBeTruthy();
});


test("File uploads practice", async ({ page }) => {
//no need to use event listener for file upload, we can directly use setInputFiles method
await page.goto("https://the-internet-5chk.onrender.com/download");
let filePath = path.join(__dirname, "uploads", "TestUpload.txt");

await page.waitForTimeout(3000);
await page.setInputFiles("input[type='file-upload']", filePath);

await page.waitForTimeout(3000);

await page.click("//input[@id'file-submit'");

await page.waitForTimeout(3000);

await expect(page.getByText("File Uploaded!")).toBeVisible();

});