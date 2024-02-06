const { Order } = require('../../db');

const createOrder = async (state, adress, products, total, UserId, date) => {

    const order = await Order.create({ state, adress, products, total, date });

    await order.setUser(UserId);

    return order;
};

module.exports = createOrder;