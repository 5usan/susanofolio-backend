import mongoose from "mongoose";

import adminModel from "../models/adminModel.js";

const postAdmin = async (req, res) => {
  try {
    const existingAdmin = await adminModel.findOne({ Email: req.body.Email });
    if (existingAdmin) {
      throw new Error("Email Exists");
    }
    const newAdminData = new adminModel({
      Name: req.body.Name,
      Email: req.body.Email,
      Linkedin: req.body.Linkedin,
      Github: req.body.Github,
      Instagram: req.body.Instagram,
      Facebook: req.body.Facebook,
      Description: req.body.Description,
    });

    const newAdmin = newAdminData.save();
    res.status(200).json("New admin added");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAdmins = async (req, res) => {
  try {
    const getAllAdmin = await adminModel.find();
    res.status(200).json({ getAllAdmin });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getOneAdmin = async (req, res) => {
  const id = req.params.id;
  try {
    const getAdminById = await adminModel.findById(id);
    res.status(200).json({ requestedAdmin: getAdminById });
  } catch (err) {
    res.status(400).json({ msg: "There was an error: " + err.message });
  }
};

const deleteAdmin = async (req, res) => {
  const id = req.params.id;
  try {
    const getAdminById = await adminModel.findByIdAndDelete(id);
    res.status(200).json({ deletedAdmin: getAdminById });
  } catch (err) {
    res.status(400).json({ msg: "There was an error: " + err.message });
  }
};

const updateAdmin = async (req, res) => {
  const id = req.params.id;
  try {
    const getAdminById = await adminModel.findByIdAndUpdate(id, req.body);
    res.status(200).json({ updatedAdmin: getAdminById });
  } catch (err) {
    res.status(400).json({ msg: "There was an error: " + err.message });
  }
};

export default { postAdmin, getAdmins, getOneAdmin, deleteAdmin, updateAdmin };
