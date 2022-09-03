const User = require('../models/User')

const fetchAllUsers = async (req, res) => {
    try{
        var allUsers = await User.findAll()
        res.send(allUsers).status(200)
    }
    catch(err){
        console.log(err)
    }
}

const fetchByID = async (req, res) => {
    try {
        var id = req.params.id
        var user = await User.findByID(id)
        res.send(user).status(200)
    } catch (error) {
        console.log(error)
    }
}

const deleteByID = async (req, res) => {
    try {
        var id = req.params.id
        User.removeByID(id)
        res.send({ msg: "Record deleted successfuly!" }).status(200)
    } catch (error) {
        console.log(error)
    }
}

const create = async (req, res) => {
    try {
        var user = req.body
        User.create(user)
        res.send({ msg: "User created successfuly!" }).status(200)
    } catch (error) {
        console.log(error)
    }
}

const update = async (req, res) => {
    try {
        var user = req.body
        var id = req.params.id
        User.update(user, id)
        res.send({ msg: "User updated successfuly!" }).status(200)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    fetchAllUsers, fetchByID, deleteByID, create, update
}