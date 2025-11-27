import { getLogsService } from "../services/log.service.js";

export const getAllLogs = async (req, res) => {
  const logs = await getLogsService();
  res.json({ logs });
};
