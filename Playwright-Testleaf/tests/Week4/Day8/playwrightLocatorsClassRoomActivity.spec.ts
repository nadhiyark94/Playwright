
import { test } from "@playwright/test";

/* 
test(`Learn playwright locators`,async ({page}) => {

await page.goto(`https://login.salesforce.com/?locale=in`);


await page.getByAltText("Salesforce").isVisible();


await page.getByRole("textbox",{name:"Username"}).fill(`dilipkumar.rajendran@testleaf.com`);
//await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")


await page.getByText("Username",{exact:true}).fill(`dilipkumar.rajendran@testleaf.com`)


await page.getByRole("textbox",{name:"Password"}).fill(`TestLeaf@2025`);


await page.getByRole("button",{name:"Log In"}).click();


await page.getByTitle("App Launcher",{exact:true}).click();


await page.getByRole("button",{name:"View All Applications"}).click();


await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Leads")


await page.waitForTimeout(3000)


}) */

test(`Leaf Taps application`,async({page})=>{
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
await page.getByRole("textbox",{name: "Username"}).fill(`democsr2`);

await page.getByLabel("password").fill(`crmsfa`);



await page.locator(`//input[@class="decorativeSubmit"]`).click();


await page.getByText("CRM/SFA",{exact:true}).click();


await page.getByText("Create Lead",{exact:true}).click();



await page.getByText("Company Name",{exact:true}).nth(1).fill(`Testleaf`);


await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(`Ravindran`);


await page.locator(`//input[@id="createLeadForm_lastName"]`).fill("R");

await page.getByAltText("Get help from an opentaps Partner").isVisible()

/* -> Find any element whose text contains the word anywhere
^ -> start of text
$ -> end of text
i -> case-insensitive
*/

})