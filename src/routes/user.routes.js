const { Router } = require('express');
const userRouter = Router();

const getUserHandler = require('../handler/userHandler/getUserHandler');
const getUserAdminHandler = require('../handler/userHandler/getUsersAdminHandler');
const createUserHandler = require('../handler/userHandler/createUserHandler');
const updateUserHandler = require('../handler/userHandler/updateUserHandler');
const deleteUserHandler = require('../handler/userHandler/deteleUserHandler');
const isUserHandler = require('../handler/userHandler/isUserHandler');

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
    validateUserIdPost,
    validateTypePut,
    validateImagePut
} = require('../utils/middlewareUser');

const putUserMidd = [validateNamePost, validateLastNamePost, validateMailPost, validateAdressPost, validatePasswordPost, validateTypePut, validateImagePut];
// Deje el array de middlewares aca por las dudas.
// Solo valido si hay un UserId porque si el resto de campos es undefined no se actualiza.
// De esta forma usamos un unico endpoint para modificar el usuario al modificarlo completo o unicamente el tipo.

userRouter.get('/isUser', validateMailGet, isUserHandler);

userRouter.get('/getUser', [validateMailGet, validatePasswordGet], getUserHandler);

userRouter.get('/getUsersAdmin', getUserAdminHandler);

userRouter.post('/createUser', [validateNamePost, validateLastNamePost, validateMailPost, validateAdressPost, validatePasswordPost], createUserHandler);

userRouter.put('/updateUser', validateUserIdPost, updateUserHandler);

userRouter.delete('/deleteUser', validateUserIdPost, deleteUserHandler);


module.exports = userRouter;