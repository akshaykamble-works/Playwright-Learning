import { test, expect } from "@playwright/test";

test('Handling Simple Alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Handle alert
    page.on('dialog', async dialog => {

        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('I am an alert box!');

        await dialog.accept();
    });

    const alert = page.locator("//button[text()='Simple Alert']");

    await alert.click();
});


test('Handling Confirmation Alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Handle confirmation dialog
    page.on('dialog', async dialog => {

        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('Press a button!');

        await dialog.accept();
    });

    const confirmationAlert = page.locator(
        "//button[text()='Confirmation Alert']"
    );

    await confirmationAlert.click();
});

// npx playwright test tests/Alters.spec.js --debug