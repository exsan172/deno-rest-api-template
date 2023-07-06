import Configs from "../../configs/index.ts"
interface HomeSchema {
    name : {
        type : string,
        required : true
    },
    address : {
        type : string,
        required : true
    }
}

const home = await Configs.database().collection<HomeSchema>("home")

export default home