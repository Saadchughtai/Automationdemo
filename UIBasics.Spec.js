const {test, expect} = require('@playwright/test');
const { type } = require('node:os');
const { text } = require('node:stream/consumers');


test('Browser context Playwright Test', async ({browser})=>
{
    
    const context   =   await browser.newContext();
    const page      =   await  context.newPage();
    const userName  =  page.locator('#username');
    const Signin    =  page.locator("#signInBtn");
    const cardTitles=  page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //css
    await userName.fill("rahulshetty");
    await page.locator("[type='password']").fill("Learning@830$3mK2");
    await Signin.click();

    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('');
    //fill
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await Signin.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);


});

test( 'Page Playwright Test', async ({page})=>
{
    
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");


});

test( 'UI Controls', async ({page})=>
{
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName  =  page.locator('#username');
    const Signin    =  page.locator("#signInBtn");
    const DocumentLink = page.locator("[href*='documents-request']");
    const  dropdown =   await page.locator("Select.form-control");
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect ( await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(DocumentLink).toHaveAttribute("class", "blinkingText");


   // await page.pause();




});


test.only ('Child window handle', async ({browser})=>
{
    const context   =   await browser.newContext();
    const page      =   await  context.newPage();
    const userName  =  page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const DocumentLink = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all([
    context.waitForEvent('page'),
     DocumentLink.click(), 
    ])

     const text = await newPage.locator(".red").textContent();
     const arrayText = text.split("@")
     const domain = arrayText[1].split(" ")[0]

    console.log(domain);
    await page.locator('#username').fill(domain);
    //await page.pause(); 
    console.log(await page.locator('#username').inputValue());

});
    