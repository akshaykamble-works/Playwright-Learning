import { test, expect } from '@playwright/test';

test('Frame Handling', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // =====================================================
    // 1. Get all frames
    // =====================================================

    const allFrames = page.frames();

    console.log('Total Frames:', allFrames.length);

    // Print all frame URLs
    for (const frame of allFrames) {
        console.log('Frame URL:', frame.url());
    }


    // =====================================================
    // 2. Using frameLocator() - Recommended
    // =====================================================

    const frame1 = page.frameLocator('iframe').first();

    await frame1
        .locator('[name="mytext1"]')
        .fill('Hello Playwright');


    // =====================================================
    // 3. Using frameLocator() with iframe locator
    // =====================================================

    const frame2 = page.frameLocator('iframe').nth(1);

    await frame2
        .locator('[name="mytext2"]')
        .fill('Welcome Playwright');


    // =====================================================
    // 4. Using page.frame() with URL
    // =====================================================

    const frameByURL = page.frame({
        url: /frame_1/
    });

    if (frameByURL) {
        await frameByURL
            .locator('[name="mytext1"]')
            .fill('Using Frame Object');
    }


    // =====================================================
    // 5. Using frameLocator() with CSS
    // =====================================================

    const frame3 = page.frameLocator('iframe').nth(2);

    await frame3
        .locator('input')
        .first()
        .fill('Playwright');


    console.log('Frame handling completed');
});