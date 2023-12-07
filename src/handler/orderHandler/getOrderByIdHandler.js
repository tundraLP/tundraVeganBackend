const getOrdersById = require('../../controller/orderController/getOrderById');

const getOrdersByIdHandler = async (req, res) => {
    try {
        const { UserId } = req.query;
        const orders = await getOrdersById(UserId);
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = getOrdersByIdHandler;