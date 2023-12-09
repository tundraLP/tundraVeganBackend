const {Router} = require('express');

const getAllFavoritesHandler = require('../handler/favoriteHandler/getAllFavoritesHandler');
const getFavoritesByIdHandler = require('../handler/favoriteHandler/getFavoritesByIdHandler');
const createFavoriteHandler = require('../handler/favoriteHandler/createFavoriteHandler');
const deleteFavoriteHandler = require('../handler/favoriteHandler/deleteFavoriteHandler');

const favoriteRouter = Router();

//const {  } = require('../utils/middlewareFavorite');

favoriteRouter.get('/getAllFavorites', getAllFavoritesHandler);
favoriteRouter.get('/getFavoritesById', getFavoritesByIdHandler);
favoriteRouter.post('/createFavorite', createFavoriteHandler);
favoriteRouter.delete('/deleteFavorite', deleteFavoriteHandler);

module.exports = favoriteRouter;