const updateUser = require('../../controller/userController/updateUser');

const updateUserHandler = async (req, res) => {
    try {
        const { name, lastName, mail, password, adress, UserId } = req.body;
        const user = await updateUser({ name, lastName, mail, password, adress, UserId });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = updateUserHandler;