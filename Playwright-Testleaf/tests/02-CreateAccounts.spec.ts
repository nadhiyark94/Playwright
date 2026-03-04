

import dotenv from "dotenv"
import LoginData from "../Data/login.json"
import { test1 } from "../utility/customFixture"


dotenv.config({ path: "Data/qa.env" })


test1(`Create Lead functionality`, async ({ loginfix, welfix, homfix, leadfix, crleadfix, vpfix, accountfix,cAccountfix }) => {

 await loginfix.loadurl(process.env.BaseUrl as string)
 await loginfix.enterCrdentials(LoginData[0].Username, LoginData[0].Password)
 await loginfix.clickLogin()
  await welfix.clickCRM();
    await homfix .clickAccounts()
    await accountfix.clickCreateAccountMenu()
  await cAccountfix.enterMandatoryFields()
  await cAccountfix.clickCreateAccountBtn()

  
  

})