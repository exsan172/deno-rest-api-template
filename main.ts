import { Oak } from "./dependencies.ts";
import Routes from "./routes/index.ts";
import Configs from "./configs/index.ts";
import Middlewares from "./middlewares/index.ts";

const app  = new Oak.Application();
const port = Number(Deno.env.get("PORT"))
await Configs.mongodbConnection()

app.use(Middlewares.Loger)
app.use(Middlewares.TimeCounter)
app.use(Middlewares.Handle404)
app.use(Routes.home);

app.addEventListener("listen", () => {
    console.log(`apps runing on port : ${port}`);
})

await app.listen({ port : port });