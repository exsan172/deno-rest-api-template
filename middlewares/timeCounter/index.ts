import { Oak } from "../../dependencies.ts";

const TimeCounter = async (ctx: Oak.Context, next:Oak.Next) => {
    await next();

    const start = Date.now();
    const ms = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${ms}ms`);
}

export default TimeCounter