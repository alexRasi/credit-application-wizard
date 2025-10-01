import { test, expect } from "@playwright/test";

test.describe("Application Wizard", () => {
  test("Happy path: user completes application flow", async ({ page }) => {
    await page.goto("/");

    await test.step("Fill Personal Info", async () => {
      await expect(page).toHaveURL("/personal-info");
      await page.getByTestId("fullName-input").fill("Alex e2e Test");
      await page.getByTestId("email-input").fill("alex@test.com");
      await page.getByTestId("date-input").fill("25-07-1990");
      await page.getByTestId("cta-button").click();
      await expect(page).toHaveURL("/finances");
    });

    await test.step("Navigate back to ensure data persistence", async () => {
      await page.getByTestId("back-button").click();
      await expect(page).toHaveURL("/personal-info");
      await expect(page.getByTestId("fullName-input")).toHaveValue(
        "Alex e2e Test",
      );
      await expect(page.getByTestId("email-input")).toHaveValue(
        "alex@test.com",
      );
      await expect(page.getByTestId("date-input")).toHaveValue("25-07-1990");
      await page.getByTestId("cta-button").click();
      await expect(page).toHaveURL("/finances");
    });

    await test.step("Fill Finances", async () => {
      await page.getByTestId("income-input").fill("2000");
      await page.getByTestId("employment-part").check();
      await page.getByTestId("terms-checkbox").check();
      await page.getByTestId("cta-button").click();
      await expect(page).toHaveURL("/success");
    });

    await test.step("Success", async () => {
      await expect(page.getByTestId("success-title")).toBeVisible();
      await page.getByTestId("cta-button").click();
      await expect(page).toHaveURL("/applications");
      const record = page.getByTestId("application-data-Alex e2e Test");
      await expect(record).toContainText("2000");
      await expect(record).toContainText("Part time");

      await page.getByTestId("delete-button-Alex e2e Test").click();
      await expect(record).not.toBeVisible();
      await page.getByTestId("cta-button").click();
      await expect(page).toHaveURL("/personal-info");
    });
  });

  test("Validation: shows errors", async ({ page }) => {
    await page.goto("/");

    await test.step("Personal Info errors", async () => {
      await expect(page).toHaveURL("/personal-info");

      // focus and blur to trigger validation
      await page.getByTestId("fullName-input").focus();
      await page.getByTestId("email-input").focus();
      await page.getByTestId("date-input").focus();
      await page.getByTestId("date-input").blur();

      await expect(page.getByText("Full name is required")).toBeVisible();
      await expect(page.getByText("Email is required")).toBeVisible();
      await expect(page.getByText("Date of birth is required")).toBeVisible();

      //fill date with wrong format
      await page.getByTestId("date-input").fill("wrong-format");
      await page.getByTestId("date-input").blur();
      await expect(
        page.getByText("Must be in DD-MM-YYYY format"),
      ).toBeVisible();

      // fill valid data
      await page.getByTestId("fullName-input").fill("Alex e2e Test");
      await page.getByTestId("email-input").fill("alex@test.com");
      await page.getByTestId("date-input").fill("25-07-1990");
      await expect(page.getByText("Full name is required")).not.toBeVisible();
      await expect(page.getByText("Email is required")).not.toBeVisible();
      await expect(
        page.getByText("Date of birth is required"),
      ).not.toBeVisible();
      await page.getByTestId("cta-button").click();
      await expect(page).toHaveURL("/finances");

      // Finances errors
      await page.getByTestId("income-input").focus();
      await page.getByTestId("terms-checkbox").focus();
      await page.getByTestId("terms-checkbox").blur();
      await expect(page.getByText("Income is required")).toBeVisible();
      await expect(
        page.getByText("Terms must be accepted to continue"),
      ).toBeVisible();
      await page.getByTestId("income-input").fill("2000");
      await page.getByTestId("employment-part").check();
      await page.getByTestId("terms-checkbox").check();
      await expect(page.getByText("Income is required")).not.toBeVisible();
      await expect(
        page.getByText("Terms must be accepted to continue"),
      ).not.toBeVisible();
    });
  });
});
