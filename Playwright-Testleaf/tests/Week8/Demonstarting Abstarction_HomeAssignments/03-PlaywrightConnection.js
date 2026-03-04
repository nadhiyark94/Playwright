"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _02_MySqlConnection_1 = require("./02-MySqlConnection");
var PlaywrightConnection = /** @class */ (function (_super) {
    __extends(PlaywrightConnection, _super);
    function PlaywrightConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlaywrightConnection.prototype.connect = function () {
        console.log("Connecting to MySQL Database for Playwright...");
    };
    PlaywrightConnection.prototype.disconnect = function () {
        console.log("Disconnecting from MySQL Database...");
    };
    PlaywrightConnection.prototype.executeUpdate = function (query) {
        console.log("Executing Update Query:", query);
        console.log("Update executed successfully.");
    };
    return PlaywrightConnection;
}(_02_MySqlConnection_1.MySqlConnection));
var db = new PlaywrightConnection();
db.connect();
db.executeQuery("SELECT * FROM users");
db.executeUpdate("UPDATE users SET status = 'active' WHERE id = 1");
db.disconnect();
