import { Oak } from "../../dependencies.ts";
import Controllers from "../../controllers/index.ts";

const router = new Oak.Router()

router
.get("/home", Controllers.HomeController.getAll)
.get("/home/:id", Controllers.HomeController.getOne)
.put("/home/:id", Controllers.HomeController.update)
.post("/home", Controllers.HomeController.create)
.delete("/home/:id", Controllers.HomeController.delete)

export default router.routes()