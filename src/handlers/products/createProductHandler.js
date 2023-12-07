const createProduct = require('../../controllers/products/createProduct');

const createProductHandler = async (req, res)=>{
    try {
        const {name, type, description, price, stock, image} = req.body;
        if (name && type && description && price && stock){
            const product = await createProduct(name, type, description, price, stock, image);
            res.status(200).json({data: product, message: 'Producto creado exitosamente'});
        }else throw new Error('No se recibio un producto valido.');
    } catch (error) {
        res.status(400).send(error.message);
    }

}

module.exports =  createProductHandler;