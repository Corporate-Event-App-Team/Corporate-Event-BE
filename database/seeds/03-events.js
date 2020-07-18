
exports.seed = knex =>
knex.schema.raw('TRUNCATE TABLE events, todos CASCADE').then(() =>
  knex('events').insert([ 
    { id: 1,
      name: 'Lambda Meetup',
      description: 'Meetup with all students',
      budget: '$234 000',
      date: '23-11-2019',
      time: '2:00 GMT',
      user_id: 1,
      client_id: 1,
    },
    { id: 2,
      name: 'Lambda Day USA',
      description: 'Meetup with all students in usa',
      budget: '$984 000',
      date: '23-11-2019',
      time: '2:00 GMT',
      user_id: 2,
      client_id: 2,
    },
    { id: 3,
      name: 'Lambda Day EU',
      description: 'Meetup with all students in EU and Africa',
      budget: '$734 000',
      date: '23-11-2019',
      time: '2:00 GMT',
      user_id: 3,
      client_id: 4,
    },
    { id: 4,
      name: 'Lambda Asia',
      description: 'Meetup with all students in Asia',
      budget: '$244 000',
      date: '23-11-2019',
      time: '2:00 GMT',
      user_id: 5,
      client_id: 4,
    },
    { id: 5,
      name: 'Lambda Canada',
      description: 'Meetup with all students in Canada',
      budget: '$543 000',
      date: '23-11-2019',
      time: '2:00 GMT',
      user_id: 4,
      client_id: 3,
    },
  ]),
);