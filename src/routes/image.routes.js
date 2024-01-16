const { Router } = require('express');
const updateUserImageHandler = require('../handler/imageHandler/updateUserImageHandler');
const getResoucersHandler = require('../handler/imageHandler/getResourcesHandler');
const uploadImageHandler = require('../handler/imageHandler/uploadImageHandler');

const imageRouter = Router();

const { 
    validateImagePost,
    validateUserIdPost,
    validateFolderPost,
    validatePublicIdGet,
} = require('../utils/middlewareImage');

imageRouter.post('/updateUserImage', [validateUserIdPost, validateImagePost], updateUserImageHandler);

imageRouter.post('/uploadImage', [validateImagePost, validateFolderPost], uploadImageHandler);

imageRouter.get('/getResources', getResoucersHandler);




module.exports = imageRouter;