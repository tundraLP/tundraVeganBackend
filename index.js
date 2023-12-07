require('dotenv').config();
const server = require('./src/server');
const { PORT } = process.env;
const { sequelize } = require('./src/db');

const app = server.listen(PORT, async () => {
    try {
        await sequelize.sync({ force: false });
        console.log(`Listening on PORT ${PORT}`);
    } catch (error) {
        console.log('Hubo un error', error);
    };
});

module.exports = { server, app };