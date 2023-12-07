const supertest = require('supertest');
const { server, app } = require('../../index');
const { db } = require('../db');

const api = supertest(server);

beforeAll(() => {
    console.log('Comienzan los test de usuarios.');
});

describe('Test para las rutas de usuarios', () => {

});

afterAll(async () => {
    await db.close();
    app.close();
});
