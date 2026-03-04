

// import { test } from "@playwright/test"
// import { LoginPage } from "../pages/01-loginPage"
// import { WelcomePage } from "../pages/02-welcomePage";
// import { HomePage } from "../pages/03-homePage";
// import { LeadPage } from "../pages/04-leadPage";
// import { CreateLeadPage } from "../pages/05-createLeadPage";
// import { ViewLeadPage } from "../pages/06viewLeadPage";

// import dotenv from "dotenv"
// import LoginData from "../Data/login.json"

// dotenv.config({path:"Data/qa.env"})


// test(`Login page functionality`, async ({ page }) => {

//     const login = new LoginPage(page) // Created an object to call all the methods / actionables
//    // await login.loadurl("http://leaftaps.com/opentaps/control/main");
//     await login.loadurl(process.env.BaseUrl as string);
//     await login.enterCrdentials(LoginData[0].Username,LoginData[0].Password);
//     await login.clickLogin();

//     const wp = new WelcomePage(page);
//     await wp.clickCRM();

//     const hp = new HomePage(page);
//     await hp.clickLead();

//     const lp = new LeadPage(page);
//     await lp.clickCreateLead();

//     const clp = new CreateLeadPage(page);
//     await clp.enterMandatoryDetails()
//     await clp.clickSubmit();

//     const vp = new ViewLeadPage(page)
//     await vp.verifyFirstName()

// })


import dotenv from "dotenv"
import LoginData from "../Data/login.json"
import { test1 } from "../utility/customFixture"

dotenv.config({ path: "Data/qa.env" })


test1(`Create Lead functionality`, async ({ loginfix, welfix, homfix, leadfix, crleadfix, vpfix }) => {

  // await loginfix.loadurl("http://leaftaps.com/opentaps/control/main");
  // await loginfix.loadurl(process.env.BaseUrl as string);
  // await loginfix.enterCrdentials(LoginData[0].Username, LoginData[0].Password);
  // await loginfix.clickLogin();
  // await welfix.clickCRM();
  // await homfix.clickLead();
  // await leadfix.clickCreateLead();
  // await crleadfix.enterMandatoryDetails();
  // await crleadfix.clickSubmit();
  // await vpfix.verifyFirstName();

  (await (await loginfix.loadurl(process.env.BaseUrl as string)).enterCrdentials(LoginData[0].Username, LoginData[0].Password)).clickLogin();
  /*  await loginfix.loadurl(process.env.BaseUrl as string);
 await loginfix.enterCrdentials(LoginData[0].Username, LoginData[0].Password);
await loginfix.clickLogin(); */


  await welfix.clickCRM();
  await homfix.clickLead();
  await leadfix.clickCreateLead();
  (await crleadfix.enterMandatoryDetails()).clickSubmit()
  await vpfix.verifyFirstName();


})