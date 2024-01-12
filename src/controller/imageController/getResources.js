const cloudinary = require('../../config/cloudinary');

const getResoucers = async (public_id)=>{
    const response = await cloudinary.api.resource(public_id, (error)=>{
        if (error) {
            console.log(`Este fue el error de cloudinary.`);
            console.log(error);
            throw Error(`Hubo un error buscando en la API de cloudinary un elemento con este public_id = ${public_id}.`);
        }
    });
    return {
        public_id: response.public_id,
        url: response.secure_url
    };
}

module.exports = getResoucers;