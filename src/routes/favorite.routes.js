const {Router} = require('express');
const favoriteRouter = Router();

const getAllFavoritesHandler = require('../handler/favoriteHandler/getAllFavoritesHandler');
const getFavoritesByIdHandler = require('../handler/favoriteHandler/getFavoritesByIdHandler');
const createFavoriteHandler = require('../handler/favoriteHandler/createFavoriteHandler');
const deleteFavoriteHandler = require('../handler/favoriteHandler/deleteFavoriteHandler');

const {
    validateProductIdPost,
    validateUserIdGet,
    validateUserIdPost
} = require ('../utils/middlewareFavorite');



favoriteRouter.get('/getAllFavorites', getAllFavoritesHandler);
favoriteRouter.get('/getFavoritesById', [validateUserIdGet], getFavoritesByIdHandler);
favoriteRouter.post('/createFavorite', [validateProductIdPost, validateUserIdPost], createFavoriteHandler);
favoriteRouter.delete('/deleteFavorite',[validateProductIdPost, validateUserIdPost], deleteFavoriteHandler);

module.exports = favoriteRouter;