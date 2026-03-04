
import { test,expect } from "@playwright/test";

let token: any
let inst_url: any
let tokenType: any
let id : any

test.describe.serial(`Salesforce`,async () => {
    
test(`Generate Token`, async ({ request }) => {

    const response = await request.post(`https://login.salesforce.com/services/oauth2/token`,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                  "client_id": "3MVG9VMBZCsTL9hnYaVamF_yN9dU9vnyYTjdMcnDvjqPwwaBINmmrxc5nreM3diNAwBKSsbWXhbOweaL8rdNB",
                "client_secret": "045B87EED90898F6D00920E973955E048E340B15506294A39847C4C824C8E260",
                "username": "ravindran.ramdas@testleaf.com",
                "password": "Ravitestleaf#1234",
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


test(`Create a Case`, async ({ request }) => {

    const response = await request.post(`${inst_url}/services/data/v59.0/sobjects/Case/`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization":`${tokenType} ${token}` // Bearer AccesToken
            },
            data: {
                "status":"Escalated", 
                "Origin":"Email"
            }

        }
    )
    const responseBody = await response.json() // deserialization
    console.log(responseBody);

    id = responseBody.id



})


test(`Fetch Case`, async ({ request }) => {

    const response = await request.get(`${inst_url}/services/data/v59.0/sobjects/Case/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization":`${tokenType} ${token}` // Bearer AccesToken
            }

        }
    )
    const responseBody = await response.json()
    console.log(responseBody);


})


test(`Update Case`, async ({ request }) => {

    const response = await request.patch(`${inst_url}/services/data/v59.0/sobjects/Case/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization":`${tokenType} ${token}` // Bearer AccesToken
            },
            data: {
                "Status":"Working",
                "Priority":"Low",
                 "Origin":"Phone",
                 "SLAViolation__c":"No"
            }

        }
    )
  
})
test(`Delete Case`, async ({ request }) => {

    const response = await request.delete(`${inst_url}/services/data/v59.0/sobjects/Case/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization":`${tokenType} ${token}` // Bearer AccesToken
            }

        }
    )
 console.log(response.status())
  console.log(response.statusText())

   expect(response.status()).toBe(204)
   expect(response.statusText()).toBe(`No Content`)



})


})

