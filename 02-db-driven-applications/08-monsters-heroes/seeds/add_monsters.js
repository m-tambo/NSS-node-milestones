
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('monsters').del()
    .then(function () {
      // Inserts seed entries
      return knex('monsters').insert([
        {monster_name: 'godzilla'},
        {monster_name: 'king kong'},
        {monster_name: 'stay puft marshmallow man'},
        {monster_name: 'swamp thing'}
      ]);
    });
};
