import bcryptHandler from "../utils/bcrypt.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import adminModel from "../models/adminModel.js";

const signupController = {
  postAdmin: async (req, res) => {
    const { name, email, phoneNumber, password } = req.body;
    try {
      if (!name || !email || !phoneNumber || !password) {
        throw new Error("Field Empty");
      }
      const encryptedPassword = await bcryptHandler.encryptPassword(password);
      const newAdmin = new adminModel({
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
      const getAllAdmin = await adminModel.find();
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
      const getAdminById = await adminModel.findById(id);
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
      const getAdminById = await adminModel.findByIdAndDelete(id);
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
      const getAdminById = await adminModel.findByIdAndUpdate(id, req.body);
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
    let token;
    const secretKey = process.env.jwtSecretKey;
    const expireTime = process.env.jwtTokenExpireTime;
    try {
      if (!email || !password) {
        throw new Error("Field Empty");
      }
      const loginAdmin = await adminModel.findOne({ email });
      if (bcryptHandler.compairPassword(password, loginAdmin.password)) {
        token = jwt.sign(
          { id: loginAdmin.id, email: loginAdmin.email },
          secretKey,
          { expiresIn: expireTime }
        );
        res.status(200).json({
          message: "Login Successful",
          token: token,
          status: 200,
          success: true,
        });
      } else {
        throw new Error("Password doesnot match");
      }
    } catch (err) {
      res.status(400).json({ error: err.message, status: 400, success: false });
    }
  },
};

export { signupController, loginController };
