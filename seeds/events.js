
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {events_id: 1, description: 'April Wedding', budget: 30000},
        {events_id: 2, description: 'May Wedding', budget: 45000},
        {events_id: 3, description: 'Director Retirement', budget: 5000 },
        {events_id: 4, description: '10 year Anniversary', budget: 10000 },
        {events_id: 5, description: 'Director Retirement', budget: 5000 },
        {events_id: 6, description: 'Christmas party', budget: 3000 }
      ]);
    });
};
