import Response from "./resposeStructure/index.ts"
import { db, connect } from "./mongodbConnection/index.ts"
import Code from "./responseCode/index.ts"

const Configs = {
    Response,
    db,
    connect,
    Code
}

export default Configs