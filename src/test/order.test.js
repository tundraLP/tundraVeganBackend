const supertest = require('supertest');
const { server, app } = require('../../index');
const { sequelize } = require('../db');

const api = supertest(server);

beforeAll(() => {
    console.log('Comienza los test de las ordenes.');
});

xdescribe('Test para las ordenes', () => {

});

afterAll(async () => {
    await sequelize.close();
    app.close();
});