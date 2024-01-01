const deleteReview = require('../../controller/reviewController/deleteReview');

const deleteReviewHandler = async (req, res) => {
    try {
        const { id } = req.body;
        const review = await deleteReview(id);
        if (review.deletedAt == null)
            res.status(201).json({ review: review, message: 'La reseña fue restaurada con exito.' });
        else
            res.status(201).json({ review: review, message: 'La reseña fue eliminada con exito.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = deleteReviewHandler;