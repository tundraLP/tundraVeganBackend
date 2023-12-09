const { Router } = require('express');
const router = Router();
const userRouter = require('./user.routes');
const productRouter = require('./product.routes');
const orderRouter = require('./order.routes');
const favoriteRouter = require('./favorite.routes');

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/order', orderRouter);
router.use('/favorite', favoriteRouter);

module.exports = router;