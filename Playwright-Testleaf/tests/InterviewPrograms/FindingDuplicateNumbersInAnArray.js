let arr = [5, 2, 9, 1, 2, 5, 7];
let duplicates = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            // check to avoid adding same duplicate again
            if (!duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }
}

console.log("Duplicates:", duplicates);



//-----Using Set-----
/* let arr = [5, 2, 9, 1, 2, 5, 7];
let seen = new Set();
let duplicates = new Set();

for (let num of arr) {
    if (seen.has(num)) {
        duplicates.add(num);
    } else {
        seen.add(num);
    }
}

console.log([...duplicates]); */



//--------Another Simple Method (Using Frequency Object)
/* let arr = [5, 2, 9, 1, 2, 5, 7];
let count = {};
let duplicates = [];

for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
}

for (let key in count) {
    if (count[key] > 1) {
        duplicates.push(Number(key));
    }
}

console.log(duplicates); */