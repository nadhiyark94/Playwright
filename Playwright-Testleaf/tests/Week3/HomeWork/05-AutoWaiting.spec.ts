import{test,expect} from "@playwright/test"
test(`Learn to implement Playwright's auto-waiting features for handling dynamic content efficiently`,async({page})=>
{

    await page.goto(`https://leafground.com/waits.xhtml`)

    //1.Wait for an element to become visible before interacting with it. --Wait for Visibility (1 - 10 Sec)
   await page.locator(`//button[@id="j_idt87:j_idt89"]`).click()
    await expect(page.locator(`//button[@id="j_idt87:j_idt90"]`)).toBeVisible({timeout:11000})
    await expect( page.locator(`//button[@id="j_idt87:j_idt90"]`)).toContainText("I am here")

    //2.Wait for an element to disappear from the page.Wait for Invisibility (1 - 10 Sec)
    await page.locator(`//button[@id='j_idt87:j_idt92']`).click()
     await expect(page.locator(`//button[@id="j_idt87:j_idt93"]`)).toBeHidden({timeout:11000})
       await expect(page.locator(`//button[@id="j_idt87:j_idt93"]`)).toHaveCount(0)   //element is completely removed from DOM

       //3.Wait for an element to become clickable.
    await page.locator(`//button[@id="j_idt87:j_idt95"]`).click()
     await expect(page.locator(`(//p[text()='Message Content'])[3]`)).toBeHidden({timeout:11000})
     //await expect(page.locator(`(//p[text()='Message Content'])[3]`)).toHaveCount(0)
     await page.locator(`//button[@id="j_idt87:j_idt96"]`).click()

     //Check for text changes within an element and respond accordingly. Wait for Text Change (1 - 10 Sec)<I am going to change to Did you Notice>

     await page.locator(`//button[@id="j_idt87:j_idt98"]`).click()
     await expect(page.locator(`//button[@id="j_idt87:j_idt99"]/span`)).toBeVisible({timeout:11000})
      await expect(page.locator(`//button[@id="j_idt87:j_idt99"]/span`)).toContainText(`Did you notice?`)


       

})
