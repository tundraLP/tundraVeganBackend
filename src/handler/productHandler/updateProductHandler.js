const updateProduct = require('../../controller/productController/updateProduct');

const updateProductHandler = async (req, res) => {
    try {
        const { name, type, description, price, stock, ProductId, image } = req.body;
        const product = await updateProduct({ name, type, description, price, stock, ProductId, image });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = updateProductHandler;