

/* Datatypes in TypeScript:

1. number
2. string
3. boolean
4. undefined
5. null
6. any
7. unknown
8. never
9. tuple*/

 
let companyName : string = "Testleaf" // we are hard coding the value

let apiResult : any = "Success" // A value that is received in the run time from the server
apiResult = 200

//any datatype
//When you are not sure of the datatypes that the variable is going to hold inorder avoid compilation error from Typescript we use "any" datatype

//unknown datatype in TS


let value : unknown 
value = 40
value ="Hello" // value assigned from external source like api / sever output
 
if(typeof value === "string"){
console.log(value.toUpperCase());
}else{
    
}

//unknown datatype is mildly strict it can accept all datatypes and can further be manipulated using if condition


//never datatype :

function infinityLoop():never{
    while(true){
        console.log("This is an infinite loop");        
    }
}

infinityLoop()


//tuple

let user : [string, number, boolean]= ["Testleaf",20, true]
console.log(user[1]);//20