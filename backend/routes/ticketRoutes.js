const express = require('express')
const TicketController = require('../controllers/ticketsController')
const router = express.Router()

router.get('/', TicketController.fetchAll)

module.exports = router