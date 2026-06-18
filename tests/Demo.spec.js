import {test,expect} from '@playwright/test'
test('First Test', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});

test('Second Test',async({page})=>{

    await page.goto('https://www.facebook.com/');
    await expect(page).toHaveTitle('Facebook');
});