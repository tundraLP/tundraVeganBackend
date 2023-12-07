const { User } = require('../../db');

const updateUser = async (data) => {
    const { name, lastName, mail, adress, password, UserId } = data;
    const user = await User.update({ name, lastName, mail, adress, password }, { where: {UserId} });
    return user;
};

module.exports = updateUser;