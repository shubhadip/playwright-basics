// @ts-nocheck
const { test, expect } = require('@playwright/test');

test.describe("user interaction test cases", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("http://localhost:5173")
    })
    test("should toggle modal", async ({page}) => {
        await page.getByRole('button', {
            name: 'Add Task'
        }).click()

        const locator = page.locator('.backdrop');
        expect(locator).toBeTruthy()
        
        const mlocator = page.locator('.modal');
        expect(mlocator).toBeTruthy()
        expect(mlocator).toContainText('Title')
        expect(mlocator).toContainText('Summary')
        expect(mlocator).toContainText('Category')
        
        const flocator = page.locator('form');
        expect(flocator).toBeTruthy()
        expect(flocator).toHaveId('new-task-form')

        await locator.dispatchEvent('click')
        expect(mlocator).toBeHidden()

    });

    test("cancel button clicked", async ({page}) => {
        await page.getByTestId("start-add-task-button").click()
				// await page.locator("[data-cy='start-add-task-button']").click()
        const locator = page.locator('#cancel-btn');
        await locator.click()
        
        const blocator = page.locator('.backdrop');
        const mlocator = page.locator('.modal');
        await expect(blocator).toHaveCount(0)
        await expect(mlocator).toHaveCount(0)

    })
});