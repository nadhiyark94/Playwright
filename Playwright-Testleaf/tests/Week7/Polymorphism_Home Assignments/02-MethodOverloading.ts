class APIClient {

  // Overload Signatures
  sendRequest(endpoint: string): void;
  sendRequest(endpoint: string, requestBody: string, requestStatus: boolean): void;

  // Single Implementation
  sendRequest(endpoint: string, requestBody?: string, requestStatus?: boolean): void {

    console.log("Endpoint:", endpoint);

    if (requestBody !== undefined && requestStatus !== undefined) {
      console.log("Request Body:", requestBody);
      console.log("Request Successful:", requestStatus ? "Yes" : "No");
    }

    console.log("---------------------------");
  }

  // Method to demonstrate usage
  demonstrate(): void {
    // Calling first overloaded method
    this.sendRequest("/getUsers");

    // Calling second overloaded method
    this.sendRequest("/createUser", "{ name: 'Nadhiya' }", true);
  }
}
const apiClient = new APIClient();

apiClient.sendRequest("/getProducts");
apiClient.sendRequest("/addProduct", "{ name: 'Laptop' }", true);

// Or call demonstration method
apiClient.demonstrate();