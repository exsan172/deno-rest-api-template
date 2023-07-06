import { Router } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import Controllers from "../../controllers/index.ts";

const router = new Router()

router.get("/", Controllers.HomeController.getAll)

export default router.routes()