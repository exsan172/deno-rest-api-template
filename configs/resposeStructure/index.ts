// deno-lint-ignore-file
import { Oak } from "../../dependencies.ts"

interface ErrorInterface {
    filed : string,
    message : string
}

const Response = (ctx:Oak.Context, statusCode:number, message:string, data?:any, errors?:Array<ErrorInterface> ) => {
    ctx.response.status = statusCode
    return ctx.response.body = {
        statusCode : statusCode,
        message    : message,
        data       : data,
        errors     : errors
    }
}

export default Response