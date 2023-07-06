import Response from "./resposeStructure/index.ts"
import { mongodbConnection, database } from "./mongodbConnection/index.ts"

const Configs = {
    Response,
    mongodbConnection,
    database
}

export default Configs