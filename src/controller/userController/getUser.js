const { User } = require('../../db');

const getUser = async (data) => {
    const { mail, password } = data;

    const user = await User.findOne({ where: { mail: mail } }, { paranoid: false });

    if (!user) throw Error('No existe ningun usuario creado con ese mail. Por favor verifique su mail.');

    if (user.deleteAt == null) {
        if (password === user.password) return user;
        else throw Error('El usuario y contraseña no coinciden.');
    } else {
        return user;
    }
};

module.exports = getUser;