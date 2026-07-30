import { test, expect } from '@playwright/test';

// page.goto()
// Used to navigate to the specified URL.

// page.waitForTimeout()
// Static wait.
// Pauses execution for specified milliseconds.
// Not recommended in real projects.
// Prefer Playwright auto-waiting and assertions.

// page.title()
// Returns the title of the current web page.

test("Test Demo", async ({ page }) => {

    // Navigate to OrangeHRM Login Page
    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    // Wait for 2 seconds
    await page.waitForTimeout(2000);

    // Capture page title
    let pageTitle = await page.title();

    // Print title in console
    console.log("Page Title :", pageTitle);

    // Validate page title
    await expect(page).toHaveTitle(pageTitle);

});

// Notes:

// Default Assertion Timeout = 5 Seconds

// Example:
// await expect(page).toHaveTitle("OrangeHRM");

// Default Test Timeout = 30 Seconds

// page.title()
// Returns current page title as String.

// Output Example:
// Page Title : OrangeHRM