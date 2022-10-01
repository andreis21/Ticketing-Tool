import {DBConnection} from '../services/DBConnection'

export class User{
    name: string
    username: string
    password: string
    role: number

    constructor(name: string, username: string, password: string, role: number){
        this.name = name
        this.username = username
        this.password = password
        this.role = role
    }

    static async findAll(){
        var DB = DBConnection.getInstance()
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * from users"
    
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
                const query = "SELECT * from users where id = " + id

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
                const query = "DELETE from users where id = " + id

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

    static async create(user: User){
        var DB = DBConnection.getInstance()
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "INSERT INTO users (name, username, password, role, createdAt, updatedAt) VALUES ('" + user.name + "', '"+ user.username + "', '" + user.password + "', '"+ user.role + "', '" + new Date().toISOString().slice(0, 19).replace('T', ' ') + "', '" + new Date().toISOString().slice(0, 19).replace('T', ' ') + "')"

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

    static async update(user: User, id: Number){
        var DB = DBConnection.getInstance()
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE users SET name = '" + user.name + "', username = '" + user.username + "', password = '" + user.password + "', role = '" + user.role + "', updatedAt = '" + new Date().toISOString().slice(0, 19).replace('T', ' ') + "' WHERE id = '" + id + "'"
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
