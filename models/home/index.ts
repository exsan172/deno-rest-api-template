import { mongoose } from "../../dependencies.ts"

const HomeSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    address : {
        type : String,
        require : true
    },
})
export interface Home {
    name : string,
    address : string
}

export default mongoose.model<Home>("home", HomeSchema)
