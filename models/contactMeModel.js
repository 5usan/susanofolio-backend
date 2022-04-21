import mongoose from "mongoose";
import { regex } from "../utils/regex.js";

const Schema = mongoose.Schema;

const contactMeSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: regex.email,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const contactMeModel = mongoose.model("contactMeSchema", contactMeSchema);

export default contactMeModel;
