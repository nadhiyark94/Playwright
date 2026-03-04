
//Method 1: Using a normal for loop (Most preferred in interviews)

/* let str = "abbccc";
let count = {};

for (let i = 0; i < str.length; i++) {
  let char = str[i];

  count[char] = (count[char] || 0) + 1;
}

console.log(count);

 */



/*
//Method 2: Using for...of loop (Cleaner & modern)

let str = "abbccc";
let count = {};

for (let char of str) {
  count[char] = (count[char] || 0) + 1;
}

console.log(count); */


//---------------------------------------------
//Count the occurrence of each character in a string
   //Example: "abbccc" → "a1b2c3"
//Output format like a1b2c3

let str = "abbccc";
let count = {};
let result = "";

for (let char of str) {
  count[char] = (count[char] || 0) + 1;
}
console.log(count); // { a: 1, b: 2, c: 3 }

for (let key in count) {   
  /*key will take values one by one:
"a"
"b"
"c"*/

  result += key + count[key];     //result = result + (key + value)
}

console.log(result); // a1b2c3


/* let str = "abbccc".split("").sort().join("");

let result = "";
let count = 1;

for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
        count++;
    } else {
        result += str[i] + count;
        count = 1;
    }
}

console.log(result); */
