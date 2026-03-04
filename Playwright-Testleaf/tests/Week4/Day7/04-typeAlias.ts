

//type alias has two types
//Union type --> either this or other value
//Intersection type

let username: string | number

username = "ravi@testleaf"
username = 987979435

//alias name for datatype
type InputType = number | string | boolean

let formInput: InputType; // 
formInput = "Ravindran", // text field
formInput = 30, // age field
formInput = true // checknbox

//Here InputType is a customized datatype used to handle values of certain predefined datatypes


//type for value 
//alias name for value

type supportedBrowser = "Chrome"|"firefox"|"edge"

function invokeBrowser(browserName : supportedBrowser ){

    if(browserName==="Chrome"){
        console.log("Launch Chrome");
        
    }else{
        console.log("Firefox browser");        
    }
}

invokeBrowser("Chrome")


/* Intersection type */

type LoginLocators ={

    usernameInput : string,
    passwordInput : string

}

type LoginActions = {
    loginBtn : string
}

type LoginPage = LoginLocators & LoginActions;

const loginPage : LoginPage ={ // strictly we have fill both text box locators and button locator
 
 usernameInput : "#username",
 passwordInput:"#password",
 loginBtn:".submit"

}



type Admin = {
adminName : string,
privileges : string[]

}

type Employee = {
    name : string,
    empId : number,
    date: string
}

type QA = Admin & Employee

const QAProfile : QA  ={
    adminName : "Testleaf",
    privileges : ['server'],
    name:"Ravindran",
    empId : 1001,
    date: "31/01/26"
}

console.log(QAProfile.adminName);
//console.log(QAProfile.date);
