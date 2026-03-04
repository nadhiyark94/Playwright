
//Find groups of anagrams in a string array


function groupAnagrams(words) {
    let map = new Map();

    for (let word of words) {
        // Sort letters of the word to get the key
        let key = word.split("").sort().join("");
        
        // If key exists, add word to that group, else create new group
        if (map.has(key)) {
            map.get(key).push(word);
        } else {
            map.set(key, [word]);
        }
    }

    // Convert map values to array of groups
    return Array.from(map.values());
}

// Example usage
let words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]



//----------------using an array---------------------------------
function groupAnagrams(words1) {
    let groups = []; // stores anagram groups
    let keys = [];   // stores sorted keys

    for (let word of words1) {
        let key = word.split("").sort().join("");

        // check if this key already exists
        let index = keys.indexOf(key);

        if (index !== -1) {
            // key found → add word to existing group
            groups[index].push(word);
        } else {
            // new key → create new group
            keys.push(key);
            groups.push([word]);
        }
    }

    return groups;
}

// Example
let words1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words1));
