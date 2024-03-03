require("dotenv").config();
const nodemailer = require("nodemailer");
const contactUsTemplate = require("../../utils/contactUsTemplate");
const { MAIL_ACCOUNT, MAIL_API_PASS, MAIL_HOST, MAIL_PORT } = process.env;

const contactUs = async (mail, name, message) => {
  const transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: false,
    auth: {
      user: MAIL_ACCOUNT,
      pass: MAIL_API_PASS,
    },
  });
  const htmlContent = contactUsTemplate(mail, name, message);
  const response = await transporter.sendMail({
    from: MAIL_ACCOUNT,
    to: MAIL_ACCOUNT,
    subject: `¡${name} quiere comunicarse con vos!`,
    html: htmlContent,
  });

  return response;
};

module.exports = contactUs;
