import { test, expect } from '@playwright/test'
test('All mouse actions meethods', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const pointMe = await page.locator("//button[text()='Point Me']");
    // Mouse Hover
    await pointMe.hover();
    await page.waitForTimeout(5000);
    const laptoplink = await page.locator("//a[text()='Laptops']");
    await laptoplink.hover();

    //double click
    const copyTextButton = await page.locator("//button[text()='Copy Text']");
    await copyTextButton.dblclick();
    const field2 = await page.locator("#field2");
    // validation
    await expect(field2).toHaveValue('Hello World!');

    //right click
    await pointMe.click({ button: 'right' })

    // Drag and drop
    const draggable = await page.locator("#draggable");
    const droppable = await page.locator("#droppable");
    await draggable.dragTo(droppable);

    await page.waitForTimeout(5000);
    // reload the page

    await page.reload();

    // second approach to drag and drop
    await draggable.hover()
    await page.mouse.down()

    await droppable.hover()
    await page.mouse.up()

    await page.waitForTimeout(5000);
}
);