
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_object', function(table) {
        table.increments();
        table.integer('virgeo_user_id').references('virgeo_user.id').unsigned().onDelete('cascade');
        table.integer('object_id').references('object.id').unsigned().onDelete('cascade');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_object');
};
