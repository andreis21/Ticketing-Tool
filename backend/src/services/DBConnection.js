"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConnection = void 0;
const mysql_1 = __importDefault(require("mysql"));
class DBConnection {
    constructor() {
        this.connection = this.createConnection();
    }
    static getInstance() {
        if (!DBConnection._instance) {
            DBConnection._instance = new DBConnection();
        }
        return DBConnection._instance;
    }
    createConnection() {
        return mysql_1.default.createConnection({
            host: 'localhost',
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DB
        });
    }
}
exports.DBConnection = DBConnection;
