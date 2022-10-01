"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const usersController_1 = require("./contollers/usersController");
const ticketsController_1 = require("./contollers/ticketsController");
const categoriesController_1 = require("./contollers/categoriesController");
dotenv.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('uploads'));
//################# ROUTES #################
// USER ROUTES
app.get('/api/users/', usersController_1.UserController.fetchAllUsers);
app.get('/api/users/:id', usersController_1.UserController.fetchByID);
app.delete('/api/users/:id', usersController_1.UserController.deleteByID);
app.post('/api/users/', usersController_1.UserController.create);
app.patch('/api/users/:id', usersController_1.UserController.update);
// TICKET ROUTES
app.get('/api/tickets/', ticketsController_1.TicketController.fetchAllTickets);
app.get('/api/tickets/:id', ticketsController_1.TicketController.fetchByID);
app.delete('/api/tickets/:id', ticketsController_1.TicketController.deleteByID);
app.post('/api/tickets/', ticketsController_1.TicketController.create);
app.patch('/api/tickets/:id', ticketsController_1.TicketController.update);
// CATEGORY ROUTES
app.get('/api/categories/', categoriesController_1.CategoryController.fetchAllCategories);
app.get('/api/categories/:id', categoriesController_1.CategoryController.fetchByID);
app.delete('/api/categories/:id', categoriesController_1.CategoryController.deleteByID);
app.post('/api/categories/', categoriesController_1.CategoryController.create);
app.patch('/api/categories/:id', categoriesController_1.CategoryController.update);
app.listen(port, () => {
    console.log("Server listening on port", port + "...");
});
