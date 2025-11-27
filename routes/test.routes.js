import express from "express";
import { createUserService, getUsersService } from "../services/user.service.js";

const router = express.Router();

router.post("/user", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await createUserService(name, email, password);
  res.json(user);
});

router.get("/users", async (req, res) => {
  const users = await getUsersService();
  res.json(users);
});

export default router;
