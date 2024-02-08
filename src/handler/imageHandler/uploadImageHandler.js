const uploadImage = require('../../controller/imageController/uploadImage');

const uploadImageHandler = async (req, res) => {
    try {
        const { image, folder, name } = req.body;
        const response = await uploadImage(image, folder, name);
        res.status(201).json(response);
    } catch (error) {
        console.log(error.message ? error.message : error);
        res.status(500).send(error.message);
    };
};

module.exports = uploadImageHandler;