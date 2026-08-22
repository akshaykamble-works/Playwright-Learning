import { test } from '@playwright/test';

test('Handling Frame', async ({ page }) => {

    await page.goto(
        'https://demo.automationtesting.in/Frames.html#google_vignette'
    );

    // Get all frames
    const allFrames = page.frames();

    console.log('Total number of frames:', allFrames.length);

    // Locate iframe
    const iframe = page.frameLocator('iframe').first();

    // Locate textbox inside iframe
    const input = iframe.locator('input[type="text"]');

    // Enter text
    await input.fill('Hello');

});

test('Handling Frame 3', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = page.frameLocator('iframe').nth(3);

    await frame3
        .locator('[name="mytext3"]')
        .fill('Playwright');

});