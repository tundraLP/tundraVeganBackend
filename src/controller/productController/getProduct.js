const { Product } = require('../../db');

const getProduct = async () => {
    const products = await Product.findAll();
    return products;
};

module.exports = getProduct;