const { Product } = require('../../db');

const createProduct = async (data) => {
    const { name, type, description, price, stock, image, deleted } = data;
    const product = await Product.create({ name, type, description, price, stock, image, deleted });
    return product;
};

module.exports = createProduct;