export class WebComponent {
  selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  click(): void {
    console.log(`Clicking on component with selector: ${this.selector}`);
  }

  focus(): void {
    console.log(`Focusing on component with selector: ${this.selector}`);
  }
}