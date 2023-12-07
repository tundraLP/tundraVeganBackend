const createUser = require('../../controller/userController/createUser');

const createUserHandler = async (req, res) => {
    try {
        const { name, lastName, mail, adress, password } = req.body;
        const user = await createUser({ name, lastName, mail, adress, password })
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = createUserHandler;