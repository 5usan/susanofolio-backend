import cors from "cors";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import databaseConnection from "./src/config/config.js";
import adminDetailsRoute from "./src/routes/adminDetailsRoute.js";
import authRoute from "./src/routes/authRoute.js";
import contactMeRoute from "./src/routes/contactMeRoute.js";
import portfolioRoute from "./src/routes/portfolioRoute.js";
import protectedRoute from "./src/routes/protectedRoute.js";

const PORT = process.env.PORT || 5001;

const server = express();

server.use(express.json());

databaseConnection();

const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};

server.use(cors(corsOptions));

server.use("/api/adminDetails", adminDetailsRoute);
server.use("/api/admin", authRoute);
server.use("/api/contact", contactMeRoute);
server.use("/api/protected", protectedRoute);
server.use("/api/portfolio", portfolioRoute);

server.get("/", (req, res) => {
  console.log("Hello from the other side");
  res.json({
    response: "Postman is working",
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}.`);
});
