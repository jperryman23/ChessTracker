
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
          {
            first_name: 'Jules',
            last_name: 'Perryman',
          },
          {
              first_name: 'Jordan',
              last_name: 'Fred',
          }
      ]);
    });
};
