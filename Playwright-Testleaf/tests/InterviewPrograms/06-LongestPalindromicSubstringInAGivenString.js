
// Find the longest palindromic substring in a given string - Note:Logic is not clear need to cehck in chatgpt


function longestPalindrome(s) {
    if (!s || s.length < 1) return "";

    let start = 0;
    let end = 0;

    function expandFromCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // length of palindrome
    }

    for (let i = 0; i < s.length; i++) {
        let len1 = expandFromCenter(i, i);       // odd length palindrome
        let len2 = expandFromCenter(i, i + 1);   // even length palindrome

        let maxLen = Math.max(len1, len2);

        if (maxLen > end - start) {
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }

    return s.substring(start, end + 1);
}
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // "bb"
