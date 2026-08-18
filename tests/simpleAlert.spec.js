import { test, expect } from '@playwright/test';

test('Practices Alerts', async ({ page }) => {

    const baseURL = "https://testautomationpractice.blogspot.com/";

    await page.goto(baseURL);

    // =========================
    // Confirmation Alert
    // =========================

    page.once('dialog', async dialog => {

        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('Press a button!');

        await dialog.accept();
    });

    await page.click('#confirmBtn');

    await expect(page.locator('#demo'))
        .toHaveText('You pressed OK!');


    // =========================
    // Prompt Alert
    // =========================

    page.once('dialog', async dialog => {

        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('Please enter your name:');

        await dialog.accept('I am Superman !');
    });

    await page.click('#promptBtn');

});