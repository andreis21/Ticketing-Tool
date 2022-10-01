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
exports.Ticket = void 0;
const DBConnection_1 = require("../services/DBConnection");
class Ticket {
    constructor(creator, category, title, summary, assignedTo, createdAt, updatedAt) {
        this.creator = creator;
        this.category = category;
        this.title = title;
        this.summary = summary;
        this.assignedTo = assignedTo;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            var DB = DBConnection_1.DBConnection.getInstance();
            try {
                const response = yield new Promise((resolve, reject) => {
                    const query = "SELECT * from tickets";
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
                    const query = "SELECT * from tickets where ticket_id = " + id;
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
                    const query = "DELETE from tickets where ticket_id = " + id;
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
    static create(ticket) {
        return __awaiter(this, void 0, void 0, function* () {
            var DB = DBConnection_1.DBConnection.getInstance();
            try {
                const response = yield new Promise((resolve, reject) => {
                    const query = "INSERT INTO tickets (creator_id, category, title, summary, assignedTo, createdAt, updatedAt) values ('" + ticket.creator + "', '" + ticket.category + "', '" + ticket.title + "', '" + ticket.summary + "', '" + ticket.assignedTo + "', '" + ticket.createdAt.toISOString().slice(0, 19).replace('T', ' ') + "', '" + ticket.updatedAt.toISOString().slice(0, 19).replace('T', ' ') + "')";
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
    static update(ticket, id) {
        return __awaiter(this, void 0, void 0, function* () {
            var DB = DBConnection_1.DBConnection.getInstance();
            try {
                const response = yield new Promise((resolve, reject) => {
                    const query = "INSERT INTO tickets (creator_id, category, title, summary, assignedTo, createdAt, updatedAt) values ('" + ticket.creator + "', '" + ticket.category + "', '" + ticket.title + "', '" + ticket.summary + "', '" + ticket.assignedTo + "', '" + new Date().toISOString().slice(0, 19).replace('T', ' ') + "', '" + new Date().toISOString().slice(0, 19).replace('T', ' ') + "')";
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
exports.Ticket = Ticket;
