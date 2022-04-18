require("dotenv/config");

const express = require("express");

const databaseConnection = require("./config/config");

const PORT = process.env.PORT || 5000;

const server = express();

databaseConnection();

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}.`);
});
