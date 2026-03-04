
import { HomePage } from "./03-homePage";



export class AccountsPage extends HomePage{

    async clickCreateAccountMenu(){
        await this.lppage.locator(this.selectorsAccountsPage.createAccountMenu).click()           
    
    }



    public selectorsAccountsPage = {
    "createAccountMenu":"//a[text()='Create Account']",
    }
}