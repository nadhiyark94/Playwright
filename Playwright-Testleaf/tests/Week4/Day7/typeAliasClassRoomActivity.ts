

type supportedPaymentMethod= "UPI"|"CreditCard"|"PayPal"

function makeAPayment(paymentMethod:supportedPaymentMethod)
{
    if(paymentMethod==="UPI")
    {
        console.log("UPI is chosen")
    }
     if(paymentMethod==="CreditCard")
    {
        console.log("CreditCard is chosen")
    }
     if(paymentMethod==="PayPal")
    {
        console.log("PayPal is chosen")
    }

}

makeAPayment("UPI")

