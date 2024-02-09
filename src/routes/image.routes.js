const { Router } = require('express');
const getResoucersHandler = require('../handler/imageHandler/getResourcesHandler');
const uploadImageHandler = require('../handler/imageHandler/uploadImageHandler');

const imageRouter = Router();

const {
    validateImagePost,
    validateFolderPost,
    validatePublicIdGet,
} = require('../utils/middlewareImage');


imageRouter.post('/uploadImage', [validateImagePost, validateFolderPost], uploadImageHandler);

imageRouter.get('/getResources', getResoucersHandler);

module.exports = imageRouter;