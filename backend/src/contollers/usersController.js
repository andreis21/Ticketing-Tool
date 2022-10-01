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
exports.UserController = void 0;
const User_1 = require("../models/User");
class UserController {
    static fetchAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var allUsers = yield User_1.User.findAll();
                res.send(allUsers).status(200);
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
                var user = yield User_1.User.findByID(id);
                res.send(user).status(200);
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
                console.log(User_1.User.removeByID(id));
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
                var user = req.body;
                User_1.User.create(new User_1.User(user.name, user.username, user.password, user.role));
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
                var user = req.body;
                var id = req.params.id;
                User_1.User.update(new User_1.User(user.name, user.username, user.password, user.role), id);
                res.send({ msg: "User updated successfuly!" }).status(200);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.UserController = UserController;
