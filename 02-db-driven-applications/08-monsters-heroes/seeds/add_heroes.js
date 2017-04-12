
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('heroes').del()
    .then(function () {
      // Inserts seed entries
      return knex('heroes').insert([
        {hero_name: 'superman', weakness: 'kryptonite'},
        {hero_name: 'batman', weakness: 'self-doubt'},
        {hero_name: 'james bond', weakness: 'women'},
        {hero_name: 'mega man', weakness: 'none'}
      ]);
    });
};
