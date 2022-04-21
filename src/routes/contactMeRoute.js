import express from "express";
import contactMeController from "../controllers/contactMeController.js";

const contactMeRoute = express.Router();

contactMeRoute.post("/", contactMeController.postContactMeDetails);
contactMeRoute.get("/", contactMeController.getAllContactMeDetails);

export default contactMeRoute;
