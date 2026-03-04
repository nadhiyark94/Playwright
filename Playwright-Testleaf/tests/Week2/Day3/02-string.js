/* String declaration - "",'',`` */

/* 1. String literal
2. Object literal */

//String literal : (This will be handled in Stack Memory)

// let companyName = `Testleaf`; // Address : 100
// let firmName = `Testleaf`; // Address : 100

// console.log(companyName===firmName);// true


//Object literal : (This will be handled in Heap Memory)

// let companyNameNew = new String(`Testleaf`); // Address : 101
// let firmNameNew = new String(`Testleaf`); // Address : 102

// console.log(companyNameNew===firmNameNew);// false


// /* ****************************************************** */

// //String Methods :

// //Escape Sequence :  \, \n,\t

// let testEsc = 'It\'s a regression \n testing' // \n => newline
// console.log(testEsc);


// let testEscDbl = `Hello\t this is a "double quote"`// \t=> tab
// console.log(testEscDbl);

// //concatenation -- Using concat() method and '+'

// let testCase ="create a new lead"
// let testCaseId = 123

// let resultConcat = testCase.concat(testCaseId)
// console.log(resultConcat);

// let resultConcatToString = testCaseId.toString().concat(testCase)
// console.log(resultConcatToString);

// let resultPlus = testCaseId+"-"+testCase+" passed in the execution"
// console.log(resultPlus);

//Template Literal --> `${}`

// function funName(x){ // x=400

//     let output = `There is ${x} testcases`
//     console.log(output);    
// }

// let inputValue = process.argv[2]; //[node .\02-string.js 400 ] // node = 0, \02-string.js=1 ,400 =2 

// funName(inputValue)


// let course = "Playwright"// 

// //length - property

// //Count the number of letters / characters present inside a string

// console.log(`The length of the string is ${course.length}`);

// //charAt()

// console.log(`The charAt of 2 of the string is ${course.charAt(2)} `);

// //indexOf()
// console.log(`The indexOf() "a" is ${course.indexOf('a')}`);

//Slice()
let course = "Playwright"// 


let outputSlice = course.slice(2,5) // ayw
console.log(outputSlice);

// let outputSlice1 = course.slice(5,2) // o/p is "blank" not allowed as start index should not be greater compared to end index 
// console.log(outputSlice1);

let outputSlice2 = course.slice(4,-2) // wrig
console.log(outputSlice2);

let outputSlice3 = course.slice(-6,-1) // wrigh
console.log(outputSlice3);

/* Notes for slice method:
1, start index included and end index is not included (also optional) the range cover the charater just before the end index 
2, start index when it is greater than end index it gives blank
3. Negative index is allowed
*/


//Substring()

let outputSubString = course.substring(3,5); //yw
console.log(outputSubString);

let outputSubString2 = course.substring(5,3); //yw
console.log(outputSubString2);

let outputSubString3 = course.substring(5,-3); //yw when we have a negative value then it is taken as "0"
console.log(outputSubString3);

/* Notes for substaring :
1, start index included and end index is not included (also optional) the range cover the charater just before the end index 
2, start index when it is greater than end index it gives blank
3. substring() does not allow negative index is allowed negative index is takne as 0
4. Start and end index is swappable*/

//Class room activity : reverse a string 
//companyName = "Testleaf"











