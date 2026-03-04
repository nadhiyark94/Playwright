//Reverse a string
   //Example: "Javascript" → "tpircsavaJ"


let str=`Nadhiya`

let reverse=""

for(let i=str.length-1;i>=0;i--)
{
 reverse=reverse+str.charAt(i)
}

console.log(reverse)
//---------------------------------------------------------

let companyName = "Testleaf";
let reverse1=""
  for (let i = companyName.length-1; i >= 0; i--) 
    {
  reverse1=reverse1+companyName[i];
  
   
}
  console.log(reverse1);

  //-----------------------------------------------------
  let reverse2 = companyName.split("").reverse().join("");
    console.log(reverse2);

   // --------------------------------------------------------

  // Using Spread operator

  let txt="Nadhiya"
  let rvrse=[...txt].reverse().join("")
  console.log(rvrse)
