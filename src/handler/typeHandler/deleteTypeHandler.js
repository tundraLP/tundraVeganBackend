const deleteType = require('../../controller/typeController/deleteType');

const deleteTypeHandler = async (req, res) => {
    try {
        const { TypeId } = req.body;
        const newType = await deleteType(TypeId);
        res.status(201).json(newType);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = deleteTypeHandler;