
exports.up = (knex) => knex.schema.createTable('clients', (table) => {
  table.increments();
  table.string('name').notNullable();
  table.text('phone').notNullable();
  table.string('email').notNullable();
  table.string('address').notNullable();
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

exports.down = (knex) => knex.schema.dropTableIfExists('clients');
