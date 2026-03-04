

//Step 1: Function to Reverse a String
function reverseString(str) {
    let chars = str.split("");   // 1. Convert string into characters
    let reversed = "";           // Empty string to store result

    for (let i = chars.length - 1; i >= 0; i--) {
        reversed = reversed + chars[i]; // 2 & 3. Loop reverse and concatenate
    }

    console.log("Reversed String:", reversed); // 4. Print
    return reversed;
}

//Step2:Function to Check Palindrome
function isPalindrome(str) {
    let reversedStr = reverseString(str);

    if (str === reversedStr) {  // 1. Check equality
        return true;            // 2. Same → palindrome
    } else {
        return false;           // Not same → not palindrome
    }
}

/* let testStrings = ["madam", "level", "hello", "radar", "world"];

for (let str of testStrings) {
    console.log("Original String:", str);
    console.log("Is Palindrome?", isPalindrome(str));
    
    console.log("------------------------");
} */

    let str="madam";
    console.log("Is Palindrome?", isPalindrome(str));