
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "virgeo_user"; ALTER SEQUENCE virgeo_user_id_seq RESTART WITH 4;')
    .then(function() {
      return knex("virgeo_user").insert([
        {
          id: 1,
          user_name: "ryanholly",
          full_name: "Ryan Holly",
          level: 2,
        },
        {
          id: 2,
          user_name: "loganpeters",
          full_name: "Logan Peters",
          level: 5,
        },
        {
          id: 3,
          user_name: "steph",
          full_name: "Stephan Holly",
          level: 6,
        },
      ]);
    });
};
