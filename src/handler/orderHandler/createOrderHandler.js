const createOrder = require('../../controller/orderController/createOrder');

const createOrderHandler = async (req, res) => {
    try {
        const { state, adress, products, total, UserId } = req.body;
        const date = new Date().toISOString().slice(0, 10);
        const order = await createOrder(state, adress, products, total, UserId, date);
        res.status(201).json({message: `La orden fue creada exitosamente.`, order})
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = createOrderHandler;