// const mongoose = require("mongoose");
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.connectionString;

const databaseConnection = () => {
  mongoose.connect(connectionString, (err) => {
    err
      ? console.log(err.message)
      : console.log("Database Connection Successful");
  });
};

// module.exports = databaseConnection;
export default databaseConnection;
