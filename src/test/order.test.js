const supertest = require('supertest');
const { server, app } = require('../../index');
const { db } = require('../db');

const api = supertest(server);

beforeAll(() => {
    console.log('Comienza los test de las ordenes.');
});

describe('Test para las ordenes', () => {

});

afterAll(async () => {
    await db.close();
    app.close();
});