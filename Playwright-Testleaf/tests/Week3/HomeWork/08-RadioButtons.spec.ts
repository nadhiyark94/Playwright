import{test,expect} from "@playwright/test"

test(`Leafground Radio Button`,async({page})=>
{
 //1. Navigate to https://leafground.com/radio.xhtml 
   await page.goto("https://leafground.com/radio.xhtml ");

   //2. Identify and assert the default selected radio button.

await expect(page.locator(`(//h5[text()='Find the default select radio button']/parent::div//label)[3]`)).toBeEnabled();

//3. Click your most favorite browser and assert that the browser is enabled. 
await page.locator(`(//label[text()='Chrome'])[1]`).click()
await expect(page.locator(`(//label[text()='Chrome'])[1]`)).toBeEnabled();

//4. Click one of the cities.
await page.locator(`(//label[text()='Chennai'])[1]`).click()

//5. Select the age group. Assert the default selected button.
await page.locator(`(//label[text()='21-40 Years'])[1]`).click()
await expect(page.locator(`(//h5[text()='Find the default select radio button']/parent::div//label)[3]`)).toBeEnabled();

await page.waitForTimeout(3000)
}
)
