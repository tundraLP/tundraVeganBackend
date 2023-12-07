const { Product } = require('../../db');

const deleteProduct = async (ProductId, boolean) => {
    const product = await Product.update({ boolean }, { where: { ProductId } });

    return product;
};

module.exports = deleteProduct;