import{test,webkit,chromium} from "@playwright/test"

test("Your task is to launch two separate browser instances using Playwright",async()=>{

    //launch Edge browser
    const edgeBrowser = await chromium.launch({channel:"msedge",headless:false});
    //Launc Webkit browser
     const webKitBrowser = await webkit.launch({headless:false});
     //Create contexts
     const edgeContext=await edgeBrowser.newContext();
     const webKitContext=await webKitBrowser.newContext();
     //Create Pages
     const edgePage=await edgeContext.newPage();
     const webKitPage=await webKitContext.newPage();
     //Navigate to Redbus in edge
     await edgePage.goto("https://www.redbus.in");
     console.log("Redbus Title:" , await edgePage.title());
     console.log("Redbus URL:" , await edgePage.url());

     //Navigate to Flipkart in webkit
   await  webKitPage.goto ("https://www.flipkart.com");
 console.log("Redbus Title:" , await webKitPage.title());
     console.log("Redbus URL:" , await webKitPage.url());
});