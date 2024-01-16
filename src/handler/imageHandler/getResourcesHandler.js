const getResources = require('../../controller/imageController/getResources');

const getResoucersHandler = async (req, res) => {
    try {
        const { public_id } = req.query;
        const response = await getResources(public_id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = getResoucersHandler;