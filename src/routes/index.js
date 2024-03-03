const { Router } = require("express");
const router = Router();
const userRouter = require("./user.routes");
const productRouter = require("./product.routes");
const orderRouter = require("./order.routes");
const favoriteRouter = require("./favorite.routes");
const reviewRouter = require("./review.routes");
const typeRouter = require("./type.routes");
const imageRouter = require("./image.routes");
const mailerRouter = require("./mailer.routes");

router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/order", orderRouter);
router.use("/favorite", favoriteRouter);
router.use("/review", reviewRouter);
router.use("/type", typeRouter);
router.use("/image", imageRouter);
router.use("/mailer", mailerRouter);

module.exports = router;