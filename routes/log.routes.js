import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { requireRole } from "../middlewares/role.middleware.js";
import { getAllLogs } from "../controllers/log.controller.js";

const router = express.Router();

router.get("/", authMiddleware, requireRole(["ADMIN"]), getAllLogs);

export default router;
