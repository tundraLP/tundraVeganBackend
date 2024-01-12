const uploadImage = require('../../controller/imageController/uploadImage');

const uploadImageHandler = async (req, res) => {
    try {
        const { image, folder } = req.body;
        const response = await uploadImage(image, folder);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json(error);
    }


}

module.exports = uploadImageHandler;