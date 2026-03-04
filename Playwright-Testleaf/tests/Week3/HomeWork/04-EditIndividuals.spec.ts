import{chromium, test,expect} from "@playwright/test"

test(`Create Individuals`, async({page})=>{

   await page.goto(`https://login.salesforce.com`)
    
   await page.locator(`#username`).fill(`dilipkumar.rajendran@testleaf.com`)

   await page.locator(`#password`).fill(`TestLeaf@2025`)

    await page.locator(`#Login`).click()
    await page.locator(`//div[@aria-label="App"]`).click()
    await expect(page.locator(`//button[@aria-label="View All Applications"]`)).toBeEnabled();
    await page.locator(`//button[@aria-label="View All Applications"]`).click()
   await page.locator(`//p[text()='Individuals']`).click()
    await page.locator(`(//span[contains(text(),'Individuals')])[1]`).click()

    await expect(page.locator(`//input[@name='Individual-search-input']`)).toBeVisible()
 await page.locator(`//input[@name='Individual-search-input']`).fill("test@123")
 await page.locator(`//input[@name='Individual-search-input']`).press('Enter')

 //await expect(page.locator(`//a[@title='Show 2 more actions']`)).toBeVisible()

// await page.locator(`//a[@title='Show 2 more actions']`).click()

// await page.locator(`//div[text()='Edit']`).click()
await page.locator(`//a[@class='slds-truncate']`).first().click()
await page.locator(`//div[text()='Edit']`).first().click()
await expect(page.locator(`(//a[@role='combobox'])[1]`)).toBeVisible()

await page.locator(`(//a[@role='combobox'])[1]`).click()
//await page.locator(`(//a[@role='combobox'])[1]`,{hasText:"Mr."}).click()
await page.getByRole('option',{name:'Mr.'}).click()

await page.locator(`//input[@placeholder="First Name"]`).fill("test")

    await page.locator(`//span[text()='Save']`).click()
       const individualName= await page.locator(`//span[@class="uiOutputText"]`).innerText()

       await expect(individualName).toEqual(`test`)




})
