const cloudinary = require('../../config/cloudinary');

const uploadImage = (image, folder, name) => {
    return new Promise((resolve, reject) => {
        let public_id = '';
        if (name) public_id = name;

        cloudinary.api.resource(public_id, async (error, aux) => {
            if (error && error.http_code != 404) {
                console.log(`Este fue el error de cloudinary buscando un public_id.`);
                console.log(error);
                reject(`Hubo un error buscando en la API de cloudinary un elemento con este public_id = ${public_id}.`);
            }

            if (name != '' && aux?.resources) {
                aux.resources.forEach((e) => {
                    if (e.public_id == public_id) {
                        reject(`Ya existe un elemento en cloudinary con este public_id = ${public_id}.`);
                        return;
                    }
                });
            }
            
            try {
                const response = await cloudinary.uploader.upload(image, { public_id, folder });
                resolve(response);
            } catch (error) {
                console.log(`Error cargando imagen en cloudinary: ${error}`);
                reject(`Hubo un error cargando la imagen en cloudinary.`);
            }
        });
    });
};

module.exports = uploadImage;
