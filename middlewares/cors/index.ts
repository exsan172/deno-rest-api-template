// deno-lint-ignore-file
import { Oak } from "../../dependencies.ts";
import { cors } from "../../dependencies.ts";

const Cors = async (ctx: Oak.Context, next:Oak.Next) => {
    await next();

    cors.oakCors({
        origin : Deno.env.get("ALLOW_ORIGIN")
    })
}

export default Cors