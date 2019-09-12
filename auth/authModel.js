const userDb = require('../database/db-config')



function create(user) {
    return userDb('users').insert(user)
}

function findBy(username) {
    return userDb('users').where(username);
}

function fetch(username) {
    return userDb('events').where(username);
}

module.exports = {
 create,
 findBy,
 fetch 
}