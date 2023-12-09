const { Favorite, User, Product } = require('../../db');

const createFavorite = async (UserId, ProductId)=>{
    const user = await User.findByPk(UserId);
    if (!user) throw Error('El ID del usuario es incorrecto.');

    const product = await Product.findByPk(ProductId);
    if (!product) throw Error('El ID del producto es incorrecto.');

    const existingFavorite = await Favorite.findOne({where: {
        UserId,
        ProductId
    }});

    if (existingFavorite) throw Error(`Este favorito ya existe para el usuario y producto especificos. { UserID: ${UserId} ; ProductID: ${ProductId} }`);

    const favorite = await Favorite.create();
    await favorite.setUser(UserId);
    await favorite.setProduct(ProductId);

    return favorite;

}

module.exports = createFavorite;