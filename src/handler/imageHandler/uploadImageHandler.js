const uploadImage = require('../../controller/imageController/uploadImage');

const uploadImageHandler = async (req, res) => {
    try {
        const { image, folder, name } = req.body;
        const response = await uploadImage(image, folder, name);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

module.exports = uploadImageHandler;