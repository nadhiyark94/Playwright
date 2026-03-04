class TestReporter {

  // Overload Signatures
  reportStep(msg: string, status: string): void;
  reportStep(msg: string, status: string, snap: boolean): void;

  // Single Implementation
  reportStep(msg: string, status: string, snap?: boolean): void {

    console.log("Message:", msg);
    console.log("Status:", status);

    if (snap !== undefined) {
      console.log("Take Snapshot:", snap ? "Yes" : "No");
    }

    console.log("---------------------------");
  }

  // Method to demonstrate usage
  demonstrate(): void {
    // Calling first overloaded method
    this.reportStep("Login successful", "PASS");

    // Calling second overloaded method
    this.reportStep("Checkout failed", "FAIL", true);
  }
}
const reporter = new TestReporter();
reporter.demonstrate();