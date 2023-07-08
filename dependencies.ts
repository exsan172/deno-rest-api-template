import "https://deno.land/std@0.193.0/dotenv/load.ts"
import * as Oak from "https://deno.land/x/oak@v12.5.0/mod.ts"
import moment from "https://deno.land/x/momentjs@2.29.1-deno/mod.ts"
import * as cors from "https://deno.land/x/cors@v1.2.2/mod.ts"
import * as mongoose from "npm:mongoose@7.3.2"

export {
    moment,
    Oak,
    cors,
    mongoose
}