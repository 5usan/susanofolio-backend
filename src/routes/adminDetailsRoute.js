import express from "express";
import adminDetailsController from "../controllers/adminDetailsController.js";

const adminDetailsRoute = express.Router();

adminDetailsRoute.post("/", adminDetailsController.postAdminDetails);
adminDetailsRoute.get("/", adminDetailsController.getAllAdminDetails);
// adminRoute.get("/:id", adminDetailsController.getOneAdmin);
// adminRoute.delete("/:id", adminDetailsController.deleteAdmin);
// adminRoute.patch("/:id", adminDetailsController.updateAdmin);
adminDetailsRoute
  .route("/:id")
  .get(adminDetailsController.getOneAdminDetails)
  .delete(adminDetailsController.deleteAdminDetails)
  .patch(adminDetailsController.updateAdminDetails);

export default adminDetailsRoute;
