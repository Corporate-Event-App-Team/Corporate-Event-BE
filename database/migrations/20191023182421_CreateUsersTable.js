exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.increments();
  table.string('username').notNullable();
  table
    .string('email')
    .notNullable()
    .unique();
  table.string('password').notNullable();
  table.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
});

exports.down = (knex) => knex.schema.dropTableIfExists('users');
