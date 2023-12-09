const { Favorite } = require('../../db');

const deleteFavorite = async (id) => {
    const favorite = await Favorite.findOne({ paranoid: false, where: { id } });
    if (!favorite) throw Error(`No se ha encontrado el favorito con ID: ${id}.`);
    if (favorite.deletedAt == null) {
        await favorite.destroy();
        return favorite;
    } else {
        await favorite.restore({ where: { id } });
        return favorite;
    }

}

module.exports = deleteFavorite;