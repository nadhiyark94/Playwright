
//Find all subarrays whose sum is zero -> Logic is not clear need to cehck in chatgpt

function findZeroSumSubarrays(arr) {
    let map = new Map();
    let sum = 0;
    let result = [];

    // Important: handle case when subarray starts from index 0
    map.set(0, [-1]);

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (map.has(sum)) {
            let indices = map.get(sum);

            for (let startIndex of indices) {
                result.push(arr.slice(startIndex + 1, i + 1));
            }

            indices.push(i);
        } else {
            map.set(sum, [i]);
        }
    }

    return result;
}

// Example
let arr = [4, 2, -3, 1, 6, -1, -4, 2];
console.log(findZeroSumSubarrays(arr));