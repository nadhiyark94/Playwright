//function intersection(arr1: number[], arr2: number[]): number[] {
function intersection(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    return result;
}
//1️⃣ Typical Case
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]
//2️⃣ No Common Elements
console.log(intersection([1, 2, 3], [4, 5, 6])); // Output: []
//3️⃣ All Elements Common
console.log(intersection([1, 2, 3], [1, 2, 3])); // Output: [1, 2, 3]
//4️⃣ With Duplicate Values in Input
console.log(intersection([1, 2, 2, 3], [2, 2, 3, 4])); // Output: [2, 3]
