import express from "express";
import signupController from "../controllers/authController.js";

const signupRoute = express.Router();

signupRoute.get("/", signupController.getAdmins);
signupRoute.post("/", signupController.postAdmin);
// signupRoute.get("/:id", authController.getOneAdmin);
// signupRoute.delete("/:id", authController.deleteAdmin);
// signupRoute.patch("/:id", authController.updateAdmin);
signupRoute
  .route("/:id")
  .get(signupController.getOneAdmin)
  .delete(signupController.deleteAdmin)
  .patch(signupController.updateAdmin);

export default signupRoute;
