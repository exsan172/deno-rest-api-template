// deno-lint-ignore-file
import { Oak } from "../../deps.ts"

interface ErrorInterface {
    filed : string,
    message : string
}

const Response = (ctx:Oak.Context, statusCode:number, message:string, data:any=[], errors?:Array<ErrorInterface> ) => {
    return ctx.response.body = {
        statusCode : statusCode,
        message    : message,
        data       : data,
        errors     : errors
    }
}

export default Response