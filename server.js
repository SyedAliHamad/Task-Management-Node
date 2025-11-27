import app from "./app.js";
import { config } from "./config/env.js";
import "./config/db.js";   // <-- this initializes PostgreSQL pool

const startServer = () => {
  try {
    app.listen(config.port, () => {
      console.log(
        `🚀 Server running in ${config.env} mode on port ${config.port}`
      );
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1);
  }
};

startServer();
