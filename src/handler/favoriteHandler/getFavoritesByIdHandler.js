const getFavoritesById = require('../../controller/favoriteController/getFavoritesById');

const getFavoritesByIdHandler = async (req, res) => {
    try {
        const { UserId } = req.query;
        const favorites = await getFavoritesById(UserId);
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = getFavoritesByIdHandler;