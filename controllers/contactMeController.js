import contactMeModel from "../models/contactMeModel.js";

const contactMeController = {
  postContactMeDetails: async (req, res) => {
    const { firstName, lastName, email, description } = req.body;
    try {
      if (!firstName || !lastName || !email || !description) {
        res.status(400).json({ message: "Field Empty" });
      }
      const newDetails = new contactMeModel({
        firstName,
        lastName,
        email,
        description,
      });

      await newDetails.save();
      res
        .status(200)
        .json({ newContactDetails: req.body, status: 200, success: true });
    } catch (err) {}
    res.status(500).json({ error: err.message, status: 500, success: false });
  },

  getAllContactMeDetails: async (req, res) => {
    try {
      const getAllDetails = await contactMeModel.find();
      res
        .status(200)
        .json({ allContactDetails: getAllDetails, status: 200, success: true });
    } catch (err) {
      res.status(500).json({ error: err.message, status: 500, success: false });
    }
  },
};

export default contactMeController; 
