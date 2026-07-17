const {test, expect} = require('@playwright/test');



test('Browser context-validating Playwright Test', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("Saadchughtai886@gmail.com");
    await page.locator("#userPassword").fill("Saad@111");
    await page.locator("[value='Login']").click();

    await page.waitForLoadState('networkidle');

    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

});
