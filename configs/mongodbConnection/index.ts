import { mongoose } from "../../dependencies.ts";

const mongoDbUrl = Deno.env.get("MONGO_DB_URI")    
export const db = await mongoose.connect(mongoDbUrl as string)

if(db) {
    console.log("Success Connection Database !");
    
} else {
    console.log("Failed Connection Database !");
}