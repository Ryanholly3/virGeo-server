
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dropped_object', function(table) {
        table.increments();
        table.float('latitude', 14, 10).notNullable();
        table.float('longitude', 14, 10).notNullable();
        table.integer('object_id').references('object.id').unsigned().onDelete('cascade');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dropped_object');
};
