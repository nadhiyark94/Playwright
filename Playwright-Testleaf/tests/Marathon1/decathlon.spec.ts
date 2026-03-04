import{test,expect} from "@playwright/test"

test(`Decathlon Product Search and Add to Cart`,async({page})=>{

   await page.goto(`https://www.decathlon.in/`)

   await expect(page).toHaveURL(`https://www.decathlon.in/`)
   await expect(page).toHaveTitle(`Buy Sporting Goods, Sportswear and Equipments | Download App`)
   await expect(page.locator(`//span[text()='Search for  ']`).first()).toBeEnabled()
   await page.locator(`//span[text()='Search for  ']`).first().click()
      await page.locator(`//input[@placeholder="Search For 60+ Sports and 6000+ Products"]`).first().fill(`shoes`)
      await page.locator(`//input[@placeholder="Search For 60+ Sports and 6000+ Products"]`).first().press(`Enter`)
      await expect(page).toHaveTitle(`Search | shoes`)
       await page.locator(`//span[text()='Gender']/following::li`).first().click()
           await page.locator(`//span[contains(text(),'Uk 10.5')]`).click()
           await page.locator(`//span[contains(text(),'Running')]`).click()
            await page.locator(`//ul[@class='ais-InfiniteHits-list']/li`).first().click()

})