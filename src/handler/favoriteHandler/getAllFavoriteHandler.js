const getAllFavorite = require('../../controller/favoriteController/getAllFavorite');

const getAllFavoriteHandler = async (req, res)=>{
    try {
        const favorites = await getAllFavorite();
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

module.exports = getAllFavoriteHandler;