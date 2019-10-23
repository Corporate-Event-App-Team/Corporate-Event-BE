exports.seed = knex =>
  knex.schema.raw('TRUNCATE TABLE clients, events CASCADE').then(() =>
    knex('clients').insert([
      { id: 1,
        name: 'Lambda School',
        phone: '0987654321',
        email: 'lambdaschool@lambda.com',
        address: 'Earth 127.0.0.1',
        user_id: 1
      },
      { id: 2,
        name: 'Lambda X',
        phone: '09876500021',
        email: 'lambdaschool@lambda.com',
        address: 'Earth 127.0.0.1',
        user_id: 2
      },
      { id: 3,
        name: 'Lambda Alum',
        phone: '0923245551',
        email: 'lambdaschool@lambda.com',
        address: 'Earth 127.0.0.1',
        user_id: 3
      },
      { id: 4,
        name: 'Lambda EU4',
        phone: '09876543521',
        email: 'lambdaschool@lambda.com',
        address: 'Earth 27.0.0.1',
        user_id: 4
      },
      { id: 5,
        name: 'Lambda EU3',
        phone: '09876131321',
        email: 'lambdaschool@lambda.com',
        address: 'Earth 27.0.0.1',
        user_id: 5
      },
     ]),
  );












  
// exports.seed = knex => {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };
