import { test, expect } from '@playwright/test';

test('Verify CSS locator', async ({ page }) => {
// When we have id with css selectors we can use #idName to locate the element.
    await page.goto('https://www.demoblaze.com/');

    // CSS locator for Login link
    let loginLink = page.locator('#login2');
    await loginLink.click();

    // CSS locator for Username
    let usernameInput = page.locator('#loginusername');
    await usernameInput.fill('testuser');

    // CSS locator for Password
    let passwordInput = page.locator('#loginpassword');
    await passwordInput.fill('testpassword');

    // CSS locator for Login button
    let loginButton = page.locator('button[onclick="logIn()"]');
    await loginButton.click();
});