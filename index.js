require('dotenv').config();
const server = require('./src/server');
const { PORT } = process.env;

const app = server.listen(PORT, async () => {
    try {
        await db.sync({ force: true });
        console.log(`Listening on PORT ${PORT}`);
    } catch (error) {
        console.log('Hubo un error', error);
    };
});

module.exports = { server, app };