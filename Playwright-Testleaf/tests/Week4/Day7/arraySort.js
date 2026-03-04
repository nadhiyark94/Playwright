

//8.Sorting an array

let x =["a","c","b","z"]
x.sort()
console.log(x);//[ 'a', 'b', 'c', 'z' ]


let numberArray = [8,"a",10,9,7]

//Ascending order of number Array

numberArray.sort((a,b)=>a-b) // a=8,b=10 == a-b=>8-10 =>2

console.log(numberArray);//


//Descending order of number Array

numberArray.sort((a,b)=>b-a) // a=8,b=10 == a-b=>8-10 =>2

console.log(numberArray);//



let a="123";

//int x=100

// let variable = "Hello" // Explicit inference
// variable = 123