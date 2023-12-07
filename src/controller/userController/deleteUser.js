const { User } = require('../../db');

const deleteUser = async (UserId) => {
    const user = await User.findOne({ where: { UserId } });

    if (!user) throw Error('No existe un usuario con este ID, por favor envie un ID válido.');

    const aux = user;
    user.destroy();
    return aux;
};

module.exports = deleteUser;