import express from "express";
import morgan from "morgan";

import { signupController, loginController } from "./controllers/auth.controller.js";
import { activityLogger } from "./middlewares/log.middleware.js";
import protectedRoutes from "./routes/protected.routes.js";
import taskRoutes from "./routes/task.routes.js";
import logRoutes from "./routes/log.routes.js";


const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(activityLogger);

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// REGISTER REAL ROUTES HERE
app.use("/api/v1/auth/signup", signupController);
app.use("/api/v1/auth/login", loginController);
app.use("/api/v1/protected", protectedRoutes);
app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/logs", logRoutes);

export default app;
