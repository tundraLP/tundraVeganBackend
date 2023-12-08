const { Order } = require('../../db');

const createOrder = async (state, adress, products, total, UserId) => {

    const order = await Order.create({ state, adress, products, total });

    await order.setUser(UserId);

    return order;
};

module.exports = createOrder;