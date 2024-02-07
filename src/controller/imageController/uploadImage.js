const cloudinary = require('../../config/cloudinary');

const uploadImage = async (image, folder, name) => {

    let public_id = '';
    if (name) public_id = name;

    const aux = await cloudinary.api.resource(public_id, (error)=>{
        if (error) {
            console.log(`Este fue el error de cloudinary buscando un public_id.`);
            console.log(error);
            throw Error(`Hubo un error buscando en la API de cloudinary un elemento con este public_id = ${public_id}.`);
        }
    });
    if (name != '') aux.resources.forEach((e) => {
        if (e.public_id == public_id)   throw Error(`Ya existe un elemento en cloudinary con este public_id = ${public_id}.`);
    });

    const response = await cloudinary.uploader.upload(image, { public_id, folder }, (error, result) => {
        if (error) {
            console.log(`Error cargando imagen en cloudinary: ${error}`);
            throw Error(`Hubo un error cargando la imagen en cloudinary.`);
        }
        return result;
    });

    return response;
};

module.exports = uploadImage;