const createProduct = require('../../controller/productController/createProduct');

const createProductHandler = async (req, res) => {
    try {
        const { name, type, description, price, stock, deleted } = req.body;
        const product = await createProduct({ name, type, description, price, stock, deleted });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = createProductHandler;