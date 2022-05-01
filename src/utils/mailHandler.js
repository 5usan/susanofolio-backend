import nodemailer from "nodemailer";

const mailHandler = (email, description) => {
  const contactMailOptions = {
    from: "No Reply <no-reply@gmail.com>",
    to: email,
    subject: "Appreciation Mail",
    text: "Thank you for reaching to me. I got your messgae and will reach you out soon.",
    html: "<p>Thank you for reaching to me. I got your messgae and will reach you out soon.</p>",
  };

  const adminMailOptions = {
    from: "No Reply <no-reply@gmail.com>",
    to: "susanshrestha2056@gmail.com",
    subject: "Message through contact",
    text: description,
    html: `<p>${description}</p>`,
  };

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "de23cb919ef3ea",
        pass: "5795f857e31c26",
      },
    });

    transporter.sendMail(contactMailOptions, (err, info) => {
      if (err) {
        throw new Error(err);
      }
      console.log("Contact Info: ", info);
    });

    transporter.sendMail(adminMailOptions, (err, info) => {
      if (err) {
        throw new Error(err);
      }
      console.log("Admin Info: ", info);
    });

    return true;
  } catch (err) {
    console.log(err.message, "error");
    return false;
  }
};

export default mailHandler;
