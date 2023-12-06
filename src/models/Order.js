const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
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
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false,
      },

      import: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "Orders", // Agrega esta propiedad
      paranoid: true,
    }
  );
};
