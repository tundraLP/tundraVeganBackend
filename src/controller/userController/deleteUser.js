const { User, Order, Favorite, Review } = require('../../db');

const deleteUser = async (UserId) => {
    const user = await User.findOne({ where: { id: UserId }, paranoid: false });

    const messageDelete = 'Usuario borrado exitosamente junto a sus ordenes, favoritos y reseñas.';
    const messageRestore = 'Usuario recuperado existosamente junto a sus ordenes, favoritos y reseñas.';
    const messageFav = 'El usuario no tenia favoritos guardados.';
    const messageOrders = 'El usuario no tenia ordenes guardadas.';
    const messageReviews = 'El usuario no tenia reseñas guardadas.';

    if (!user) throw Error('No existe un usuario con este ID, por favor envie un ID válido.');

    let = bool;
    if (user.deletedAt == null) bool = true
    else bool = false;

    const orders = await Order.findAll({ where: { UserId }, paranoid: bool });
    const favorites = await Favorite.findAll({ where: { UserId }, paranoid: bool });
    const reviews = await Review.findAll({ where: { UserId }, paranoid: bool });

    const deletedFavorites = favorites.length > 0 ? await Promise.all(favorites.map(async (fav) => {
        if (fav?.dataValues?.deletedAt == null) await fav.destroy();
        else await fav.restore();
        return fav;
    })) : messageFav;

    const deletedOrders = orders.length > 0 ? await Promise.all(orders.map(async (e) => {
        if (e?.dataValues?.deletedAt == null) await e.destroy();
        else await e.restore();
        return e;
    })) : messageOrders;

    const deletedReviews = reviews.length > 0 ? await Promise.all(reviews.map(async (e) => {
        if (e?.dataValues?.deletedAt == null) await e.destroy();
        else await e.restore();
        return e;
    })) : messageReviews;

    if (user?.dataValues?.deletedAt == null) await user.destroy();
    else await user.restore();


    return {
        user,
        deletedOrders,
        deletedFavorites,
        deletedReviews,
        messasge: user.deletedAt == null ? messageRestore : messageDelete
    };
};

module.exports = deleteUser;