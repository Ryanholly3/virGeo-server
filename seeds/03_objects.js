
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "object"; ALTER SEQUENCE object_id_seq RESTART WITH 8;')
    .then(function() {
      return knex("object").insert([
        {
          id: 1,
          object_name: "gold",
          category: "treasure",
        },
        {
          id: 2,
          object_name: "ruby",
          category: "treasure",
        },
        {
          id: 3,
          object_name: "diamond",
          category: "treasure",
        },
        {
          id: 4,
          object_name: "stick",
          category: "nature",
        },
        {
          id: 5,
          object_name: "penny",
          category: "city",
        },
        {
          id: 6,
          object_name: "flower",
          category: "nature",
        },
        {
          id: 7,
          object_name: "bolt",
          category: "city",
        },
      ]);
    });
};
