import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { UserController } from './contollers/usersController'
import { TicketController } from './contollers/ticketsController'
import { CategoryController } from './contollers/categoriesController'

dotenv.config()
const app = express()
const port = process.env.PORT

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('uploads'))

//################# ROUTES #################
// USER ROUTES
app.get('/api/users/', UserController.fetchAllUsers)
app.get('/api/users/:id', UserController.fetchByID)
app.delete('/api/users/:id', UserController.deleteByID)
app.post('/api/users/', UserController.create)
app.patch('/api/users/:id', UserController.update)

// TICKET ROUTES
app.get('/api/tickets/', TicketController.fetchAllTickets)
app.get('/api/tickets/:id', TicketController.fetchByID)
app.delete('/api/tickets/:id', TicketController.deleteByID)
app.post('/api/tickets/', TicketController.create)
app.patch('/api/tickets/:id', TicketController.update)

// CATEGORY ROUTES
app.get('/api/categories/', CategoryController.fetchAllCategories)
app.get('/api/categories/:id', CategoryController.fetchByID)
app.delete('/api/categories/:id', CategoryController.deleteByID)
app.post('/api/categories/', CategoryController.create)
app.patch('/api/categories/:id', CategoryController.update)

app.listen(port, () => {
    console.log("Server listening on port", port+"...")
})