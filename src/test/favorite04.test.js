const supertest = require('supertest');
const { server, app } = require('../../index');
const { sequelize } = require('../db');

const api = supertest(server);

describe('Comienzan los test para los favoritos', () => {

    beforeAll(async () => {
        try {
            await sequelize.authenticate();
            console.log('Comienzan los test de usuarios.');
        } catch (error) {
            console.log('Hubo un error al levantar la base de datos en los test ', error);
        };
    });

    let resultClient;
    let resultProduct;
    let resultFavorite;

    it('Solicitud de tipo GET para traer un usuario', async () => {
        const response = await api.get('/user/getUsersAdmin')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8");

        resultClient = response.body[0];
    });

    it('Solicitud de tipo GET para traer los productos', async () => {
        const response = await api.get('/product/getProducts')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8");

        resultProduct = response.body[0];
    });

    it('Solicitud de tipo POST para crear un favorito de un producto asociado a un usuario', async () => {
        const favorite = {
            UserId: resultClient.id,
            ProductId: resultProduct.id
        };

        const response = await api.post('/favorite/createFavorite')
            .send(favorite)
            .expect(201)
            .expect('Content-Type', "application/json; charset=utf-8");

        resultFavorite = response.body;

        expect(response.body).toHaveProperty('UserId', resultClient.id);
        expect(response.body).toHaveProperty('ProductId', resultProduct.id);
    });

    it('Solicitud de tipo POST para crear un favorito sin el envio de datos', async () => {
        const favorite = {
            UserId: resultClient.id
        };

        await api.post('/favorite/createFavorite')
            .send(favorite)
            .expect(500)
            .expect('Content-Type', 'text/html; charset=utf-8');
    });

    it('Solicitud de tipo GET para traer todos los favoritos de un usuario', async () => {
        const response = await api.get(`/favorite/getFavoritesById?UserId=${resultClient.id}`)
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8");

        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length > 0);
        expect(response.body[0]).toHaveProperty('UserId', resultClient.id);
        expect(response.body[0]).toHaveProperty('ProductId', resultProduct.id);
    });

    it('Solicitud de tipo GET para traer los favoritos sin enviar el ID de usuario', async () => {
        await api.get('/favorite/getFavoritesById?UserId=')
            .expect(500)
            .expect('Content-Type', 'text/html; charset=utf-8');
    })

    it('Solicitud de tipo DELETE para borrar un favorito de un usuario', async () => {
        await api.delete('/favorite/deleteFavorite')
            .send({ id: resultFavorite.id })
            .expect(201)
            .expect('Content-Type', "application/json; charset=utf-8");
    });

    afterAll(async () => {
        try {
            await sequelize.sync({ force: true });
            await sequelize.sync({ force: false });
            await app.close();
            await sequelize.close();
        } catch (error) {
            console.log('Hubo un error al cerrar la base de datos ', error);
        };
    });
});