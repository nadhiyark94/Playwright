//POSTMAN API Testing in SERVICE NOW

/*endpoint -https://dev267889.service-now.com/api/now/table/incident
http methods - CRUD - > POST, GET, PATCH,DELETE
Authorization
Headers
Request Body  */


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

})


test(`Create Lead`, async ({ request }) => {

    const response = await request.post(`${inst_url}/services/data/v65.0/sobjects/Lead/`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization":`${tokenType} ${token}` // Bearer AccesToken
            },
            data: {

                "Salutation": "Mr.",
                "FirstName": "Ravindran",
                "LastName": "RPlaywrightTrainerJanPW",
                "Company": "Testleaf/Qeagle"
            }

        }
    )
    const responseBody = await response.json() // deserialization
    console.log(responseBody);

    id = responseBody.id



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




})


test(`Update Lead`, async ({ request }) => {

    const response = await request.patch(`${inst_url}/services/data/v65.0/sobjects/Lead/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization":`${tokenType} ${token}` // Bearer AccesToken
            },
            data: {

                 "Salutation": "Mr.",
                "FirstName": "Ravindran test",
                "LastName": "RPlaywrightTrainerJanPW",
                "Company": "Testleaf/Qeagle"
            }

        }
    )
   /*  const responseBody = await response.json() // deserialization
    console.log(responseBody); */

    



})
test(`Delete Lead`, async ({ request }) => {

    const response = await request.delete(`${inst_url}/services/data/v65.0/sobjects/Lead/${id}`,
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