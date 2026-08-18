import { test, expect } from '@playwright/test';

test('Handling Auto Suggestion', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    const searchBox = page.getByPlaceholder('Search Amazon.in');

    await searchBox.fill('mobile');

    // Locate visible autocomplete suggestions
    const suggestions = page.locator(
        '#sac-autocomplete-results-container [role="option"]'
    );

    // Wait for suggestions
    await expect(suggestions.first()).toBeVisible();

    const count = await suggestions.count();

    console.log('Total suggestions:', count);

    for (let i = 0; i < count; i++) {

        const suggestion = suggestions.nth(i);

        const text = await suggestion.textContent();

        console.log(`Option ${i + 1}: ${text?.trim()}`);

        if (text?.toLowerCase().includes('under 10000 5g phone')) {

            await suggestion.click();
            break;
        }
    }
});