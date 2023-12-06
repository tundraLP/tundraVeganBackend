const express = require('express');
const server = express();
const router = require('./routes/index');
const morgan = require('morgan');

server.use(morgan('dev'));
server.use(express.json());
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
server.use(router);
server.use('*', (req, res) => {
    res.status(404).json({ error: 'Por favor ingrese un endpoint válido.' });
});

module.exports = server;