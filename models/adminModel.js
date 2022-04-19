import mongoose from "mongoose";

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Linkedin: {
    type: String,
    required: true,
  },
  Github: {
    type: String,
    required: true,
  },
  Instagram: {
    type: String,
    required: true,
  },
  Facebook: {
    type: String,
    required: true,
  },
  Description: {
    type: Array,
    required: true,
    default: [],
  },
});

const adminModel = mongoose.model("adminSchema", adminSchema);

export default adminModel;
