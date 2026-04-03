import { test, expect } from "@playwright/test";
import { CommonUI } from "./CommonUI";

test.describe("Payment Plan Page", () => {
  test.beforeEach(async ({ page }) => {
    await CommonUI.login(page);
    await CommonUI.completeStartApplicationStep(page);
  });

  test("step 2 stepper is blue and Step 1 stepper is green", async ({
    page,
  }) => {
    let step1StepperCircle = page.locator(
      "//div[@class='step-circle'][span='1']",
    );
    let step2StepperCircle = page.locator(
      "//div[@class='step-circle'][span='2']",
    );

    await expect(step1StepperCircle).toHaveCSS(
      "background-color",
      "rgb(172, 245, 138)",
    );
    await expect(step2StepperCircle).toHaveCSS(
      "background-color",
      "rgb(1, 201, 255)",
    );
  });

  test("the Next button is disabled by default", async ({ page }) => {
    let nextButton = page.getByRole("button", { name: "Next" });

    await expect(nextButton).toBeDisabled();
  });

  test("the Next button becomes enabled when a payment plan is selected", async ({
    page,
  }) => {
    let upfrontPaymentPlan = page.locator(
      "//span[contains(@class,'mat-content') and .//span[contains(normalize-space(.),'Upfront')]]",
    );
    await upfrontPaymentPlan.click();

    let activeNextBttn = page.locator(
      "//button[contains(@class,'next-button') and text()='Next']",
    );
    await expect(activeNextBttn).toBeEnabled();
  });
});
