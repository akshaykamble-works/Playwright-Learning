import { test, expect } from '@playwright/test';
test('Verify user can create a new account', async ({ page }) => {

    await page.goto('https://www.facebook.com/');
    const createNewAccountButton= page.locator('text=Create new account');
   // await expect (page.createNewAccountButton).toBeVisible();// Verify that the "Create new account" form is visible
    
    await createNewAccountButton.click();// Click on the "Create new account" button
    


});