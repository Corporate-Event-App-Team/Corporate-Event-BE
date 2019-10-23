
exports.up = (knex) => knex.schema.createTable('vendors', (table) => {
  table.increments();
  table.string('name').notNullable();
  table.string('description');
  table.text('phone').notNullable();
  table.string('email');
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

exports.down = (knex) => knex.schema.dropTableIfExists('vendors');
