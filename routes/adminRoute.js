const route = require("express").Router();

const adminController = require("../controllers/adminController");

route.post("/", adminController.postAdmin);
route.get("/", adminController.getAdmins);
route.get("/:id", adminController.getOneAdmin);
route.delete("/:id", adminController.deleteAdmin);
route.patch("/:id", adminController.updateAdmin);

module.exports = route;
