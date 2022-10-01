import {User} from '../models/User'

export class UserController{
    static async fetchAllUsers(req: any, res: any){
        try{
            var allUsers = await User.findAll()
            res.send(allUsers).status(200)
        }
        catch(err){
            console.log(err)
        }
    }
    
    static async fetchByID(req: any, res: any){
        try {
            var id = req.params.id
            var user = await User.findByID(id)
            res.send(user).status(200)
        } catch (error) {
            console.log(error)
        }
    }

    static async deleteByID(req: any, res: any){
        try {
            var id = req.params.id
            console.log(User.removeByID(id))
            res.send({ msg: "Record deleted successfuly!" }).status(200)
        } catch (error) {
            console.log(error)
        }
    }

    static async create(req: any, res: any){
        try {
            var user = req.body
            User.create(new User(user.name, user.username, user.password, user.role))
            res.send({ msg: "User created successfuly!" }).status(200)
        } catch (error) {
            console.log(error)
        }
    }

    static async update(req: any, res: any){
        try {
            var user = req.body
            var id = req.params.id
            User.update(new User(user.name, user.username, user.password, user.role), id)
            res.send({ msg: "User updated successfuly!" }).status(200)
        } catch (error) {
            console.log(error)
        }
    }
}