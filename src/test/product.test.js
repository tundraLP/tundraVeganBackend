const supertest = require('supertest');
const { server, app } = require('../../index');
const { sequelize } = require('../db');

const api = supertest(server);

beforeAll(() => {
    console.log('Comienzan los test de productos');
});

xdescribe('Test para los productos', () => {

});

afterAll(async () => {
    await sequelize.close();
    app.close();
});