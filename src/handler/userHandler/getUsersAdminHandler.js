const getUsersAdmin = require("../../controller/userController/getUsersAdmin");

const getUserHandlerAdminHandler = async (req, res) => {
    try {
        const users = await getUsersAdmin();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ error: error.message });
    };
};

module.exports = getUserHandlerAdminHandler;