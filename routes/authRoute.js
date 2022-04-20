import express from "express";
import authController from "../controllers/authController.js";

const signupRoute = express.Router();

signupRoute.get("/", authController.getAdmins);
signupRoute.post("/", authController.postAdmin);
// signupRoute.get("/:id", authController.getOneAdmin);
// signupRoute.delete("/:id", authController.deleteAdmin);
// signupRoute.patch("/:id", authController.updateAdmin);
signupRoute
  .route("/:id")
  .get(authController.getOneAdmin)
  .delete(authController.deleteAdmin)
  .patch(authController.updateAdmin);

  signupRoute.get("/login", authController.getAdmins);

export default signupRoute;
