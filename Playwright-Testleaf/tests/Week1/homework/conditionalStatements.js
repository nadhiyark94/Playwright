function launchBrowser(browserName)
{
    if(browserName==="Chrome")
    {
        console.log("Chrome Bowser launched");
    }
    else{
        console.log("Other Bowser launched")
    }

}

let browserName="Chrome";
launchBrowser(browserName);

function runTests(testType)
{
    switch(testType){
    case "regression":
        console.log("regression");
        break;
    case "Sanity":
        console.log("Sanity");
        break;
    default:
        console.log("Smoke");
        break;
    }
}
let testType="Smoke";
 runTests(testType);