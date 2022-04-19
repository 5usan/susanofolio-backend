import dotenv from "dotenv";
dotenv.config();

import express from "express";

import databaseConnection from "./config/config.js"
import adminRoutes from "./routes/adminRoute.js"

const PORT = process.env.PORT || 5001;

const server = express();

server.use(express.json());

databaseConnection();

server.use("/api/admin", adminRoutes);

server.get("/", (req, res) => {
  console.log("Hello from the other side");
  res.json({
    response: "Postman is working",
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}.`);
});
