const { Review } = require('../../db');

const deleteReview = async (id) => {
    const review = await Review.findOne({ where: { id } });
    if (!review) throw Error(`No se ha encontrado el favorito con ID: ${id}.`);
    const aux = review;
    await review.destroy();
    return aux;
}

module.exports = deleteReview;