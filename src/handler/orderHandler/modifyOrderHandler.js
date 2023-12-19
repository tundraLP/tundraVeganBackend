const modifyOrder= require('../../controller/orderController/modifyOrder');

const modifyOrderHandler = async (req, res)=>{
    try {
        const {id, state} = req.body;
        const modifiedOrder = await modifyOrder(id, state);
        res.status(201).json({
            message: 'Estado de la orden modificado con exito.',
            data: modifiedOrder
        });
    } catch (error) {
        res.status(400).json(error.message);
    }

}

module.exports = modifyOrderHandler;