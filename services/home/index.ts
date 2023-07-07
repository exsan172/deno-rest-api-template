import { mongodb } from "../../dependencies.ts"
import Models from "../../models/index.ts"
import { HomeSchema } from "../../models/home/index.ts"

const homeService = {
    getAll : async () => {
        return await Models.home.find({}).toArray()
    },
    
    getOne : async (id:string) => {
        const idObj = new mongodb.ObjectId(id)
        return await Models.home.findOne({ _id : idObj })
    },

    update : async (id:string, data:HomeSchema) => {
        const idObj   = new mongodb.ObjectId(id)
        const dataObj = {
            $set: data
        }
        
        return await Models.home.updateOne({ _id: idObj }, dataObj)
    },

    create : async (data:HomeSchema) => {
        return await Models.home.insertOne(data)
    },

    delete : async (id:string) => {
        const idObj = new mongodb.ObjectId(id)
        return await Models.home.deleteOne({ _id:idObj })
    }
}

export default homeService