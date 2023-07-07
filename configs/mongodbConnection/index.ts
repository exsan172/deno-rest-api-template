import { mongodb } from "../../dependencies.ts";

const mongoDbUrl        = Deno.env.get("MONGO_DB_URI")    
const mongoDatabaseName = Deno.env.get("MONGO_DB_NAME")  

const client = new mongodb.MongoClient()
export const connect = await client.connect(mongoDbUrl as string)

if(connect) {
    console.log("Success Connection Database !");
    
} else {
    console.log("Failed Connection Database !");
}

export const db = client.database(mongoDatabaseName)