const { DataTypes } = require('sequelize');

const imageDefault = "https://res.cloudinary.com/da6d9ru3s/image/upload/v1685498460/Avatar-Profile-Vector-PNG-Pic_aobyn6.png";

const UserFunc = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            set(value) {
                this.setDataValue("name", value.toLowerCase());
            }
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            set(value) {
                this.setDataValue("lastName", value.toLowerCase());
            }
        },
        adress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            set(value) {
                this.setDataValue("mail", value.toLowerCase());
            },
            validate: {
                isEmail: true,
            },
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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        

    }, { paranoid: true });
};

module.exports = UserFunc;