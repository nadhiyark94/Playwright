import { MySqlConnection } from "./02-MySqlConnection";

class PlaywrightConnection extends MySqlConnection {

  connect(): void {
    console.log("Connecting to MySQL Database for Playwright...");
  }

  disconnect(): void {
    console.log("Disconnecting from MySQL Database...");
  }

  executeUpdate(query: string): void {
    console.log("Executing Update Query:", query);
    console.log("Update executed successfully.");
  }
}

const db = new PlaywrightConnection();

db.connect();
db.executeQuery("SELECT * FROM users");
db.executeUpdate("UPDATE users SET status = 'active' WHERE id = 1");
db.disconnect();