const deleteProduct = require('../../controller/productController/deleteProduct');

const deleteProductHandler = async (req, res) => {
    try {
        const { ProductId, boolean } = req.body;
        const product = await deleteProduct({ ProductId, boolean });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = deleteProductHandler;