
//Reverse only the even-position words in a sentence

function reverseEvenWords(sentence) {
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    // even position → (i + 1) % 2 === 0
    if ((i + 1) % 2 === 0) {
      words[i] = words[i].split("").reverse().join("");
    }
  }

  console.log(words)   //[ 'I', 'evol', 'javascript', 'gnidoc', 'very', 'hcum' ]

  return words.join(" ");   //I evol javascript gnidoc very hcum
}

let str = "I love javascript coding very much";
console.log(reverseEvenWords(str));
