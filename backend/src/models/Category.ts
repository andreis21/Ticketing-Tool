import {DBConnection} from '../services/DBConnection'

export class Category{
    name: string

    constructor(name: string){
        this.name = name
    }

    static async findAll(){
        var DB = DBConnection.getInstance()
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * from category"
    
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
                const query = "SELECT * from category where category_id = " + id

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
                const query = "DELETE from category where category_id = " + id

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

    static async create(category: Category){
        var DB = DBConnection.getInstance()
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "INSERT INTO category (name) values ('" + category.name + "')"

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

    static async update(category: Category, id: Number){
        var DB = DBConnection.getInstance()
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "INSERT INTO category (name) values ('" + category.name + "')"
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