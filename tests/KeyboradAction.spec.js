import { test, expect } from '@playwright/test'
test('Keyborad actions', async ({ page }) => {
    await page.goto("https://gotranscript.com/text-compare");
    const box1 = await page.getByPlaceholder('Paste one version of the text here.');

    const box2 = await page.getByPlaceholder('Paste another version of the text here.');
    await box1.fill('Welcome to the playwright training !!!');

    //control +A
    await page.keyboard.press('Meta+A');

    // Copy controll +C
    await page.keyboard.press('Meta+C');

    // Move to next element
    await page.keyboard.down('Tab');

    //control + V Paste

    await page.keyboard.press('Meta+V');

    await page.click('#recaptcha');

    await page.waitForTimeout(5000);




});