module.exports = {

    development: {
      client: 'pg',
      connection: 'postgres://localhost/virgeo'
    },

    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL + '?ssl=true'
    }
  };
