import { Oak } from "../../dependencies.ts";
import Configs from "../../configs/index.ts";

const Handle404 = async (ctx: Oak.Context, next:Oak.Next) => {
    await next();

    if (ctx.response.status === 404 && !ctx.response.body) {
        Configs.Response(ctx, 404, "Path Not Found !")
    }
}

export default Handle404