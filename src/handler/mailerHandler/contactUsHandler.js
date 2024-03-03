const contactUs = require("../../controller/mailerController/contactUs");

const contactUsHandler = async (req, res) => {
  try {
    const { mail, name, message } = req.body;
    const response = await contactUs(mail, name, message);
    res.status(201).send(`Mail enviado correctamente`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = contactUsHandler;
