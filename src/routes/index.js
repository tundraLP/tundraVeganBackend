const { Router } = require('express');
const router = Router();
const userRouter = require('./user.routes');
const productRouter = require('./product.routes');
const orderRouter = require('./order.routes');

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/order', orderRouter);

module.exports = router;