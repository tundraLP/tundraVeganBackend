const { Favorite } = require('../../db');

const deleteFavorite = async (id) => {
    const favorite = await Favorite.findOne({ where: { id: id }, paranoid: false });
    if (!favorite) throw Error(`No se ha encontrado el favorito con ID: ${id}.`);
    if (favorite.deletedAt == null) {
        await favorite.destroy();
        return favorite;
    } else {
        await favorite.restore({ where: { id: id } });
        return favorite;
    }

}

module.exports = deleteFavorite;