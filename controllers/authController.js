import signupModel from "../models/signupModel.js";
const signupController = {
  postAdmin: async (req, res) => {
    const { name, email, phoneNumber, password } = req.body;
    console.log(req.body);
    try {
      const newAdmin = new signupModel({
        name,
        email,
        phoneNumber,
        password,
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
      const loginAdmin = await signupModel.findOne({ email });
      if (loginAdmin.password === password) {
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
