const express = require('express')
const server = express()
const authenticate = require('../auth/authenticate-middleware')
const eventsRouter = require("../events/eventsRouter")
const authRouter = require('../auth/authRouter.js')
const vendorsRouter = require('../Vendors/vendorsRouter');



server.use(express.json())
server.use('/api/auth', authRouter)
server.use('/api/events' , authenticate , eventsRouter)
server.use('/api/vendors', authenticate, vendorsRouter)


server.get("/", (req, res) => {
    res.send(`
    <h2> Corporate Events Planner </h2>
    <p> Welcome to the Events Database API </p>
    
    `);
});

module.exports = server;