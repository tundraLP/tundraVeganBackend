const deleteFavorite = require('../../controller/favoriteController/deleteFavorite');

const deleteFavoriteHandler = async (req, res)=>{
    try {
        const { id } = req.body;
        const favorite = await deleteFavorite(id);
        if (favorite.deletedAt == null)
            res.status(201).json({ favorite: favorite, message: 'El favorito fue restaurado con exito.'});
        else
        res.status(201).json({ favorite: favorite, message: 'El favorito fue eliminado con exito.'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = deleteFavoriteHandler;