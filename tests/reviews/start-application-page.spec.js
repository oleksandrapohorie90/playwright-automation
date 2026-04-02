import { expect, test } from "@playwright/test";
import { CommonUI } from "./CommonUI";
import { faker } from "@faker-js/faker";

test.describe("Start Application Page @sep01", () => {
  test.beforeEach(async ({ page }) => {
    await CommonUI.login(page);
    await page.waitForTimeout(2000);
  });

  test("Clicking the Terms & Conditions link opens a new Terms & Conditions tab", async ({
    page,
  }) => {
    let popupEvent = page.waitForEvent("popup");

    await page.waitForTimeout(2000);

    let termsLin = page.getByRole("link", { name: "Terms and conditions" });
    await termsLin.click();

    await page.waitForTimeout(2000);

    let termsPage = await popupEvent;

    let termsPageHeader = termsPage.getByRole("heading", {
      name: "Terms and Conditions",
    });

    await expect(termsPageHeader).toBeVisible();
  });

  test("first stepper is blue initially and changes to green once Step 1 is completed", async ({
    page,
  }) => {
    let step1StepperCircle = page.locator(
      "//div[@class='step-circle'][span='1']",
    );

    await expect(step1StepperCircle).toHaveCSS(
      "background-color",
      "rgb(1, 201, 255)",
    );

    await CommonUI.completeStartApplicationStep(
      page,
      faker.person.firstName(),
      faker.person.lastName(),
      faker.internet.email(),
      faker.string.numeric(10),
    );
    await page.waitForTimeout(2000);

    await expect(step1StepperCircle).toHaveCSS(
      "background-color",
      "rgb(172, 245, 138)",
    );
  });

  test("personal input fields are enabled and accept user input", async ({
    page,
  }) => {
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    let email = faker.internet.email();
    let phoneNumber = faker.string.numeric(10);

    await CommonUI.enterPersonalDetails(
      page,
      firstName,
      lastName,
      email,
      phoneNumber,
    );

    let firstNameInput = page.locator("//input[@formcontrolname='firstName']");
    let lastNameInput = page.getByLabel("Last Name");
    let emailInput = page.locator("//input[@formcontrolname='email']");
    let phoneNumberInput = page.locator(
      "//input[@formcontrolname='phoneNumber']",
    );

    await expect(firstNameInput).toHaveValue(firstName);
    await expect(lastNameInput).toHaveValue(lastName);
    await expect(emailInput).toHaveValue(email);
    await expect(phoneNumberInput).toHaveValue(phoneNumber);
  });
});
