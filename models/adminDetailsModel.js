import mongoose from "mongoose";

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
      match: [
        /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/,
        "Email is invalid",
      ],
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
