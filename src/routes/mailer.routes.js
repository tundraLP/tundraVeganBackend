const { Router } = require("express");
const mailerRouter = Router();

const ContactUsHandler = require("../handler/mailerHandler/contactUsHandler");

const {
  validateMailContactUs,
  validateMessageContactUs,
  validateNameContactUs,
} = require("../utils/middlewareMailer");

mailerRouter.post("/contactUs", [validateNameContactUs, validateMailContactUs, validateMessageContactUs], ContactUsHandler);

module.exports = mailerRouter;
