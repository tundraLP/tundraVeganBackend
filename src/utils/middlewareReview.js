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

const validateReviewId = (req, res, next) =>{
    const { id } = req.body;

    if (!id) throw Error('Por favor enviar ID de favorito a eliminar.');

    next();
}

const validateReviewContentPost = (req, res, next) =>{
    const {review} = req.body;
    
    if (!review) throw Error('Por favor enviar un contenido para la reseña.');

    next();
}
const validateStarsPost = (req, res, next) =>{
    const {stars} = req.body;
    
    if (!stars) throw Error('Por favor enviar una puntuacion para la reseña.');

    next();
}
const validateClientNamePost = (req, res, next) =>{
    const {clientName} = req.body;
    
    if (!clientName) throw Error('Por favor enviar el nombre de usuario de quien creó la reseña.');

    next();
}

const validateProductIdGet = (req, res, next) =>{
    const {ProductId} = req.query;

    if (!ProductId) throw Error('Por favor enviar el ID del producto para buscar sus reseñas.');

    next();
}


module.exports = {
    validateUserIdPost,
    validateProductIdPost,
    validateReviewContentPost,
    validateStarsPost,
    validateClientNamePost,
    validateProductIdGet,
    validateUserIdGet,
    validateReviewId
};