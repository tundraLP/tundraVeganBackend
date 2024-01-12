const { Product, Type} = require('../../db');

const updateProduct = async (data) => {
    const { name, type, description, price, stock, ProductId, image } = data;

    const product = await Product.update({ name, type, description, price, stock, image }, { where: { id: ProductId } });

    const aux = await Product.findByPk(ProductId, {
        include: [{
          model: Type,
          attributes: ['id', 'name'],
        }],
        attributes: {
          exclude: ['TypeId'],
        },
      });
    return aux;
};

module.exports = updateProduct;