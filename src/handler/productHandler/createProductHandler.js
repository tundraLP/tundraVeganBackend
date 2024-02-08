const createProduct = require('../../controller/productController/createProduct');

const createProductHandler = async (req, res) => {
    try {
        const { name, type, description, price, stock, image } = req.body;
        const product = await createProduct({ name, type, description, price, stock, image });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).send(error.message);
    };
};

module.exports = createProductHandler;