const { Product } = require('../../db');

const createProduct = async (data) => {
    const { name, type, description, price, stock, deleted } = data;
    const product = await Product.create({ name, type, description, price, stock, deleted });
    return product;
};

module.exports = createProduct;