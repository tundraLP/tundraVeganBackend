const { Review } = require('../../db');

const getAllReviews = async () => {
    const reviews = await Review.findAll();
    return reviews;
}

module.exports = getAllReviews;