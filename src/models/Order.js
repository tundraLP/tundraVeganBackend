const { DataTypes } = require("sequelize");

const OrderFunc = (sequelize) => {
  sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Creado",
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      products: {
        type: DataTypes.ARRAY(DataTypes.JSON({
          id: {
            type: DataTypes.UUID,
            allowNull: false,
          },
          count: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        })),
        allowNull: false,
      },
      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      }
    },
    {
      timeStamps:false,
      sequelize,
      modelName: "Order",
      tableName: "Orders", // Agrega esta propiedad
      paranoid: true,
    }
  );
};

module.exports = OrderFunc;
