require("dotenv").config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASS, DB_PORT, DB_NAME } = process.env;

const UserFunc = require("./models/User");
const ProductFunc = require("./models/Product");
const OrderFunc = require("./models/Order");
const FavoriteFunc = require('./models/Favorite');

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASS}@${DB_PORT}/${DB_NAME}`,
    { logging: false }
);

// con la autenticacion permito que los test corran de manera correcta

const connectToDataBase = async () => {
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.error('Error al conectar la base de datos', error)
    };
};

connectToDataBase();

// sincornizacion de modelos

UserFunc(sequelize);
ProductFunc(sequelize);
OrderFunc(sequelize);
FavoriteFunc(sequelize);

const { User, Order, Product, Favorite } = sequelize.models;

User.hasMany(Order, { timeStamps: false });
Order.belongsTo(User, { timeStamps: false });

User.hasMany(Favorite);
Favorite.belongsTo(User, {foreignKey: "UserId"});
Favorite.belongsTo(Product, {foreignKey: "ProductId"});


module.exports = {
    sequelize,
    ...sequelize.models
};