const { Router } = require('express');
const orderRouter = Router();

const getAllOrderHandler = require('../handler/orderHandler/getAllOrdersHandler');
const getOrdersByIdHandler = require('../handler/orderHandler/getOrderByIdHandler');
const createOrderHandler = require('../handler/orderHandler/createOrderHandler');
const deleteOrderHandler = require('../handler/orderHandler/deleteOrderHandler');
const modifyOrderHandler = require('../handler/orderHandler/modifyOrderHandler');

const {
    validateUserIdGet,
    validateStateOrderPost,
    validateAdressOrderPost,
    validateProductsOrderPost,
    validateTotalOrderPost,
    validateUserIdPost,
    validateIdPost,
    validateNewStatePut
} = require('../utils/middlewareOrder');

orderRouter.get('/getAllOrders', getAllOrderHandler);
orderRouter.get('/getOrdersById', validateUserIdGet, getOrdersByIdHandler);
orderRouter.post('/createOrder', [validateStateOrderPost, validateAdressOrderPost, validateProductsOrderPost, validateTotalOrderPost, validateUserIdPost], createOrderHandler);
orderRouter.put('/modifyOrder', [validateIdPost, validateNewStatePut], modifyOrderHandler);
orderRouter.delete('/deleteOrder', validateIdPost, deleteOrderHandler);

module.exports = orderRouter;