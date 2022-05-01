import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
import { google } from "googleapis";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRET_URI = process.env.REDIRET_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRET_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const mailHandler = async (firstName, email, description) => {
  const contactMailOptions = {
    from: `Susan Shrestha <${process.env.MAILER_EMAIL}>`,
    to: email,
    subject: "Message Received ✔",
    text: `Received your message at ${new Date().toDateString()}. 
          Thank you ${firstName} for showing your interest on me. I will look through your message and contact you back as soon as possible.
          sincerely,
          Susan Shrestha`,
    html: `Received your message at <b>${new Date().toDateString()}.</b><br/><br />
  Thank you <b>${firstName}</b> for showing your interest on me. <br/><br/>I will look through your message and contact you back as soon as possible.<br/><br />
  <i>Sincerely</i>,<br/>
  <i>Susan Shrestha</i><br/>`,
  };

  const adminMailOptions = {
    from: `Susan Shrestha <${process.env.MAILER_EMAIL}>`,
    to: process.env.ADMIN_EMAIL,
    subject: "New Message Received ✔",
    text: `Received message at ${new Date().toDateString()}.
      Sender Name: ${firstName} , email Address: ${email},[ ${description} ]`,
    html: `Received message at <b>${new Date().toDateString()}.</b><br/><br />
    <b>Sender Name:</b> <i>${firstName},</i><br/><br/>
    <b>Email ID:</b> <i>${email},</i> <br/><br/>
     <b>Message:</b><br/>
     <br/>
      ${description}
      <br/>`,
  };

  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "oauth2",
        user: "susanshrestha2056@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
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
