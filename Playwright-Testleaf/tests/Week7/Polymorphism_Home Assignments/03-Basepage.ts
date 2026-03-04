export class BasePage {

  findElement(locator: string): void {
    console.log(`Finding element using locator: ${locator}`);
  }

  clickElement(locator: string): void {
    console.log(`Clicking on element: ${locator}`);
  }

  enterText(locator: string, text: string): void {
    console.log(`Entering text '${text}' into element: ${locator}`);
  }

  performCommonTasks(): void {
    console.log("Performing common tasks for all pages...");
  }
}