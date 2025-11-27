import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { requireRole } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/user-only", authMiddleware, (req, res) => {
  res.json({ message: "Welcome user", user: req.user });
});

router.get("/admin-only", authMiddleware, requireRole(["ADMIN"]), (req, res) => {
  res.json({ message: "Welcome admin", user: req.user });
});

export default router;
