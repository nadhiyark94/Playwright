//Merge two arrays and move duplicate elements to the end

function mergeAndMoveDuplicates(arr1, arr2) {
    let merged = arr1.concat(arr2);
    let unique = [];
    let duplicates = [];

    for (let num of merged) {
        if (!unique.includes(num)) {
            unique.push(num);
        } else {
            duplicates.push(num);
        }
    }

    return unique.concat(duplicates);
}

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
console.log(mergeAndMoveDuplicates(arr1, arr2));
/* 
function mergeAndMoveDuplicates(arr1, arr2) {
    let merged = [...arr1, ...arr2];
    let seen = new Set();
    let unique = [];
    let duplicates = [];

    for (let num of merged) {
        if (!seen.has(num)) {
            seen.add(num);
            unique.push(num);
        } else {
            duplicates.push(num);
        }
    }

    return [...unique, ...duplicates];
}

// Example
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

console.log(mergeAndMoveDuplicates(arr1, arr2));
 */