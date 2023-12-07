const { Order } = require('../../db');
const { Op } = require('sequelize');

const deleteOrder = async (UserId, id) => {
    const order = await Order.findOne({ where: { [Op.and]: [{ UserId, id }] } });

    if (!order) throw Error('No se ha encontrado la orden. Chequee los datos, por favor.');

    const aux = order;
    order.destroy();
    return aux;
};

module.exports = deleteOrder;