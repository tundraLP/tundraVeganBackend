const { Review } = require('../../db');

const deleteReview = async (id) => {
    const review = await Review.findOne({ paranoid: false, where: { id } });
    if (!review) throw Error(`No se ha encontrado el favorito con ID: ${id}.`);
    if (review.deletedAt == null) {
        await review.destroy();
        return review;
    } else {
        await review.restore({ where: { id } });
        return review;
    }

}

module.exports = deleteReview;