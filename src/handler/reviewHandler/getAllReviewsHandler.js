const getAllReviews = require('../../controller/reviewController/getAllReviews');

const getAllReviewsHandler = async (req, res) => {
    try {
        const reviews = await getAllReviews();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = getAllReviewsHandler;