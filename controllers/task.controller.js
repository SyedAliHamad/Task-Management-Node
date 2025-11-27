import {
  createTaskService,
  getAllTasksService,
  getTaskByIdService,
  updateTaskService,
  deleteTaskService
} from "../services/task.service.js";

export const createTask = async (req, res) => {
  const { title, description, priority, assignedTo } = req.body;

  const task = await createTaskService({
    title,
    description,
    priority,
    assignedTo,
    userId: req.user.id
  });

  return res.json({ message: "Task created", task });
};

export const getAllTasks = async (req, res) => {
  const tasks = await getAllTasksService();
  return res.json({ tasks });
};

export const getTaskById = async (req, res) => {
  const task = await getTaskByIdService(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  return res.json({ task });
};

export const updateTask = async (req, res) => {
  const task = await updateTaskService(req.params.id, req.body);
  return res.json({ message: "Task updated", task });
};

export const deleteTask = async (req, res) => {
  const deleted = await deleteTaskService(req.params.id);

  if (!deleted) return res.status(404).json({ message: "Task not found" });

  return res.json({ message: "Task deleted", id: deleted.id });
};
