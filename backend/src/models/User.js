"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const DBConnection_1 = require("../services/DBConnection");
class User {
    constructor(name, username, password, role) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.role = role;
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            var DB = DBConnection_1.DBConnection.getInstance();
            try {
                const response = yield new Promise((resolve, reject) => {
                    const query = "SELECT * from users";
                    DB.connection.query(query, (err, result) => {
                        if (err)
                            throw err;
                        resolve(result);
                    });
                });
                return response;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static findByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var DB = DBConnection_1.DBConnection.getInstance();
            try {
                const response = yield new Promise((resolve, reject) => {
                    const query = "SELECT * from users where id = " + id;
                    DB.connection.query(query, (err, result) => {
                        if (err)
                            throw err;
                        resolve(result);
                    });
                });
                return response;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static removeByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var DB = DBConnection_1.DBConnection.getInstance();
            try {
                const response = yield new Promise((resolve, reject) => {
                    const query = "DELETE from users where id = " + id;
                    DB.connection.query(query, (err, result) => {
                        if (err)
                            throw err;
                        resolve(result);
                    });
                });
                return response;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            var DB = DBConnection_1.DBConnection.getInstance();
            try {
                const response = yield new Promise((resolve, reject) => {
                    const query = "INSERT INTO users (name, username, password, role, createdAt, updatedAt) VALUES ('" + user.name + "', '" + user.username + "', '" + user.password + "', '" + user.role + "', '" + new Date().toISOString().slice(0, 19).replace('T', ' ') + "', '" + new Date().toISOString().slice(0, 19).replace('T', ' ') + "')";
                    DB.connection.query(query, (err, result) => {
                        if (err)
                            throw err;
                        resolve(result);
                    });
                });
                return response;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static update(user, id) {
        return __awaiter(this, void 0, void 0, function* () {
            var DB = DBConnection_1.DBConnection.getInstance();
            try {
                const response = yield new Promise((resolve, reject) => {
                    const query = "UPDATE users SET name = '" + user.name + "', username = '" + user.username + "', password = '" + user.password + "', role = '" + user.role + "', updatedAt = '" + new Date().toISOString().slice(0, 19).replace('T', ' ') + "' WHERE id = '" + id + "'";
                    console.log(query);
                    DB.connection.query(query, (err, result) => {
                        if (err)
                            throw err;
                        resolve(result);
                    });
                });
                return response;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.User = User;
