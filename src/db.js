
require("dotenv").config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASS, DB_PORT, DB_NAME } = process.env;

const UsersModel = require("./models/User");
const ProductModel = require("./models/Product");
const OrderModel = require("./models/Order");



const sequelize = new Sequelize(
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

connectToDataBase();


UsersModel(sequelize)
ProductModel(sequelize)
OrderModel(sequelize)

const {User, Order, Product} = sequelize.models;

User.hasMany(Order, {timeStamps: false });
Product.hasMany(Order, {timeStamps: false });
Order.belongsTo(User, {timeStamps: false });
Order.hasMany(Product, {timeStamps: false });




module.exports = {
    ...sequelize.models,
    sequelize
}

