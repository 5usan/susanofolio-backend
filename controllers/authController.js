import signupModel from "../models/signupModel.js";
import bcrypt from "bcrypt";
const saltRounds = 15;

const signupController = {
  postAdmin: async (req, res) => {
    const { name, email, phoneNumber, password } = req.body;
    try {
      if (!name || !email || !phoneNumber || !password) {
        throw new Error("Field Empty");
      }
      const encryptedPassword = await bcrypt.hash(password, saltRounds);
      const newAdmin = new signupModel({
        name,
        email,
        phoneNumber,
        password: encryptedPassword,
      });

      await newAdmin.save();
      res.status(200).json({ newAdmin: req.body, status: 200, success: true });
    } catch (err) {
      res.status(400).json({ error: err.message, status: 400, success: false });
    }
  },

  getAdmins: async (req, res) => {
    try {
      const getAllAdmin = await signupModel.find();
      res
        .status(200)
        .json({ allAdmins: getAllAdmin, status: 200, success: true });
    } catch (err) {
      res.status(400).json({ error: err.message, status: 400, success: false });
    }
  },

  getOneAdmin: async (req, res) => {
    const id = req.params.id;
    try {
      const getAdminById = await signupModel.findById(id);
      if (!getAdminById) {
        throw new Error("Not found");
      }
      res
        .status(200)
        .json({ requestedAdmin: getAdminById, status: 200, success: true });
    } catch (err) {
      res.status(400).json({ error: err.message, status: 400, success: false });
    }
  },

  deleteAdmin: async (req, res) => {
    const id = req.params.id;
    try {
      const getAdminById = await signupModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ deletedAdmin: getAdminById, status: 200, success: true });
    } catch (err) {
      res.status(400).json({ error: err.message, status: 400, success: false });
    }
  },

  updateAdmin: async (req, res) => {
    const id = req.params.id;
    try {
      const getAdminById = await signupModel.findByIdAndUpdate(id, req.body);
      res
        .status(200)
        .json({ updatedAdmin: getAdminById, status: 200, success: true });
    } catch (err) {
      res.status(400).json({ error: err.message, status: 400, success: false });
    }
  },
};

const loginController = {
  postAdmin: async (req, res) => {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        throw new Error("Field Empty");
      }
      const loginAdmin = await signupModel.findOne({ email });
      if (bcrypt.compare(password, loginAdmin.password)) {
        res
          .status(200)
          .json({ message: "Login Successful", status: 200, success: true });
      } else {
        throw new Error("Password doesnot match");
      }
    } catch (err) {
      res.status(400).json({ error: err.message, status: 400, success: false });
    }
  },
};

export { signupController, loginController };
