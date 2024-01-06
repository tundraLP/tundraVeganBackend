const { Favorite } = require('../../db');

const getFavoritesById = async (UserId) => {
    const favorites = await Favorite.findAll({ where: { UserId }, paranoid: false });
    return favorites;
}

module.exports = getFavoritesById;