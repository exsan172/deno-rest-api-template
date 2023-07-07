import Configs from "../../configs/index.ts"
interface HomeSchema {
    _id : string,
    name : string,
    address : string
}

const home = Configs.db.collection<HomeSchema>("home")

export default home
export type { HomeSchema };
