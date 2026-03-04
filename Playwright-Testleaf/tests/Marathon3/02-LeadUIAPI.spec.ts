
import{chromium, test,expect} from "@playwright/test"
let token: any
let inst_url: any
let tokenType: any
let id: any
let lastName: any

 test.use({storageState:"Data/login_Salesforce.json"})  

test.describe.serial(`Salesforce`, async () => {
    
    test(`Generate Token`, async ({ request }) => {
    
        const response = await request.post(`https://login.salesforce.com/services/oauth2/token`,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
               form: {
                  "client_id": "3MVG9VMBZCsTL9hnYaVamF_yN9dU9vnyYTjdMcnDvjqPwwaBINmmrxc5nreM3diNAwBKSsbWXhbOweaL8rdNB",
                "client_secret": "045B87EED90898F6D00920E973955E048E340B15506294A39847C4C824C8E260",
                "username": "nadhiya.rk94.897fcb231ad4@agentforce.com",
                "password": "Lakshya@2020LBCyTbYuu9IyFHjqXAJvuqbz",
                "grant_type": "password",
            }
            }
        )
        const responseBody = await response.json()
        console.log(responseBody);
    
        token = responseBody.access_token // access token
        inst_url = responseBody.instance_url
        tokenType = responseBody.token_type // Bearer
    
    })
    
    
    test(`Create Lead`, async ({ request }) => {
    
        const response = await request.post(`${inst_url}/services/data/v65.0/sobjects/Lead/`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":`${tokenType} ${token}` // Bearer AccesToken
                },
                data: {
    
                    "Salutation": "Mrs.",
                    "FirstName": "Nadhiya",
                    "LastName": "R K",
                    "Company": "Testleaf/Qeagle"
                }
    
            }
        )
        const responseBody = await response.json() // deserialization
        console.log(responseBody);
    
        id = responseBody.id
    
    
    
    })
    
   
    
    test(`Update Lead`, async ({ request }) => {
    
        const response = await request.patch(`${inst_url}/services/data/v65.0/sobjects/Lead/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":`${tokenType} ${token}` // Bearer AccesToken
                },
                data: {
    
                     "Salutation": "Mrs.",
                    "FirstName": "Nadhiya test",
                    "LastName": "R K",
                    "Company": "Testleaf/Qeagle test"
                }
    
            }
        )
    /*  const responseBody = await response.json() // deserialization
        console.log(responseBody);  */
     
      
    
    
})
 
    test(`Fetch Lead`, async ({ request }) => {
    
        const response = await request.get(`${inst_url}/services/data/v65.0/sobjects/Lead/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":`${tokenType} ${token}` // Bearer AccesToken
                }
    
            }
        )
        const responseBody = await response.json()
        console.log(responseBody);
     lastName=responseBody.Name
            console.log(lastName);
    
    
    
    })
    

 test(`Delete the selected lead`, async ({ page }) => {

    await page.goto(`https://orgfarm-687d880ce5-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome`)
    
         await page.locator(`//div[@aria-label="App"]`).click()
    await page.locator(`//button[@aria-label="View All Applications"]`).click({timeout:4000})
    await page.getByPlaceholder('Search apps or items...',{exact:true}).fill(`Leads`)
  
        await page.getByRole("link", { name: "Leads" }).click();
      
        await page.locator(`//input[@placeholder='Search...']`).press(`Enter`)
        await page.locator(`//input[@placeholder='Search...']`).fill(`R K`)
        await page.locator(`//input[@placeholder='Search...']`).press(`Enter`)
            await page.locator(`(//span[text()='Show Actions'])[1]`).click()
        await page.getByRole("menuitem", { name: "Delete" }).click();
        await page.getByRole("button", { name: "Delete" }).click();
        // await page.waitForTimeout(5000);
        await expect(page.locator(`.toastMessage`)).toContainText(`Lead "${lastName}" was deleted. `);
        await page.waitForTimeout(5000);
    })
})