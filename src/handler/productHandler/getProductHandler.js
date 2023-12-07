const getProduct = require('../../controller/productController/getProduct');

const getProductHandler = async (req, res) => {
    try {
        const products = await getProduct();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = getProductHandler;