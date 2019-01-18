# VirGeo Server 🌎

View repository for front-end [HERE](https://github.com/Ryanholly3/virGeo).


## Required Installation(s)

PostgreSQL using HomeBrew:
```sh
brew install postgresql
```

Start a PostgreSQL server as a Brew service:
```sh
brew services start postgresql
```


## Run the Project

On command line:

```sh
git clone git@github.com:Ryanholly3/virGeo-server.git
cd virGeo-server
npm install
createdb virgeo
knex migrate:latest
knex seed:run
npm start
```

Then visit http://localhost:3101/

## Routes
* http://localhost:3101/users
* http://localhost:3101/dropped_objects
* http://localhost:3101/user_objects
* http://localhost:3101/objects


## Technologies Used
* Node.js
* postgreSQL
* Express.js
* Knex.js

## Author

[Ryan Holly](https://github.com/Ryanholly3)
