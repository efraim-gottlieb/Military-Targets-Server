import express from "express";
import * as targetController from "../controllers/targetController.js";
const router = express.Router();

router.get("/", targetController.welcome);

router.get("/message", targetController.msg);

router.get("/health", targetController.health)

router.get("/targets/:id", targetController.getTarget)

router.get("/targets", targetController.getTargets)

router.post("/targets", targetController.addTarget)

router.post("/targets/:id", targetController.editTarget)

export default router;