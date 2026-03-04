

import { chromium, test } from "@playwright/test";

test(`Test to learn CSS Selectors`, async ({ page }) => { // {page}--> page    

    // const browser = await chromium.launch()
    // const context = await browser.newContext()
    // const page = await context.newPage()

    await page.goto(`http://leaftaps.com/opentaps/control/main`)

//Option1: await page.locator(`input[id="username"]`).fill(`democsr2`) // input[id="username"] --> unique web elemnt to interact with username text box
  
//Option2: await page.locator(`#username`).fill(`democsr2`)

//Option3: await page.locator(`.inputLogin`).nth(0).fill(`democsr2`)

    await page.locator(`.inputLogin`).first().fill(`democsr2`) // Option4

//Using Axes (Advanced Relative Xpath Example)
//  await page.locator(`//label[text()='Password']/preceding::input`).fill(`demoCSR2`)

//Option1: await page.locator(`input[id="password"]`).fill(`crmsfa`) // input[id="password"] --> unique web elemnt to interact with password text box
  
//Option2: await page.locator(`#passord`).fill(`crmsfa`)

//Option3: await page.locator(`.inputLogin`).nth(1).fill(`crmsfa`)

    await page.locator(`.inputLogin`).last().fill(`crmsfa`) // Option4

    await page.locator(`input[class="decorativeSubmit"]`).click()
    await page.locator(`.decorativeSubmit`).click()

    await page.waitForTimeout(3000)
})