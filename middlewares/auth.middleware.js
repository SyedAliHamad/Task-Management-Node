import { verifyToken } from "../utils/jwt.js";

export const authMiddleware = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: Missing token" });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = verifyToken(token);

    // Attach user to request
    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
