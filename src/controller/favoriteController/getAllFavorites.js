const { Favorite } = require('../../db');

const getAllFavorites = async () => {
    const favorites = await Favorite.findAll();
    return favorites;
}

module.exports = getAllFavorites;