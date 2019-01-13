
exports.up = function(knex, Promise) {
  return knex.schema.createTable('avatar', function(table) {
        table.increments();
        table.string('avatar_name');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('avatar');
};
