import Response from "./resposeStructure/index.ts"
import { db } from "./mongodbConnection/index.ts"
import Code from "./responseCode/index.ts"

const Configs = {
    Response,
    db,
    Code
}

export default Configs