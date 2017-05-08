
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
          },
          {
            first_name: 'Brent',
            last_name: 'theGuy',
          },
          {
              first_name: 'Jackson',
              last_name: 'Donvan',
          },
          {
            first_name: 'Coulter',
            last_name: 'FreREEEE',
          },
          {
              first_name: 'Tristan',
              last_name: 'Gilford',
          },

      ]);
    });
};
