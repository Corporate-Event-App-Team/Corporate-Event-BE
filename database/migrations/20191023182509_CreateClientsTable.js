
exports.up = (knex) => knex.schema.createTable('clients', (table) => {
  table.increments();
  table.string('name', 100).notNullable();
  table.text('phone').notNullable();
  table.string('email', 250).notNullable();
  table.string('address', 250).notNullable();
  table.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
});

exports.down = (knex) => knex.schema.dropTableIfExists('clients');
