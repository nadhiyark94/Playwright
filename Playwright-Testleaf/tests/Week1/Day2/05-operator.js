// //Post increment
// let x=10;
// console.log(x++);//x=10 in line number 3
// console.log(x);// line no.4, x=11

// //Pre increment

// let a=10;
// console.log(++a);//x=11 in line number 3
// console.log(a);// line no.4, x=11

// //Post decrement

// let y=10;
// console.log(y--);//y=10 in line number 3
// console.log(y);// line no.4, y=9


// //Pre decrement

// let b=10;
// console.log(--b);//b=9 in line number 3
// console.log(b);// line no.4, b=9

//Strict equality = "==="

/* 1. Compare datatype and
2. Compare value*/


//Loose equality = "=="

/* 1.Compare the value and not the datatype */

console.log(1===1);//true
console.log(1==="1");//false
console.log("1"==1);//true The concept called type coercion
//Here in loose equality due to the concept of type coercion the datatype that is string gets converted to number
console.log(1==true);// true
//Internally true means 1 , true =1 and false = 0

console.log(1===true);//false



