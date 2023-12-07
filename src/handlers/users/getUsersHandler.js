const getUsers = require('../../controllers/users/getUsers');


const getUsersHandler = async (req, res)=>{
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = getUsersHandler;