import { DatabaseConnection } from "./01-DatabaseConnection";

class PlaywrightConnection implements DatabaseConnection {

  connect(): void {
    console.log("Connecting to Playwright Test Database...");
  }

  disconnect(): void {
    console.log("Disconnecting from Playwright Test Database...");
  }

  executeUpdate(query: string): void {
    console.log("Executing Query:", query);
    console.log("Query executed successfully.");
  }
}
const db = new PlaywrightConnection();

db.connect();
db.executeUpdate("UPDATE users SET status = 'active' WHERE id = 101");
db.disconnect();