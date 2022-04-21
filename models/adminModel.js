import mongoose from "mongoose";
import { regex } from "../utils/regex.js";

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: regex.email,
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const adminModel = mongoose.model("adminSchema", adminSchema);

export default adminModel;
