const { Product, Type} = require('../../db');

const updateProduct = async (data) => {
    const { name, type, description, price, stock, ProductId, image } = data;
    
    const product = await Product.update({ name, description, price, stock, image }, { where: { id: ProductId } });
    
    if (type){
      const typeAux = await Type.findOne({where: {name: type}});
      if (!typeAux) throw Error(`No existe ese tipo de comida en la BDD.`);
      const productUpdated = await Product.findByPk(ProductId);
      await productUpdated.setType(typeAux);
    }


    const aux = await Product.findByPk(ProductId, {
        include: [{
          model: Type,
          attributes: ['id', 'name'],
        }],
        attributes: {
          exclude: ['TypeId'],
        },
      });
    return aux;
};

module.exports = updateProduct;