const Sequelize = require('sequelize');

// Connecting ORM (Sequelize) to database and creating database named movies.db
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "movies.db",
    // logging: false to disable logging SQL queries onto the console.
    define: {
        freezeTableName: true, // disable default plural table names.
        timestamps: false, // same as {sequelize : sequelize} and remove timestamps.
    }
});

const db = {
    sequelize,
    Sequelize,
    models: {},
};

db.models.Movie = require('./models/movie.js')(sequelize);

db.models.Person = require('./models/person.js')(sequelize);

module.exports = db;