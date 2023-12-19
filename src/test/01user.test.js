const supertest = require('supertest');
const { server, app } = require('../../index');
const { sequelize } = require('../db');

const api = supertest(server);


describe('Test para las rutas de usuarios', () => {

    beforeAll(async () => {
        try {
            await sequelize.authenticate();
            console.log('Comienzan los test de usuarios.');
        } catch (error) {
            console.log('Hubo un error al levantar la base de datos en los test ', error);
        };
    });

    let result;

    const user = {
        name: "Blas",
        lastName: "Casale",
        mail: "truchomail@gmail.com",
        password: "Contrafalse123.",
        adress: "Avenida 15 n°4193"
    };

    const fakeUser = {
        name: "Blas",
        lastName: "Casale",
        password: "Contrafalse123.",
        adress: "Avenida 15 n°4193"
    };

    it('Solicitud tipo POST para la creación de un usuario y que sea retornado en formato JSON', async () => {
        await api.post('/user/createUser')
            .send(user)
            .expect('Content-Type', "application/json; charset=utf-8");
    });

    it('Solicitud tipo POST para la creación de un usuario sin la informacion necesaria', async () => {
        await api.post('/user/createUser')
            .send(fakeUser)
            .expect('Content-Type', 'text/html; charset=utf-8');
    });

    it('Solicitud tipo GET de un usuario y que este debe ser retornado en formato JSON', async () => {
        const response = await api.get(`/user/getUser?mail=${user.mail}&password=${user.password}`)
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8");
        result = response.body;

        expect(response.body).toHaveProperty('name', user.name.toLowerCase());
        expect(response.body).toHaveProperty('lastName', user.lastName.toLowerCase());
        expect(response.body).toHaveProperty('mail', user.mail);
        expect(response.body).toHaveProperty('password', user.password);
        expect(response.body).toHaveProperty('adress', user.adress);
    });

    it('Solicitud tipo GET de un usuario sin el envio de la información necesaria', async () => {
        await api.get(`/user/getUser?mail=${user.mail}&password=`)
            .expect(500)
            .expect('Content-Type', 'text/html; charset=utf-8');
    });

    it('Solicitud tipo GET trayendo todos los usuarios para el admin', async () => {
        const response = await api.get('/user/getUsersAdmin')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8");

        console.log(response.body)

        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length > 10);
    });

    it('Solicitud tipo PUT de un usuario y que este debe ser retornado en formato JSON', async () => {

        const update = {
            name: result.name,
            lastName: result.lastName,
            mail: result.mail,
            password: result.password,
            adress: result.adress,
            UserId: result.id
        };

        await api.put('/user/updateUser')
            .send(update)
            .expect(201)
            .expect('Content-Type', "application/json; charset=utf-8");
    });

    it('Solicitud de tipo PUT de un usuario pero sin el envio de la informacion necesaria', async () => {
        const update = {
            name: result.name,
            lastName: result.lastName,
            mail: result.mail,
            password: result.password,
            adress: result.adress,
        };

        await api.put('/user/updateUser')
            .send(update)
            .expect(500)
            .expect('Content-Type', 'application/json; charset=utf-8');
    });

    it('Solicitud tipo DELETE de un usuario y que este debe ser retornado en formato JSON', async () => {
        await api.delete('/user/deleteUser')
            .send({ UserId: result.id })
            .expect(201)
            .expect('Content-Type', "application/json; charset=utf-8");
    });

    it('Solicitud tipo DELETE de un usuario pero sin el envio del UserId', async () => {
        await api.delete('/user/deleteUser')
            .send({ UserId: null })
            .expect(500)
            .expect('Content-Type', 'text/html; charset=utf-8');
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
