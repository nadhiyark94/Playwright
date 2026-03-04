import { test } from "@playwright/test";

test.only(`Test to Handle alerts/dialogs using page.on`,async ({page}) => {
await page.goto(`https://www.canarabank.bank.in/pages/net-banking`);
page.on("dialog",async(alert)=>{

const message = alert.message(); 
console.log("Confirmation msg is", message); 

const alertType=alert.type()
console.log("Alert Type is", alertType); 

if(alertType==="confirm")
{
await alert.accept()
}
else{
    await alert.dismiss()
}

})

await page.locator(`//a[@id='netbanking-link']`).click()
await page.waitForTimeout(3000)
})