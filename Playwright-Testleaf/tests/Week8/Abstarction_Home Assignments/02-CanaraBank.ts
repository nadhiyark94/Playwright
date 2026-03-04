import { Payments } from "./01-Payments";

export abstract class CanaraBank implements Payments {

  // Abstract methods (must be implemented in child class)
  abstract cashOnDelivery(): void;
  abstract upiPayments(): void;
  abstract cardPayments(): void;
  abstract internetBanking(): void;

  // Concrete method
  recordPaymentDetails(paymentType: string, amount: number): void {
    console.log("Recording Payment Details...");
    console.log("Bank: Canara Bank");
    console.log("Payment Type:", paymentType);
    console.log("Amount: ₹", amount);
    console.log("-----------------------------");
  }
}