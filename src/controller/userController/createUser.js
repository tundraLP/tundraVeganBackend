const { User } = require('../../db');

const createUser = async (data) => {
    const { name, lastName, mail, adress, password, image } = data;

    const [user, boolean] = await User.findOrCreate({
        where: { mail },
        defaults: { name, lastName, mail, adress, password, image}
    });

    if (!boolean) throw Error('Ya existe un usuario registrado con este mail.');
    else return user;
};

module.exports = createUser;