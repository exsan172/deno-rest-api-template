import Models from "../../models/index.ts"
import { Home } from "../../models/home/index.ts"

const homeService = {
    getAll : async () => {
        return await Models.home.find({})
    },
    
    getOne : async (id:string) => {
        return await Models.home.findOne({ _id : id })
    },

    update : async (id:string, data:Home) => {
        return await Models.home.updateOne({ _id: id }, data)
    },

    create : async (data:Home) => {
        return await Models.home.create(data)
    },

    delete : async (id:string) => {
        return await Models.home.deleteOne({ _id:id })
    }
}

export default homeService