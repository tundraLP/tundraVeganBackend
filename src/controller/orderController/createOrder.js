const { Order } = require('../../db');

const createOrder = async (state, adress, products, total, date, deleted, UserId) => {

    const order = await Order.create({ state, adress, products, total, date, deleted });

    await order.setUser(UserId);

    return order;
};

module.exports = createOrder;