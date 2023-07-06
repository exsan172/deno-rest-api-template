import { Context } from "https://deno.land/x/oak@v12.5.0/mod.ts"
import Services from "../../services/index.ts"
import Configs from "../../configs/index.ts"

const HomeController = {
    getAll : async (cntx:Context) => {
        return await Configs.Response(cntx, 200, "Success", await Services.homeService)
    }
}

export default HomeController