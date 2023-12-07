
const validateNameProductPost = (req, res, next) => {
    const { name } = req.body;

    if (!name) throw Error('Por favor enviar el nombre del producto');

    if (name.length < 5 && name.length > 50) throw Error('El nombre enviado no cumple con el formato esperado.');

    next();
};

const validateTypeProductPost = (req, res, next) => {
    const { type } = req.body;

    if (!type) throw Error('Por favor envie el tipo del producto.');

    if (type.length < 3 && type.length > 30) throw Error('El tipo del producto no cumple con el formato esperado.');

    next();
};

const validateDescriptionProductPost = (req, res, next) => {
    const { description } = req.body;

    if (!description) throw Error('Por favor envie la descripción del producto.');

    next();
};

const validatePriceProductPost = (req, res, next) => {
    const { price } = req.body;

    if (!price) throw Error('Por favor envie el precio del producto.');

    if (typeof price !== "number") throw Error('Por favor envie un número para el campo precio.');

    next();
};

const validateStockProductPost = (req, res, next) => {
    const { stock } = req.body;

    if (!stock) throw Error('Por favor envie el stock del producto.');

    if (typeof stock !== 'number') throw Error('Por favor envie un número para el campo de stock.');

    next();
};

const validateImageProductPost = (req, res, next) => {
    const { image } = req.body;

    if (!image) throw Error('Por favor envie una imagen del producto.');

    if (typeof image !== 'string') throw Error('Por favor envie una URL para el campo imagen.');

    next();
};

const validateDeletedProductPost = (req, res, next) => {
    const { deleted } = req.body;

    if (!deleted) throw Error('Por favor envie el campo eliminado.');

    if (typeof deleted !== 'boolean') throw Error('Por favor envie el campo eliminado.');

    next();
};

const validateProductIdPost = (req, res, next) => {
    const { ProductId } = req.body;

    if (!ProductId) throw Error('Por favor envie el ID del producto.');

    next();
};

const validateProductBoolean = (req, res, next) => {
    const { boolean } = req.body;

    if (!boolean) throw Error('Por favor envie el nuevo estado del producto.');

    next();
}

module.exports = {
    validateNameProductPost,
    validateTypeProductPost,
    validateDescriptionProductPost,
    validatePriceProductPost,
    validateStockProductPost,
    validateImageProductPost,
    validateDeletedProductPost,
    validateProductIdPost,
    validateProductBoolean
};