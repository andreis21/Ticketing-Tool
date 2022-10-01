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
exports.CategoryController = void 0;
const Category_1 = require("../models/Category");
class CategoryController {
    static fetchAllCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var allCategories = yield Category_1.Category.findAll();
                res.send(allCategories).status(200);
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
                var category = yield Category_1.Category.findByID(id);
                res.send(category).status(200);
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
                console.log(Category_1.Category.removeByID(id));
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
                var category = req.body;
                Category_1.Category.create(new Category_1.Category(category.name));
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
                var category = req.body;
                var id = req.params.id;
                Category_1.Category.update(new Category_1.Category(category.name), id);
                res.send({ msg: "User updated successfuly!" }).status(200);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.CategoryController = CategoryController;
