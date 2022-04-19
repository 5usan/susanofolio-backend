// const mongoose = require("mongoose");
import mongoose from "mongoose";

// const adminModel = require("../models/adminModel");
import adminModel from "../models/adminModel.js";

const postAdmin = async (req, res) => {
  try {
    const existingAdmin = await adminModel.findOne({ email: req.body.Email });
    if (existingAdmin) {
      throw new Error("Email Exists");
    }
    const newAdminData = new adminModel({
      name: req.body.name,
      email: req.body.email,
      linkedin: req.body.linkedin,
      github: req.body.github,
      instagram: req.body.instagram,
      facebook: req.body.facebook,
      description: req.body.description,
    });

    await newAdminData.save();
    res.status(200).json({ newAdmin: req.body, status: 200, success: true });
  } catch (err) {
    res.status(400).json({ error: err.message, status: 400, success: false });
  }
};

const getAdmins = async (req, res) => {
  try {
    const getAllAdmin = await adminModel.find();
    res
      .status(200)
      .json({ allAdmins: getAllAdmin, status: 200, success: true });
  } catch (err) {
    res.status(400).json({ error: err.message, status: 400, success: false });
  }
};

const getOneAdmin = async (req, res) => {
  const id = req.params.id;
  try {
    const getAdminById = await adminModel.findById(id);
    res
      .status(200)
      .json({ requestedAdmin: getAdminById, status: 200, success: true });
  } catch (err) {
    res.status(400).json({ error: err.message, status: 400, success: false });
  }
};

const deleteAdmin = async (req, res) => {
  const id = req.params.id;
  try {
    const getAdminById = await adminModel.findByIdAndDelete(id);
    res
      .status(200)
      .json({ deletedAdmin: getAdminById, status: 200, success: true });
  } catch (err) {
    res.status(400).json({ error: err.message, status: 400, success: false });
  }
};


const updateAdmin = async (req, res) => {
  const id = req.params.id;
  try {
    const getAdminById = await adminModel.findByIdAndUpdate(id, req.body);
    res
      .status(200)
      .json({ updatedAdmin: getAdminById, status: 200, success: true });
  } catch (err) {
    res.status(400).json({ error: err.message, status: 400, success: false });
  }
};

// module.exports = {
//   postAdmin,
//   getAdmins,
//   getOneAdmin,
//   deleteAdmin,
//   updateAdmin,
// };

export default { postAdmin, getAdmins, getOneAdmin, deleteAdmin, updateAdmin };
