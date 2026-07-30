/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
*/


import { test, expect } from '@playwright/test';

test('Verify that all the locators are working properly', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // getByText
    const forgotPasswordLink = page.getByText('Forgot your password?');
    await expect(forgotPasswordLink).toBeVisible();

    const forgotPasswordText = await forgotPasswordLink.textContent();
    console.log('Forgot Password link text is:', forgotPasswordText);

    //getByTitle
   /// const forgotPasswordTitle = page.getByTitle('OrangeHRM').textContent();
    //console.log('Forgot Password link title is:', forgotPasswordTitle);

    // getByAltText
    const hrmLogo = page.getByAltText('company-branding');
    await expect(hrmLogo).toBeVisible();

    // getByPlaceholder
    const usernameInput = page.getByPlaceholder('Username');
    const passwordInput = page.getByPlaceholder('Password');

    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();

    await usernameInput.fill('Admin');
    await passwordInput.fill('admin123');

    // getByRole
    const loginButton = page.getByRole('button', { name: 'Login' });
    await expect(loginButton).toBeVisible();

    await loginButton.click();
});