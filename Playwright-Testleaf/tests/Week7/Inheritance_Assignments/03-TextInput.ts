import { WebComponent } from "./01-WebComponent";
import { Button } from "./02-Button";

class TextInput extends WebComponent {
  value: string = "";

  enterText(text: string): void {
    this.value = text;
    console.log(`Entered text '${this.value}' into input with selector: ${this.selector}`);
  }
}
function testComponents(): void {

  const loginButton = new Button("#loginBtn");
  const usernameInput = new TextInput("#username");

  loginButton.focus();
  loginButton.click();

  usernameInput.focus();
  usernameInput.enterText("Nadhiya");
}

testComponents();