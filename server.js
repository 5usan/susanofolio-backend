import dotenv from "dotenv";
dotenv.config();

import express from "express";

import databaseConnection from "./config/config.js";
import jwtVerify from "./middlewares/jwtVerify.js";
import adminDetailsRoute from "./routes/adminDetailsRoute.js";
import authRoute from "./routes/authRoute.js";
import protectedRoute from "./routes/protectedRoute.js";

const PORT = process.env.PORT || 5001;

const server = express();

server.use(express.json());

databaseConnection();

server.use("/api/adminDetails", adminDetailsRoute);
server.use("/api/admin", authRoute);
server.use("/api/protected", jwtVerify, protectedRoute);

server.get("/", (req, res) => {
  console.log("Hello from the other side");
  res.json({
    response: "Postman is working",
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}.`);
});
