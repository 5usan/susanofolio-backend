import express from "express";
import jwtVerify from "../middlewares/jwtVerify.js";

const protectedRoute = express.Router();

protectedRoute.use(jwtVerify);

protectedRoute.get("/", (req, res) => {
  res.json({ message: "You can now access this route" });
});

protectedRoute.get("/blogs", (req, res) => {
  res.json({ message: "You can now access this route" });
});

protectedRoute.get("/profile", (req, res) => {
  res.json({ message: "You can now access this route" });
});

export default protectedRoute;
