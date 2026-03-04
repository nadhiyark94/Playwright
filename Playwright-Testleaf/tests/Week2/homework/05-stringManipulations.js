//Example 1: Length of the Last Word (Basic Case)
function lengthOfLastWord1(s) {
    let words = s.split(" ");        // 1. Split string into words
    let lastWord = words[words.length - 1]; // 2. Get last word
    return lastWord.length;          // 3. Return length
}

console.log(lengthOfLastWord1("Hello World")); // 5


//Example 2: Length of the Last Word (With Extra Spaces)
function lengthOfLastWord2(s) {
    let trimmed = s.trim();              // 1. Trim the string
    let words = trimmed.split(" ");      // 2. Split into words
    let lastWord = words[words.length - 1]; // 3. Identify last word
    return lastWord.length;              // 4 & 5. Return length
}
console.log(lengthOfLastWord2(" fly me to the moon ")); // 4


//Example 3: Check if Two Strings Are Anagrams
function isAnagram(str1, str2) {
    let s1 = str1.replace(/\s/g, "").toLowerCase(); // 1. Remove spaces & lowercase
    let s2 = str2.replace(/\s/g, "").toLowerCase();

    let sorted1 = s1.split("").sort().join("");     // 2. Sort characters
    let sorted2 = s2.split("").sort().join("");

     /*  let sorted1 = str1.replace(/\s/g, "").toLowerCase().split("").sort().join("");
    let sorted2 = str2.replace(/\s/g, "").toLowerCase().split("").sort().join(""); */

    return sorted1 === sorted2;                      // 3 & 4. Compare and return
}


console.log(isAnagram("listen listen", "silent silent")); // true
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
