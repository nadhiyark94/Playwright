/* Arrays in JavaScript

1. Dynamic in Size
Arrys grow and shrink in size as elements are added

2. Heterogenous
Arrsya in JS can store different datatype likes numbers, string, boolean*/


/* 1, push() - > add element to the end of the array */

let letters = ["a","b","c","d","e"]
letters.push("f","g","h")

let result2 = letters.join(",")
console.log(result2)


/* [
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g', 'h'
] */

/* 2, pop() --> remove only one element from the end of the array */

letters.pop()
console.log(letters);//[ 'a', 'b', 'c', 'd' ]

/* 3, shift() --> remove from the first element of the array */

letters.shift()
console.log(letters);//[ 'b', 'c', 'd' ]

/* 4, unshift -->  */


letters.unshift("x","y","z");
console.log(letters); // [ 'x', 'y', 'z', 'b', 'c', 'd' ]

/* 5, slice() --> Extracxt a section of array without modifying the original */

let letters1 = ["a","b","c","d","e"] // 0,1,2,3,4
                //-5,-4,-3,-2,-1


let result = letters1.slice(1,4) 
console.log(result);//[ 'b', 'c', 'd' ]

let result1 = letters1.slice(-5,-1);
console.log(result1);//[ 'a', 'b', 'c', 'd' ]

//6.concat()

let numbers1 = [1,2,3,4,5]
let numbers2 = [6,7,8,9,10]

let mergedConcat =numbers1.concat(numbers2);
console.log(mergedConcat);

/* [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
] */


//7. spread syntax(...)

let spreadArray = [...numbers1,...numbers2];
console.log(spreadArray);


