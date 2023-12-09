const { DataTypes } = require("sequelize");

const FavoriteFunc = (sequelize) => {
  sequelize.define("Favorite", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    }
  }, {paranoid: true});
};

module.exports = FavoriteFunc;