import express from "express";

const route = express.Router();

import adminController from "../controllers/adminController.js"

route.post("/", adminController.postAdmin);
route.get("/", adminController.getAdmins);
route.get("/:id", adminController.getOneAdmin);
route.delete("/:id", adminController.deleteAdmin);
route.patch("/:id", adminController.updateAdmin);

export default route;
