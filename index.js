require('dotenv').config();
const server = require('./src/server');
const { PORT } = process.env;
const { sequelize } = require('./src/db');

const app = server.listen(PORT, async () => {
    try {
        console.log(`Listening on PORT ${PORT}`);
        await sequelize.sync({ alter: false });
    } catch (error) {
        console.log('Hubo un error al conectar la base de datos ', error);
    };
});

module.exports = { server, app };