import {DBConnection} from '../services/DBConnection'

export class Ticket{
    creator: number
    category: number
    title: string
    summary: string
    assignedTo: number
    createdAt: Date
    updatedAt: Date

    constructor(creator: number, category: number, title: string, summary: string, assignedTo: number, createdAt: Date, updatedAt: Date){
        this.creator = creator
        this.category = category
        this.title = title
        this.summary = summary
        this.assignedTo = assignedTo
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    static async findAll(){
        var DB = DBConnection.getInstance()
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * from tickets"
    
                DB.connection.query(query, (err, result) => {
                    if(err) throw err
                    resolve(result)
                })
            })
            return response
        }
        catch(err){
            console.log(err)
        }
    }

    static async findByID(id: Number){
        var DB = DBConnection.getInstance()
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "SELECT * from tickets where ticket_id = " + id

                DB.connection.query(query, (err, result) => {
                    if(err) throw err
                    resolve(result)
                })
            })
            return response
        }
        catch(err){
            console.log(err);
        }
    }

    static async removeByID(id: Number){
        var DB = DBConnection.getInstance()
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "DELETE from tickets where ticket_id = " + id

                DB.connection.query(query, (err, result) => {
                    if(err) throw err
                    resolve(result)
                })
            })
            return response
        }
        catch(err){
            console.log(err);
        }
    }

    static async create(ticket: Ticket){
        var DB = DBConnection.getInstance()
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "INSERT INTO tickets (creator_id, category, title, summary, assignedTo, createdAt, updatedAt) values ('" + ticket.creator + "', '" + ticket.category +"', '" + ticket.title + "', '" + ticket.summary + "', '" + ticket.assignedTo + "', '"+ ticket.createdAt.toISOString().slice(0, 19).replace('T', ' ') + "', '" + ticket.updatedAt.toISOString().slice(0, 19).replace('T', ' ') + "')"

                DB.connection.query(query, (err, result) => {
                    if(err) throw err
                    resolve(result)
                })
            })
            return response
        }
        catch(err){
            console.log(err);
        }
    }

    static async update(ticket: Ticket, id: Number){
        var DB = DBConnection.getInstance()
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "INSERT INTO tickets (creator_id, category, title, summary, assignedTo, createdAt, updatedAt) values ('" + ticket.creator + "', '" + ticket.category +"', '" + ticket.title + "', '" + ticket.summary + "', '" + ticket.assignedTo + "', '"+ new Date().toISOString().slice(0, 19).replace('T', ' ') + "', '" + new Date().toISOString().slice(0, 19).replace('T', ' ') + "')"
                console.log(query)
                DB.connection.query(query, (err, result) => {
                    if(err) throw err
                    resolve(result)
                })
            })
            return response
        }
        catch(err){
            console.log(err);
        }
    }
}