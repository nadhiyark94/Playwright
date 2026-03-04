 let companyName = "Testleaf";
let reverse=""
/*
for (let i = companyName.length-1; i >= 0; i--) 
    {
  reverse=reverse+companyName.charAt(i);
  
   
}
  console.log(reverse);
 */

  for (let i = companyName.length-1; i >= 0; i--) 
    {
  reverse=reverse+companyName[i];
  
   
}
  console.log(reverse);

  
let reverse1 = companyName.split("").reverse().join("");
    console.log(reverse1);

