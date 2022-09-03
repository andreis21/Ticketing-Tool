const express = require('express')
const UsersController = require('../controllers/usersController')
const router = express.Router()

router.get('/', UsersController.fetchAllUsers)
router.get('/:id', UsersController.fetchByID)
router.delete('/:id', UsersController.deleteByID)
router.post('/', UsersController.create)
router.patch('/:id', UsersController.update)

module.exports = router