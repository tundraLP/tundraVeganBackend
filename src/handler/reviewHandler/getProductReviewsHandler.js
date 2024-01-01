const getProductReviews = require('../../controller/reviewController/getProductReviews');

const getProductReviewsHandler = async (req, res) => {
    try {
        const { ProductId } = req.query;
        const reviews = await getProductReviews(ProductId);
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = getProductReviewsHandler;