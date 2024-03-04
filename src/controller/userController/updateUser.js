const { User } = require('../../db');

const updateUser = async (data) => {
    const { name, lastName, mail, adress, password, UserId , type, image } = data;
    const user = await User.update({ name, lastName, mail, adress, password, type, image }, { where: { id: UserId } });
    const aux = await User.findByPk(UserId);
    const response = {
        id: aux.id,
        mail: aux.mail,
        type: aux.type,
        name: aux.name,
        lastName: aux.lastName,
        message: 'Tipo de usuario actualizado'
    };
    return response;
};

module.exports = updateUser;