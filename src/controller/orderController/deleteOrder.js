const { Order } = require('../../db');
const { Op } = require('sequelize');

const deleteOrder = async (id) => {
    const order = await Order.findOne({paranoid: false, where: {id}});
    if (!order) throw Error('No se ha encontrado la orden. Chequee los datos, por favor.');
    if (order.deletedAt == null){
        const aux = order;
        await order.destroy();
        return aux;
    }else{
        await order.restore({ where: {id: id} });
        return order;

    }
};

module.exports = deleteOrder;