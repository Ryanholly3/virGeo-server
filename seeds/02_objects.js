
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "object"; ALTER SEQUENCE object_id_seq RESTART WITH 6;')
    .then(function() {
      return knex("virgeo_user").insert([
        {
          id: 1,
          object_name: "gold",
        },
        {
          id: 2,
          object_name: "ruby",
        },
        {
          id: 3,
          object_name: "diamond",
        },
        {
          id: 4,
          object_name: "stick",
        },
        {
          id: 5,
          object_name: "penny",
        },
      ]);
    });
};
