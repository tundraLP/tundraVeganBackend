const supertest = require('supertest');
const { server, app } = require('../../index');
const { db } = require('../db');

const api = supertest(server);

beforeAll(() => {
    console.log('Comienza los test de los favoritos.');
});

describe('Test para los favoritos.', () => {

});

afterAll(async () => {
    await db.close();
    app.close();
});