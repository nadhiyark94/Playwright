
//Check whether a given string is a palindrome

//✅ Method 1 — Using reverse() (Most Common)
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("hello"));   // false



//------------

//✅ Method 2 — Without Built-in Functions (Interview Favorite ⭐)
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

console.log(isPalindrome("madam")); // true

