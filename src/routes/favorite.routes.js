const {Router} = require('express');

const getAllFavoriteHandler = require('../handler/favoriteHandler/getAllFavoriteHandler');
const createFavoriteHandler = require('../handler/favoriteHandler/createFavoriteHandler');

const favoriteRouter = Router();

//const {  } = require('../utils/middlewareFavorite');

favoriteRouter.get('/getAllFavorite', getAllFavoriteHandler);
favoriteRouter.post('/createFavorite', createFavoriteHandler);

module.exports = favoriteRouter;