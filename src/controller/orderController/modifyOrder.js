const {Order} = require('../../db');

const modifyOrder = async (id, state)=>{
    const order = await Order.findOne({where: {id}, paranoid: false});
    if (!order) throw Error(`La orden no existe en la base de datos.`);
    if (order.deletedAt == null){
        if (order.state === state)  throw Error(`El estado es igual al actual.`);
        const modifyOrder = await Order.update({state}, {where: {id}});
        const modifiedOrder = await Order.findByPk(id);
        return modifiedOrder;
    }else return `La orden fue eliminada, por lo tanto no se puede cambiar su estado.`;
}

module.exports = modifyOrder;