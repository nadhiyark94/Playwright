function conditionalStatements(number)
{
if(number>0)
{
    return(number+" is greater than zero");
    
}
else if(number<0)
{
    return(number+" is less than zero");
}
    else{

        return(number+" is neutral");
    }
}

var number=-0;
console.log(conditionalStatements(number));