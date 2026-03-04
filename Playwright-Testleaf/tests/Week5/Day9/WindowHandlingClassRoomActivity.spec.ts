import{test,expect} from "@playwright/test"
test.only(`Multiple pages window handling`,async ({page,context}) => {
   await page.goto(`https://www.flipkart.com/`);
    const searchBox = page.getByPlaceholder("Search for Products, Brands and More")
    await searchBox.fill("Phones");
    await searchBox.press("Enter");
    const [childPage] = await Promise.all([context.waitForEvent('page'),page.locator(`//div[text()='realme P4 Power 5G (TransSilver, 128 GB)']`).click()]) // array of promise resolved
    console.log(await childPage.title());
    await page.bringToFront(); // page => parent page
    await page.locator(`//span[text()="Electronics"]`).click()
    await page.waitForTimeout(3000)
    await childPage.bringToFront();


})


