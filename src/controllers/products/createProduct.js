const { Product } = require("../../db");
const bcrypt = require("bcrypt");

const createProduct = async ( name, type, description, price, stock, image) =>{
  
  

  const product = await Product.create({
    name,
    type,
    description,
    price,
    stock,
    image
  });
  return product;
}

module.exports = createProduct;
