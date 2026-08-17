import { test, expect } from '@playwright/test';

test('Handling Input Box and Check Box', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Username
    const userName = page.getByPlaceholder('Enter Name');

    await expect(userName).toBeVisible();
    await expect(userName).toBeEmpty();
    await expect(userName).toBeEnabled();

    await userName.fill('John Doe');

    await expect(userName).toHaveValue('John Doe');

    // Email
    const email = page.getByPlaceholder('Enter EMail');

    await expect(email).toBeVisible();
    await expect(email).toBeEmpty();
    await expect(email).toBeEnabled();

    await email.fill('Test@gmail.com');

    await expect(email).toHaveValue('Test@gmail.com');

    // Radio Button
    const radioButton = page.locator('//input[@type="radio"]').first();

    await expect(radioButton).toBeVisible();
    await expect(radioButton).toBeEnabled();

    await radioButton.check();

    await expect(radioButton).toBeChecked();
});