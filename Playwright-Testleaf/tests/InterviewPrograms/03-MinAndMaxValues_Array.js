//Find the minimum and maximum values in an array (without using built-in functions)


let arr=[10,5,6,1,11,3]

let max=arr[0]
let min=arr[0]

for(let i=1;i<arr.length;i++)
{
    if(max<arr[i])
    {
        max=arr[i]
    }

    if(min>arr[i])
    {
        min=arr[i]
    }
}

console.log("max number:"+max)
console.log("min number:"+min)