const { hashSync } = require('../../helpers/bcryptHelper');

exports.seed = knex =>
  knex.schema.raw('TRUNCATE TABLE users, clients, events, vendors, todos CASCADE').then(() =>
    knex('users').insert([
      { id: 1,
        username: 'John',
        email: 'jh@john.com',
        password: hashSync('12345'),
      },
      { id: 2,
        username: 'Jane',
        email: 'jn@john.com',
        password: hashSync('12345'),
      },
      { id: 3,
        username: 'Will',
        email: 'fresh@prince.com',
        password: hashSync('12345'),
      },
      { id: 4,
        username: 'Vin',
        email: 'vin@diesel.com',
        password: hashSync('12345'),
      },
      { id: 5,
        username: 'Van',
        email: 'van@damme.com',
        password: hashSync('12345'),
      },
    ]),
  );