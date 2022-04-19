require("dotenv/config");

const express = require("express");

const databaseConnection = require("./config/config");
const adminRoutes = require("./routes/adminRoute");

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
