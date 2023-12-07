const { Router } = require('express');
const userRouter = Router();

const getUserHandler = require('../handler/userHandler/getUserHandler');
const getUserHandlerAdminHandler = require('../handler/userHandler/getUsersAdminHandler');
const createUserHandler = require('../handler/userHandler/createUserHandler');
const updateUserHandler = require('../handler/userHandler/updateUserHandler');
const deleteUserHandler = require('../handler/userHandler/deteleUserHandler');

const {
    validateNameGet,
    validateNamePost,
    validateLastNameGet,
    validateLastNamePost,
    validateMailGet,
    validateMailPost,
    validateAdressPost,
    validatePasswordGet,
    validatePasswordPost,
    validateUserIdPost
} = require('../utils/middlewareUser');

userRouter.get('/getUser', [validateMailGet, validatePasswordGet], getUserHandler);

userRouter.get('/getUsersAdmin', getUserHandlerAdminHandler);

userRouter.post('/createUser', [validateNamePost, validateLastNamePost, validateMailPost, validateAdressPost, validatePasswordPost], createUserHandler);

userRouter.put('/updateUser', [validateNamePost, validateLastNamePost, validateMailPost, validateAdressPost, validatePasswordPost], updateUserHandler);

userRouter.delete('/deleteUser', validateUserIdPost, deleteUserHandler);


module.exports = userRouter;