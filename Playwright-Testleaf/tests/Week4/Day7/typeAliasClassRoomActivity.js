function makeAPayment(paymentMethod) {
    if (paymentMethod === "UPI") {
        console.log("UPI is chosen");
    }
    if (paymentMethod === "CreditCard") {
        console.log("CreditCard is chosen");
    }
    if (paymentMethod === "PayPal") {
        console.log("PayPal is chosen");
    }
}
makeAPayment("UPI");
