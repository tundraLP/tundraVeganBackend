const { Type } = require('../../db');

const getTypes = async () => {
    const response = await Type.findAll();
    if (!response) throw Error(`No hay ningun tipo de comida guardado en la base de datos.`);
    return response;
};

module.exports = getTypes;