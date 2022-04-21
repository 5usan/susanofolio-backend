import adminDetailsModel from "../models/adminDetailsModel.js";

const postAdminDetails = async (req, res) => {
  try {
    const { name, email, linkedin, github, instagram, facebook, description } =
      req.body;
    const newAdminData = new adminDetailsModel({
      name,
      email,
      linkedin,
      github,
      instagram,
      facebook,
      description,
    });

    await newAdminData.save();
    res.status(200).json({ newAdmin: req.body, status: 200, success: true });
  } catch (err) {
    res.status(400).json({ error: err.message, status: 400, success: false });
  }
};

const getAllAdminDetails = async (req, res) => {
  try {
    const getAllAdmin = await adminDetailsModel.find();
    res
      .status(200)
      .json({ allAdmins: getAllAdmin, status: 200, success: true });
  } catch (err) {
    res.status(400).json({ error: err.message, status: 400, success: false });
  }
};

const getOneAdminDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const getAdminById = await adminDetailsModel.findById(id);
    if (!getAdminById) {
      throw new Error("Not found");
    }
    res
      .status(200)
      .json({ requestedAdmin: getAdminById, status: 200, success: true });
  } catch (err) {
    res.status(400).json({ error: err.message, status: 400, success: false });
  }
};

const deleteAdminDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const getAdminById = await adminDetailsModel.findByIdAndDelete(id);
    res
      .status(200)
      .json({ deletedAdmin: getAdminById, status: 200, success: true });
  } catch (err) {
    res.status(400).json({ error: err.message, status: 400, success: false });
  }
};

const updateAdminDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const getAdminById = await adminDetailsModel.findByIdAndUpdate(
      id,
      req.body
    );
    res
      .status(200)
      .json({ updatedAdmin: getAdminById, status: 200, success: true });
  } catch (err) {
    res.status(400).json({ error: err.message, status: 400, success: false });
  }
};

export default {
  postAdminDetails,
  getAllAdminDetails,
  getOneAdminDetails,
  deleteAdminDetails,
  updateAdminDetails,
};
