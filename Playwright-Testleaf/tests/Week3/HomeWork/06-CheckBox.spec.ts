import{test,expect} from "@playwright/test"
test(`Leafground Checkbox`,async({page})=>
{
await page.goto(`https://leafground.com/checkbox.xhtml`)

 
//Click on the "Basic Checkbox.”
await page.locator(`(//div[@id='j_idt87:j_idt89']/div)[2]`).click()
//await expect(page.locator(`(//div[@id='j_idt87:j_idt89']/div)[2]`)).toBeChecked()


//Click on the "Notification Checkbox."
await page.locator(`(//div[@id="j_idt87:j_idt91"]/div)[2]`).click()
await expect(page.locator(`//span[text()='Checked']`)).toBeVisible()
await expect(page.locator(`//span[text()='Checked']`)).toContainText(`Checked`)
await expect(page.locator(`//span[text()='Checked']`)).toBeHidden({timeout:10000})

await page.locator(`(//div[@id="j_idt87:j_idt91"]/div)[2]`).click()
await expect(page.locator(`//span[text()='Unchecked']`)).toBeVisible()
await expect(page.locator(`//span[text()='Unchecked']`)).toContainText(`Unchecked`)
await expect(page.locator(`//span[text()='Unchecked']`)).toBeHidden({timeout:10000})

await page.locator(`//div[@id="j_idt87:ajaxTriState"]`).click()
await expect(page.locator(`//span[@class='ui-growl-title']/following::p`)).toBeVisible()
await expect(page.locator(`//span[@class='ui-growl-title']/following::p`)).toContainText(`State = 1`)
await expect(page.locator(`//span[@class='ui-growl-title']/following::p`)).toBeHidden({timeout:20000})

await page.locator(`//div[@id="j_idt87:ajaxTriState"]`).click()
await expect(page.locator(`//span[@class='ui-growl-title']/following::p`)).toBeVisible()
await expect(page.locator(`//span[@class='ui-growl-title']/following::p`)).toContainText(`State = 2`)

await page.locator(`//div[@id="j_idt87:ajaxTriState"]`).click()
await expect(page.locator(`//span[@class='ui-growl-title']/following::p`)).toBeVisible()
await expect(page.locator(`//span[@class='ui-growl-title']/following::p`)).toContainText(`State = 0`)



//Choose your favorite language(s)

const section=await page.locator(`//table[@id="j_idt87:basic"]`)

let languages=['Python','Others']

for(const lang of languages)
{

await section.getByText(lang).check()
}


//Click on the "Toggle Switch.Verify that the expected message is displayed.
await page.locator(`//div[@id="j_idt87:j_idt100"]`).click()
await expect(page.locator(`//span[text()='Checked']`)).toBeVisible()
await expect(page.locator(`//span[text()='Checked']`)).toContainText(`Checked`)
//await expect(page.locator(`//span[text()='Checked']`)).toBeHidden({timeout:10000})

//Verify if the Checkbox is disabled
//await expect.soft(page.locator(`//div[@id="j_idt87:j_idt102"]`)).toBeDisabled() //failed

//Select multiple cehckboxes from the dropdown 

await page.locator(`//div[@id="j_idt87:multiple"]`).click()
const section1=await page.locator(`//ul[@class='ui-selectcheckboxmenu-items ui-selectcheckboxmenu-list ui-widget-content ui-widget ui-corner-all ui-helper-reset']`)

let countries=['London','Paris']

for(const country of countries)
{

await section1.getByText(country).check()
}

}
)