const deleteOrder = require('../../controller/orderController/deleteOrder');

const deleteOrderHandler = async (req, res) => {
    try {
        const { UserId, id } = req.body;
        const order = await deleteOrder(UserId, id);
        res.status(201).json({ order: order, message: 'Su orden ha sido eliminada.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = deleteOrderHandler;