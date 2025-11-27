import { signupService, loginService } from "../services/auth.service.js";

export const signupController = async (req, res) => {
    console.log("signup")
  const { name, email, password } = req.body;

  const user = await signupService({ name, email, password });

  return res.json({
    message: "User created successfully",
    user,
  });
};

export const loginController = async (req, res) => {
    console.log("login")
  const { email, password } = req.body;

  const result = await loginService(email, password);

  if (!result) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  
  return res.json({
    message: "Login successful",
    token: result.token,
    user: result.user,
  });
};
