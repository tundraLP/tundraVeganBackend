const validateIdDelete = (req, res, next)=>{
    const {TypeId} = req.body;
    if (!TypeId) throw Error('Por favor envie el ID del tipo de comida a eliminar.');

    next();
}

const validateTypePost = (req, res, next) =>{
    const { type } = req.body;
    if (!type) throw Error('Por favor envie el tipo de comida a agregar.');

    next();
}


module.exports = {
    validateIdDelete,
    validateTypePost,
};