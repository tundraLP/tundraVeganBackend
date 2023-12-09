const {Favorite} = require('../../db');

const getAllFavorite = async ()=>{
    const favorites = await Favorite.findAll();
    return favorites;
}

module.exports = getAllFavorite;