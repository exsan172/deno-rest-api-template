import { Application } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import router from "./routes/index.ts";

const app = new Application();

app.addEventListener("listen", () => {
    console.log("apps runing on port : 3500");
})

app.use(router.home);

await app.listen({ port: 3500 });
