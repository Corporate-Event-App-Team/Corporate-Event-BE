const todoListRouter = require('../todoList/todoListRouter.js');
const userRouter = require('../auth/userRouter.js');



server.use('/api/todolist', todoListRouter);
server.use('/api/users', authenticate, userRouter); //for users who log in to access their stuff, hence restriction: rest is for api demo

