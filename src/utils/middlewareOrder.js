
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
    products.forEach(element => {
        if (element.id == null || element.count == null || element.count == undefined || element.count == 0)
            throw Error('Por favor enviar los productos en una estrucura valida --> {id: UUID, count: INTEGER}');
    });

    next();
};

const validateTotalOrderPost = (req, res, next) => {
    const { total } = req.body;

    if (!total) throw Error('Por favor envie el total del pedido.');

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

const validateNewStatePut = (req, res, next) =>{
    const {state} = req.body;

    if (!state) throw Error(`Por favor enviar el nuevo estado de la orden.`);

    next();
}


module.exports = {
    validateStateOrderPost,
    validateAdressOrderPost,
    validateProductsOrderPost,
    validateTotalOrderPost,
    validateUserIdGet,
    validateUserIdPost,
    validateIdPost,
    validateNewStatePut
};