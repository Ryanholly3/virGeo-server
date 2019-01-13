
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "avatar"; ALTER SEQUENCE object_id_seq RESTART WITH 14;')
    .then(function() {
      return knex("avatar").insert([
        {
          id: 1,
          avatar_name: "alien",
        },
        {
          id: 2,
          avatar_name: "cactus",
        },
        {
          id: 3,
          avatar_name: "cerberus",
        },
        {
          id: 4,
          avatar_name: "cow",
        },
        {
          id: 5,
          avatar_name: "cricket",
        },
        {
          id: 6,
          avatar_name: "death",
        },
        {
          id: 7,
          avatar_name: "dinosaur",
        },
        {
          id: 8,
          avatar_name: "dolphin",
        },
        {
          id: 9,
          avatar_name: "ghost",
        },
        {
          id: 10,
          avatar_name: "robot",
        },
        {
          id: 11,
          avatar_name: "seagull",
        },
        {
          id: 12,
          avatar_name: "shark",
        },
        {
          id: 13,
          avatar_name: "squid",
        },
      ]);
    });
};
