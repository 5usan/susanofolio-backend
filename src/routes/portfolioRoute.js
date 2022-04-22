import express from "express";
import { portfolioController } from "../controllers/portfolioController.js";

const portfolioRoute = express.Router();

portfolioRoute.get("/", portfolioController.getRepos);

export default portfolioRoute;