import { test, expect } from '@playwright/test';

test('Verify getByText method', async ({ page }) => {
    await page.goto('https://www.facebook.com/');

    const createAccountButton = page.getByText('Create new account', { exact: true });
    const forgotPasswordLink = page.getByText('Forgot password?', { exact: true });

    await expect(createAccountButton).toBeVisible();
    await expect(forgotPasswordLink).toBeVisible();
});