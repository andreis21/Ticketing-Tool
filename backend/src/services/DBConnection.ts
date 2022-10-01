import mysql from 'mysql'

export class DBConnection
{
    private static _instance: DBConnection
    public connection: mysql.Connection

    public static getInstance(): DBConnection{
        if(!DBConnection._instance){
            DBConnection._instance = new DBConnection()
        }
        return DBConnection._instance
    }

    private constructor(){
        this.connection = this.createConnection()
    }

    private createConnection(): mysql.Connection {
        return mysql.createConnection({
            host     : 'localhost',
            user     : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DB
        })
    }
}