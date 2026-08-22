import { test, expect } from '@playwright/test';

test('Window Handling', async ({ page, context }) => {

    const url =
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

    await page.goto(url);

    // Wait for new tab/window
    const pagePromise = context.waitForEvent('page');

    // Click link that opens a new tab
    await page.getByText('OrangeHRM, Inc').click();

    // Get new tab
    const newPage = await pagePromise;

    // Wait for new page to load
    await newPage.waitForLoadState();

    console.log('New page URL:', newPage.url());

    await expect(newPage).toHaveTitle(/OrangeHRM/);
});





test('Window Handling from one to another', async ({ page, context }) => {

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    // 1. Wait for new tab
    const newPagePromise = context.waitForEvent('page');

    // 2. Click link that opens new tab
    await page.getByText('OrangeHRM, Inc').click();

    // 3. Get new tab
    const newPage = await newPagePromise;

    console.log('New Tab URL:', newPage.url());

});