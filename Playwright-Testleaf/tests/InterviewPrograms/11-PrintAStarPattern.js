//Print a star pattern

/* const console = require("console");

let rows = 5;

for (let i = 1; i <= rows; i++) {
  let pattern = "";
  
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
    console.log(pattern);
} */

const console = require("console");

let rows = 5;

for (let i = 0; i <= rows; i++) {
    
  for (let j = 0; j <= i; j++) {
   process.stdout.write("*"+"");
  }
    console.log();
}