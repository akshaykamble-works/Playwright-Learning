import { test,expect } from "@playwright/test";
 test('Practices Handling Alerts',async({page})=>{
const baseURL="https://demoqa.com/alerts"
await page.goto(baseURL);

page.on('dialog', async dailog=>{
dailog.accept();
})
await page.click('#confirmButton');
await page.waitForTimeout(5000);
await page.close();

 });
 //npx playwright test tests/alerts.spec.js --debug