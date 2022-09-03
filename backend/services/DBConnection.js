const mysql = require('mysql');

const createConnection = () => {
    return mysql.createConnection({
        host     : 'localhost',
        user     : process.env.USER,
        password : process.env.PASSWORD,
        database : process.env.DB
    })
}

module.exports = {
    createConnection
}