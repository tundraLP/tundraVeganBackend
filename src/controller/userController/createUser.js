const { User } = require('../../db');

const createUser = async (data) => {
    const { name, lastName, mail, adress, password, image } = data;

    const user = await User.create({ name, lastName, mail, adress, password, image });

    return user;
};

module.exports = createUser;