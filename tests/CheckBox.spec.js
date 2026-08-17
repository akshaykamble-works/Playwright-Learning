import { test, expect } from '@playwright/test';

test('Verifying the Checkbox and Multiple Checkboxes', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Handling single checkbox
    const checkbox1 = page.locator('//input[@type="checkbox" and @value="monday"]');

    await expect(checkbox1).toBeVisible(); // to check if the checkbox is visible
    await expect(checkbox1).toBeEnabled(); // to check if the checkbox is enabled

    // Check the checkbox
    await checkbox1.check(); // to check the checkbox
    await expect(checkbox1).toBeChecked(); // to verify if the checkbox is checked

    // Uncheck the checkbox
    await checkbox1.uncheck(); // to uncheck the checkbox
    await expect(checkbox1).not.toBeChecked(); // to verify if the checkbox is unchecked

    // Handling multiple checkboxes
    const checkBoxes = [
        '//input[@type="checkbox" and @value="tuesday"]',
        '//input[@type="checkbox" and @value="wednesday"]',
        '//input[@type="checkbox" and @value="thursday"]',
        '//input[@type="checkbox" and @value="friday"]',
        '//input[@type="checkbox" and @value="saturday"]',
        '//input[@type="checkbox" and @value="sunday"]'
    ];
    for (const checkboxLocator of checkBoxes) {
        await page.locator(checkboxLocator).check(); // to check the checkbox
        await expect(page.locator(checkboxLocator)).toBeChecked(); // to verify if the checkbox is checked
    }
    // Handling multiple checkboxes to uncheck
    for (const checkboxLocator of checkBoxes) {
        await page.locator(checkboxLocator).uncheck(); // to uncheck the checkbox
        await expect(page.locator(checkboxLocator)).not.toBeChecked(); // to verify if the checkbox is unchecked

    }
    // Second way to handle multiple uncheck the checkboxes
    for (const checkboxLocator of checkBoxes) {
        if (await page.locator(checkboxLocator).isChecked()) {
            await page.locator(checkboxLocator).uncheck(); // to uncheck the checkbox
            await expect(page.locator(checkboxLocator)).not.toBeChecked(); // to verify if the checkbox is unchecked

        }
    }
});