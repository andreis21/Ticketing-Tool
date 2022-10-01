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
exports.TicketController = void 0;
const Ticket_1 = require("../models/Ticket");
class TicketController {
    static fetchAllTickets(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var allTickets = yield Ticket_1.Ticket.findAll();
                res.send(allTickets).status(200);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static fetchByID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var id = req.params.id;
                var ticket = yield Ticket_1.Ticket.findByID(id);
                res.send(ticket).status(200);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static deleteByID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var id = req.params.id;
                console.log(Ticket_1.Ticket.removeByID(id));
                res.send({ msg: "Record deleted successfuly!" }).status(200);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var ticket = req.body;
                Ticket_1.Ticket.create(new Ticket_1.Ticket(ticket.creator, ticket.category, ticket.title, ticket.summary, ticket.assignedTo, new Date(), new Date()));
                res.send({ msg: "User created successfuly!" }).status(200);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var ticket = req.body;
                var id = req.params.id;
                Ticket_1.Ticket.update(new Ticket_1.Ticket(ticket.creator, ticket.category, ticket.title, ticket.summary, ticket.assignedTo, new Date(), new Date()), id);
                res.send({ msg: "User updated successfuly!" }).status(200);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.TicketController = TicketController;
