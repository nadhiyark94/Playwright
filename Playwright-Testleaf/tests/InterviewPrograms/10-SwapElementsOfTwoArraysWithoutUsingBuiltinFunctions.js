//Swap elements of two arrays without using built-in functions Example: ["a","b","c","d"] and ["e","f","g","h"]


//Using Temporary Variable
function swapArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let temp = arr1[i];
    arr1[i] = arr2[i];
    arr2[i] = temp;
  }
  console.log(a);
console.log(b);
}



let a = ["a","b","c","d"];
let b = ["e","f","g","h"];

swapArrays(a, b);





//---------------------------------------------
//Without Using Temp Variable
for (let i = 0; i < a.length; i++) {
  a[i] = a[i] + b[i];
  b[i] = a[i].replace(b[i], "");
  a[i] = a[i].replace(b[i], "");
}