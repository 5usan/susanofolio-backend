import nodemailer from "nodemailer";
import { google } from "googleapis";

const CLIENT_ID = "636310470691-lrtfpj44sfhk9t19mq10rro2s02omicg.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRET_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//04wFzZo2cJkR_CgYIARAAGAQSNwF-L9Ir6XGZtyABe6cXFnXtFkNC18fHHrDlsw-p9wVopMYwc6R0oiWr_e-ziI2pwRVQ6Xvvhkc";

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRET_URI);
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

const mailHandler =async (email, description) => {
  const contactMailOptions = {
    from: "Susan Shrestha <susanshrestha2056@gmail.com>",
    to: email,
    subject: "Appreciation Mail",
    text: "Thank you for reaching to me. I got your messgae and will reach you out soon.",
    html: "<p>Thank you for reaching to me. I got your messgae and will reach you out soon.</p>",
  };

  const adminMailOptions = {
    from: "Susan Shrestha <susanshrestha2056@gmail.com>",
    to: "susanstha2056@gmail.com",
    subject: "Message through contact",
    text: description,
    html: `<p>${description}</p>`,
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
        accessToken: accessToken
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
