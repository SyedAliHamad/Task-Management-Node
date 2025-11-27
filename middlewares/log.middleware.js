import { createLogService } from "../services/log.service.js";

export const activityLogger = async (req, res, next) => {
  // Wait until request is finished before writing log
  res.on("finish", async () => {
    // Skip logging static files or health checks if needed
    if (req.path === "/health") return;

    const userId = req.user?.id || null;

    await createLogService({
      userId,
      action: `${req.method} ${req.path}`,
      route: req.originalUrl,
      method: req.method,
      ip: req.ip
    });
  });

  next();
};
