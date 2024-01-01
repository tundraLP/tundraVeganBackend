const { Review } = require('../../db');

const getReviewsById = async (UserId) => {
    const reviews = await Review.findAll({ where: { UserId } });
    return reviews;
}

module.exports = getReviewsById;