
exports.up = (knex) => knex.schema.createTable('todos', (table) => {
  table.increments();
  table.string('name', 100).notNullable();
  table.string('description', 250).notNullable();
  table.string('compeleted', 250).notNullable();
  table.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
});

exports.down = (knex) => knex.schema.dropTableIfExists('todos');
