import { Application } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import "https://deno.land/std@0.193.0/dotenv/load.ts";
import Routes from "./routes/index.ts";

const app  = new Application();
const port = Number(Deno.env.get("PORT"))

app.addEventListener("listen", () => {
    console.log(`apps runing on port : ${port}`);
})

app.use(Routes.home);

await app.listen({ port : port });