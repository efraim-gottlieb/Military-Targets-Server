import express from "express";
import * as targetController from "../controllers/targetController.js";
const router = express.Router();

router.get("/", targetController.welcome);

router.get("/message", targetController.msg);

export default router;
