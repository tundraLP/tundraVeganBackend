const { Product, Type } = require('../../db');

const createProduct = async (data) => {
    const { name, type, description, price, stock, image } = data;
    const product = await Product.create({ name, description, price, stock, image });
    const typeAux = await Type.findOne({where: {name: type}});

    if (!typeAux) throw Error('No existe ese tipo de comida en la base de datos.');
    await product.setType(typeAux);
    
    const productAux = await Product.findOne({where: { id: product.id }, include: [{
        model: Type,
        attributes: ['id', 'name'],
      }],
      attributes: {
        exclude: ['TypeId'],
      }});

    return productAux;
};

module.exports = createProduct;