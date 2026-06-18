import { test, expect } from '@playwright/test';

test('Verify navigation between pages', async ({ page }) => {

    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');

    await page.goto('https://www.facebook.com/');
    await expect(page).toHaveTitle(/Facebook/);

    await page.goto('https://www.instagram.com/');
    await expect(page).toHaveTitle(/Instagram/);

    await page.goBack(); // Facebook
    await page.waitForTimeout(2000);

    await page.goBack(); // Google
    await page.waitForTimeout(2000);

    await page.goForward(); // Facebook
    await page.waitForTimeout(2000);

    await page.reload();
await page.close();
});