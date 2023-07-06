// deno-lint-ignore-file
import { Context } from "https://deno.land/x/oak@v12.5.0/mod.ts"

interface ErrorInterface {
    filed : string,
    message : string
}

const Response = (ctx:Context, statusCode:number, message:string, data:any=[], errors?:Array<ErrorInterface> ) => {
    return ctx.response.body = {
        statusCode : statusCode,
        message    : message,
        data       : data,
        errors     : errors
    }
}

export default Response