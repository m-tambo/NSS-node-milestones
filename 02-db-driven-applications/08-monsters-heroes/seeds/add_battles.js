
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('battles').del()
    .then(function () {
      // Inserts seed entries
      return knex('battles').insert([
        {location: 'gotham', monster_id: 2, hero_id: 1},
        {location: 'japan', monster_id: 1, hero_id: 4},
        {location: 'new york', monster_id: 3, hero_id: 2},
        {location: 'venice', monster_id: 4, hero_id: 2},
        {location: 'the moon', monster_id: 3, hero_id: 4}
      ]);
    });
};
