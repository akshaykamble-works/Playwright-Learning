import{test,expect} from '@Playwright/test'
test('Handling Alert and cancelling alert pop up',async({page})=>{
await page.goto("https://demoqa.com/alerts");

page.on('dailog',async dailog=>{
    dailog.dismiss();
})
await page.click('#promtButton');

});
