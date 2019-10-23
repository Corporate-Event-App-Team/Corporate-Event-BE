
exports.up = (knex) => knex.schema.createTable('events', (table) => {
  table.increments();
  table.string('name', 100).notNullable();
  table.string('date', 250).notNullable();
  table.text('time').notNullable();
  table.string('budget', 250).notNullable();
  table.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
});

exports.down = (knex) => knex.schema.dropTableIfExists('events');
