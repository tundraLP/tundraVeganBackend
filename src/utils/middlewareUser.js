const { regExp, regExp_mail, regExp_password } = require('./const');

const validateNameGet = (req, res, next) => {
    const { name } = req.query;
    if (!name) throw Error('Por favor enviar el nombre.');

    if (!regExp.test(name)) throw Error('Por favor envie solamente letras.');

    next();
};

const validateNamePost = (req, res, next) => {
    const { name } = req.body;

    if (!name) throw Error('Por favor enviar el nombre.');

    if (!regExp.test(name)) throw Error('El nombre solo debe contener letas.');

    next();
};

const validateLastNameGet = (req, res, next) => {
    const { lastName } = req.query;

    if (!lastName) throw Error('Por favor enviar el apellido.');

    if (!regExp.test(lastName)) throw Error('El apellido solo debe contener letras.');

    next();
};

const validateLastNamePost = (req, res, next) => {
    const { lastName } = req.body;

    if (!lastName) throw Error('Por favor enviar el apellido.');

    if (!regExp.test(lastName)) throw Error('El apellido solo debe contener letras.');

    next();
};

const validateMailGet = (req, res, next) => {
    const { mail } = req.query;

    if (!mail) throw Error('Por favor enviar el mail.');

    if (!regExp_mail.test(mail)) throw Error('El formato de mail no es válido.');

    next();
};

const validateMailPost = (req, res, next) => {
    const { mail } = req.body;

    if (!mail) throw Error('Por favor enviar el mail.');

    if (!regExp_mail.test(mail)) throw Error('El formato de mail no es válido.');

    next();
};

const validatePasswordGet = (req, res, next) => {
    const { password } = req.query;

    if (!password) throw Error('Por favor enviar una contraseña.');

    if (!regExp_password.test(password)) throw Error('La constraseña no cumple con el formato.');

    next();
};

const validatePasswordPost = (req, res, next) => {
    const { password } = req.body;

    if (!password) throw Error('Por favor enviar una contraseña.');

    if (!regExp_password.test(password)) throw Error('La contraseña no cumple con el formato.');

    next();
};

const validateAdressPost = (req, res, next) => {
    const { adress } = req.body;

    if (!adress) throw Error('Por favor enviar una dirrección.');

    if (adress.length < 5 && adress.length > 100) throw Error('Por favor enviar una dirección.');

    next();
};

const validateUserIdPost = (req, res, next) => {
    const { UserId } = req.body;

    if (!UserId) throw Error('Por favor envie el ID del usuario.');

    next();
}

module.exports = {
    validateNameGet,
    validateNamePost,
    validateLastNameGet,
    validateLastNamePost,
    validateMailGet,
    validateMailPost,
    validatePasswordGet,
    validatePasswordPost,
    validateAdressPost,
    validateUserIdPost
};