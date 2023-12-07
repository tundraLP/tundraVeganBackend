const getProducts = require('../../controllers/products/getProducts');


const getProductsHandler = async (req, res)=>{
    try {
        const products = await getProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = getProductsHandler;