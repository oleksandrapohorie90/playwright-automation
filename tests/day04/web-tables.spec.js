import { expect, test } from "@playwright/test";

test("Web Tables Test", async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/web-tables");

  let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");
  //await page.waitForTimeout(10000);

  let rows = await table.locator("tr").all(); //stored all the rows of the table in a variable called rows

  let columns = await table.locator("//th").all(); //stored all the columns of the table in a variable called columns

  let cells = await table.locator("td").all(); //stored all the cells of the table in a variable called cells

  expect(rows.length).toBe(9); //verifies that there are 9 rows in the table
  expect(columns.length).toBe(13);
  expect(cells.length).toBe(104); //verifies that there are 117 cells in the table

  //display all the data in the table
  for (let cell of cells) {
    console.log(await cell.textContent());
  }
});

// create another test function
test("Another Web Tables Test", async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/web-tables");
  let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

  let rows = await table.locator("tr").all();
  //create a loop that can print each cell's data of each row
  //we start from 1 because the first row is the header row and we want to skip it,
  //and we end at length-1 because the last row is empty and we want to skip it as well
  for (let row of rows) {
    let cells = await row.locator("td").all();
    if (cells.length > 2) {
      for (let i = 1; i < cells.length - 1; i++) {
        console.log(await cells[i].textContent());
      }
      console.log("***************");
    }
  }
});

test("Another Web Tables Test2", async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/web-tables");

  let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

  //I call locator table on the table because I want to find the checkboxes that are inside the table,
  //so I need to locate the table first and then find the checkboxes inside it
  let checkboxes = await table.locator("//input[@type='checkbox']").all();

  for (let checkbox of checkboxes) {
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }
});
