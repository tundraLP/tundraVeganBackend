const {Product} = require('../../db');

const getProducts = async ()=>{
    const products = await Product.findAll();
    return products;
}

module.exports = getProducts;