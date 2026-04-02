export class CommonUI {
//**NOTE as long as you give async keyword it returns promise*/
static async login(page) {
    //encode cred
    let credentials = Buffer.from(
      `${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");
//set as extra header
    page.setExtraHTTPHeaders({
      Authorization: `Basic ${credentials}`,
    });
    //navigate to the application
    await page.goto("https://qa.sep.tdtm.cydeo.com/taws");
  }

}