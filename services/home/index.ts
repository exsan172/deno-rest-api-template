import Models from "../../models/index.ts"

const homeService = {
    getAll : async () => {
        return await Models.homeModels()
    }
}

export default homeService