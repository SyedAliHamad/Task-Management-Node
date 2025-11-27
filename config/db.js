import pkg from "pg";
import { config } from "./env.js";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: config.databaseUrl,
});

pool.on("connect", () => {
  console.log("🗄️ Connected to PostgreSQL");
});

export default pool;
