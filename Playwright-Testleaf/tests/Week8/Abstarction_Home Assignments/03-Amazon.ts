import { CanaraBank } from "./02-CanaraBank";

class Amazon extends CanaraBank {

  cashOnDelivery(): void {
    console.log("Processing Cash on Delivery...");
    this.recordPaymentDetails("Cash On Delivery", 1500);
  }

  upiPayments(): void {
    console.log("Processing UPI Payment...");
    this.recordPaymentDetails("UPI", 2000);
  }

  cardPayments(): void {
    console.log("Processing Card Payment...");
    this.recordPaymentDetails("Card", 3500);
  }

  internetBanking(): void {
    console.log("Processing Internet Banking...");
    this.recordPaymentDetails("Internet Banking", 5000);
  }
}

// Testing
const amazon = new Amazon();

amazon.cashOnDelivery();
amazon.upiPayments();
amazon.cardPayments();
amazon.internetBanking();