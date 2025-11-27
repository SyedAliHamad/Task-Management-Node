import pool from "../config/db.js";
import { hashPassword, comparePassword } from "../utils/hash.js";
import { generateToken } from "../utils/jwt.js";

export const signupService = async ({ name, email, password }) => {
  const hashed = await hashPassword(password);

  const result = await pool.query(
    `INSERT INTO users (name, email, password)
     VALUES ($1, $2, $3)
     RETURNING id, name, email, role, created_at`,
    [name, email, hashed]
  );

  return result.rows[0];
};

export const loginService = async (email, password) => {
  const result = await pool.query(
    `SELECT id, name, email, password, role FROM users WHERE email=$1`,
    [email]
  );

  if (result.rows.length === 0) return null;

  const user = result.rows[0];

  const valid = await comparePassword(password, user.password);
  if (!valid) return null;

  // Generate JWT
  const token = generateToken({
    id: user.id,
    role: user.role,
  });

  return { token, user };
};
