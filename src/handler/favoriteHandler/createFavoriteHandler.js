const createFavorite = require('../../controller/favoriteController/createFavorite');

const createFavoriteHandler = async (req, res) => {
    try {
        const { UserId, ProductId } = req.body;
        const favorite = await createFavorite(UserId, ProductId);
        res.status(201).json(favorite);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = createFavoriteHandler;