import{test,expect,chromium} from "@playwright/test"
test(`PVR Cinemas ticket booking`, async()=>
{
    const browser= await chromium.launch()
    const context = await browser.newContext({
        geolocation:{latitude: 13.0827, longitude: 80.2707},
            permissions: ['geolocation']}
        
    );

    const page =await context.newPage()

    await page.goto(`https://www.pvrcinemas.com?skipLogin=true`)
    await page.locator(`//input[@placeholder='Search...']/ancestor::div[@class='search-main-box pointer']/following-sibling::div[1]`).click()
    await page.locator(`//div[@class="cities-names"]/span[text()='Chennai']`).click()
    await page.locator(`//span[text()='Cinema']`).click()
    await page.locator(`//div[@id='cinema']`).click()
 
     await page.locator(`//li[@class='p-dropdown-item'][1]`).click()
        //await page.locator(`//span[text()='Select Date']`).click()
   
                  await page.locator(`(//li[@class='p-dropdown-item']/span)[1]`).click()
                                    //await page.locator(`(//li[@class='p-dropdown-item']/span)[1]`).click()

                  await page.locator(`(//li[@class='p-dropdown-item']/span)[1]`).click()
                  await page.locator(`(//li[@class='p-dropdown-item']/span)[1]`).click()
                                    await page.locator(`//div[@class="d-flex quick-booking-from"]/div/button`).click()
                                    await expect(page.locator(`//button[text()='Accept']`)).toBeVisible()
                                  await page.locator(`//button[text()='Accept']`) .click()

                                   const seats= await page.locator(`//td[@class='seats-col']/span`)
                                   const seatsCount= await seats.count()

                                   for(let i=0;i<seatsCount;i++)
                                   {
                                    
                                   const seat=seats.nth(i)
                                  
                                  if(await seat.isEnabled())
                                  {
                                   //await expect(seat).toBeVisible()

                                     await seat.click();
                                    break;
                                  }
                                   }

/* await expect (page.locator(`(//li[@class='p-dropdown-item']/span)[1]`)).toBeVisible()

const seatInfo =await page.locator(`(//li[@class='p-dropdown-item']/span)[1]`).innerText()
const seatNum =await page.locator(`(//li[@class='p-dropdown-item']/span)[1]`).innerText()

const bookedSeatNum=seatInfo.concat(seatNum)
console.log(bookedSeatNum)  */
                                    

await page.locator(`//button[text()='Proceed']`).click()



     


}

)