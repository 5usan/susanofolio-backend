const mongoose = require("mongoose");

const connectionString = process.env.connectionString;

const databaseConnection = () => {
  mongoose.connect(connectionString, (err) => {
    err
      ? console.log(err.message)
      : console.log("Database Connection Successful");
  });
};

module.exports = databaseConnection;
