const { Order } = require('../../db');

const getOrdersById = async (UserId) => {

    const orders = await Order.findAll({ where: { UserId } });

    return orders;
};

module.exports = getOrdersById;