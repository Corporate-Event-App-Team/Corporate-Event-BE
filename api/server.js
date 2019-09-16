const express = require('express')
const server = express();
const eventsRouter = require("../events/eventsRouter")
const authRouter = require('../auth/aurthRouter')
const vendorsRouter = require('../Vendors/vendorsRouter')
const todoListRouter = require('../todoList/todoListRouter.js')
const restriction = require('../auth/authenticate-middleware')
const userRouter = require('../auth/userRouter.js');


server.use(express.json())
server.use('/api/auth', authRouter)
server.use('/api/events' ,  eventsRouter)
server.use('/api/vendors', vendorsRouter)
server.use('/api/todolist', todoListRouter);
server.use('/api/users', restriction, userRouter);      //for users who log in to access their stuff, hence restriction: rest is for api demo

server.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome To The Corporate Event Planner'});
})

//TESTING

// server.get("/", (req, res) => {
//     res.status(200).json({api:'running'});
// });

// server.post("/register", (req, res) => {
//     res.status(201).json({status: "CREATED"});
// });

// server.post('/login', (req, res) => {
//     res.status(200).json({status: 'OK'});
// });

module.exports = server;











