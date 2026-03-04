import { chromium, test,expect } from "@playwright/test";
import leadData from "../../../Data/login.json"

test(`Assignment1`,async({page})=>
{
    await page.goto(`http://leaftaps.com/opentaps/control/main`)
     await page.locator(`#username`).fill(leadData.Username); // demoSalesManager
    await page.locator(`#password`).fill(leadData.Password);
    await page.locator(`//input[@class="decorativeSubmit"]`).click()
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click()
    await page.locator(`//a[text()='Leads']`).click()

    //Assignmnet1- Create Lead
    await page.locator(`//a[text()='Create Lead']`).click()
    await page.locator(`//input[@id='createLeadForm_companyName']`).fill(leadData.CompanyName);
    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(leadData.FirstName)
    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill(leadData.lastName)
    await page.selectOption(`//select[@id='createLeadForm_dataSourceId']`,{label:leadData.Source})
    page.selectOption(`//select[@id="createLeadForm_marketingCampaignId"]`,{value:"DEMO_MKTG_CAMP"})
   
    const dropdown= page.locator(`//select[@id="createLeadForm_marketingCampaignId"]/option`)

      const marketingCampignCount=await dropdown.count()
      console.log(`marketingCampignCount : ${marketingCampignCount}`)
    
    for (let index = 0; index < marketingCampignCount; index++) {
       
        console.log( await dropdown.nth(index).innerText());
    }

        page.selectOption(`//select[@id="createLeadForm_industryEnumId"]`,{index:5})


    page.selectOption(`//select[@id="createLeadForm_currencyUomId"]`,{value:"INR"})
        page.selectOption(`//select[@id="createLeadForm_generalCountryGeoId"]`,{value:"IND"})
 page.selectOption(`//select[@id="createLeadForm_generalStateProvinceGeoId"]`,{value:"IN-AP"})
 const dropdownState= page.locator(`//select[@id="createLeadForm_generalStateProvinceGeoId"]/option`)

      const dropdownStateCount=await dropdownState.count()
      console.log(`dropdownStateCount: ${dropdownStateCount}`)


    await page.locator(`//input[@name='submitButton']`).click()

   


    await page.waitForTimeout(3000)

})

