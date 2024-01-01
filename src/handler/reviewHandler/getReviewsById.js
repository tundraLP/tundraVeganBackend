const getReviewsById = require('../../controller/reviewController/getReviewsById');

const getReviewsByIdHandler = async (req, res) => {
    try {
        const { UserId } = req.query;
        const reviews = await getReviewsById(UserId);
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = getReviewsByIdHandler;