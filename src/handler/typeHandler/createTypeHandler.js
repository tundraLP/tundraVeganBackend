const createType = require('../../controller/typeController/createType');

const createTypeHandler = async (req, res) => {
    try {
        const { type } = req.body;
        const newType = await createType(type);
        res.status(201).json(newType);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = createTypeHandler;