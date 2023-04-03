const { test } = require('@playwright/test');

const BASE_URL = "http://localhost:5173";

test("basic test", async ({ page }) => {
  // Navigate to app
  await page.goto(BASE_URL);

  // Wait for welcome message to appear
  await page.waitForSelector('[test-id="welcome-message"]');
});
