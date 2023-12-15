const { Product, Favorite } = require('../../db');

const deleteProduct = async (ProductId) => {

    const messageDelete = 'Producto borrado exitosamente junto a sus favoritos.';
    const messageRestore = 'Producto recuperado existosamente junto a sus favoritos';

    const product = await Product.findOne({ where: { id: ProductId }, paranoid: false });
    const favorites = await Favorite.findAll({ where: { ProductId }, paranoid: false });

    const deletedFavorites = favorites.length > 0 && await Promise.all(favorites.map(async (fav) => {
        if (fav?.dataValues?.deletedAt == null) await fav.destroy();
        else await fav.restore();
        return fav;
    }));

    if (product?.deletedAt == null) await product.destroy();
    else await product.restore();


    return {
        product,
        deletedFavorites,
        messasge: product.deletedAt == null ? messageRestore : messageDelete
    };
};

module.exports = deleteProduct;