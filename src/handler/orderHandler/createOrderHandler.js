const createOrder = require('../../controller/orderController/createOrder');

const createOrderHandler = async (req, res) => {
    try {
        const { state, adress, products, total, UserId } = req.body;
        const order = await createOrder(state, adress, products, total, UserId);
        res.status(201).json(order)
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = createOrderHandler;