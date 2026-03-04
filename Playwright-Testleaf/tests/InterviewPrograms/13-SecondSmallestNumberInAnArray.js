
//Find the second smallest number in an array

let arr = [5, 2, 9, 1]
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length ; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr); //Array sorting
  console.log("Second smallest:", arr[1]);


  
//--------------Method2-------------------------------


  arr.sort((a, b) => a - b);
   console.log(arr); //Array sorting
 console.log("Second smallest:", arr[1]);

