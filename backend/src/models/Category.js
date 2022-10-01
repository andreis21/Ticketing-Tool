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
exports.Category = void 0;
const DBConnection_1 = require("../services/DBConnection");
class Category {
    constructor(name) {
        this.name = name;
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            var DB = DBConnection_1.DBConnection.getInstance();
            try {
                const response = yield new Promise((resolve, reject) => {
                    const query = "SELECT * from category";
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
                    const query = "SELECT * from category where category_id = " + id;
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
                    const query = "DELETE from category where category_id = " + id;
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
    static create(category) {
        return __awaiter(this, void 0, void 0, function* () {
            var DB = DBConnection_1.DBConnection.getInstance();
            try {
                const response = yield new Promise((resolve, reject) => {
                    const query = "INSERT INTO category (name) values ('" + category.name + "')";
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
    static update(category, id) {
        return __awaiter(this, void 0, void 0, function* () {
            var DB = DBConnection_1.DBConnection.getInstance();
            try {
                const response = yield new Promise((resolve, reject) => {
                    const query = "INSERT INTO category (name) values ('" + category.name + "')";
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
exports.Category = Category;
