const { User } = require('../../db');

const updateUser = async (data) => {
    const { name, lastName, mail, adress, password, UserId , type } = data;
    const user = await User.update({ name, lastName, mail, adress, password, type }, { where: { id: UserId } });
    const aux = await User.findByPk(UserId);
    return aux;
};

module.exports = updateUser;