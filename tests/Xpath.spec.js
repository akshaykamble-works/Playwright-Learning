import{test,expect} from'@playwright/test';
// Xpath locator with attribute
// tagname[@attribute='value']

test('Verify xpath locator with attribute',async({page})=>{
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 // xpath locator with attribute
 const usernameInput=page.locator('//input[@name="username"]');
 await expect(usernameInput).toBeVisible();
 await usernameInput.fill('Admin');
 const passwordInput=page.locator('//input[@type="password"]');
 await expect(passwordInput).toBeVisible();
 await passwordInput.fill('admin123');
 const loginButton=page.locator('//button[@type="submit"]');
 await expect(loginButton).toBeVisible();
 await loginButton.click();


});

test('Verify xpath locator with attribute find',async({page})=>{
await page.goto('https://www.facebook.com/');
const usernameInput=page.locator('//input[@name="email"]');
await expect(usernameInput).toBeVisible();
const passwordInput=page.locator('//input[@name="pass"]');
await expect(passwordInput).toBeVisible();
const loginButton=page.locator("//span[text()='Log in']");
await expect(loginButton).toBeVisible();
await loginButton.click();
});
//npx playwright test tests/example.spec.ts to run the script
