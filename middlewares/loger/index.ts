import { Oak } from "../../dependencies.ts";
import { moment } from "../../dependencies.ts";

const Loger = async (ctx: Oak.Context, next:Oak.Next) => {
    await next();

    const rt   = ctx.response.headers.get("X-Response-Time");
    const path = ctx.request.url
    const responseStatusCode = ctx.response.status

    console.log(`${moment().format("DD/MM/YYYY. HH:mm:ss")} | ${ctx.request.method} | ${responseStatusCode} | ${rt} | ${path}`);
}

export default Loger