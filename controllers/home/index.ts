import { Oak } from "../../dependencies.ts"
import Services from "../../services/index.ts"
import Configs from "../../configs/index.ts"
import { Home } from "../../models/home/index.ts"

const HomeController = {
    getAll : async (cntx:Oak.Context) => {
        try {
            return await Configs.Response(cntx, Configs.Code.OK, "Success", await Services.homeService.getAll())
            
        } catch (error) {
            return await Configs.Response(cntx, Configs.Code.BAD_REQUEST, error.message)
        }
    },

    getOne : async (cntx:Oak.Context) => {
        try {
            const id = await cntx.params.id
            const getDataOne = await Services.homeService.getOne(id)
            
            return await Configs.Response(cntx, Configs.Code.OK, "Success", getDataOne)
            
        } catch (error) {
            return await Configs.Response(cntx, Configs.Code.BAD_REQUEST, error.message)
        }
    },

    update : async (cntx:Oak.Context) => {
        try {
            const id   = await cntx.params.id
            const data = cntx.request.body()
            const value : Home = await data.value
            
            await Services.homeService.update(id, value)
            const getLatestData = await Services.homeService.getOne(id)

            return await Configs.Response(cntx, Configs.Code.OK, "Success", getLatestData)
            
        } catch (error) {
            return await Configs.Response(cntx, Configs.Code.BAD_REQUEST, error.message)
        }
    },

    delete : async (cntx:Oak.Context) => {
        try {
            const id = await cntx.params.id
            await Services.homeService.delete(id)

            return await Configs.Response(cntx, Configs.Code.OK, "Success, deleted !")
            
        } catch (error) {
            return await Configs.Response(cntx, Configs.Code.BAD_REQUEST, error.message)
        }
    },

    create : async (cntx:Oak.Context) => {
        try {
            const data = await cntx.request.body()
            const value : Home = await data.value
            
            const createData = await Services.homeService.create(value)
            return await Configs.Response(cntx, Configs.Code.OK, "Success", createData)
            
        } catch (error) {
            return await Configs.Response(cntx, Configs.Code.BAD_REQUEST, error.message)
        }
    }
}

export default HomeController