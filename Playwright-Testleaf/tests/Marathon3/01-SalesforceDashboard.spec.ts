import{chromium, test,expect} from "@playwright/test"
let token: any
let inst_url: any
let tokenType: any
let id: any

 test.use({storageState:"Data/login_Salesforce.json"})  
test.describe.serial(`Salesforce`, async () => {

test(`Create a Dashboard`, async({page})=>{
    //test.setTimeout(100000);
    await page.goto(`https://orgfarm-687d880ce5-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome`)


   /* await page.goto(`https://login.salesforce.com`)
    
   await page.locator(`#username`).fill(`dilipkumar.rajendran@testleaf.com`)

   await page.locator(`#password`).fill(`TestLeaf@2025`)

    await page.locator(`#Login`).click() */
    await page.locator(`//div[@aria-label="App"]`).click()
    await page.locator(`//button[@aria-label="View All Applications"]`).click({timeout:4000})
    await page.getByPlaceholder('Search apps or items...',{exact:true}).fill(`Dashboard`)
    await page.locator(`//mark[text()='Dashboard']`).click()
    await page.getByText(`New Dashboard`,{exact:true}).click()

   /* option1:
    const frameRef = page.frameLocator(`sfxdash-1771655159787-993153`)
    await frameRef.getByRole("textbox",{name:"Name"}).fill('Sample'); */

    //option2
    await page.frameLocator(`iframe[title='dashboard']`).getByRole("textbox",{name:"Name"}).fill('Salesforce Automation by Nadhiya');
    await page.frameLocator(`iframe[title='dashboard']`).getByRole("button",{name:"Create"}).click();
     await page.frameLocator(`iframe[title='dashboard']`).locator('.slds-form-element').click();
    // await page.locator(`//span[text()='Dashboards List']`).click()
   // await expect(page.locator(`(//p[text()='Recent records']/following::span)[1]`)).toContainText(`Salesforce Automation by Nadhiya`)

})

   
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
    console.log(`INST_url IS${inst_url}`)

})

test(`Fetch Case`, async ({ request }) => {

    const response = await request.get(`${inst_url}/services/data/v65.0/sobjects/Dashboard`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization":`${tokenType} ${token}` // Bearer AccesToken
            }

        }
    )
    const responseBody = await response.json()
    const dashboard=responseBody.recentItems;
        console.log(dashboard)
        console.log(dashboard[0].Id)
        if(dashboard.length>0){
            for(let i=0;i<dashboard.length;i++){
                if(dashboard[i].Title=="Salesforce Automation by Nadhiya"){
                    id=dashboard[i].Id;
                    const response = await request.delete(`${inst_url}/services/data/v65.0/sobjects/Dashboard/${id}`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `${tokenType} ${token}` 
                            }
                        }
                    )
                    console.log(response.status());
                    expect(response.status()).toBe(204)
            
                    console.log(response.statusText());
                    expect(response.statusText()).toBe("No Content")
                }else{
                    console.log("Dashboard is not available on given name");
                }
            }
        }else{
            console.log("No Dashboard is present to delete");
        }
        })
    

    

})