
import { test } from "@playwright/test";

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


test(`Create Lead`, async ({ request }) => {

    const response = await request.post(`${inst_url}/services/data/v59.0/sobjects/Opportunity/`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization":`${tokenType} ${token}` // Bearer AccesToken
            },
            data: {

               "CloseDate":"2025-03-15",
                 "StageName":"Prospecting",
                 "Name":"Nadhiya"
            }

        }
    )
    const responseBody = await response.json() // deserialization
    console.log(responseBody);

    id = responseBody.id



})


test(`Fetch Lead`, async ({ request }) => {

    const response = await request.get(`${inst_url}/services/data/v59.0/sobjects/Opportunity/${id}`,
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


test(`Update Lead`, async ({ request }) => {

    const response = await request.patch(`${inst_url}/services/data/v59.0/sobjects/Opportunity/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization":`${tokenType} ${token}` // Bearer AccesToken
            },
            data: {
                "CloseDate":"2025-03-15",
                "StageName":"Prospecting",
                "Name":"Nadhiya",
                 "Type": "New Customer"
            }

        }
    )
   /*  const responseBody = await response.json() // deserialization
    console.log(responseBody); */

    



})
test(`Delete Lead`, async ({ request }) => {

    const response = await request.delete(`${inst_url}/services/data/v59.0/sobjects/Opportunity/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization":`${tokenType} ${token}` // Bearer AccesToken
            }

        }
    )
 /*    const responseBody = await response.json()
    console.log(responseBody);
 */



})


})






/* Note :
When we create a incident or Lead we will have "data" in post()
When we need generate the access token we need to have "form" */