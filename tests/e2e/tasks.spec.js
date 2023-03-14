// @ts-check
const { test,expect } = require('playwright-test-coverage');

test.describe("basic page", () => {
    test("should render homepage ", async ({page}) => {
        await page.goto('http://localhost:5173');
        const locator = page.locator('main-header img');
        await expect(locator).toBeTruthy()
    });

    test("it should display page title", async ({page}) => {
        await page.goto('http://localhost:5173');
        const locator = page.locator('h1')
        await expect(locator).toHaveText("My Cypress Course Tasks")
    });

    test("to have only 1 h1 tag", async ({page}) => {
        await page.goto('http://localhost:5173');
        const locator = page.locator('h1')
        await expect(locator).toHaveCount(1)
    });

});
