import { Oak } from "../../dependencies.ts";
import Controllers from "../../controllers/index.ts";

const router = new Oak.Router()

router.get("/", Controllers.HomeController.getAll)

export default router.routes()