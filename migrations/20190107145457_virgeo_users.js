
exports.up = function(knex, Promise) {
  return knex.schema.createTable('virgeo_user', function(table) {
        table.increments();
        table.string('user_name', 20);
        table.integer('level');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('virgeo_user');
};
