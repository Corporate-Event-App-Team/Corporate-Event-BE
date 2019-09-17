const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development);




module.exports = {
    find,
    findById,
    add, 
    remove,
    update
}



 function find(query) {
    const {  sortby = 'id', sortdir = 'asc' } = query;
    let rows = db('vendors')
      .orderBy(sortby, sortdir)    
      return rows;
  }

  function findById(id) {
    return db('vendors')
      .where({id})
      .first();
}

function add(vendor) {
    return db('vendors').insert(vendor);
}

function remove(id) {
    return db('vendors')
      .where({id})
      .del();
}

function update(id, changes) {
    return db('vendors')
    .where({id})
    .update(changes, '*');
}
