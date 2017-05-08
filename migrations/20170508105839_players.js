
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', (table)=> {
      table.increments()
      table.text("first_name").notNull
      table.text("last_name").notNull
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players')
};
