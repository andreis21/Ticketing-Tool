const Ticket = require('../models/Ticket')

const fetchAll = async (req, res) => {
    try {
        var allTickets = await Ticket.findAll()
        res.send(allTickets).status(200)  
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    fetchAll
}