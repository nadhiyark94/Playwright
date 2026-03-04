//named function

 function add(a,b,c){ // a = 10, b=20, c=10; Here a and b are called parameters and will receive the values passed as an argument

// let a = 10
// let b = 10
let z = a+b+c

return z

 }

// add(10,20,10) // return means the function add(a,b,c) = add(10,20,10) =z is holding the value "z"

console.log(add(10,20,10)); // 40 printed


//Function Expression/ Anonymous FUnction


let funExp = function (){

    console.log(`This is a function expression type`);

}
funExp()


//Arrow Function :

let funArrow = () => { // => fat arrow

    console.log(`This is a arrow function type`);

}
funArrow()


//Single line arrow function 

const funArrow2 = (a,b)=> a+b;

console.log(funArrow2(10,20));



 let add = (a,b,c)=>{ // a = 10, b=20, c=10; Here a and b are called parameters and will receive the values passed as an argument

// let a = 10
// let b = 10
let z = a+b+c

return z

 }

// add(10,20,10) // return means the function add(a,b,c) = add(10,20,10) =z is holding the value "z"

console.log(add(10,20,10)); // 40 printed








//Arrow Function