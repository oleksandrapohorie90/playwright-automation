import { expect, test } from "@playwright/test";

test("Web Tables Test", async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/web-tables");
  let table = page.locator("//table[@id='ct100_MainContent_orderGrid']");

  let rows = await table.locator("tr").all();

  let columns = await table.locator("//th").all();

  let cells = await table.locator("td").all();

  expect(rows.length).toBe(9); //verifies that there are 5 columns in the table
  expect(columns.length).toBe(13);
  expect(cells.length).toBe(104); //verifies that there are 117 cells in the table

  //display all the data in the table
  for (let cell of cells) {
    console.log(await cell.textContent());
  }

  //create another test fubction
  test("Another Web Tables Test", async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/web-tables");
    let table = page.locator("//table[@id='ct100_MainContent_orderGrid']");

    let rows = await table.locator("tr").all();
    //create a loop. that can print each cells data of each row
    // for (let row of rows) {
    //   let cells = await row.locator("td").all();
    //   for (const cell of cells.slice(1, -1)) {
    //     console.log(await cell.textContent());
    //   }
    // }

    //checkboxes practice

  });

   test("Another Web Tables Test2", async ({ page }) => {
     await page.goto("https://the-internet-5chk.onrender.com/web-tables");
     
     let table = page.locator("//table[@id='ct100_MainContent_orderGrid']");

     let checkboxes = await table.locator("//input[@type='checkbox']").all();
    
     for (let checkbox of checkboxes) {
       await checkbox.check();
       await expect(checkbox).toBeChecked();
     }

   });
});
