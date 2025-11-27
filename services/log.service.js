import pool from "../config/db.js";

export const createLogService = async ({ userId, action, route, method, ip }) => {
  await pool.query(
    `INSERT INTO activity_logs (user_id, action, route, method, ip_address)
     VALUES ($1, $2, $3, $4, $5)`,
    [userId, action, route, method, ip]
  );
};

export const getLogsService = async () => {
  const result = await pool.query(`
    SELECT 
      l.id,
      l.action,
      l.route,
      l.method,
      l.ip_address,
      l.created_at,
      u.name AS user_name,
      u.email AS user_email
    FROM activity_logs l
    LEFT JOIN users u ON l.user_id = u.id
    ORDER BY l.created_at DESC
  `);

  return result.rows;
};
