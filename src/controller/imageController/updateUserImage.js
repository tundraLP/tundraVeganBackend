const cloudinary = require('../../config/cloudinary');
const { User } = require('../../db');

const updateUserImage = async (image, UserId)=>{ //Update the image of the User trying to upload it to cloudinary.
    const user = await User.findByPk(UserId);

    if (!user) throw Error(`El usuario con ID = ${UserId}, no existe en la base de datos.`);

    //Cargo la imagen
    const folder = 'Users';
    const response = await cloudinary.uploader.upload(image, { folder },
        (error, result)=> {
            if (error)  {
                console.log(error);
                throw Error('Hubo un problema al subir la imagen a cloudinary.')
            }
            else    return result;
        });
    const imageUrl = response.secure_url;

    const aux = await User.update({  image: imageUrl }, { where: { id: UserId } });
    const userAux = await User.findByPk(UserId);
    if (!userAux) throw Error('No se encuentra el usuario en la base de datos.');

    return userAux;

}

module.exports = updateUserImage;