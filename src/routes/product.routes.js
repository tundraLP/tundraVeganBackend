const { Router } = require('express');
const productRouter = Router();

const getProductHandler = require('../handler/productHandler/getProductHandler');
const createProductHandler = require('../handler/productHandler/createProductHandler');
const updateProductHandler = require('../handler/productHandler/updateProductHandler');
const deleteProductHandler = require('../handler/productHandler/deleteProductHandler');

const {
    validateNameProductPost,
    validateTypeProductPost,
    validateDescriptionProductPost,
    validatePriceProductPost,
    validateStockProductPost,
    validateImageProductPost,
    validateDeletedProductPost,
    validateProductIdPost,
    validateProductBoolean
} = require('../utils/middlewareProduct');

productRouter.get('/getProducts', getProductHandler);

// creacion unitaria de producto
productRouter.post('/createProduct', [
    validateNameProductPost,
    validateTypeProductPost,
    validateDescriptionProductPost,
    validatePriceProductPost,
    validateStockProductPost,
    validateImageProductPost,
    validateDeletedProductPost
], createProductHandler);

productRouter.put('/updateProduct', [
    validateNameProductPost,
    validateTypeProductPost,
    validateDescriptionProductPost,
    validatePriceProductPost,
    validateStockProductPost,
    validateImageProductPost,
    validateDeletedProductPost,
    validateProductIdPost
], updateProductHandler);

productRouter.put('/deleteProduct', [validateProductIdPost, validateProductBoolean], deleteProductHandler);

module.exports = productRouter;