import mongoose from "mongoose";

const connectionString = process.env.connectionString;

const databaseConnection = () => {
  mongoose.connect(connectionString, (err) => {
    err
      ? console.log(err.message)
      : console.log("Database Connection Successful");
  });
};

export default databaseConnection;

export const githubLink = "https://api.github.com/users/5usan/repos";
