const { Product } = require('../../db');

const updateProduct = async (data) => {
    const { name, type, description, price, stock, ProductId } = data;

    const product = await Product.update({ name, type, description, price, stock }, { where: { id: ProductId } });
    return product;
};

module.exports = updateProduct;