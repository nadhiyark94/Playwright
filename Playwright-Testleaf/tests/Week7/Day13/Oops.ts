class PlaywrightMethod{


//property
browserName:string='Chrome'


//method
laodUrl(){
console.log("Load Url")
console.log("HI")


}


//default constructor
// constructor(){
// console.log("Default")
// }



//parameter constructor
constructor(browsername:string){


//this.browserName=edge
this.browserName=browsername
console.log(this.browserName)


//this it going refer your current class property and methods
}



//we cannot create object inside the class
//we create the object outside the class
}


//syntax for create a object
let obj=new PlaywrightMethod('Edge')


//objectName.methodName
//objectName.propertyName
obj.laodUrl()
console.log(obj.browserName)