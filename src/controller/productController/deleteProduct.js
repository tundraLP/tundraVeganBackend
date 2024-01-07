const { Product, Favorite, Review } = require('../../db');

const deleteProduct = async (ProductId) => {

    const messageDelete = 'Producto borrado exitosamente junto a sus favoritos y reviews.';
    const messageRestore = 'Producto recuperado existosamente junto a sus favoritos y reviews';

    const product = await Product.findOne({ where: { id: ProductId }, paranoid: false });

    let bool;
    if (product.deletedAt == null) bool = true
    else bool = false;

    const favorites = await Favorite.findAll({ where: { ProductId }, paranoid: bool });
    const reviews = await Review.findAll({where: { ProductId }, paranoid: bool});

    const deletedReviews = reviews.length > 0 && await Promise.all(reviews.map(async (review)=> {
        if (review?.dataValues?.deletedAt == null) await review.destroy();
        else await review.restore();
        return review;
    }));

    const deletedFavorites = favorites.length > 0 && await Promise.all(favorites.map(async (fav) => {
        if (fav?.dataValues?.deletedAt == null) await fav.destroy();
        else await fav.restore();
        return fav;
    }));

    if (bool) await product.destroy();
    else await product.restore();


    return {
        product,
        deletedReviews,
        deletedFavorites,
        messasge: product.deletedAt == null ? messageRestore : messageDelete
    };
};

module.exports = deleteProduct;