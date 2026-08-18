import { test, expect } from '@playwright/test';

test('Handling Tailwind dropdown', async ({ page }) => {

    await page.goto(
        'https://readymadeui.com/tailwind/component/dropdown-with-checkbox'
    );

    // Find the dropdown button
    const dropdownToggle = page.getByRole('button').first();

    // Open dropdown
    await dropdownToggle.click();

    // Locate checkboxes displayed in the dropdown
    const checkboxes = page.locator('//ul[@id="dropdown-menu"]/li/label/input');

    // Count checkboxes
    const checkboxCount = await checkboxes.count();

    console.log('Total checkbox options:', checkboxCount);



});