import{expect, test} from "@playwright/test"

test(`Acquire the skills to identify, interact with, and manipulate iframes within web pages using Playwright.`, async({page})=>
{
    await page.goto(`https://leafground.com/frame.xhtml`)

    //1.Interact with the Click Me button inside frame
    const frame= page.frameLocator(`//iframe[@src="default.xhtml"]`)

    await frame.locator(`//button[text()='Click Me']`).first().click()
     const buttonText=await frame.locator(`//button[text()='Hurray! You Clicked Me.']`).innerText()

     expect.soft(buttonText).toEqual('Hurray! You Clicked Me.')

     //2.Get the total count of frames present in the page

     const frames= page.frames()
     const farmesCount=frames.length
     console.log(`Frames count: ${farmesCount}`)

     //3. Interact with the Click Me button present inside the nested frames

     const frame1=page.frameLocator(`//iframe[@src='page.xhtml']`)
     const nesetedFrame= frame1.frameLocator(`[id='frame2']`)
               await nesetedFrame.locator(`#click`).click()

     await expect(nesetedFrame.locator(`#click`)).toHaveText(`Hurray! You Clicked Me.`)
}
     
     )