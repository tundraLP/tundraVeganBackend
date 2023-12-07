const { DataTypes } = require("sequelize");

const imageDefault = "https://res.cloudinary.com/da6d9ru3s/image/upload/v1685498460/Avatar-Profile-Vector-PNG-Pic_aobyn6.png";

const ProductFunc = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue:
          imageDefault, 
        validate: {
          isUrl: true,
        },
        public_id: String,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "Products", // Agrega esta propiedad
      paranoid: true,
    }
  );
};

module.exports = ProductFunc;