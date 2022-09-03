const DBConnection = require('../services/DBConnection')

const findAll = async () => {
    var DB = DBConnection.createConnection()
    try{
        const response = await new Promise((resolve, reject)=>{
            const query = "SELECT * from tickets"

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
    findAll
}