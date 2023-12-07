const supertest = require('supertest');
const { server, app } = require('../../index');
const { db } = require('../db');

const api = supertest(server);

beforeAll(() => {
    console.log('Comienzan los test de productos');
});

describe('Test para los productos', () => {

});

afterAll(async () => {
    await db.close();
    app.close();
});