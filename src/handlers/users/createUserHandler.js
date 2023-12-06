const createUser = require('../../controllers/users/createUser');

const createUsersHandler = async (req, res)=>{
    console.log(req.body);
    
    const {name, lastName, mail, password, adress} = req.body;
    try {
        if (name && lastName && mail && password && adress){
            const user = await createUser(mail, password, name, lastName, adress);
            res.status(200).json({data: user, message: 'Usuario creado exitosamente'});
        }else throw new Error('No se recibio un usuario valido.');
    } catch (error) {
        res.status(400).send(error.message);
    }

}

module.exports =  createUsersHandler;