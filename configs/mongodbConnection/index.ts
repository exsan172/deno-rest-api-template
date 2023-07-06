import { mongodb } from "../../dependencies.ts";

let db: mongodb.Database | null  = null 

export const mongodbConnection = async () => {
    console.log("sono");
    try {
        const mongoDbUrl = Deno.env.get("MONGO_DB_URI")    
        const mongoDatabaseName = Deno.env.get("MONGO_DB_NAME")    

        if (mongoDbUrl && mongoDatabaseName) {

            const client = new mongodb.MongoClient()
            await client.connect(mongoDbUrl)

            db = client.database(mongoDatabaseName)
            console.log("Connection Mongodb Success ! ");

        } else {
            console.log("Connection Mongodb Failed, add mongodb url in env file ! ");
        }

    } catch (error) {
        console.log("Connection Mongodb Failed : ", error);
        
    }
}

export const database = () => {
    console.log("sini");
    
    return db
    // }
}