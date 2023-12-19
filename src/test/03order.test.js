const supertest = require('supertest');
const { server, app } = require('../../index');
const { sequelize } = require('../db');

const api = supertest(server);


let result;

describe('Test para las ordenes', () => {

    beforeAll(async () => {
        try {
            await sequelize.authenticate();
            console.log('Comienzan los test de las ordenes.');
        } catch (error) {
            console.log('Hubo un error al levantar la base de datos en los test ', error);
        };
    });

    it(' ', async () => {
        const response = await api.get('/user/getUsersAdmin')
            .expect(200)

        console.log(response.body)
    })

    // it('Solicitud tipo POST para la creación de una orden y esta debe ser retornada en formato JSON', async () => {
    //     const order = {
    //         state: 'Creado',
    //         adress: 'Avenida 15 n° 89',
    //         products: [{ count: 5, id: "a29d0905-2a22-4958-b216-f57102e86729" }, { count: 3, id: "06bdc60e-7325-4acf-a228-d460ee11b642" }],
    //         total: 5000,
    //         UserId: "6f999e5f-5f21-4252-841e-4093d22a46b6"
    //     };

    //     const res =await api.post('/order/createOrder')
    //         .send(order)
    //         .expect(500)
    //         .expect('Content-Type', "application/json; charset=utf-8");
    //     // .expect('Content-Type', "text/html; charset=utf-8");

    //     console.log(res)
    // });

    afterAll(async () => {
        try {
            await app.close();
            await sequelize.close();
        } catch (error) {
            console.log('Hubo un error al cerrar la base de datos ', error.message);
        };
    });
});
