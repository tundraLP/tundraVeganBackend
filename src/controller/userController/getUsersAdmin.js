const { User } = require('../../db');

const getUsersAdmin = async () => {
    const users = await User.findAll();

    return users;
};

module.exports = getUsersAdmin;