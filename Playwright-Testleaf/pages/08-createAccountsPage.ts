

import { AccountsPage } from "./07-AccountsPage";
import {faker} from "@faker-js/faker"


export class createAccountsPage extends AccountsPage{

    async enterMandatoryFields(){
        await this.lppage.locator(this.selectorsCreateAccountsPage.accountNameField).fill(faker.company.buzzNoun())
              
    
    }
     async clickCreateAccountBtn(){
        await this.lppage.locator(this.selectorsCreateAccountsPage.createAccountBtn).click()
    
    }

    public selectorsCreateAccountsPage=
    {
        "accountNameField":"#accountName",
        "createAccountBtn":"input[value='Create Account']"
    }
}