
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('matches').del()
    .then(function () {
      // Inserts seed entries
      return knex('matches').insert([
          {
            winner_id: 1,
            loser_id: 2,
            date: 'May 7, 2017'
          },
          {
              winner_id: 2,
              loser_id: 1,
              date: 'May 8, 2017'
          }
      ]);
    });
};
