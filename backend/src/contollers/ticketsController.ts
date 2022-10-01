import { Ticket } from "../models/Ticket";

export class TicketController{
    static async fetchAllTickets(req: any, res: any){
        try{
            var allTickets = await Ticket.findAll()
            res.send(allTickets).status(200)
        }
        catch(err){
            console.log(err)
        }
    }

    static async fetchByID(req: any, res: any){
        try {
            var id = req.params.id
            var ticket = await Ticket.findByID(id)
            res.send(ticket).status(200)
        } catch (error) {
            console.log(error)
        }
    }

    static async deleteByID(req: any, res: any){
        try {
            var id = req.params.id
            console.log(Ticket.removeByID(id))
            res.send({ msg: "Record deleted successfuly!" }).status(200)
        } catch (error) {
            console.log(error)
        }
    }

    static async create(req: any, res: any){
        try {
            var ticket = req.body
            Ticket.create(new Ticket(ticket.creator, ticket.category, ticket.title, ticket.summary, ticket.assignedTo, new Date(), new Date()))
            res.send({ msg: "User created successfuly!" }).status(200)
        } catch (error) {
            console.log(error)
        }
    }

    static async update(req: any, res: any){
        try {
            var ticket = req.body
            var id = req.params.id
            Ticket.update(new Ticket(ticket.creator, ticket.category, ticket.title, ticket.summary, ticket.assignedTo, new Date(), new Date()), id)
            res.send({ msg: "User updated successfuly!" }).status(200)
        } catch (error) {
            console.log(error)
        }
    }
}