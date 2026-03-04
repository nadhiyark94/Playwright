"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySqlConnection = void 0;
var MySqlConnection = /** @class */ (function () {
    function MySqlConnection() {
    }
    // Concrete method added in abstract class
    MySqlConnection.prototype.executeQuery = function (query) {
        console.log("Executing SELECT Query:", query);
        console.log("Query executed successfully.");
    };
    return MySqlConnection;
}());
exports.MySqlConnection = MySqlConnection;
