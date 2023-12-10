const { User } = require('../../db');

const createUser = async (data) => {
    const { name, lastName, mail, adress, password, image } = data;

    const user = await User.create({ name, lastName, mail, adress, password, image })
        .catch(() => "Ya existe un usuario creado con este mail.");

    return user;
};

module.exports = createUser;