const { Product } = require('../../db');

const deleteProduct = async (ProductId) => {
    const product = await Product.findOne({ where: { ProductId } });

    if (!product) throw Error('Por favor envie un ID de producto válido.');
    
    const aux = product;
    product.destroy();
    return aux;
};

module.exports = deleteProduct;