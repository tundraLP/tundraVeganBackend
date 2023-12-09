const getAllFavorites = require('../../controller/favoriteController/getAllFavorites');

const getAllFavoritesHandler = async (req, res) => {
    try {
        const favorites = await getAllFavorites();
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = getAllFavoritesHandler;