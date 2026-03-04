import { test } from "@playwright/test";
import {parse} from "csv-parse/sync"
import fs from "fs"


let credentials : any[] = parse(fs.readFileSync("Data/login.csv"),{columns:true,skip_empty_lines:true})

test.describe.parallel(`Login tests in serial mode`,async () => {
    
for(let data of credentials){
test(`Learn to read data from CSV file ${data.tcid}`,async ({page}) => {
    
    await page.goto(data.url);
    await page.locator(`#username`).fill(data.username); 
    await page.locator(`#password`).fill(data.password);
    await page.locator(`#Login`).click()
})

}
})