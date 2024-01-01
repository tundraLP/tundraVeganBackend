const {Router} = require('express');
const reviewRouter = Router();

const getAllReviewsHandler = require('../handler/reviewHandler/getAllReviewsHandler');
const getReviewsByIdHandler = require('../handler/reviewHandler/getReviewsById');
const getProductReviewsHandler = require('../handler/reviewHandler/getProductReviewsHandler');
const deleteReviewHandler = require('../handler/reviewHandler/deleteReviewHandler');
const createReviewHandler = require('../handler/reviewHandler/createReviewHandler');

const {
    validateUserIdPost,
    validateProductIdPost,
    validateReviewContentPost,
    validateStarsPost,
    validateClientNamePost,
    validateUserIdGet,
    validateProductIdGet,
    validateReviewId
} = require('../utils/middlewareReview');


reviewRouter.get('/getAllReviews', getAllReviewsHandler);
reviewRouter.get('/getReviewsById', validateUserIdGet, getReviewsByIdHandler);
reviewRouter.get('/getProductReviews', validateProductIdGet, getProductReviewsHandler);
reviewRouter.post('/createReview', [validateProductIdPost, validateUserIdPost, validateReviewContentPost, validateStarsPost, validateClientNamePost], createReviewHandler);
reviewRouter.delete('/deleteReview', validateReviewId, deleteReviewHandler);

module.exports = reviewRouter;