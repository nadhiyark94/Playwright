

import { LoginPage } from "./01-loginPage";
import {locators} from "./locators"

export class WelcomePage extends LoginPage{

    async clickCRM(){
        await this.lppage.locator(locators.crmLink).click()
    }



} 