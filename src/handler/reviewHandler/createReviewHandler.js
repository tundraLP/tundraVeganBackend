const createReview = require('../../controller/reviewController/createReview');

const createReviewHandler = async (req, res) => {
    try {
        const { UserId, ProductId, review, stars, clientName } = req.body;
        const date = new Date().toISOString().slice(0, 10);
        const reviewAux = await createReview(UserId, ProductId, review, stars, clientName, date);
        res.status(201).json(reviewAux);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = createReviewHandler;