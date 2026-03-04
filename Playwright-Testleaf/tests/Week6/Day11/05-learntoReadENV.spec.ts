

import { test } from "@playwright/test";
import dotenv from "dotenv";

let filename= process.env.envfile || "qa" // command given in the terminal to chmage the environment dynamically $env:envfile as well as tells you in which env. you are present in 

//Note : if envFile is not assigned any value the "qa" value is assigned

//filename = "qa" when we give the command $env:envfile="qa"
//filename = "prod" when we give the command $env:envfile="prod"

dotenv.config({path:`Data/${filename}.env`}) // setting the environment for testing purpose
//dotenv.config({path:`Data/prod.env`}) // setting the environment for testing purpose

// console.log(process.env.BaseURL); // http://leaftaps.com/opentaps/control/main
// console.log(process.env.LF_Username); // demoCSR2
// console.log(process.env.LF_Password); // crmsfa

test(`Learn to read data env file`,async ({page}) => {
    
     await page.goto(process.env.BaseURL as string);

    await page.locator(`#username`).fill(process.env.LF_Username as string); // demoSalesManager
    await page.locator(`#password`).fill(process.env.LF_Password as string);

    await page.locator(`.decorativeSubmit`).click()

})




//console.log(process.env.USERNAME); // System environment