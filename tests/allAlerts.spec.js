import { test, expect } from '@playwright/test';

test('Handle all alerts', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {

        if (dialog.type() === 'alert') {
            await dialog.accept();
        }

        else if (dialog.type() === 'confirm') {
            await dialog.accept();
        }

        else if (dialog.type() === 'prompt') {
            await dialog.accept('Hello');
        }
    });

    // Simple Alert
    await page.click('#alertBtn');

    // Confirmation Alert
    await page.click('#confirmBtn');

    // Prompt Alert
    await page.click('#promptBtn');

    //sequance change
      await page.click('#confirmBtn');
    await page.click('#promptBtn');
     await page.click('#alertBtn');

});