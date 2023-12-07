
const validateStateOrderPost = (req, res, next) => {
    const { state } = req.body;

    if (!state) throw Error('Por favor enviame el estado de la orden.');

    next();
};

const validateAdressOrderPost = (req, res, next) => {
    const { adress } = req.body;

    if (!adress) throw Error('Por favor envie la dirección a la que se le quiere enviar el pedido.');

    next();
};

const validateProductsOrderPost = (req, res, next) => {
    const { products } = req.body;

    if (products.length == 0) throw Error('Por favor envie los productos que quiere ordenar.');

    next();
};

const validateTotalOrderPost = (req, res, next) => {
    const { total } = req.body;

    if (!total) throw Error('Por favor envie el total del pedido.');

    next();
};

const validateDateOrderPost = (req, res, next) => {
    const { date } = req.body;

    if (!date) throw Error('Por favor envie la fecha del pedido');

    next();
};

const validateDeletedOrderPost = (req, res, next) => {
    const { deleted } = req.body;

    if (!deleted) throw Error('Por favor envie el dato eliminado');

    if (typeof deleted !== "boolean") throw Error('Por favor envie el tipo de dato correcto.');

    next();
};

const validateUserIdGet = (req, res, next) => {
    const { UserId } = req.query;

    if (!UserId) throw Error('Por favor enviar el ID de usuario.');

    next();
};

const validateUserIdPost = (req, res, next) => {
    const { UserId } = req.body;

    if (!UserId) throw Error('Por favor enviar el ID de usuario.');

    next();
};

const validateIdPost = (req, res, next) => {
    const { id } = req.body;

    if (!id) throw Error('Por favor enviar el ID de la orden.');

    next();
};

module.exports = {
    validateStateOrderPost,
    validateAdressOrderPost,
    validateProductsOrderPost,
    validateTotalOrderPost,
    validateDateOrderPost,
    validateDeletedOrderPost,
    validateUserIdGet,
    validateUserIdPost,
    validateIdPost
};