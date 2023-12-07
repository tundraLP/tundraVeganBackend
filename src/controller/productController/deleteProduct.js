const { Product } = require('../../db');

const deleteProduct = async (ProductId) => {
    const product = await Product.findOne({ where: { ProductId } });

    const aux = product;
    product.destroy();
    return aux;
};

module.exports = deleteProduct;