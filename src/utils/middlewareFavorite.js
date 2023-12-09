const validateUserIdPost = (req, res, next) =>{
    const { UserId } = req.body;

    if (!UserId) throw Error('Por favor enviar el ID de usuario.');

    next();
}

const validateProductIdPost = (req, res, next)=>{
    const { ProductId } = req.body;

    if (!ProductId) throw Error('Por favor enviar el ID del producto.');

    next();
}

const validateUserIdGet = (req, res, next) => {
    const {UserId} = req.query;

    if (!UserId) throw Error('Por favor enviar ID de usuario a buscar.');

    next();
}


module.exports = {
    validateUserIdPost,
    validateProductIdPost,
    validateUserIdGet,
};