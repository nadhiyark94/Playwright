import {test,expect} from "@playwright/test"
import path from "path"

test(`automate file upload processes in web applications`,async({page})=>{

    await page.goto(`https://login.salesforce.com/`)
    await page.locator(`#username`).fill(`dilipkumar.rajendran@testleaf.com`)

   await page.locator(`#password`).fill(`TestLeaf@2025`)

    await page.locator(`#Login`).click()
    await page.locator(`//div[@aria-label="App"]`).click()
    await page.locator(`//button[@aria-label="View All Applications"]`).click({timeout:4000})


   await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Accounts")

await page.waitForTimeout(3000)
await page.getByRole("link",{name:"Accounts"}).click();

await page.getByRole("button",{name:"New"}).click();
await page.getByRole("textbox", {name:"Account Name"}).fill("TestLeaf");


await page.locator(`button[aria-label="Type"]`).click();
await page.locator(`button[aria-label="Industry"]`).click();
await page.locator(`role=option[name='Banking']`).click();
await page.locator('//button[text()="Save"]').click();

await page.waitForTimeout(3000)
 
const uploadfile = page.locator(`input[type="file"]`)
    await uploadfile.setInputFiles(path.join(__dirname,'../../../Data/learningFileUpload.jpeg'))

    await page.locator(`//span[text()="Done"]`).click();
   
     await expect(page.locator(`(//div[@aria-live='polite']/span)[2]`)).toContainText(`learningFileUpload.jpeg`)

})
