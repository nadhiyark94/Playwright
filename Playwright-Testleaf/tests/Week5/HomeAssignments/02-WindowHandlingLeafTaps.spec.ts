import{test,expect} from "@playwright/test"

test(`Window Handling`,async({page,context})=>
{

  await page.goto(`http://leaftaps.com/opentaps/control/main`)
    await page.locator(`//input[@id='username']`).fill(`Demosalesmanager`)
    await page.locator(`//input[@id='password']`).fill(`crmsfa`)
    await page.locator(`//input[@class="decorativeSubmit"]`).click()
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click()
    await page.locator(`//a[text()='Leads']`).click()
     await page.locator(`//a[text()="Merge Leads"]`).click();
     const [childPage] = await Promise.all([context.waitForEvent('page'), page.locator(`//img[@src='/images/fieldlookup.gif']`).nth(0).click()]);

//Select the first resulting lead id 
await childPage.locator(`//a[@class='linktext']`).nth(0).click();
await page.bringToFront();

//Click To Lead widget 
const [childPage2] = await Promise.all([context.waitForEvent('page'), page.locator(`//img[@src='/images/fieldlookup.gif']`).nth(1).click()]); // array of promise resolved
//Here the pages are captured usiung the concept called destructuring of array to resolve the promise of all the actions performed

//Select the second resulting lead id 
await childPage2.locator(`(//a[@class='linktext'])[5]`).click();
await page.bringToFront();
  
//Get the message and type of the alert 
page.on("dialog",async(alert)=>{

const message = alert.message(); //.message() inbuilt method to get the message out from the alert
console.log(message); 
// accept() => Ok and dismiss() => cancel both are inbuilt methods

const alertType = alert.type(); // .type() inbuilt method to get the type of the alert and to handle it accordingly using an if condition
console.log(`The type of the alert is ${alertType} `);

if(alertType==="confirm"){
await alert.accept()
}else if(alertType==="prompt"){
await alert.accept("Testleaf")
}else
await alert.dismiss(); // any other alerts other than "confirm" or "prompt" will be handled here and dismissed
}) 

//Click Merge button 
await page.locator(`//a[text()='Merge']`).click();
}

)