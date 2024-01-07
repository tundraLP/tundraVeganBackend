const { Router } = require('express');
const typeRouter = Router();

const createTypeHandler = require('../handler/typeHandler/createTypeHandler');
const deleteTypeHandler = require('../handler/typeHandler/deleteTypeHandler');
const getTypesHandler = require('../handler/typeHandler/getTypesHandler');

const { validateIdDelete, validateTypePost } = require('../utils/middlewareType');

typeRouter.get('/getTypes', getTypesHandler);
typeRouter.post('/createType', validateTypePost, createTypeHandler);
typeRouter.delete('/deleteType', validateIdDelete, deleteTypeHandler);



module.exports = typeRouter;