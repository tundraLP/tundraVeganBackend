const { Review } = require('../../db');

const getProductReviews = async (ProductId) => {
    const reviews = await Review.findAll({ where: { ProductId } });
    return reviews;
}

module.exports = getProductReviews;