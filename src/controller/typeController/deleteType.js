const { Type, Product } = require('../../db');
const deleteProduct = require('../productController/deleteProduct');

const deleteType = async (TypeId) => {
    const typeAux = await Type.findByPk(TypeId);
    if (!typeAux) throw Error(`No se encontro el tipo de comida con ID = ${TypeId} en la base de datos.`);
    const response = typeAux;

    const products = await Product.findAll({where: { TypeId }});

    const deletedProducts = await products.map(async (e)=> {
        const aux = e;
        await deleteProduct(e.id);
        return aux;
    });

    await typeAux.destroy();
    return {
        message: `Se elimino el tipo de comida ${typeAux.name}, junto a todos los productos de ese tipo.`,
        products: [...deletedProducts],
        data: response
    };
};

module.exports = deleteType;