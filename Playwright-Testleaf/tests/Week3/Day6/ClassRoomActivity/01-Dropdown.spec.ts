
import { test } from "@playwright/test";


test(`Test to learn dropdown interaction`,async ({page}) => {

await page.goto(`http://leaftaps.com/opentaps/control/main`);


await page.locator(`//input[@id="username"]`).fill(`democsr2`);


await page.locator(`//input[@id="password"]`).fill(`crmsfa`);


await page.locator(`//input[@class="decorativeSubmit"]`).click();


await page.locator(`//a[contains(text(),'CRM')]`).click();


await page.locator(`//a[text()="Create Lead"]`).click();


await page.locator(`//input[@id="createLeadForm_companyName"]`).fill(`Testleaf`);


await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(`Ravindran`);


await page.locator(`//input[@id="createLeadForm_lastName"]`).fill("R");

await page.pause()

await page.selectOption(`//select[@id='createLeadForm_currencyUomId']`,{value:"AFA"}) // value



const dropdown = page.locator(`//select[@id='createLeadForm_currencyUomId']/option`); 

const dropDownCount = await dropdown.count();

for (let index = 0; index < dropDownCount; index++) {

console.log( await dropdown.nth(index).innerText());

}


await page.waitForTimeout(3000)


})


