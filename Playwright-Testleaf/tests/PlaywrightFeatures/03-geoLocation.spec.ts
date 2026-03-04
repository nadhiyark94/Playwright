import { test } from "@playwright/test";

 test.use({
        geolocation:{
            latitude:40.8440236,
            longitude:-75.310998
        },
        permissions:[`geolocation`,`notifications`]
    })

test(`Learning Geolocation`,async ({page}) => {  

    await page.goto(`https://www.google.com/maps`);
    await page.click("#sVuEFc");
    await page.waitForTimeout(5000)

})