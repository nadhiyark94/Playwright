
import { test } from "@playwright/test";

import credentials from "../../../Data/login.json"

test.describe.parallel(`Login tests in serial mode`,async () => {
    
for(let data of credentials){

test(`Learn to read data from JSON file ${data.TCaseId}`,async ({page}) => {
    
    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`#username`).fill(data.Username); // demoSalesManager
    await page.locator(`#password`).fill(data.Password);

    await page.locator(`.decorativeSubmit`).click()
})

}
})

/* Internally while for of iteration below test cases get execute :

test(`Learn to read data from JSON file TC001`,async ({page}) => {
    

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`#username`).fill(data.Username); // demoCSR2
    await page.locator(`#password`).fill(data.Password); // crmsfa

    await page.locator(`.decorativeSubmit`).click()
})

test(`Learn to read data from JSON file TC002`,async ({page}) => {
    

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`#username`).fill(data.Username); // demoSalesManager
    await page.locator(`#password`).fill(data.Password); // crmsfa

    await page.locator(`.decorativeSubmit`).click()
})
*/