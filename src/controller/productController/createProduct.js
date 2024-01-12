const { Product, Type } = require('../../db');

const createProduct = async (data) => {
    const { name, type, description, price, stock, image } = data;
    const productAux = await Product.findOne({where: {name }});
    if (productAux) throw Error(`Ya existe un producto en la base de datos con el nombre:  ${name}.`);

    const typeAux = await Type.findOne({where: {name: type}});
    if (!typeAux) throw Error('No existe ese tipo de comida en la base de datos.');
    
    const product = await Product.create({ name, description, price, stock, image });
    await product.setType(typeAux);
    
    const productCreated = await Product.findOne({where: { id: product.id }, include: [{
        model: Type,
        attributes: ['id', 'name'],
      }],
      attributes: {
        exclude: ['TypeId'],
      }});

    return productCreated;
};

module.exports = createProduct;