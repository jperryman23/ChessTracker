
exports.up = function(knex, Promise) {
  return knex.schema.createTable('matches', (table)=> {
      table.increments()
      table.integer("winner_id").references('id').inTable('players')
      table.integer("loser_id").references('id').inTable('players')
      table.date('date')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('matches')
};
