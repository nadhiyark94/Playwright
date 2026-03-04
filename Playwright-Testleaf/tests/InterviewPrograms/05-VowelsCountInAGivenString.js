/* Count the number of vowels in a given string
   Example: "welcome to the interview" */


//Method 1 — Using loop (most common) -For Interview
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

const text = "welcome to the interview";
console.log(countVowels(text)); // Output: 9


//Method 2 — Using Regex (shortest way)
function countVowels(str) {
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(countVowels("welcome to the interview")); // 9


//Method 3 — Using reduce()
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    return [...str].reduce((count, char) =>
        vowels.includes(char) ? count + 1 : count, 0);
}

console.log(countVowels("welcome to the interview")); // 9