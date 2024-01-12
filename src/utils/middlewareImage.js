const validateImagePost = (req, res, next) => {
    const { image } = req.body;

    if (!image) throw Error('Por favor enviar la imagen a guardar.');

    next();
}

const validateUserIdPost = (req, res, next) => {
    const { UserId } = req.body;

    if (!UserId) throw Error('Por favor enviar el ID de usuario a guardar la imagen.');

    next();
}

const validateFolderPost = (req, res, next) => {
    const { folder } = req.body;

    if (!folder) throw Error('Por favor enviar la carpeta de cloudinary a guardar la imagen.');

    next();
}
const validatePublicIdGet = (req, res, next) => {
    const { public_id } = req.query;

    if (!public_id) throw Error('Por favor enviar el public_id de la imagen de cloudinary a buscar.');

    next();
}


module.exports = {
    validateImagePost,
    validateUserIdPost,
    validateFolderPost,
    validatePublicIdGet,
};