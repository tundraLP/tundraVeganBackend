require("dotenv").config();
const {Sequelize} = require('sequelize');

const UsersModel = require("./models/User");
const ProductModel = require("./models/Product");
const OrderModel = require("./models/Order");

const {DB_PORT, DB_NAME, PASSWORD, USER} = process.env;

//const sequelize = new sequelize('postgres://user:pass@example.com:5432/dbname');


const sequelize = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${DB_PORT}/${DB_NAME}`, 
    {logging: false}
);


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
    conn: sequelize
}