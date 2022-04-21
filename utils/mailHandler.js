import nodemailer from "nodemailer";

const mailHandler = (email) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "de23cb919ef3ea",
        pass: "5795f857e31c26",
      },
    });

    const mailOptions = {
      from: "susanshrestha2056@gmail.com",
      to: email,
      subject: "Email Test",
      text: "This is an email test using Mailtrap.io",
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        throw new Error(err);
      }
      console.log("Info: ", info);
    });
    return true;
  } catch (err) {
    console.log(err.message, "error");
    return false;
  }
};

export default mailHandler;
