
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "dropped_object"; ALTER SEQUENCE dropped_object_id_seq RESTART WITH 10;')
    .then(function() {
      return knex("dropped_object").insert([
        {
          id: 1,
          latitude: 39.773941,
          longitude: 104.983674,
          object_id: 1
        },
        {
          id: 2,
          latitude: 39.794673,
          longitude: 104.969484,
          object_id: 2
        },
        {
          id: 3,
          latitude: 39.729842,
          longitude: 104.9927394,
          object_id: 4
        },
        {
          id: 4,
          latitude: 39.713483,
          longitude: 104.993720,
          object_id: 5
        },
        {
          id: 5,
          latitude: 39.739212,
          longitude: 104.938456,
          object_id: 5
        },
        {
          id: 6,
          latitude: 39.739212,
          longitude: 104.993733,
          object_id: 5
        },
        {
          id: 7,
          latitude: 39.739212,
          longitude: 104.982034,
          object_id: 2
        },
        {
          id: 8,
          latitude: 39.739212,
          longitude: 104.987362,
          object_id: 4
        },
        {
          id: 9,
          latitude: 39.739212,
          longitude: 104.990128,
          object_id: 3
        },
      ]);
    });
};
