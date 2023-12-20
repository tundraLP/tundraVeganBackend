const supertest = require('supertest');
const { server, app } = require('../../index');
const { sequelize } = require('../db');

const api = supertest(server);

let resultClient;
let resultProducts;
let resultOrder;

describe('Test para las ordenes', () => {

    beforeAll(async () => {
        try {
            await sequelize.authenticate();
            console.log('Comienzan los test de las ordenes.');
        } catch (error) {
            console.log('Hubo un error al levantar la base de datos en los test ', error);
        };
    });

    it('Trayendo todos los usuarios para crear una orden', async () => {
        const response = await api.get('/user/getUsersAdmin')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8");

        resultClient = response.body[0];
    });

    it('Trayendo los productos para crear una orden', async () => {
        const response = await api.get('/product/getProducts')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8");

        resultProducts = response.body[0];
    });

    it('Solicitud tipo POST para la creación de una orden y esta debe ser retornada en formato JSON', async () => {
        const order = {
            state: 'Creado',
            adress: 'Avenida 15 n° 89',
            products: [{ count: 4, id: resultProducts.id }],
            total: 10000,
            UserId: resultClient.id
        };

        const response = await api.post('/order/createOrder')
            .send(order)
            .expect(201)
            .expect('Content-Type', "application/json; charset=utf-8");

        resultOrder = response.body;
    });

    it('Solicitud tipo POST para la creación de una orden y esta debe ser retornada en formato JSON', async () => {
        const order = {
            state: 'Creado',
            adress: 'Avenida 15 n° 89',
            products: [{ count: 2, id: resultProducts.id }],
            total: 5000,
            UserId: resultClient.id
        };

        await api.post('/order/createOrder')
            .send(order)
            .expect(201)
            .expect('Content-Type', "application/json; charset=utf-8");
    });

    it('Solicitud tipo GET de todas las ordenes', async () => {
        const response = await api.get('/order/getAllOrders')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8");

        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length > 0);
    });

    it('Solicitud tipo GET para buscar una sola orden por ID', async () => {
        const response = await api.get(`/order/getOrdersById?UserId=${resultClient.id}`)
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8");

        expect(response.body).toBeInstanceOf(Array);
        expect(response.body[0]).toHaveProperty('state', resultOrder.state);
        expect(response.body[0]).toHaveProperty('adress', resultOrder.adress);
        expect(response.body[0]).toHaveProperty('products', 'product', 'id' && 'count');
        expect(response.body[0]).toHaveProperty('total', '10000.00');
        expect(response.body[0]).toHaveProperty('id', resultOrder.id);
    });

    it('Solicitud tipo GET para buscar todas las ordenes', async () => {
        const response = await api.get('/order/getAllOrders')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8");

        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length > 0);
    });

    it('Solicitud tipo DELETE para eliminar una orden', async () => {
        await api.delete('/order/deleteOrder')
            .send({ id: resultOrder.id })
            .expect(201)
            .expect('Content-Type', "application/json; charset=utf-8");
    });

    afterAll(async () => {
        try {
            await app.close();
            await sequelize.close();
        } catch (error) {
            console.log('Hubo un error al cerrar la base de datos ', error.message);
        };
    });
});
