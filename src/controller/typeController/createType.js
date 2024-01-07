const { Type } = require('../../db');

const createType = async (type) => {
    const aux = await Type.findOne({where: {name: type}});
    if (aux) throw Error(`El tipo de comida ${aux.name} ya existe en la base de datos.`);

    const newType = await Type.create({name: type});

    return newType;
};

module.exports = createType;