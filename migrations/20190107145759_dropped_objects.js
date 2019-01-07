
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dropped_object', function(table) {
        table.increments();
        table.string('latitude', 20);
        table.string('longitude', 20);
        table.integer('object_id').references('object.id').unsigned().onDelete('cascade');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dropped_object');
};
