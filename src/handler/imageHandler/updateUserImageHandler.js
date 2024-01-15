const updateUserImage = require('../../controller/imageController/updateUserImage');

const updateUserImageHandler = async (req, res) => {
    try {
        console.log(req.body);
        const { image, UserId, name } = req.body;
        
        const response = await updateUserImage(image, UserId, name);


        res.status(201).json(response);
    } catch (error) {
        console.log('Mensaje de error ----------------->>>>');
        console.log(error);
        res.status(500).send(error.message);
    }
}


module.exports = updateUserImageHandler;