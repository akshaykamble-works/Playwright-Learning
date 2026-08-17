import { test, expect } from "@playwright/test";

test('Handling Dropdown', async ({ page }) => {

    const URL = "https://testautomationpractice.blogspot.com/";
    await page.goto(URL);

    // Select dropdown
    const dropdown = page.locator('#country');

    // Locate all options
    const allOptions = page.locator('#country option');

    // Printing count of all options
    const optionCount = await allOptions.count();

    console.log("List of options in dropdown:", optionCount);

    // Select India
    await dropdown.selectOption({ label: 'India' });

    // Print all options
    for (let i = 0; i < optionCount; i++) {

        const optionName = await allOptions.nth(i).textContent();

        console.log(`Option ${i + 1}: ${optionName?.trim()}`);

        // select sepecifc value dropdown
        if(optionName=="Japan")
        {


            await page.locator("#country").selectOption({value:"japan"})
        }
    }

 await page.waitForTimeout(2000);
});