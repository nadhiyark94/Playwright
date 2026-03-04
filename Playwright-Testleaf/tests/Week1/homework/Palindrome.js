
function isPlaindrome(txt)
{
let reverse = txt.split("").reverse().join("");
return txt===reverse;
}
let txt="madam";
console.log(isPlaindrome(txt));