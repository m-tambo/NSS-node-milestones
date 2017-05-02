
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('battles', function(table){
      table.increments().primary();
      table.string('location').notNullable();
      table.integer('monster_id')  //.unsigned().index().references('id').inTable('monsters')
      table.integer('hero_id')  //.unsigned().index().references('id').inTable('heroes')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('battles')
};
