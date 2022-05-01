import contactMeModel from "../models/contactMeModel.js";
import mailHandler from "../utils/mailHandler.js";

const contactMeController = {
  postContactMeDetails: async (req, res) => {
    const { firstName, lastName, email, description } = req.body;
    console.log(req.body);
    try {
      if (!firstName || !lastName || !email || !description) {
        return res.status(400).json({ message: "Field Empty" });
      }
      const newDetails = new contactMeModel({
        firstName,
        lastName,
        email,
        description,
      });

      await newDetails.save();
      const mailSent = mailHandler(email, description);
      console.log(mailSent, "mailSent");
      if (mailSent) {
        const statusChangedContact = await contactMeModel.findByIdAndUpdate(
          newDetails._id,
          { mailStatus: true }
        );
      }
      return res.status(200).json({
        message: "Contact is stored in database and mail sent.",
        status: 200,
        success: true,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ error: err.message, status: 500, success: false });
    }
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
