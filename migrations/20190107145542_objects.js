
exports.up = function(knex, Promise) {
  return knex.schema.createTable('object', function(table) {
        table.increments();
        table.string('object_name');
        table.string('category');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('object');
};
