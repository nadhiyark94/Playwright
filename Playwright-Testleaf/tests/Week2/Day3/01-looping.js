// //for loop

// for (let index = 0; index < 10; index++) {

//     if(index%2===0){
//           console.log(`Even : `+index); // Print even numbers 
//     }
//     // }else{
//     //     console.log(`Odd `+index); // 
        
//     // }
    
// }

//While loop :

let number = -10; // 10 pages here 10 means a truthy value

while (number<0) { //number = 10,9.8,7,...1=> truthy value here 0 means falsy
    console.log(number);   //10,9.8,7,....
    number-- 
}

/* Real time project perspecive scenario

number is equal to the pagination button web element and check if it is enabled => true 
when pagination button turns diabled => false*/


/* while(conditon){
await page.locator(`.navgbutton`).click()
hasNextPage = await page.locator(`.navgbutton`).isEnabled() // Here verification 
} */