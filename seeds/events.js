
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, description: 'April Wedding', budget: 30000},
        {id: 2, description: 'May Wedding', budget: 45000},
        {id: 3, description: 'Director Retirement', budget: 5000 },
        {id: 4, description: '10 year Anniversary', budget: 10000 },
        {id: 5, description: 'Director Retirement', budget: 5000 },
        {id: 6, description: 'Christmas party', budget: 3000 }
      ]);
    });
};
