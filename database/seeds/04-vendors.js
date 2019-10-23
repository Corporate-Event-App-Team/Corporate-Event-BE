
exports.seed = knex =>
knex.schema.raw('TRUNCATE TABLE vendors, todos CASCADE').then(() =>
  knex('vendors').insert([ 
    { id: 1,
      name: 'Amazon Fresh Foos',
      phone: '09876131321',
      description:'amazon fresh from farm',
      email: 'lambdaschool@lambda.com',
      address: 'Earth amazon 27.0.0.1',
      user_id: 1
    },
    { id: 2,
      name: 'Anu\'s Fresh Foos',
      phone: '09876131321',
      description:'Anu fresh from farm',
      email: 'lambdaschool@lambda.com',
      address: 'Earth Anu 27.0.0.1',
      user_id: 2
    },
    { id: 3,
      name: 'Fresh Water',
      phone: '09876131321',
      description:'Water Fresh spring',
      email: 'lambdaschool@lambda.com',
      address: 'Earth Fresh 27.0.0.1',
      user_id: 3
    },
    { id: 4,
      name: 'Snack bites',
      phone: '09876131321',
      description:'snackfresh from farm',
      email: 'lambdaschool@lambda.com',
      address: 'Earth amazon 27.0.0.1',
      user_id: 4
    },
    { id: 5,
      name: 'Lambda Foods',
      phone: '09876131321',
      description:'Lambda fresh from farm',
      email: 'lambdaschool@lambda.com',
      address: 'Earth Lambda 27.0.0.1',
      user_id: 5
    },
  ]),
  );

