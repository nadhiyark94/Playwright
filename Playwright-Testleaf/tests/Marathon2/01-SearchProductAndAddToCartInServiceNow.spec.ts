import {test,expect} from "@playwright/test"

test(`Search Product and Add to Cart in Service Now`, async({page})=>
{

    test.setTimeout(5*60*1000) // override test timeout(entire tc)

   // page.setDefaultTimeout(60000)   //Action timeout , globally inside test



    //1.Launch browser and navigate to Service Now application URL
    await page.goto(`https://dev267889.service-now.com/`)
    //2.Login using valid admin credentials
    await page.locator(`//input[@id="user_name"]`).fill(`admin`)
    await page.locator(`//input[@id="user_password"]`).fill(`%eBzU$kw5VC8`)
     await page.locator(`//button[@id="sysverb_login"]`).click()

     //3.Verify Service Now home page is displayed

  
     //4.Navigate to All → Service Catalog
   await page.getByRole('menuitem',{name:'All'}).click();
     await page.waitForLoadState("domcontentloaded")
     await page.getByRole('link',{name: 'Service Catalog 3 of 23'}).click();

     await page.waitForLoadState("domcontentloaded")
     

    const frameRef= page.frameLocator(`[id="gsft_main"]`)
   await expect( frameRef.locator(`//a[text()='Mobiles']`)).toBeVisible({timeout:90000})  //override expect timeout

   await frameRef.locator(`//a[text()='Mobiles']`).click({timeout:90000})  // override action timeout
await page.screenshot({ path: 'fullpage.png', fullPage: true });

   await frameRef.locator(`(//img[@alt='Request for Apple iPhone 13 pro'])[2]`).click({timeout:60000})
    await frameRef.locator(`//input[@class='cat_item_option radio']/following-sibling::label[text()='No']`).click()
    await frameRef.locator(`(//span[text()='Monthly data allowance']/following::select)[1]`).selectOption({value:"500MB"})

              await frameRef.locator(`//button[@id="oi_order_now_button"]`).click()

await page.screenshot({ path: 'fullpage.png', fullPage: true });




})