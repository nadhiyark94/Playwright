
function getBrowser(browserName){ // browserName = "chrome"


if (browserName==='chrome') { // browserName = "chrome" === "chrome" ==> true
    
    console.log(`This is chrome browser`);   

}else if(browserName==='firefox'){

    console.log(`This is firefox browser`);  

}else{
   console.log(`The browser name is not supported`);
}
}

getBrowser("edge") // we are passing the value through the argument at the time of calling the function name



function getVersion(){

    switch(browser){
        case "chrome":
            console.log("131");
            break;

        case "edge":
            console.log("132");
            break

        case "firefox":
            console.log("132");
            break

        default:
            console.log("Unsupported Browser");
        break;      
    }
}

let browser="safari";
getVersion()