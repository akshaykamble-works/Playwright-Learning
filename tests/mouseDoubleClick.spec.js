import { test } from '@playwright/test';

test('Perform mouse actions', async ({ page }) => {

    await page.goto('https://demoqa.com/buttons');

    // 1. Double click
    const doubleClickBtn = page.locator('#doubleClickBtn');

    await doubleClickBtn.dblclick();


    // 2. Right click
    const rightClickBtn = page.locator('#rightClickBtn');

    await rightClickBtn.click({ button: 'right' });

    //3. click
    const clickBtn = page.locator("//button[text()='Click Me']");

    await clickBtn.click();

});