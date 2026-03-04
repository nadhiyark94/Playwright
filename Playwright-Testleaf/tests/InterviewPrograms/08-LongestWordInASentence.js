/* Find the longest word in a sentence
   Example: "online javascript compiler" → "javascript " */

function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

let str = "welcome to the javascript interview preparation";
console.log(longestWord(str));