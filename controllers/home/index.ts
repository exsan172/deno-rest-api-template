import { Oak } from "../../deps.ts"
import Services from "../../services/index.ts"
import Configs from "../../configs/index.ts"

const HomeController = {
    getAll : async (cntx:Oak.Context) => {
        return await Configs.Response(cntx, 200, "Success", await Services.homeService.getAll())
    }
}

export default HomeController