import{chromium, test,expect} from "@playwright/test"

test(`Create Individuals`, async({page})=>{
    //test.setTimeout(100000);

   await page.goto(`https://login.salesforce.com`)
    
   await page.locator(`#username`).fill(`dilipkumar.rajendran@testleaf.com`)

   await page.locator(`#password`).fill(`TestLeaf@2025`)

    await page.locator(`#Login`).click()
    await page.locator(`//div[@aria-label="App"]`).click()
    await page.locator(`//button[@aria-label="View All Applications"]`).click({timeout:4000})
    await page.locator(`//p[text()='Individuals']`).click()
    await page.locator(`//span[text()='Individuals List']`).click()
    await page.locator(`//span[text()='New Individual']`).click()
    await page.locator(`//input[@placeholder='Last Name']`).fill("test@123")
    await page.locator(`//span[text()='Save']`).click()
       const individualName= await page.locator(`//span[@class="uiOutputText"]`).innerText()

       await expect(individualName).toEqual(`test@123`)




})
