import { WebComponent } from "./01-WebComponent";

export class Button extends WebComponent {

  // Overriding click method
  click(): void {
    super.click();  // calling parent method
    console.log("Button specific action executed.");
  }
}