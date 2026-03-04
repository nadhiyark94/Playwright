 /* Reverse the words in a sentence
    Example: "My name is Bhuvanesh" → "Bhuvanesh is name My" */

    function reverseWords(sentence) {
    // Split the sentence into words using space as separator
    let words = sentence.split(" ");
    
    // Reverse the array of words
    let reversedWords = words.reverse();
    
    // Join the words back into a sentence
    let reversedSentence = reversedWords.join(" ");
    
    return reversedSentence;
}

// Example usage
let sentence = "My name is Bhuvanesh";
console.log(reverseWords(sentence)); // Output: "Bhuvanesh is name My"
