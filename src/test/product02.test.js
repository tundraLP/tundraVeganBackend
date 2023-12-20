const supertest = require('supertest');
const { server, app } = require('../../index');
const { sequelize } = require('../db');

const api = supertest(server);


describe('Test para los productos', () => {
    
    beforeAll(async () => {
        try {
            await sequelize.authenticate();
            console.log('Comienzan los test de productos.');
        } catch (error) {
            console.log('Hubo un error al levantar la base de datos en los test ', error);
        };
    });
    
    const product = {
        name: "Bananas",
        type: "Fruta",
        description: "Bananas ecuatorianas de alta calidad y buen sabor",
        price: 500,
        stock: 50,
        image: "https://res.cloudinary.com/da6d9ru3s/image/upload/v1685498460/Avatar-Profile-Vector-PNG-Pic_aobyn6.png"
    };
    
    const product2 = {
        name: "Bananas ecuatorianas",
        type: "Fruta",
        description: "Bananas ecuatorianas de alta calidad y buen sabor",
        price: 500,
        stock: 50,
        image: "https://mylink.com.ar"
    }
    
    const fakeProduct = {
        type: "Fruta",
        description: "Bananas ecuatorianas de alta calidad y buen sabor",
        price: 500,
        stock: 50,
        image: "https://res.cloudinary.com/da6d9ru3s/image/upload/v1685498460/Avatar-Profile-Vector-PNG-Pic_aobyn6.png"
    };
    
    let result;
    let result2;

    it('Solicitud tipo POST para la creación de un producto y este debe ser retornado en formato JSON', async () => {
        const response = await api.post('/product/createProduct')
            .send(product)
            .expect(201)
            .expect('Content-Type', "application/json; charset=utf-8");

        result = response.body;
    });
    it('Solicitud tipo POST para la creación de un producto y este debe ser retornado en formato JSON', async () => {
        const response = await api.post('/product/createProduct')
            .send(product2)
            .expect(201)
            .expect('Content-Type', "application/json; charset=utf-8");

        result2 = response.body;
    });

    it('Solicitud tipo POST para la creación de un producto que le falten datos', async () => {
        await api.post('/product/createProduct')
            .send(fakeProduct)
            .expect(500)
            .expect('Content-Type', "text/html; charset=utf-8");
    });

    it('Solicitud tipo GET para traer todos los productos y estos deben ser devueltos en un array', async () => {
        const response = await api.get('/product/getProducts')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8");


        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length > 0);
    });

    it('Solicitud tipo PUT para actualizar un producto y este debe ser retornado en formato JSON', async () => {
        const update = {
            name: result.name,
            type: result.type,
            description: result.description,
            price: parseFloat(result.price),
            stock: result.stock,
            image: result.image,
            ProductId: result.id
        };
        await api.put('/product/updateProduct')
            .send(update)
            .expect(201)
            .expect('Content-Type', "application/json; charset=utf-8");
    });

    it('Solicitud tipo PUT para actualizar un producto pero sin envio del ID del producto', async () => {
        await api.put('/product/updateProduct')
            .send(product)
            .expect(500)
            .expect('Content-Type', "text/html; charset=utf-8");
    });

    it('Solicitud tipo DELETE para eliminar un producto', async () => {
        await api.delete('/product/deleteProduct')
            .send({ ProductId: result.id })
            .expect(201)
            .expect('Content-Type', "application/json; charset=utf-8");
    });

    it('Solicitud tipo DELETE para eliminar un producto pero sin enviar su ID', async () => {
        await api.delete('/product/deleteProduct')
            .send({ ProductId: null })
            .expect(500)
            .expect('Content-Type', "text/html; charset=utf-8");
    });
    
    afterAll(async () => {
        try {
            await app.close();
            await sequelize.close();
        } catch (error) {
            console.log('Hubo un error al cerrar la base de datos ', error);
        };
    });
});
