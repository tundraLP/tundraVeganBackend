const updateProduct = require('../../controller/productController/updateProduct');

const updateProductHandler = async (req, res) => {
    try {
        const { name, type, description, price, stock, ProductId } = req.body;
        const product = await updateProduct({ name, type, description, price, stock, ProductId });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = updateProductHandler;