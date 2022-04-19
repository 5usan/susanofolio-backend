// require("dotenv/config");
import dotenv from "dotenv";
dotenv.config();

// const express = require("express");
import express from "express";

// const databaseConnection = require("./config/config");
import databaseConnection from "./config/config.js"
// const adminRoutes = require("./routes/adminRoute");
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
