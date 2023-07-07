import Handle404 from "./404Handle/index.ts"
import TimeCounter from "./timeCounter/index.ts"
import Loger from "./loger/index.ts"
import Cors from "./cors/index.ts"

const Middlewares ={
    Handle404,
    TimeCounter,
    Loger,
    Cors
}

export default Middlewares