import { Category } from "../models/Category";

export class CategoryController{
    static async fetchAllCategories(req: any, res: any){
        try{
            var allCategories = await Category.findAll()
            res.send(allCategories).status(200)
        }
        catch(err){
            console.log(err)
        }
    }

    static async fetchByID(req: any, res: any){
        try {
            var id = req.params.id
            var category = await Category.findByID(id)
            res.send(category).status(200)
        } catch (error) {
            console.log(error)
        }
    }

    static async deleteByID(req: any, res: any){
        try {
            var id = req.params.id
            console.log(Category.removeByID(id))
            res.send({ msg: "Record deleted successfuly!" }).status(200)
        } catch (error) {
            console.log(error)
        }
    }

    static async create(req: any, res: any){
        try {
            var category = req.body
            Category.create(new Category(category.name))
            res.send({ msg: "User created successfuly!" }).status(200)
        } catch (error) {
            console.log(error)
        }
    }

    static async update(req: any, res: any){
        try {
            var category = req.body
            var id = req.params.id
            Category.update(new Category(category.name), id)
            res.send({ msg: "User updated successfuly!" }).status(200)
        } catch (error) {
            console.log(error)
        }
    }
}