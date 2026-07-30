import { test, expect } from '@playwright/test';

test('Facebook Registration', async ({ page }) => {
    await page.goto('https://www.facebook.com/');

    // Click Create new account button
    await page.getByRole('button', { name: 'Create new account' }).click();

    // Wait for the registration modal to appear
    await page.waitForSelector('input[name="firstname"]', { state: 'visible' });

    // Fill details
    await page.locator('input[name="firstname"]').fill('Ashwini');
    await page.locator('input[name="lastname"]').fill('Sable');

    // Select DOB
    await page.locator('#day').selectOption('28');
    await page.locator('#month').selectOption('5');
    await page.locator('#year').selectOption('1994');
});