import express from "express";
import jwtVerify from "../middlewares/jwtVerify.js";

const otherProtectedRoute = express.Router();

otherProtectedRoute.use(jwtVerify);

otherProtectedRoute.get("/", (req, res) => {
  res.json({ message: "You can now access this route" });
});

otherProtectedRoute.get("/blogs", (req, res) => {
  res.json({ message: "You can now access this route" });
});

otherProtectedRoute.get("/profile", (req, res) => {
  res.json({ message: "You can now access this route" });
});

export default otherProtectedRoute;
