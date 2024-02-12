const { User } = require('../../db');

const getUsersAdmin = async () => {
    const users = await User.findAll({ paranoid: false });
    const aux = users.map((user) => {
       return {
        id: user.id,
        type: user.type,
        mail: user.mail,
        name: user.name,
        lastName: user.lastName
    }

    });

    return aux;
};

module.exports = getUsersAdmin;