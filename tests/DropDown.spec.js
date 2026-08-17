import { test, expect } from '@playwright/test';

test('Verify dropdown functionn', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const dropdown = page.locator('#country');
    // Handling dropdown using selectOption with label or Vissble text
    await dropdown.selectOption({ label: 'India' });
    // pause for 2 seconds to see the selected option
    await page.waitForTimeout(2000);

    // Handling dropdown using selectOption with value
    await dropdown.selectOption({ value: 'brazil' });
    // pause for 2 seconds to see the selected option
    await page.waitForTimeout(2000);

    await dropdown.selectOption({ value: 'japan' });
    // pause for 2 seconds to see the selected option
    await page.waitForTimeout(2000);

    // Handling dropdown using selectOption with index
    await dropdown.selectOption({ index: 3 });
    // pause for 2 seconds to see the selected option
    await page.waitForTimeout(2000);

});



test.only('Verify all the options in the dropdown', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const dropdownOptions = page.locator('#country option');

    const optionCount = await dropdownOptions.count();

    console.log("Options in Dropdown :: " + optionCount);

    for (let i = 0; i < optionCount; i++) {

        const dropdownName = await dropdownOptions.nth(i).textContent();

        console.log(`Option ${i + 1}: ${dropdownName?.trim()}`);
// Select specific value from dropdown
        if (dropdownName?.trim() === "India") {
            await page.locator('#country').selectOption({ label: 'India' });
            break;
        }
    }

});