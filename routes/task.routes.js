import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { requireRole } from "../middlewares/role.middleware.js";

import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
} from "../controllers/task.controller.js";

const router = express.Router();

// 🟢 All routes require authentication
router.use(authMiddleware);

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getTaskById);

// Only admins can update/delete any task
router.put("/:id", requireRole(["ADMIN"]), updateTask);
router.delete("/:id", requireRole(["ADMIN"]), deleteTask);

export default router;
