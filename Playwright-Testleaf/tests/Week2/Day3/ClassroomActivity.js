let companyName = "Testleaf";
let reversed = "";

for (let i = companyName.length - 1; i >= 0; i--) {
    reversed += companyName[i];
}

// Palindrome check
if (companyName === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}


console.log(reversed); // faeltseT