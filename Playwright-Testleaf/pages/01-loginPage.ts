
/* Actionablities :
1. Loading ur.
2. Enter Credentials
3. Click Login */

import {Page,chromium} from "@playwright/test"
import { PWWrapper } from "../utility/playwrightWrapper"

export class LoginPage extends PWWrapper {

/* async loadurl(url:string){
    await this.lppage.goto(url)
    return this

} */

    async loadurl(url:string)
    {
        await this.startApp(url)
         return this
    }

async enterCrdentials(username:string,password:string){

    // await this.lppage.locator(this.selectors.usernameField).fill(username)
    // await this.lppage.locator(this.selectors.PwdField).fill(password)

    await this.clearAndFill(this.selectors.usernameField,username)
    await this.clearAndFill(this.selectors.PwdField,password)
    return this
}

async clickLogin(){

    await this.lppage.locator(this.selectors.lgbtn).click()
    return this
}


public selectors = {
    "usernameField":"#username",
    "PwdField":"#password",
    "lgbtn":`.decorativeSubmit`
}
}

