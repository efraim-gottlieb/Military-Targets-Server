import express from "express";
import * as targetController from "../controllers/targetController.js";
const router = express.Router();

// router.get("/", targetController.getTargets);
// router.get("/:id", targetController.getTarget);
// router.post("/", targetController.addTarget);
// router.post("/:id", targetController.editTarget);

router
  .route("/")
  .get(targetController.getTargets)
  .post(targetController.addTarget);

router
  .route("/:id")
  .get(targetController.getTarget)
  .post(targetController.editTarget);
export default router;
