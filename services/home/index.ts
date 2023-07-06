import Models from "../../models/index.ts"

const homeService = {
    getAll : async () => {
        console.log("d => ", Models.homeModels);
        
        return await Models.homeModels
    }
}

export default homeService