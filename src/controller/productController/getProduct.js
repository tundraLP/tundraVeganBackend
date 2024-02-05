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
      products.sort((a, b) => {
        if (a.Type.name < b.Type.name) return -1;
        if (b.Type.name < a.Type.name) return 1;
        else return 0;
      });
    return products;
};

module.exports = getProduct;