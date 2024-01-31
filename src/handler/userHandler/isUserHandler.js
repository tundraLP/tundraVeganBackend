const isUser = require('../../controller/userController/isUser');

const isUserHandler = async (req, res) => {
    try {        
        const { mail } = req.query;
        const response = await isUser(mail);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(404).json({error: error.message});
    }
}

module.exports = isUserHandler;