const { DataTypes } = require("sequelize");

const ReviewFunc = (sequelize) => {
    sequelize.define("Review", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        review: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        stars: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 10,
            },
        },
        clientName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};

module.exports = ReviewFunc;