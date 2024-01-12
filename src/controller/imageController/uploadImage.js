const cloudinary = require('../../config/cloudinary');

const uploadImage = async (image, folder)=> {
    const response = await cloudinary.uploader.upload(image, { folder }, (error, result) => {
        if (error){
            console.log(`Error cargando imagen en cloudinary: ${error}`);
            throw Error(`Hubo un error cargando la imagen en cloudinary.`);
        }
        return result;
    });
    
    return response;
}

module.exports = uploadImage;