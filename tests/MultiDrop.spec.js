import { test, expect } from '@playwright/test';

test('Multiple Select DropDown', async ({ page }) => {

    const url = "https://testautomationpractice.blogspot.com/";
    await page.goto(url);

    // =========================
    // Colors dropdown
    // =========================

    const colorDropdown = page.locator('#colors');
    const colorOptions = page.locator('#colors option');

    // Select multiple colors
    await colorDropdown.selectOption([
        'Green',
        'Blue',
        'White',
        'Yellow',
        'Red'
    ]);

    // Verify total options
    await expect(colorOptions).toHaveCount(7);

    const colorCount = await colorOptions.count();

    console.log("Total Colors:", colorCount);

    // Print all colors
    for (let i = 0; i < colorCount; i++) {

        const colorName = await colorOptions.nth(i).textContent();

        console.log(`Color ${i + 1}: ${colorName?.trim()}`);
    }


    // =========================
    // Animals dropdown
    // =========================

    const animalsDrop = page.locator('#animals');
    const animalsOptions = page.locator('#animals option');

    // Select multiple animals
    await animalsDrop.selectOption([
        'Cheetah',
        'Deer',
        'Dog',
        'Elephant',
        'Giraffe',
        'Fox'
    ]);

    const animalCount = await animalsOptions.count();

    console.log("============================================");
    console.log("Total Animals:", animalCount);

    // Print all animals
    for (let i = 0; i < animalCount; i++) {

        const animalName = await animalsOptions.nth(i).textContent();

        console.log(`Animal ${i + 1}: ${animalName?.trim()}`);
    }

});