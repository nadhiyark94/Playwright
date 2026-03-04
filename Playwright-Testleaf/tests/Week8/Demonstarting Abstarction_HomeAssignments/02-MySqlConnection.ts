import { DatabaseConnection } from "../DemonstratingInterface_HomeAssignments/01-DatabaseConnection";

export abstract class MySqlConnection implements DatabaseConnection {

  // Abstract methods (must be implemented in subclass)
  abstract connect(): void;
  abstract disconnect(): void;
  abstract executeUpdate(query: string): void;

  // Concrete method added in abstract class
  executeQuery(query: string): void {
    console.log("Executing SELECT Query:", query);
    console.log("Query executed successfully.");
  }
}