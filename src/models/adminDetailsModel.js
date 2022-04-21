import mongoose from "mongoose";
import { regex } from "../utils/regex.js";

const Schema = mongoose.Schema;

const adminDetailsSchema = new Schema(
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
    linkedin: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    instagram: {
      type: String,
      required: true,
    },
    facebook: {
      type: String,
      required: true,
    },
    description: {
      type: Array,
      required: true,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const adminDetailsModel = mongoose.model(
  "adminDetailsSchema",
  adminDetailsSchema
);

export default adminDetailsModel; 
