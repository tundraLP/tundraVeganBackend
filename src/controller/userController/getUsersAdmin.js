const { User } = require('../../db');

const getUsersAdmin = async () => {
    const users = await User.findAll({ paranoid: false });

    return users;
};

module.exports = getUsersAdmin;