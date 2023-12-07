const { Order } = require('../../db');

const getAllOrder = async () => {
    const orders = await Order.findAll();
    return orders;
};

module.exports = getAllOrder;