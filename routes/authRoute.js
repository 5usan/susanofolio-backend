import express from "express";
import {
  signupController,
  loginController,
} from "../controllers/authController.js";
import jwtVerify from "../middlewares/jwtVerify.js";

const authRoute = express.Router();

authRoute.get("/signup", signupController.getAdmins);
authRoute.post("/signup", signupController.postAdmin);
// authRoute.get("/:id", authController.getOneAdmin);
// authRoute.delete("/:id", authController.deleteAdmin);
// authRoute.patch("/:id", authController.updateAdmin);
authRoute
  .route("/signup/:id")
  .get(signupController.getOneAdmin)
  .delete(signupController.deleteAdmin)
  .patch(signupController.updateAdmin);

authRoute.post("/login", loginController.postAdmin);
export default authRoute;
