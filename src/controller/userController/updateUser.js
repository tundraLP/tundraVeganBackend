const { User } = require('../../db');

const updateUser = async (data) => {
    const { name, lastName, mail, adress, password, UserId , type, image } = data;
    const user = await User.update({ name, lastName, mail, adress, password, type, image }, { where: { id: UserId } });
    const aux = await User.findByPk(UserId);
    return aux;
};

module.exports = updateUser;