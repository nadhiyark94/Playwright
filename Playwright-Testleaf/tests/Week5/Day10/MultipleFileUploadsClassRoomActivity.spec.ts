import { test } from "@playwright/test";
import path from "path";


test(`Learn fileUpload`,async ({page}) => {

    await page.goto(`https://leafground.com/file.xhtml`);
const uploadFile = page.locator(`(//input[@type="file"])[2]`)
await uploadFile.setInputFiles([path.join(__dirname,'../../../Data/learningFileUpload.jpeg'),path.join(__dirname,'../../../Data/learningFileUpload2.jpeg')])
await page.waitForTimeout(3000)


 })
