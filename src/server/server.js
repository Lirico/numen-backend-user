const express = require('express');
const userRouter = require('../routes/user.router');
const authRouter = require('../routes/auth.router');
const server = express();

console.log(server)

server.use(express.json())


server.use('/api/user', userRouter) 

server.use('/api/auth', authRouter)

module.exports = server;