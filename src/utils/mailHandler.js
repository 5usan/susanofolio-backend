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
      from: "no-reply@gmail.com",
      to: email,
      subject: "Appreciation Mail",
      text: "Thank you for reaching to me. I got your messgae and will reach you out soon.",
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
