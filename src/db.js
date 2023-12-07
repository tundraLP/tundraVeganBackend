const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASS, DB_PORT, DB_NAME } = process.env;

const db = new Sequelize(
    `postgres://${DB_USER}:${DB_PASS}@${DB_PORT}/${DB_NAME}`,
    { logging: false }
);

// con la autenticacion permito que los test corran de manera correcta

const connectToDatabase = async () => {
    try {
        await db.authenticate();
    } catch (error) {
        console.error('Error al conectar la base de datos', error)
    };
};

connectToDatabase();

module.exports = {
    db,
    ...db.models
};