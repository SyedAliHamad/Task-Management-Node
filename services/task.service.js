import pool from "../config/db.js";

export const createTaskService = async ({ title, description, priority, assignedTo, userId }) => {
  const result = await pool.query(
    `INSERT INTO tasks (title, description, priority, assigned_to, created_by)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [title, description, priority, assignedTo, userId]
  );

  return result.rows[0];
};

export const getAllTasksService = async () => {
  const result = await pool.query(`SELECT * FROM tasks ORDER BY created_at DESC`);
  return result.rows;
};

export const getTaskByIdService = async (id) => {
  const result = await pool.query(`SELECT * FROM tasks WHERE id=$1`, [id]);
  return result.rows[0];
};

export const updateTaskService = async (id, updates) => {
  const { title, description, status, priority, assignedTo } = updates;

  const result = await pool.query(
    `UPDATE tasks
     SET title=$1, description=$2, status=$3, priority=$4, assigned_to=$5, updated_at=NOW()
     WHERE id=$6
     RETURNING *`,
    [title, description, status, priority, assignedTo, id]
  );

  return result.rows[0];
};

export const deleteTaskService = async (id) => {
  const result = await pool.query(`DELETE FROM tasks WHERE id=$1 RETURNING id`, [id]);
  return result.rows[0];
};
