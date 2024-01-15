const cloudinary = require('../../config/cloudinary');

const uploadImage = async (image, folder, name)=> {

    let public_id = '';
    if (name)   public_id = name;

    const response = await cloudinary.uploader.upload(image, { public_id, folder }, (error, result) => {
        if (error){
            console.log(`Error cargando imagen en cloudinary: ${error}`);
            throw Error(`Hubo un error cargando la imagen en cloudinary.`);
        }
        return result;
    });
    
    return response;
}

module.exports = uploadImage;