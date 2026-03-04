

function add(a,b,subtract){ 
    
/* // a=10, b=20, subtract = function subtract(){
                            console.log("After subtraction:");
    
                                } */
 const sum= a+b // 30
 console.log("Sum:",sum); 

  subtract(sum) // subtract(30)    
}

function subtract(c){ // sum = result
    console.log("After subtraction:",c-5); // 30-5 =25
}


add(10,20)


/*Explanation
A callback function is a function that is passed as an argument to another function and is executed later inside that function.
It allows one function to decide when and how another function should run.
This helps in breaking logic into reusable steps and controlling execution flow.

In this example
• add is the main function
• subtract is passed as a callback
• add performs addition first
• After addition is completed, it calls the callback subtract with the result

Key point for learners
“The callback runs after the main task is completed, not before.”

Step-by-step flow

add(10, 20, subtract) is called

a + b is calculated → 30

subtract(30) is executed

Subtraction logic runs using the result of addition

Why callback is used here
• To reuse logic
• To control execution order
• To perform an action after another task 
“A callback is a function passed to another function and executed after the main task finishes.” */