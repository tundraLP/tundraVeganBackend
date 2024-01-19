const { Order, Product } = require('../../db');

const getOrdersById = async (UserId) => {

    const orders = await Order.findAll({ where: { UserId } });
    const mappedOrders = await Promise.all(orders.map(async (order) => { //Mappeando todas las ordenes
        const mappedProducts = await Promise.all(order.products.map(async (p) => { //Mappeando el array products    
            const productAux = await Product.findByPk(p.id);
            if (!productAux) throw Error(`Alguno de los productos no existe. {ID: ${p.id}}`);
            return {
                product: {
                    id: productAux.id,
                    name: productAux.name,
                    type: productAux.type,
                    description: productAux.description,
                    price: productAux.price,
                    stock: productAux.stock,
                    image: productAux.image,
                },
                count: p.count
            };
        }));
        const aux = {
            id: order.dataValues.id,
            state: order.dataValues.state,
            adress: order.dataValues.adress,
            products: mappedProducts,
            total: order.dataValues.total,
            createdAt: order.dataValues.createdAt,
        };
        return aux;
    }));

    return mappedOrders;
};

module.exports = getOrdersById;