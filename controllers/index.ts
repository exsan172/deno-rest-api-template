import { Context } from "https://deno.land/x/oak@v12.5.0/mod.ts";

const Controllers = {
    getData : (ctx:Context) => {
        ctx.response.body = "kontol !"
    }
}

export default Controllers