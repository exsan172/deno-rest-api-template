import { Oak } from "./deps.ts";
// import "https://deno.land/std@0.193.0/dotenv/load.ts";
import { moment } from "./deps.ts"
import Routes from "./routes/index.ts";

const app  = new Oak.Application();
const port = Number(Deno.env.get("PORT"))

app.addEventListener("listen", () => {
    console.log(`apps runing on port : ${port}`);
})

app.use(async (ctx, next) => {
    await next();

    const rt   = ctx.response.headers.get("X-Response-Time");
    const path = ctx.request.url

    console.log(`${moment().format("DD/MM/YYYY. HH:mm:ss")} | ${ctx.request.method} | ${path} | ${rt}`);
});

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(Routes.home);

await app.listen({ port : port });