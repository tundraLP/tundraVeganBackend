const { Order, Product } = require("../../db");
const axios = require("axios");
const { uriBack } = require("../../utils/const");

const createOrder = async (state, adress, products, total, UserId, date) => {
  const aux = products.map((e) => {
    const productAux = Product.findByPk(e.id);
    if (productAux.stock - e.count < 0)
      throw Error(
        `La cantidad pedida del producto con ID: ${e.id} es superior a su stock actual. ACT= ${productAux.stock}, Pedido= ${e.count}.`
      );
  });
  const recorrido2 = products.forEach(async (e) => {
    const productAux = await Product.findByPk(e.id);
    const stockAux = parseInt(productAux.stock) - parseInt(e.count);
    const aux = await axios
      .put(`${uriBack}/product/updateProduct`, {
        ProductId: e.id,
        stock: stockAux,
      })
      .then((data) => data.data)
      .catch((error) => console.log(error));
  });
  const order = await Order.create({ state, adress, products, total, date });

  await order.setUser(UserId);

  return order;
};

module.exports = createOrder;