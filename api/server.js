const express = require('express')
const server = express()
const authenticate = require('../auth/authenticate-middleware')
const eventsRouter = require("../events/eventsRouter")
const authRouter = require('../auth/authRouter.js')
const vendorsRouter = require('../Vendors/vendorsRouter');
const todoListRouter = require('../todoList/todoListRouter.js');
const userRouter = require('../auth/userRouter.js');


server.use(express.json())
server.use('/api/auth', authRouter)
server.use('/api/events' , authenticate , eventsRouter)
server.use('/api/vendors', authenticate, vendorsRouter)
server.use('/api/todolist', todoListRouter);
server.use('/api/users', authenticate, userRouter);      //for users who log in to access their stuff, hence restriction: rest is for api demo


//TESTING

server.get("/", (req, res) => {
    res.status(200).json({api:'running'});
});

server.post("/register", (req, res) => {
    res.status(201).json({status: "CREATED"});
});

server.post('/login', (req, res) => {
    res.status(200).json({status: 'OK'});
});

module.exports = server;











