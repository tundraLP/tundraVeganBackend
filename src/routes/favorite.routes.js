const {Router} = require('express');

const getAllFavoriteHandler = require('../handler/favoriteHandler/getAllFavoriteHandler');
const createFavoriteHandler = require('../handler/favoriteHandler/createFavoriteHandler');
const deleteFavoriteHandler = require('../handler/favoriteHandler/deleteFavoriteHandler');

const favoriteRouter = Router();

//const {  } = require('../utils/middlewareFavorite');

favoriteRouter.get('/getAllFavorite', getAllFavoriteHandler);
favoriteRouter.post('/createFavorite', createFavoriteHandler);
favoriteRouter.delete('/deleteFavorite', deleteFavoriteHandler);

module.exports = favoriteRouter;