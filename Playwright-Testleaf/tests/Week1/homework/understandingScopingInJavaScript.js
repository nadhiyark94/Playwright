//1. Global variable
let genderType="female";

function printGender()
{
    //3. Function-scoped variable using let
    let color ="brown";
    console.log("color inside function (before if):",color);

    //4. if condition
    if(genderType.startsWith("female"))
    {
        //5a.var inside block (function-scoped)
        var age=30;

        //5b.block-scoped variable using let
        let color="pink";
        

        //5c. print color inside block
        console.log("color inside if-block:",color);
    }
        //6. outside if-block but inside function
        console.log("Age outside if-block:",age);
        console.log("Color outside if-block:",color);


    }
    //7. call function
    printGender();

    //print global variable
     console.log("Gender type globally:",genderType);

     //8. Change global variable
     genderType="male";
     printGender();
