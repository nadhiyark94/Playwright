
import{test,expect} from "@playwright/test"

test(`Automate interactions with frames, trigger alerts, and verify the displayed text based on action`,async({page})=>{

   await page.goto(`https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm`)
   //const frame = page.frameLocator(`#iframeResult`)

page.on('dialog',async(alert)=>{

    const msg= alert.message()
    console.log(`msg:: ${msg}`)
  
expect(alert.type()).toBe(`confirm`)
 alert.accept()
    
})

   const frame = page.frameLocator(`#iframeResult`)
   await frame.locator(`//button[text()='Try it']`).click()
await expect(frame.locator(`//button[text()='Try it']/following-sibling::p`)).toHaveText(`You pressed OK!`)






})