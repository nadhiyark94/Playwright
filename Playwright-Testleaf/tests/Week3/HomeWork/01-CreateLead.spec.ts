import { chromium, test,expect } from "@playwright/test";
test(`Assignment1`,async({page})=>
{
    await page.goto(`http://leaftaps.com/opentaps/control/main`)
    await page.locator(`//input[@id='username']`).fill(`Demosalesmanager`)
    await page.locator(`//input[@id='password']`).fill(`crmsfa`)
    await page.locator(`//input[@class="decorativeSubmit"]`).click()
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click()
    await page.locator(`//a[text()='Leads']`).click()

    //Assignmnet1- Create Lead
    await page.locator(`//a[text()='Create Lead']`).click()
    await page.locator(`//input[@id='createLeadForm_companyName']`).fill(`TestLeaf`)
    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(`Nadhiya`)
    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill(`R K`)
    await page.locator(`//input[@name='personalTitle']`).fill(`Mrs`)
    await page.locator(`//input[@id='createLeadForm_generalProfTitle']`).fill(`test`)
    await page.locator(`//input[@id="createLeadForm_annualRevenue"]`).fill(`1000000000000`)
    await page.locator(`//input[@id="createLeadForm_departmentName"]`).fill(`Test`)
    await page.locator(`//input[@id="createLeadForm_primaryPhoneNumber"]`).fill(`1234567890`)
    await page.locator(`//input[@name='submitButton']`).click()

   const companyName= await page.locator(`//span[@id="viewLead_companyName_sp"]`).innerText();
   console.log(companyName);
   

    await expect(companyName).toContain(`TestLeaf`)

    


    await page.waitForTimeout(3000)

})