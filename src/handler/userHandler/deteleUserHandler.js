const deleteUser = require('../../controller/userController/deleteUser');

const deleteUserHandler = async (req, res) => {
    try {
        const { UserId } = req.body;
        const user = await deleteUser(UserId);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = deleteUserHandler;