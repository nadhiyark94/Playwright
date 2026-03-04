

import {test} from "@playwright/test"
import {LoginPage} from "./01-loginPage"


test(`Login page functionality`,async ({page}) => {
    
    const login = new LoginPage(page) // Created an object to call all the methods / actionables

await login.loadurl();
await login.enterCrdentials();
await login.clickLogin();
})