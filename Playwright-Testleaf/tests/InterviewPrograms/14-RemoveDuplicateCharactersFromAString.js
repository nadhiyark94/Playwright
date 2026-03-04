
//14. Remove duplicate characters from a string


let str = "abbccc";
let seen = {};   //empty object to track characters already seen
let result = "";    //store final unique characters

for (let char of str) {
  if (!seen[char]) {
    seen[char] = true;
    result += char;
  }
}

console.log(result); // abc



//Using indexOf() (Beginner Friendly)
let str1 = "abbccc";
let result1 = "";

for (let char of str1) {
  if (result1.indexOf(char) === -1) {   //thsi checks:Is this character already present in result1?, if not found  result=result+char
    result1 += char;
  }
}

console.log(result1); 

//Using Set (Most Common & Easy)

let str2 = "abbccc";
let result2 = [...new Set(str2)].join("");

console.log(result2); // abc