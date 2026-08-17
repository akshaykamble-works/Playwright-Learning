import { test, expect } from '@playwright/test';

test('Verify multiple links on the page', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    // Find all product links using XPath
    const products = await page.$$('//div[@id="tbodyid"]//h4/a');

    for (const productlink of products) {
        const productName = await productlink.textContent();
        console.log(productName);
    }
});