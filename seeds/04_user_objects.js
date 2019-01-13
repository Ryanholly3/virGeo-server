
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "user_object"; ALTER SEQUENCE user_object_id_seq RESTART WITH 13;')
    .then(function() {
      return knex("user_object").insert([
        {
          id: 1,
          virgeo_user_id: 1,
          object_id: 1
        },
        {
          id: 2,
          virgeo_user_id: 1,
          object_id: 2
        },
        {
          id: 3,
          virgeo_user_id: 1,
          object_id: 3
        },
        {
          id: 4,
          virgeo_user_id: 1,
          object_id: 4
        },
        {
          id: 5,
          virgeo_user_id: 2,
          object_id: 5
        },
        {
          id: 6,
          virgeo_user_id: 2,
          object_id: 1
        },
        {
          id: 7,
          virgeo_user_id: 2,
          object_id: 5
        },
        {
          id: 8,
          virgeo_user_id: 2,
          object_id: 5
        },
        {
          id: 9,
          virgeo_user_id: 3,
          object_id: 2
        },
        {
          id: 10,
          virgeo_user_id: 3,
          object_id: 5
        },
        {
          id: 11,
          virgeo_user_id: 3,
          object_id: 4
        },
        {
          id: 12,
          virgeo_user_id: 3,
          object_id: 3
        },
      ]);
    });
};
