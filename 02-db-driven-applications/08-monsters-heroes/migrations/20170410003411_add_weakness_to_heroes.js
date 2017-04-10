
exports.up = function(knex, Promise) {
  return knex.schema.table('heroes', function(tbl) {
    tbl.string('weakness').notNull().defaultTo('none');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('heroes', function(tbl) {
        tbl.dropColumn('weakness');
    });
};
