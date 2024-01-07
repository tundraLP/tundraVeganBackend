const { DataTypes } = require("sequelize");

const ProductFunc = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
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
        allowNull: false,
        unique: true,
        validate: {
          isUrl: true,
        },
        public_id: String,
      }
    },
    {
      timeStamps:false,
      sequelize,
      modelName: "Product",
      tableName: "Products", // Agrega esta propiedad
      paranoid: true,
    }
  );
};

module.exports = ProductFunc;