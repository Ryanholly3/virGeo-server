
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "virgeo_user"; ALTER SEQUENCE virgeo_user_id_seq RESTART WITH 4;')
    .then(function() {
      return knex("virgeo_user").insert([
        {
          id: 1,
          user_name: "ryanholly",
          full_name: "Ryan Holly",
          level: 10,
          avatar: 11
        },
        {
          id: 2,
          user_name: "loganpeters",
          full_name: "Logan Peters",
          level: 6,
          avatar: 7
        },
        {
          id: 3,
          user_name: "steph",
          full_name: "Stephan Holly",
          level: 3,
          avatar: 4
        },
      ]);
    });
};
