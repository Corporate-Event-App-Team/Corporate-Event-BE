
exports.up = (knex) => knex.schema.createTable('todos', (table) => {
  table.increments();
  table.string('title').notNullable();
  table.string('description').notNullable();
  table.boolean('completed');
  table.string('vendor_fee');
  table
    .integer('event_id')
    .notNullable()
    .unsigned()
    .references('id')
    .inTable('events')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    table
    .integer('vendor_id')
    .notNullable()
    .unsigned()
    .references('id')
    .inTable('vendors')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  table
    .integer('user_id')
    .notNullable()
    .unsigned()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  table.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
});

exports.down = (knex) => knex.schema.dropTableIfExists('todos');
