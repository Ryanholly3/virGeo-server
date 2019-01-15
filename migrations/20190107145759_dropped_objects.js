
exports.up = function(knex, Promise) {
  return knex.schema.raw(
    `CREATE TABLE dropped_object (
      id serial PRIMARY KEY,
      latitude FLOAT,
      longitude FLOAT,
      object_id integer REFERENCES object(id) ON DELETE CASCADE
    );
    `
  )
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dropped_object');
};
