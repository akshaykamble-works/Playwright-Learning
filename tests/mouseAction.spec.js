import{test,expect}from'@playwright/test';
test('Performing Mouse actions',async({page})=>{

await page.goto('https://www.flipkart.com/');
await page.click("//div[text()='Fashion']");
const desktop=await page.locator("//div[text()='Mobiles']");
const mac=await page.locator("//div[text()='Appliances']");

// mouse actions

await desktop.hover();
await mac.hover();

await page.waitForTimeout(5000);

});