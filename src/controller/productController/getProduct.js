const { Product, Type } = require('../../db');

const getProduct = async () => {
    const products = await Product.findAll( {
        include: [{
          model: Type,
          attributes: ['id', 'name'],
        }],
        attributes: {
          exclude: ['TypeId'],
        },
      });
    return products;
};

module.exports = getProduct;