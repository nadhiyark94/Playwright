import { BasePage } from "./03-Basepage";

class LoginPage extends BasePage {

  // Overriding the parent method
  performCommonTasks(): void {
    console.log("Performing Login Page specific tasks...");
    console.log("Validating login page title...");
    console.log("Checking username and password fields visibility...");
  }

  login(username: string, password: string): void {
    this.enterText("#username", username);
    this.enterText("#password", password);
    this.clickElement("#loginButton");
  }
}
// Object of BasePage
const basePage = new BasePage();
basePage.performCommonTasks();

// Object of LoginPage
const loginPage = new LoginPage();
loginPage.performCommonTasks();  // Overridden version
loginPage.login("Nadhiya", "Password123");