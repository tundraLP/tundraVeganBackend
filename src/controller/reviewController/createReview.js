const { Review, User, Product } = require('../../db');

const createReview = async (UserId, ProductId, review, stars, clientName, date) => {
    const user = await User.findByPk(UserId);
    if (!user) throw Error('El ID del usuario es incorrecto.');

    const product = await Product.findByPk(ProductId);
    if (!product) throw Error('El ID del producto es incorrecto.');

    const existingReview = await Review.findOne({
        where: {
            UserId,
            ProductId
        },
        paranoid: false
    });

    if (existingReview) throw Error(`Esta reseña ya existe para el usuario y producto especificos. { UserID: ${UserId} ; ProductID: ${ProductId} }`);
    const reviewAux = await Review.create({review, date, stars, clientName});
    await reviewAux.setUser(UserId);
    await reviewAux.setProduct(ProductId);

    return reviewAux;

}

module.exports = createReview;