const validateMailContactUs = (req, res, next) => {
  const { mail } = req.body;
  if (!mail)
    throw Error(
      "Error al recebir el E-mail del usuario que se quizo contactar."
    );
  next();
};
const validateNameContactUs = (req, res, next) => {
  const { name } = req.body;
  if (!name)
    throw Error(
      "Error al recebir el nombre del usuario que se quizo contactar."
    );
  next();
};
const validateMessageContactUs = (req, res, next) => {
  const { message } = req.body;
  if (!message)
    throw Error(
      "Error al recebir el mensaje del usuario que se quizo contactar."
    );
  next();
};

module.exports = {
  validateMailContactUs,
  validateMessageContactUs,
  validateNameContactUs,
};
