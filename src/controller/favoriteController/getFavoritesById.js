const { Favorite } = require('../../db');

const getFavoritesById = async (UserId) => {
    const favorites = await Favorite.findAll({ where: { UserId } });
    return favorites;
}

module.exports = getFavoritesById;