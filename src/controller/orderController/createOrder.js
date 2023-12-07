const { Order } = require('../../db');

const createOrder = async (state, adress, products, total, deleted, UserId) => {

    const order = await Order.create({ state, adress, products, total, deleted });

    await order.setUser(UserId);

    return order;
};

module.exports = createOrder;