//POSTMAN API Testing in SERVICE NOW


/*endpoint -https://dev267889.service-now.com/api/now/table/incident
http methods - CRUD - > POST, GET, PATCH,DELETE
Authorization
Headers
Request Body */

import { expect, test } from "@playwright/test"
let id : any
test.describe.serial(`Service_Now`,async () => {

test(`CReating the incident using Playwright API`, async ({ request }) => {

// await page.goto()
const response = await request.post(`https://dev267889.service-now.com/api/now/table/incident`,
{
headers: {
"Authorization": "Basic YWRtaW46JWVCelUka3c1VkM4",
"Content-Type": "application/json"
},
data: { // Request Body
"short_description": "Network issue created through PLAYWRIGHT API"
}

}
)


const responseBody = await response.json(); // deserialization json to object
console.log(responseBody);

id = responseBody.result.sys_id;
console.log(id); 

console.log(response.status()); // 201
expect(response.status()).toBe(201)

console.log(response.statusText()); // CReated
expect(response.statusText()).toBe("Created")

})


test(`Fetching the incident using Playwright API`, async ({ request }) => {

// await page.goto()
const response = await request.get(`https://dev267889.service-now.com/api/now/table/incident/${id}`,
{
headers: {
"Authorization": "Basic YWRtaW46JWVCelUka3c1VkM4",
"Content-Type": "application/json"
}

}
)

const responseBody = await response.json(); // deserialization json to object
console.log(responseBody);


})

test(`Updating the incident using Playwright API`, async ({ request }) => {

// await page.goto()
const response = await request.patch(`https://dev267889.service-now.com/api/now/table/incident/${id}`,
{
headers: {
"Authorization": "Basic YWRtaW46JWVCelUka3c1VkM4",
"Content-Type": "application/json"
},
data: { // Request Body
"short_description": "Network issue created through PLAYWRIGHT API Updated"
}

}
)

const responseBody = await response.json(); // deserialization json to object
console.log(responseBody);

id = responseBody.result.sys_id;
console.log(id); 

console.log(response.status()); 
expect(response.status()).toBe(200)

console.log(response.statusText()); 
expect(response.statusText()).toBe("OK")

})


test(`Deleting the incident using Playwright API`, async ({ request }) => {
// await page.goto()
const response = await request.delete(`https://dev267889.service-now.com/api/now/table/incident/${id}`,
{
headers: {
"Authorization": "Basic YWRtaW46JWVCelUka3c1VkM4",
"Content-Type": "application/json"
}
}
)
console.log(response.status()); 
expect(response.status()).toBe(204)
console.log(response.statusText()); 
expect(response.statusText()).toBe("No Content")
})


})