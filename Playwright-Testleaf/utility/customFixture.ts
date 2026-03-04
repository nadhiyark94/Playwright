import { LoginPage } from "../pages/01-loginPage"
import { WelcomePage } from "../pages/02-welcomePage";
import { HomePage } from "../pages/03-homePage";
import { LeadPage } from "../pages/04-leadPage";
import { CreateLeadPage } from "../pages/05-createLeadPage";
import { ViewLeadPage } from "../pages/06-viewLeadPage";
import { AccountsPage } from "../pages/07-AccountsPage";
import { createAccountsPage } from "../pages/08-createAccountsPage";
import { test as bT } from "@playwright/test"



type myFixture = {
    loginfix: LoginPage,
    welfix: WelcomePage,
    homfix:HomePage,
    leadfix:LeadPage,
    crleadfix:CreateLeadPage,
    vpfix:ViewLeadPage,
    accountfix:AccountsPage,
    cAccountfix:createAccountsPage

}
//bT===test ( bT is another name for test runner)
export const test1 = bT.extend<myFixture>({

    loginfix: async ({ page }, use) => {
        const login = new LoginPage(page);
        await use(login)
    },
    welfix: async ({ page }, use) => {
        const wp = new WelcomePage(page);
        await use(wp)
    },
     homfix: async ({ page }, use) => {
        const hp = new HomePage(page);
        await use(hp)
    },
     leadfix: async ({ page }, use) => {
        const lp = new LeadPage(page);
        await use(lp)
    },
    crleadfix: async ({ page }, use) => {
        const clp = new CreateLeadPage(page);
        await use(clp)
    },
    vpfix: async ({ page }, use) => {
        const vp = new ViewLeadPage(page);
        await use(vp)
    },
     accountfix: async ({ page }, use) => {
        const ap = new AccountsPage(page);
        await use(ap)
    },
     cAccountfix: async ({ page }, use) => {
        const cap = new createAccountsPage(page);
        await use(cap)
    }
})