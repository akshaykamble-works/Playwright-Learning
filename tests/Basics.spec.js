import { test, expect } from '@playwright/test';

// Verify Page Title

test("Home Page Test", async ({ page }) => {

    // Navigate to OrangeHRM Login Page
    await page.goto(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // Get page title
    let title = await page.title();

    console.log("Page Title :", title);

    // Validate page title
    await expect(page).toHaveTitle(title);
});


// Verify Page URL

test("Page URL", async ({ page }) => {

    // Navigate to OrangeHRM Login Page
    await page.goto(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // Validate current URL
    await expect(page).toHaveURL(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
});


// test.only()
// Executes only this test case.
// All other tests will be ignored.

test.only("Page URL 1", async ({ page }) => {

    // Navigate to OrangeHRM Login Page
    await page.goto(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // Validate current URL
    await expect(page).toHaveURL(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
});


// Notes:

// test.only()
// Runs only selected test case.

// test.skip()
// Skips a test case.

// page.goto()
// Opens application URL.

// page.title()
// Returns page title.

// expect()
// Used for validation/assertion.

// toHaveTitle()
// Validates page title.

// toHaveURL()
// Validates page URL.

// Default Test Timeout = 30 Seconds

// Default Assertion Timeout = 5 Seconds

// Playwright provides Auto-Waiting
// so explicit waits are usually not required.