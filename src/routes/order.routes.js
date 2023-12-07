const { Router } = require('express');
const orderRouter = Router();

const getAllOrderHandler = require('../handler/orderHandler/getAllOrdersHandler');
const getOrdersByIdHandler = require('../handler/orderHandler/getOrderByIdHandler');
const createOrderHandler = require('../handler/orderHandler/createOrderHandler');
const deleteOrderHandler = require('../handler/orderHandler/deleteOrderHandler');

const {
    validateUserIdGet,
    validateStateOrderPost,
    validateAdressOrderPost,
    validateProductsOrderPost,
    validateTotalOrderPost,
    validateDeletedOrderPost,
    validateUserIdPost,
    validateIdPost
} = require('../utils/middlewareOrder');

orderRouter.get('/getAllOrders', getAllOrderHandler);
orderRouter.get('/getOrdersById', validateUserIdGet, getOrdersByIdHandler);
orderRouter.post('/createOrder', [validateStateOrderPost, validateAdressOrderPost, validateProductsOrderPost, validateTotalOrderPost, validateDeletedOrderPost, validateUserIdPost], createOrderHandler);
orderRouter.delete('/deleteOrder', [validateUserIdPost, validateIdPost], deleteOrderHandler);

module.exports = orderRouter;