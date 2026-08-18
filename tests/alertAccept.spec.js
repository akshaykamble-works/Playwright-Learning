import{test,expect} from '@playwright/test';

test('Verifying Alert accept input using accept meethod',async({page})=>{
await page.goto('https://demoqa.com/alerts')
    page.on('dialog',async dialog=>{

        await dialog.accept('Hello');

    });
    await page.click('#promtButton');
    await page.waitForTimeout(6000);
    await page.close();
});