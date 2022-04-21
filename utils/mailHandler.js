import nodemailer from "nodemailer";

const mailHandler = (email) => {
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
      console.log(err, "err");
      return;
    }
    console.log("Info: ", info);
  });
};

export default mailHandler;
