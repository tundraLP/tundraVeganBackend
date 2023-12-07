const getAllOrder = require('../../controller/orderController/getAllOrders');

const getAllOrderHandler = async (req, res) => {
    try {
        const orders = await getAllOrder();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = getAllOrderHandler;