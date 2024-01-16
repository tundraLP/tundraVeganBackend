const cloudinary = require('../../config/cloudinary');

const getResoucers = async (public_id)=>{

    // Busqueda especifica
    if (public_id != undefined){
        const response = await cloudinary.api.resource(public_id, (error)=>{
            if (error) {
                console.log(`Este fue el error de cloudinary.`);
                console.log(error);
                throw Error(`Hubo un error buscando en la API de cloudinary un elemento con este public_id = ${public_id}.`);
            }
        });
        return response;

    }

    // Busqueda general
    const response = await cloudinary.search
    .expression(`resource_type: image AND NOT folder: Samples/*`)
    .execute()
    .then(console.log());
    const mappedInfo = await response.resources.map((e) => {
        return {
            public_id: e.public_id,
            url: e.secure_url,
        };
    });
    return mappedInfo;
}

module.exports = getResoucers;