const DBConnection = require('../services/DBConnection');

const findAll = async () => {
    var DB = DBConnection.createConnection()
    try{
        const response = await new Promise((resolve, reject)=>{
            const query = "SELECT * from users"

            DB.query(query, (err, result) => {
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

const findByID = async id => {
    var DB = DBConnection.createConnection()
    try{
        const response = await new Promise((resolve, reject)=>{
            const query = "SELECT * from users where id = " + id

            DB.query(query, (err, result) => {
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

const removeByID = async id => {
    var DB = DBConnection.createConnection()
    try{
        const response = await new Promise((resolve, reject)=>{
            const query = "DELETE from users where id = " + id

            DB.query(query, (err, result) => {
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

const create = async (user) => {
    var DB = DBConnection.createConnection()
    try{
        const response = await new Promise((resolve, reject)=>{
            const query = "INSERT INTO users (name, username, password, role, createdAt, updatedAt) VALUES ('" + user.name + "', '"+ user.user + "', '" + user.password + "', '"+ user.role + "', '" + new Date().toISOString().slice(0, 19).replace('T', ' ') + "', '" + new Date().toISOString().slice(0, 19).replace('T', ' ') + "')"

            DB.query(query, (err, result) => {
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

module.exports = {
    findAll, findByID, removeByID, create
}